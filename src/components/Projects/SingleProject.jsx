import "./SingleProject.css";
import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { MdFavorite } from "react-icons/md";
import { IoGameController } from "react-icons/io5";

const SingleProject = (props) => {
    const {
        skills,
        isGame,
        titleProject,
        image,
        websiteURL,
        favorite,
        githubURL,
        description,
    } = props;
    return (
        <article className="single-project">
            <img src={image} alt={titleProject} />
            <section>
                <h3>{titleProject}</h3>
                <p>{description}</p>
                <h5>skills : {skills.join(", ")}</h5>
                <ul>
                    <li>
                        <a href={websiteURL} target="_blank">
                            <TbWorldWww />
                        </a>
                    </li>
                    <li>
                        <a href={githubURL} target="_blank">
                            <FaGithubSquare />
                        </a>
                    </li>
                    {favorite ? (
                        <li>
                            <MdFavorite />
                        </li>
                    ) : (
                        ""
                    )}
                    {isGame ? (
                        <li>
                            <IoGameController />
                        </li>
                    ) : (
                        ""
                    )}
                </ul>
            </section>
        </article>
    );
};

export default SingleProject;
