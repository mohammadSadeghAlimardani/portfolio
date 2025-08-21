import "./SingleService.css";

const SingleService = (props) => {
    const { serviceID, icon, title, description } = props;
    return (
        <article className="single-service" key={serviceID}>
            {icon}
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    );
};

export default SingleService;
