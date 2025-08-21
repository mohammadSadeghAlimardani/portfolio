import "./Sidebar.css";
import { navLinks, socialIcons } from "../../data";
import { FaTimes } from "react-icons/fa";

const Sidebar = (props) => {
    const { showSidebar, setShowSidebar } = props;
    return (
        <aside className={showSidebar ? "sidebar show-sidebar" : "sidebar"}>
            <div className="sidebar-header">
                <button
                    className="link close-sidebar"
                    onClick={() => setShowSidebar(false)}
                >
                    <FaTimes />
                </button>
            </div>
            <ul className="nav-links">
                {navLinks.map((navLink) => {
                    const { text, linkID, url } = navLink;
                    return (
                        <li key={linkID}>
                            <a onClick={() => setShowSidebar(false)} href={url}>
                                {text}
                            </a>
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
            </ul>
        </aside>
    );
};

export default Sidebar;
