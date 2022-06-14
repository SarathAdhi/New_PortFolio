import React from "react";
import { PageLayout } from "../common/layout/PageLayout";
import { client } from "../client";
import { motion } from "framer-motion";

export default function Skills({ skillsDatas }) {
  return (
    <PageLayout title="Skills" className="bg-[#ecfef5]">
      <ul className="__skills_ul">
        {skillsDatas.map((skill) => {
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
                  className="w-[80px] md:w-[100px]"
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
