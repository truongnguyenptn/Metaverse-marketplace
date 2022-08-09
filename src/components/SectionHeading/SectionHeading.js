import './sectionheading.scss';
function SectionHeading({subtitle,title,text}) {
    return (<div className="section-heading">
        <h5 className="subtitle">
            {subtitle}
        </h5>
        <h2 className="title">
            {title}
        </h2>
        <p className="text">
            {text}
        </p>
    </div>);
}

export default SectionHeading;