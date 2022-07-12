import { PageLayout } from "../common/layout/PageLayout";
import { motion } from "framer-motion";
import * as style from "../styles/fonts.module.css";
import clsx from "clsx";
import { SocialMedia } from "../common/components/social-media/SocialMedia";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <PageLayout
      title="About"
      className="relative bg-[#ECB365] pt-40 sm:pt-0 sm:justify-center items-center text-center !overflow-hidden"
    >
      <motion.div
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.9 }}
        className={clsx(
          "select-none text-4xl xs:text-7xl lg:text-7xl",
          style.cursiveFont
        )}
      >
        Hii there, I am
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={clsx(
          "relative z-10 -mt-4 flex gap-5 sm:gap-10 select-none text-3xl sm:-mt-7 sm:text-7xl text-[#ff00cf]",
          style.Monbold
        )}
      >
        <span>S</span>
        <span>A</span>
        <span>R</span>
        <span>A</span>
        <span>T</span>
        <span>H</span>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className={clsx(
          "-mt-4 sm:-mt-8 select-none italic text-[30px] sm:text-7xl lg:text-8xl",
          style.cursiveFont
        )}
      >
        Full Stack Developer
      </motion.div>

      <a
        className="mt-5 relative group rounded-md py-2 px-3 border-2 border-indigo-900 bg-indigo-300 text-primary-900 font-medium"
        href="/assets/Sarath_Adhithya_Resume.pdf"
        target="_blank"
      >
        <span className="absolute left-0 bottom-0 rounded-sm w-0 h-full bg-indigo-400 z-0 group-hover:w-full duration-300 group-hover:transition-all p-0.5"></span>
        <span className="relative z-10 font-semibold flex items-center gap-2">
          <FiDownload className="w-5" />
          Download Resume
        </span>
      </a>

      <div className="mt-5 sm:mt-10 flex flex-col items-center gap-2 ">
        <SocialMedia />
      </div>

      <div className="absolute -z-0 w-20 md:w-40 pb-2.5 md:pb-0 md:-mb-1.5 bottom-0 right-0">
        <img
          className="absolute z-0 right-0 -mt-5 md:-mt-10 w-40"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="react"
        />
        <img
          className="-scale-x-90"
          src="/assets/me.png"
          alt="sarath adhithya"
        />
      </div>
    </PageLayout>
  );
}
