import "./Projects.css";
import SectionTitle from "../../assets/SectionTitle";
import SingleProject from "./SingleProject";
import Loading from "../../assets/Loading";
import Error from "../../assets/Error";
import { useEffect, useState } from "react";
const url = "https://api.jsonbin.io/v3/b/68a1ba2d43b1c97be9207ce0";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const fetchProjects = async () => {
        try {
            let response = await fetch(url);
            let data = await response.json();
            data = data.record;
            setProjects(data);
        } catch (error) {
            console.log(error);
            setIsError(true);
        }
        setIsLoading(false);
    };
    useEffect(() => {
        fetchProjects();
    }, []);
    if (isLoading) {
        return (
            <div className="projects" id="projects">
                <section className="section-center projects-center">
                    <SectionTitle titleText="my projects" />
                    <Loading />
                </section>
            </div>
        );
    }
    if (isError) {
        return (
            <div className="projects" id="projects">
                <section className="section-center projects-center">
                    <SectionTitle titleText="my projects" />
                    <Error />
                </section>
            </div>
        );
    }
    return (
        <div className="projects" id="projects">
            <section className="section-center projects-center">
                <SectionTitle titleText="my projects" />
                <div className="projects-content column column-3">
                    {projects.map((project) => {
                        return <SingleProject {...project} key={project.id} />;
                    })}
                </div>
            </section>
        </div>
    );
};

export default Projects;
