import "./SingleProject.css";
import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { MdFavorite } from "react-icons/md";

const SingleProject = (props) => {
    const {
        skills,
        favorite,
        image,
        titleProject,
        websiteURL,
        githubURL,
        description,
    } = props;
    return (
        <article className="single-project">
            <img src={image} alt={titleProject} />
            <section>
                <h3>{titleProject}</h3>
                <p>{description}</p>
                <ul>
                    <li>
                        <a href={websiteURL}>
                            <TbWorldWww />
                        </a>
                    </li>
                    <li>
                        <a href={githubURL}>
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
                </ul>
            </section>
        </article>
    );
};

export default SingleProject;
