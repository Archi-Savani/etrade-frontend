import Link from "next/link";
import { JewellerySlider } from "@/data/Slider";

const BannerFour = () => {
    return (
      <div className="axil-main-slider-area main-slider-style-7 bg_image--8">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-8">
              <div className="main-slider-content">
                <span className="subtitle">
                  <i className={JewellerySlider.subIcon} />
                  {JewellerySlider.subtitle}
                </span>
                <h1 className="title">{JewellerySlider.title}</h1>
                <p>{JewellerySlider.text}</p>
                <div className="shop-btn">
                    <Link href="/shop" className="axil-btn btn-bg-secondary right-icon">
                        Browse Item <i className="fal fa-long-arrow-right" />
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default BannerFour;