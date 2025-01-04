import SectionTitle from "../elements/SectionTitle";

const NewsLetter = (props) => {
    return (
      <div className="axil-newsletter-area axil-section-gap pt--0">
        <div className="container">
          <div className={`etrade-newsletter-wrapper bg_image ${props.bgImage ? props.bgImage : "bg_image--5"}`}>
            <div className="newsletter-content">
              <SectionTitle 
              pClass="pr--0"
                title="Get weekly update"
                subtitle="Newsletter"
                subtitleIcon="fas fa-envelope-open"
                subColor="highlighter-primary2"
              />
              <div className="input-group newsletter-form">
                <div className="position-relative newsletter-inner mb--15">
                  <input placeholder="example@gmail.com" type="text" />
                </div>
                <button type="submit" className="axil-btn mb--15">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default NewsLetter;