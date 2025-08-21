import { nanoid } from "nanoid";
import { FaTelegram } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { GrFingerPrint } from "react-icons/gr";

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
