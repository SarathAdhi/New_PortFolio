import React from "react";
import { socialMediaHandles } from ".";
import { motion } from "framer-motion";

export const SocialMedia = () => {
  return (
    <div className="px-2 py-2 w-full flex justify-around gap-2 sm:gap-5 bg-black/20 shadow-blur backdrop-blur-xl border-[1px] border-white/20 rounded-lg">
      {socialMediaHandles.map(({ name, image, link }) => (
        <motion.a
          key={name}
          href={link}
          target="_blank"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.98 }}
        >
          <img className="w-8 sm:w-10" src={image} alt={name} />
        </motion.a>
      ))}
    </div>
  );
};
