import { BsFillGridFill } from "react-icons/bs";

export const companies = [
  {
    name: "Hushl",
    isWorking: false,
    image: "/assets/work-history/hushl.jpg",
    time: "July 22nd, 2022 - September 10th, 2022",
    about:
      "Hushl is a creator platform for professionals to create content, teach skills in micro communities and launch side projects. Professionals from across different sectors don't participate in the creator economy: a lack of time, and limited tools and resources prevent them from fully participating in it.",
    href: "https://home.inkredo.in/",
    completionCertificate:
      "https://drive.google.com/file/d/1mP9fGpWb6o7Kf2WLfCJ11eIwSKvXT7ve/view?usp=sharing",
  },
  {
    name: "Inkredo",
    isWorking: false,
    image: "/assets/work-history/inkredo.jpg",
    time: "May 10th, 2022 - August 31st, 2022",
    about:
      "Inkredo is in the business of creating an infrastructure for credit risk assessment that helps financial institutions (FIs) create reliable risk assessment capabilities. Currently, we enable FIs to make sense of data from bank statements. We help FIs develop cognitive automation so that high-calibre talent can spend more quality on decision making and less on organising data and number crunching.",
    href: "https://home.inkredo.in/",
    completionCertificate:
      "https://drive.google.com/file/d/1Mp4L7otnl1FhA9LOxQ_Uoep5M3ycz-p0/view?usp=sharing",
  },
];

export const projectTab = [
  { icon: <BsFillGridFill className="w-4 md:w-6 text-white" />, label: "All" },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    label: "ReactJS",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg",
    label: "NextJS",
  },
  {
    img: "https://www.svgrepo.com/show/200102/bold-letter-b.svg",
    label: "Blockchain",
  },
];

export const skillsTab = [{ label: "All" }, { label: "Majority" }];

export const majority = [
  "ReactJS",
  "NextJS",
  "MongoDB",
  "Firebase",
  "JavaScript",
  "TypeScript",
  "Solidity",
];
