import Image from "next/image";

const SplashCta = () => {
    return (
      <div className="pv-call-to-action">
        <div className="container">
          <div className="pv-action-box">
            <div className="section-title-wrapper">
              <span className="title-highlighter highlighter-primary">
                <i className="fas fa-fire" /> Are You Ready
              </span>
              <h2 className="title">Let’s Start Your Business Today!</h2>
              <a
              target="_blank"
                href="https://themeforest.net/item/etrade-multipurpose-ecommerce-nextjs-template/48473978"
                className="axil-btn btn-bg-primary"
              >
                <i className="fal fa-shopping-cart" /> Buy Now
              </a>
            </div>
            <div className="pv-action-thumbnail">
                <Image 
                src="/images/preview/cta-mockup.png"
                width={1230}
                height={540}
                alt="Cta Mockup"
                />
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default SplashCta;