import React, { useEffect, useState } from "react";
import { PageLayout } from "../../common/layout/PageLayout";
import { client } from "../../client";
import AnimatedCard from "../../common/components/AnimatedCard";
import { motion } from "framer-motion";
import { PageWrapper } from "../../common/layout/PageWrapper";
import { ProjectCard } from "../../common/components/ProjectCard";
import { projectTab } from "../../utils/constants";

export default function Projects() {
  const [selectedTab, setSelectedTab] = useState(projectTab[0]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [projects, setProjects] = useState([]);

  const getProjectsData = async () => {
    const projectsQuery = '*[_type == "projects"]';
    const response = await client.fetch(projectsQuery);
    setProjects(response);
    setFilteredProjects(response);
  };

  useEffect(() => {
    getProjectsData();
  }, []);

  useEffect(() => {
    if (selectedTab.label === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) => {
        if (
          project.techstack
            .map((tech) => {
              if (tech.fname === selectedTab.label) return true;
              return "";
            })
            .includes(true)
        ) {
          return project;
        } else return "";
      });

      setFilteredProjects(filtered);
    }
  }, [selectedTab]);

  if (!projects) return <PageWrapper></PageWrapper>;

  return (
    <PageLayout title="Projects" className="bg-[#5c4aff]">
      <AnimatedCard
        tabs={projectTab}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        className="flex justify-center flex-wrap mt-5 gap-5"
      >
        {filteredProjects.map((project, index) => {
          return (
            <motion.div
              key={project.name + index}
              className="group w-full md:w-[400px] rounded-lg cursor-pointer flex flex-col justify-between"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          );
        })}
      </AnimatedCard>
    </PageLayout>
  );
}

// export async function getServerSideProps() {
//   const projectsQuery = '*[_type == "projects"]';
//   const response = await client.fetch(projectsQuery);

//   return {
//     props: {
//       projects: response,
//     },
//   };
// }
