import { motion } from "framer-motion";
import React from "react";
import { LinkTag } from "./elements/LinkTag";
import { H2 } from "./elements/Text";

export const ProjectCard = ({ name, about, techstack, stared }) => {
  return (
    <LinkTag href={"project/" + name} className="group h-full">
      <div className="z-30 shadow-lg group-hover:shadow-none shadow-indigo-900 bg-white/40 flex gap-y-5 flex-col justify-between w-full h-full p-5 rounded-lg border-[3px] border-purple-500 duration-300">
        <div className="flex flex-col gap-3">
          <H2 className="font-bold duration-300">{name}</H2>
          <p className="truncate italic font-semibold">{about}</p>

          <div className="flex gap-2 flex-wrap">
            {techstack.map(({ fname }) => (
              <motion.p
                key={fname}
                whileHover={{ scale: 1.02 }}
                className="hover:bg-white hover:text-[#03506F] font-medium bg-[#03506F] px-2 py-1 text-white rounded-md"
              >
                {fname}
              </motion.p>
            ))}
          </div>
        </div>

        <div className="w-full flex justify-between">
          {stared && <img src="/assets/star.png" className="w-5 h-5" />}

          <p className="w-full text-right font-semibold flex flex-col items-end justify-center relative">
            <span>View more</span>
            <span className="absolute duration-300 bottom-0 w-0 group-hover:w-[74px] border-none h-[2px] rounded-full bg-indigo-900" />
          </p>
        </div>
      </div>
    </LinkTag>
  );
};
