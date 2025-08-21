import SectionTitle from "../../assets/SectionTitle";
import "./Experience.css";
import { experiences } from "../../data";
import SingleExperience from "./SingleExperience";

const Experience = () => {
    return (
        <div className="experience" id="experience">
            <section className="section-center experience-center">
                <SectionTitle titleText="experience" />
                <div className="experience-content">
                    {experiences.map((experience) => {
                        return (
                            <SingleExperience
                                {...experience}
                                key={experience.experienceID}
                            />
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default Experience;
