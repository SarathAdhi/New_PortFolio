import React, { useEffect, useState } from "react";
import { PageLayout } from "../common/layout/PageLayout";
import { client } from "../client";
import { motion } from "framer-motion";
import AnimatedCard from "../common/components/AnimatedCard";
import { BsFillGridFill } from "react-icons/bs";

const tabs = [{ label: "All" }, { label: "Majority" }];

const majority = ["ReactJS", "NextJS", "MongoDB", "Firebase"];

export default function Skills({ skillsDatas }) {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [filteredSkills, setFilteredSkills] = useState([]);

  useEffect(() => {
    if (selectedTab.label === "All") {
      setFilteredSkills(skillsDatas);
    } else {
      const filtered = skillsDatas.filter((project) => {
        if (majority.includes(project.name)) {
          return project;
        }
      });

      setFilteredSkills(filtered);
    }
  }, [selectedTab, skillsDatas]);

  return (
    <PageLayout title="Skills" className="bg-[#ecfef5]">
      <AnimatedCard
        tabs={tabs}
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

export async function getServerSideProps() {
  const skillsQuery = '*[_type == "skills"] | order(title, asc)';
  const response = await client.fetch(skillsQuery);

  return {
    props: {
      skillsDatas: response,
    },
  };
}
