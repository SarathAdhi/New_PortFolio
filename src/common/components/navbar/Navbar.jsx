import React from "react";
import { pages } from ".";
import { LinkTag } from "../elements/LinkTag";
import { motion } from "framer-motion";
import { H2 } from "../elements/Text";
import clsx from "clsx";
import * as style from "../../../styles/fonts.module.css";

const desktopVariant = {
  hidden: { opacity: 0, x: 65 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const mobileVariant = {
  hidden: { opacity: 1, x: 0, y: 50 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
  },
};

const Navbar = ({ isMobileDevice, title }) => {
  return (
    <header className="fixed z-40 px-2 md:p-0 flex flex-col justify-between left-0 w-full md:w-12 bottom-0 md:relative">
      <motion.div
        variants={isMobileDevice ? mobileVariant : desktopVariant}
        transition={{ duration: 0.5 }}
        drag={isMobileDevice ? "" : "y"}
        dragConstraints={{ top: 0, bottom: 450 }}
        initial="hidden"
        animate="visible"
        className="px-2 py-3 md:py-6 z-50 cursor-move w-full bg-white flex md:flex-col justify-around md:gap-5 rounded-lg"
      >
        {pages.map(({ key, name, image, href }) => (
          <LinkTag key={key} href={href} image={image} />
        ))}
      </motion.div>

      <H2
        className={clsx(
          "hidden md:block !text-white -rotate-180 pl-2",
          style.Monbold,
          style.vertical
        )}
      >
        {title}
      </H2>
    </header>
  );
};

export default Navbar;
