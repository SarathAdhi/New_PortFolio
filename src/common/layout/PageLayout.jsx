import Head from "next/head";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { Context } from "../components/context/Context";
import Navbar from "../components/navbar/Navbar";
import { PageWrapper } from "./PageWrapper";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const mobileVariant = {
  hidden: { opacity: 0, y: -200, x: 0 },
  enter: { opacity: 1, y: 0, x: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

export const PageLayout = ({ title, className, children }) => {
  const { _isMobile } = useContext(Context);

  const [isMobileDevice, setIsMobileDevice] = _isMobile;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Sarath Adhithya's portfolio. UI/UX focused."
        />
        <meta
          name="keywords"
          content="React, Next, Tailwind-css, UI/UX, Cool user interface, HTML, CSS, JavaScript"
        />
        <meta name="author" content="Sarath Adhithya" />
        <meta name="theme-color" content="#2a14f7"></meta>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" as="image" href="/assets/me.png"></link>
      </Head>
      <PageWrapper>
        <motion.div
          variants={isMobileDevice ? mobileVariant : variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: "keyframes", duration: 0.5 }}
          className={clsx(
            "w-full mb-10 md:mb-0 p-5 flex flex-col overflow-x-hidden rounded-2xl overflow-y-auto",
            className
          )}
        >
          {children}
        </motion.div>
        <Navbar isMobileDevice={isMobileDevice} title={title} />
      </PageWrapper>
    </>
  );
};
