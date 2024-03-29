import React, { useEffect, useState } from "react";
import { PageLayout } from "../common/layout/PageLayout";
import { client } from "../client";
import { motion } from "framer-motion";
import AnimatedCard from "../common/components/AnimatedCard";
import { PageWrapper } from "../common/layout/PageWrapper";
import { NEW_2023_PORTFOLIO, majority, skillsTab } from "../utils/constants";
import { useRouter } from "next/router";

export async function getServerSideProps() {
  return {
    redirect: {
      destination: NEW_2023_PORTFOLIO,
      permanent: false,
    },
  };
}

export default function Skills() {
  const router = useRouter();

  const tab = router.query.tab;

  const currentTab = skillsTab.find(
    ({ label }) => tab === label.toLocaleLowerCase()
  );

  const [selectedTab, setSelectedTab] = useState(
    currentTab ? currentTab : skillsTab[0]
  );
  const [filteredSkills, setFilteredSkills] = useState([]);

  const [skills, setSkills] = useState([]);

  const getSkillsData = async () => {
    const skillsQuery = '*[_type == "skills"] | order(title, asc)';
    const response = await client.fetch(skillsQuery);
    setSkills(response);
    setFilteredSkills(response);
  };

  useEffect(() => {
    getSkillsData();
  }, []);

  useEffect(() => {
    router.replace(`/skills?tab=${selectedTab.label.toLowerCase()}`);

    if (selectedTab.label === "All") {
      setFilteredSkills(skills);
    } else {
      const filtered = skills.filter((project) => {
        if (majority.includes(project.name)) {
          return project;
        }
      });

      setFilteredSkills(filtered);
    }
  }, [selectedTab, skills]);

  if (!skills) return <PageWrapper></PageWrapper>;

  return (
    <PageLayout title="Skills" className="bg-[#ecfef5]">
      <AnimatedCard
        tabs={skillsTab}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        dark={true}
      >
        <ul className="__skills_ul mt-10">
          {filteredSkills.map((skill) => {
            return (
              <motion.li
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
                key={skill._id}
                className="__skills_li"
              >
                <div className="__skills_div_1">
                  <p className="text-black font-medium">{skill.name}</p>
                  <p className="text-gray-400 text-sm font-medium">
                    {skill.title}
                  </p>
                </div>

                <div className="__skills_img">
                  <motion.img
                    loading="lazy"
                    className="w-[90px] sm:w-[100px]"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    src={skill.image}
                    alt={skill.name}
                  />
                </div>
              </motion.li>
            );
          })}
        </ul>
      </AnimatedCard>
    </PageLayout>
  );
}

// export async function getServerSideProps() {
//   const skillsQuery = '*[_type == "skills"] | order(title, asc)';
//   const response = await client.fetch(skillsQuery);

//   return {
//     props: {
//       skills: response,
//     },
//   };
// }
