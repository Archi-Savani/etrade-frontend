const Section = (props) => {
    return ( 
        <section className={`section ${props.sectionPadding ? props.sectionPadding : "axil-section-gap"} ${props.pClass ? props.pClass : ""}`}>
            <div className={`container ${props.containerClass ? props.containerClass : ""}`}>
                <div className={props.borderBottom ? `product-area ${props.borderBottom}` : "no-border"}>
                    {props.children}
                </div>
            </div>
        </section>
     );
}
 
export default Section;