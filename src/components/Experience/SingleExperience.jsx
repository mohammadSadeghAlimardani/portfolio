import "./SingleExperience.css";

const SingleExperience = (props) => {
    const { jobTitle, company, duration, city, country, icon } = props;
    return (
        <article className="single-experience">
            <header>
                <div>
                    <h3>{jobTitle}</h3>
                    <h4>{company} company</h4>
                </div>
                {icon}
            </header>
            <section>
                <span>{duration}</span>
                <span>
                    {city}, {country}
                </span>
            </section>
            <div className="separate-border"></div>
        </article>
    );
};

export default SingleExperience;
