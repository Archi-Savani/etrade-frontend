'use client';
import { FashionSlider, FashionSliderProduct } from "@/data/Slider";
import SlickSlider from "../elements/SlickSlider";
import Link from "next/link";
import Image from "next/image";

const BannerThree = () => {
    return (
      <div className="axil-main-slider-area main-slider-style-2">
        <div className="container">
          <div className="slider-offset-left">
            <div className="row row--20">
              <div className="col-lg-9">
                <div className="slider-box-wrap">
                  <SlickSlider
                    class="axil-slick-dots"
                    slidesToShow={1}
                    arrows={false}
                    dots={true}
                  >
                    {FashionSlider.map((data, index) => (
                        <div key={index}>
                        <div className="single-slide">
                            <div className="main-slider-content">
                                <span className="subtitle">
                                <i className={data.subIcon} /> {data.subTitle}
                                </span>
                                <h1 className="title">{data.title}</h1>
                                <div className="shop-btn">
                                    <Link href="/shop" className="axil-btn">Shop Now <i className="fal fa-long-arrow-right" /></Link>
                                </div>
                            </div>
                            <div className="main-slider-thumb">
                                <Image 
                                src={data.thumb}
                                height={292}
                                width={227}
                                alt="slider Image"
                                />
                            </div>
                          </div>
                      </div>
                    ))}
                  </SlickSlider>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="slider-product-box">
                  <div className="product-thumb">
                    <Image 
                    src={FashionSliderProduct.thumbnail}
                    width={125}
                    height={200}
                    alt="Product"
                    />
                  </div>
                  <h6 className="title">{FashionSliderProduct.title}</h6>
                  <span className="price">{FashionSliderProduct.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default BannerThree;