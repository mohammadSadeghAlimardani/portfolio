const SectionTitle = (props) => {
    const { titleText } = props;
    return (
        <div className="section-title">
            <div className="line line-toLeft"></div>
            <h3>{titleText}</h3>
            <div className="line line-toRight"></div>
        </div>
    );
};

export default SectionTitle;
