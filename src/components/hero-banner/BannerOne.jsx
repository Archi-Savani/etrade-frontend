'use client';
import SlickSlider from "@/components/elements/SlickSlider";
import { ElectronicsSlider } from "@/data/Slider";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const BannerOne = () => {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    return ( 
        <div className="axil-main-slider-area main-slider-style-1">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-sm-6">
                        <div className="main-slider-content">
                            <SlickSlider 
                            slidesToShow={1} 
                            arrows={false} 
                            fade={true}
                            asNavFor={nav2}
                            ref={(slider1 => setNav1(slider1))}
                            >
                                {ElectronicsSlider.map((data, index) => (
                                  <div key={index}>
                                    <span className="subtitle"><i className={data.subIcon} /> {data.subTitle}</span>
                                    <h1 className="title">{data.title}</h1>
                                    <div className="slide-action">
                                        <div className="shop-btn">
                                            <Link href="/shop" className="axil-btn btn-bg-white">
                                            <i className="fal fa-shopping-cart" />Shop Now
                                            </Link>
                                        </div>
                                    </div>
                                  </div>
                                ))}
                            </SlickSlider>
                        </div>
                    </div>
                    <div className="col-lg-7 col-sm-6">
                        <div className="main-slider-large-thumb">
                            <SlickSlider class="axil-slick-dots slick-dotted"
                            slidesToShow={2}
                            arrows={false}
                            dots={true}
                            asNavFor={nav1}
                            ref={(slider2 => setNav2(slider2))}
                            >
                            {ElectronicsSlider.map((data, index) => (
                                <div key={index}>
                                    <Image 
                                    src={data.thumb}
                                    height={550}
                                    width={680}
                                    alt={data.title}
                                    />
                                    <div className="product-price">
                                        <span className="text">From</span>
                                        <span className="price-amount">{data.price}</span>
                                    </div>
                                </div>
                            ))}
                            </SlickSlider>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shape-group">
                <li className="shape-1">
                    <Image 
                        src="/images/others/shape-1.png" 
                        alt="Shape"
                        height={672}
                        width={500}
                    />
                </li>
                <li className="shape-2">
                    <Image 
                    src="/images/others/shape-2.png" 
                    alt="Shape"
                    height={313}
                    width={420}
                    />
                </li>
            </ul>
        </div>
    );
}
 
export default BannerOne;