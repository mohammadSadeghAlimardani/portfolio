import "./SingleSkill.css";

const SingleSkill = (props) => {
    const { title, description, icon } = props;
    return (
        <article className="single-skill">
            {icon}
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    );
};

export default SingleSkill;
