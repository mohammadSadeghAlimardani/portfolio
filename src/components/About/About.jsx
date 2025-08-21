import SectionTitle from "../../assets/SectionTitle";
import "./About.css";
import aboutImage from "../../images/about-image.jpg";

const About = () => {
    return (
        <div className="about" id="about">
            <section className="section-center about-center">
                <SectionTitle titleText="about me" />
                <div className="about-content column column-2">
                    <article className="about-image">
                        <img
                            src={aboutImage}
                            alt="Mohammad Sadegh Alimardani"
                        />
                    </article>
                    <article className="about-info">
                        <p>
                            Hi, I’m Mohammad Sadegh. I am a front-end developer
                            passionate about crafting clean, responsive, and
                            user-friendly web experiences. I specialize in
                            HTML5, CSS3, JavaScript, turning ideas into
                            interactive designs that feel alive. Beyond coding,
                            I love solving problems, learning new technologies,
                            and creating projects that bring value to people. My
                            goal is simple: to build websites that not only work
                            but inspire. Let’s create something amazing
                            together!
                        </p>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default About;
