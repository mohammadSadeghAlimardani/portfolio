import "./Navbar.css";
import { navLinks, socialIcons } from "../../data";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Sidebar from "./Sidebar";
import logo from "../../images/logo.png";
const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <>
            <Sidebar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />
            <nav className="navbar">
                <div className="section-center nav-center">
                    <h1>
                        <img src={logo} alt="logo" />
                    </h1>
                    <ul className="nav-links">
                        {navLinks.map((navLink) => {
                            const { text, linkID, url } = navLink;
                            return (
                                <li key={linkID}>
                                    <a href={url}>{text}</a>
                                </li>
                            );
                        })}
                    </ul>
                    <ul className="social-icons">
                        {socialIcons.map((socialIcon) => {
                            const { icon, url, socialIconID } = socialIcon;
                            return (
                                <li key={socialIconID}>
                                    <a target="_blank" href={url}>
                                        {icon}
                                    </a>
                                </li>
                            );
                        })}
                        <button
                            className="link show-sidebar"
                            onClick={() => setShowSidebar(true)}
                        >
                            <FaBars />
                        </button>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
