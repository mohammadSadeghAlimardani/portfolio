import { skills } from "../../data";
import SingleSkill from "./SingleSkill";
import SectionTitle from "../../assets/SectionTitle";
import "./Skills.css";

const Skills = () => {
    return (
        <div className="skills" id="skills">
            <section className="section-center skills-center">
                <SectionTitle titleText="skills" />
                <div className="skills-content column column-3">
                    {skills.map((skill) => {
                        return <SingleSkill key={skill.skillID} {...skill} />;
                    })}
                </div>
            </section>
        </div>
    );
};

export default Skills;
