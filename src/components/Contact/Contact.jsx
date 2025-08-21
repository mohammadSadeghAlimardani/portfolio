import "./Contact.css";
import { MdOutlineMail } from "react-icons/md";
import { socialIcons } from "../../data";
import SectionTitle from "../../assets/SectionTitle";
const Contact = () => {
    return (
        <div className="contact" id="contact">
            <section className="section-center contact-center">
                <SectionTitle titleText="contact me" />
                <p>
                    bring your vision to life with a stunning design. contact me
                    today to get started on your journey.
                </p>
                <span className="email-container">
                    <MdOutlineMail />
                    mv818179@gmail.com
                </span>
                <ul className="social-icons">
                    {socialIcons.map((socialIcon) => {
                        const { socialIconID, icon, url } = socialIcon;
                        return (
                            <li key={socialIconID}>
                                <a target="_blank" href={url}>
                                    {icon}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </div>
    );
};

export default Contact;
