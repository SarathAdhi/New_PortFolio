import { useRouter } from "next/router";
import React from "react";
import { client, urlFor } from "../../client";
import { PageLayout } from "../../common/layout/PageLayout";
import { H3, H5 } from "../../common/components/elements/Text";
import { BsGithub, BsGlobe2 } from "react-icons/bs";

const DisplayProject = ({ projectData }) => {
  return (
    <PageLayout
      title={projectData.name}
      className="bg-white py-10 lg:py-20 items-center gap-5 md:gap-10"
    >
      <div className="flex justify-around items-center flex-wrap gap-10">
        <div className="w-full lg:w-1/2">
          <img
            src={urlFor(projectData.image)}
            className="border-[2px] border-black rounded-xl w-full"
            alt={projectData.name}
          />
        </div>
        <div className="flex flex-col gap-5 md:gap-10">
          <div className="flex gap-y-2 gap-x-5 flex-row justify-center flex-wrap">
            {projectData.techstack.map((tag, index) => {
              return (
                <div
                  key={tag.fname}
                  className="flex flex-col items-center justify-center"
                >
                  <img
                    src={tag.fimage}
                    className="w-10 md:w-12"
                    alt={tag.fname}
                  />
                  <H5>{tag.fname}</H5>
                </div>
              );
            })}
          </div>
          <div className="flex justify-around flex-wrap gap-2">
            {projectData.demo && (
              <a
                href={projectData.demo}
                className="flex items-center gap-2 text-lg p-1 md:px-3 md:py-2 border-[2px] rounded-lg border-indigo-500 duration-200 hover:rounded-3xl"
              >
                <BsGlobe2 className="text-2xl" />
                Demo
              </a>
            )}
            {projectData.github && (
              <a
                href={projectData.github}
                className="flex items-center text-lg gap-1 p-1 md:px-3 sm:py-2 border-[2px] rounded-lg border-gray-500 duration-200 hover:rounded-3xl"
              >
                <BsGithub className="text-2xl" />
                Github
              </a>
            )}
          </div>
        </div>
      </div>
      <H3 className="text-center !text-base md:text-xl md:px-16">
        {projectData.about}
      </H3>
    </PageLayout>
  );
};

export default DisplayProject;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const projectsQuery = `*[_type == "projects" && name == "${id}"]`;
  const response = await client.fetch(projectsQuery);

  return {
    props: {
      projectData: response[0],
    },
  };
}
