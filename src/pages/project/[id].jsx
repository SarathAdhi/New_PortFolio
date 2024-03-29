import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../client";
import { PageLayout } from "../../common/layout/PageLayout";
import { H1, H3, H5 } from "../../common/components/elements/Text";
import { BsGithub, BsGlobe2 } from "react-icons/bs";
import { useRouter } from "next/router";
import { NEW_2023_PORTFOLIO } from "../../utils/constants";

export async function getServerSideProps() {
  return {
    redirect: {
      destination: NEW_2023_PORTFOLIO,
      permanent: false,
    },
  };
}

export default function DisplayProject() {
  const { id } = useRouter().query;

  const [projectData, setProjectData] = useState(null);

  const fetchProject = async () => {
    const projectsQuery = `*[_type == "projects" && name == "${id}"]`;
    const response = await client.fetch(projectsQuery);
    const project = response[0];
    setProjectData(project);
  };

  useEffect(() => {
    fetchProject();
  }, []);

  if (!projectData) return <PageLayout></PageLayout>;

  return (
    <PageLayout
      title={"Project - " + projectData.name}
      className="bg-white py-10 lg:py-20 items-center gap-5 md:gap-10"
    >
      <H1 className="font-bold text-center italic">{projectData.name}</H1>
      <div className="flex justify-around items-center flex-wrap gap-10">
        <div className="w-full lg:w-1/2 border-black rounded-xl">
          <img
            src={urlFor(projectData.image)}
            className="border-[2px] rounded-xl w-full bg-loading-pattern bg-center bg-[#fdfdfd] bg-[length:200px_200px] bg-no-repeat"
            alt={projectData.name}
          />
        </div>
        <div className="flex flex-col gap-5 md:gap-10">
          <div className="flex gap-y-2 gap-x-10 flex-row justify-center flex-wrap">
            {projectData.techstack.map((tag) => {
              return (
                <div
                  key={tag.fname}
                  className="group flex flex-col items-center justify-center gap-2"
                >
                  <img
                    src={tag.fimage}
                    className="group-hover:scale-110 group-active:scale-95  duration-200 w-10 md:w-12"
                    alt={tag.fname}
                  />
                  <H5 className="font-semibold">{tag.fname}</H5>
                </div>
              );
            })}
          </div>
          <div className="flex justify-around flex-wrap gap-2">
            {projectData.demo && (
              <a
                href={projectData.demo}
                className="font-semibold flex items-center gap-2 text-lg p-1 md:px-3 md:py-2 border-[3px] rounded-lg border-indigo-500 duration-200 hover:rounded-3xl"
              >
                <BsGlobe2 className="text-2xl" />
                Visit
              </a>
            )}
            {projectData.github && (
              <a
                href={projectData.github}
                className="font-semibold flex items-center text-lg gap-2 p-1 md:px-3 sm:py-2 border-[3px] rounded-lg border-gray-500 duration-200 hover:rounded-3xl"
              >
                <BsGithub className="text-2xl" />
                Github
              </a>
            )}
          </div>
        </div>
      </div>

      <H3
        className="text-center font-semibold !text-base md:!text-xl md:px-16"
        dangerouslySetInnerHTML={{ __html: projectData.about }}
      ></H3>
    </PageLayout>
  );
}

// export async function getServerSideProps(context) {
//   const { id } = context.query;

//   const projectsQuery = `*[_type == "projects" && name == "${id}"]`;
//   const response = await client.fetch(projectsQuery);

//   return {
//     props: {
//       projectData: response[0],
//     },
//   };
// }
