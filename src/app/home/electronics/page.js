'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import CategoryElectronics from "@/components/category/CategoryElectronics";
import Section from "@/components/elements/Section";
import SectionTitle from "@/components/elements/SectionTitle";
import SlickSlider from "@/components/elements/SlickSlider";
import HeaderOne from "@/components/header/HeaderOne";
import BannerOne from "@/components/hero-banner/BannerOne";
import PosterOne from "@/components/poster/PosterOne";
import ProductOne from "@/components/product/ProductOne";
import TestimonialOne from "@/components/testimonial/TestimonialOne";
import ProductsData from "@/data/Products";
import FooterTwo from "@/components/footer/FooterTwo";
import ServiceTwo from "@/components/services/ServiceTwo";
import NewsLetter from "@/components/newsletter/NewsLetter";
import WhyChoose from "@/components/why-choose/WhyChoose";
import ProductTwo from "@/components/product/ProductTwo";
import ProductListOne from "@/components/product/ProductListOne";
import { mapInSlices, slugify } from "@/utils";
import PosterTwo from "@/components/poster/PosterTwo";

const HomeElectronics = () => {
    const pathname = usePathname();
    const split = pathname.split("/");
    const pageCategory = split[split.length - 1];
    const electronicsProduct = ProductsData.filter(data => slugify(data.pCate) === pageCategory);
    const exploreProduct = mapInSlices(electronicsProduct, 8);
    
    return ( 
        <>
        <HeaderOne />
        <main className="main-wrapper">
            <BannerOne />
            <CategoryElectronics />
            <PosterOne singleAnimation/>
            <Section>
                <SectionTitle
                title="Explore our Products"
                subtitle="Our Products"
                subtitleIcon="far fa-shopping-basket"
                subColor="highlighter-secondary"
                />
                <SlickSlider
                class="explore-product-activation slick-layout-wrapper slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide"
                slidesToShow={1}
                >
                    {exploreProduct.slice(0, 2).map((product, index) => (
                        <div key={index}>
                            <div className="row row--15">
                            {product.map((data) => (
                                <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30" key={data.id}>
                                    <ProductOne product={data} />
                                </div>
                            ))}
                        </div>
                        </div>
                    ))}
                    
                </SlickSlider>
                <div className="row">
                    <div className="col-lg-12 text-center mt--20 mt_sm--0">
                        <Link href="/shop" className="axil-btn btn-bg-lighter btn-load-more">View All Products</Link>
                    </div>
                </div>
            </Section>
            <TestimonialOne />
            <Section pClass="pb--0" borderBottom="pb--50">
                <SectionTitle 
                title="New Arrivals"
                subtitle="This Week’s"
                subtitleIcon="far fa-shopping-basket"
                subColor="highlighter-primary"
                />

                <SlickSlider 
                class="slick-layout-wrapper--30 axil-slick-arrow arrow-top-slide"
                slidesToShow={4}
                infinite={false}
                responsive = {[
                    {
                      breakpoint: 1400,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                      }
                    },
                    {
                      breakpoint: 992,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                      }
                    },
                    {
                      breakpoint: 575,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                      }
                    },
                  ]}
                >
                    {electronicsProduct.map((data) => (
                        <ProductTwo product={data} key={data.id}/>
                    ))}

                </SlickSlider>

            </Section>
            <Section pClass="axil-most-sold-product" borderBottom="pb--50">
                <SectionTitle 
                    title="Most Sold in eTrade Store"
                    subtitle="Most Sold"
                    subtitleIcon="fas fa-star"
                    subColor="highlighter-primary"
                    pClass="section-title-center"
                />
                <div className="row row-cols-xl-2 row-cols-1 row--15">
                    {electronicsProduct.slice(0, 8).map((data) => (
                        <div className="col" key={data.id}>
                            <ProductListOne product={data} />
                        </div>
                    ))}
                </div>
            </Section>
            <WhyChoose />
            <PosterTwo column="mb--30"/>
            <NewsLetter />
            <ServiceTwo />
        </main>
        <FooterTwo />
        </>
    );
}
 
export default HomeElectronics;