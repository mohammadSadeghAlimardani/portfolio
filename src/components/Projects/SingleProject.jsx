import "./SingleProject.css";
import { GoArrowUpRight } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const SingleProject = (props) => {
    const { category, favorite, image, titleProject, url } = props;
    const [show, setShow] = useState(false);
    return (
        <article
            className="single-project"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            <img src={image} alt={titleProject} />
            <span className="bookmark">{category.join(" , ")}</span>
            {favorite ? (
                <span className="favorite">
                    <FaStar />
                </span>
            ) : (
                ""
            )}
            <section
                className={
                    show ? "single-project-info show" : "single-project-info"
                }
            >
                <a href={url} target="_blank">
                    {titleProject}
                    <GoArrowUpRight />
                </a>
            </section>
        </article>
    );
};

export default SingleProject;
