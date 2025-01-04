'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { NftSlider } from "@/data/Slider";
import SlickSlider from "../elements/SlickSlider";
import ProductsData from "@/data/Products";
import { slugify } from "@/utils";
import ProductFive from "../product/ProductFive";


const BannerTwo = () => {
    const pathname = usePathname();
    const split = pathname.split("/");
    const pageCategory = split[split.length - 1];
    
    const nftProduct = ProductsData.filter(data => slugify(data.pCate) === pageCategory);

    return (
      <div className="axil-main-slider-area main-slider-style-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="main-slider-content">
                <span className="subtitle">
                  <i className={NftSlider.subIcon} />
                  {NftSlider.subtitle}
                </span>
                <h1 className="title">{NftSlider.title}</h1>
                <div className="shop-btn">
                  <Link
                    href="/shop"
                    className="axil-btn btn-bg-white right-icon"
                  >
                    Explore <i className="fal fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="main-slider-large-thumb">
                <SlickSlider
                  class="axil-slick-dots"
                  dots={true}
                  arrows={false}
                  slidesToShow={3}
                  centerMode={true}
                  infinite={true}
                  centerPadding="0"
                  responsive = {[
                    {
                      breakpoint: 575,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                      }
                    },
                  ]}
                  
                >
                  {nftProduct.slice(0, 6).map((data) => (
                  <ProductFive product={data} key={data.id}/>
                  ))}
                </SlickSlider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default BannerTwo;