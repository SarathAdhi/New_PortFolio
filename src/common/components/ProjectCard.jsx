import { motion } from "framer-motion";
import React from "react";
import { LinkTag } from "./elements/LinkTag";
import { H2 } from "./elements/Text";

export const ProjectCard = ({ name, about, techstack }) => {
  return (
    <LinkTag href={"project/" + name}>
      <div className="z-30 shadow-lg shadow-indigo-900 bg-white/40 flex gap-y-5 flex-col justify-between w-full h-full p-5 rounded-lg duration-300">
        <H2 className="font-semibold duration-300">{name}</H2>
        <p>{about.substring(0, 40) + "..."}</p>
        <div className="flex gap-2 flex-wrap">
          {techstack.map(({ fname }) => (
            <motion.p
              key={fname}
              whileHover={{ scale: 1.02 }}
              className="bg-[#03506F] px-2 py-1 text-white rounded-md"
            >
              {fname}
            </motion.p>
          ))}
        </div>
        <p className="text-right font-semibold flex flex-col items-end justify-center relative">
          <span>View more</span>
          <span className="absolute duration-300 bottom-0 w-0 group-hover:w-[74px] border-none h-[2px] rounded-xl bg-indigo-900" />
        </p>
      </div>
    </LinkTag>
  );
};
