import { nanoid } from "nanoid";
import { FaTelegram } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { GrFingerPrint } from "react-icons/gr";
import { ImHtmlFive } from "react-icons/im";
import { ImCss3 } from "react-icons/im";
import { DiJsBadge } from "react-icons/di";
import { FaReact } from "react-icons/fa";

const navLinks = [
    {
        linkID: nanoid(),
        text: "home",
        url: "#",
    },
    {
        linkID: nanoid(),
        text: "about me",
        url: "#about",
    },
    {
        linkID: nanoid(),
        text: "skills",
        url: "#skills",
    },
    {
        linkID: nanoid(),
        text: "services",
        url: "#services",
    },
    {
        linkID: nanoid(),
        text: "contact me",
        url: "#contact",
    },
    {
        linkID: nanoid(),
        text: "my projects",
        url: "#projects",
    },
    // {
    //     linkID: nanoid(),
    //     text: "experience",
    //     url: "#experience",
    // },
];
export { navLinks };

const socialIcons = [
    {
        socialIconID: nanoid(),
        icon: <FaTelegram />,
        url: "https://t.me/Ms138119$",
    },
];
export { socialIcons };

const skills = [
    {
        skillID: nanoid(),
        icon: <ImHtmlFive />,
        title: "HTML",
        description:
            "Crafts clean and semantic web structures using HTML — skilled in forms, tags, and SEO-friendly markup.",
    },
    {
        skillID: nanoid(),
        icon: <ImCss3 />,
        title: "CSS",
        description:
            "Designs responsive, visually appealing layouts with CSS — proficient in Flexbox, Grid, animations, and modern styling techniques.",
    },
    {
        skillID: nanoid(),
        icon: <DiJsBadge />,
        title: "JS",
        description:
            "Builds dynamic, interactive web features using JavaScript — strong in DOM manipulation, logic, and event-driven programming.",
    },
    {
        skillID: nanoid(),
        icon: <FaReact />,
        title: "React.js",
        description:
            "Develops fast, scalable interfaces with React.js — experienced in components, hooks, props, and state management.",
    },
];
export { skills };

const services = [
    {
        serviceID: nanoid(),
        title: "Responsive Web Design",
        description:
            "Creating responsive and dynamic websites using the latest technologies.",
        icon: <FaMobileAlt />,
    },
    {
        serviceID: nanoid(),
        title: "Dynamic Web Development",
        description:
            "Building dynamic web applications with a focus on user experience and performance.",
        icon: <BsGlobe2 />,
    },
];
export { services };

const experiences = [
    {
        experienceID: nanoid(),
        jobTitle: "",
        company: "",
        duration: "july 2021 - july 2022",
        city: "",
        country: "",
        icon: <GrFingerPrint />,
    },
];
export { experiences };
