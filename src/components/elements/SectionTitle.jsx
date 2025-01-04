const SectionTitle = (props) => {
  return (
    <div className={`section-title-wrapper ${props.pClass ? props.pClass : ""}`}>
        {props.subtitleIcon ?
        <span className={`title-highlighter ${props.subColor ? props.subColor : "highlighter-primary"}`}>
        <i className={props.subtitleIcon} /> {props.subtitle}
        </span>
        : null}
        <h2 className="title" dangerouslySetInnerHTML={{ __html: props.title }}></h2>
    </div>
  );
};

export default SectionTitle;
