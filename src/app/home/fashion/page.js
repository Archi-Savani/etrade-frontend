'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Section from "@/components/elements/Section";
import SectionTitle from "@/components/elements/SectionTitle";
import SlickSlider from "@/components/elements/SlickSlider";
import FooterTwo from "@/components/footer/FooterTwo";
import HeaderTwo from "@/components/header/HeaderTwo";
import BannerThree from "@/components/hero-banner/BannerThree";
import NewsLetter from "@/components/newsletter/NewsLetter";
import ServiceOne from "@/components/services/ServiceOne";
import ServiceTwo from "@/components/services/ServiceTwo";
import ProductsData from "@/data/Products";
import { slugify, mapInSlices } from '@/utils';
import ProductTwo from '@/components/product/ProductTwo';
import TestimonialOne from '@/components/testimonial/TestimonialOne';
import ProductOne from '@/components/product/ProductOne';
import ProductSeven from '@/components/product/ProductSeven';
import ProductFour from '@/components/product/ProductFour';
import PosterOne from '@/components/poster/PosterOne';

const HomeFashion = () => {
    const pathname = usePathname();
    const split = pathname.split("/");
    const pageCategory = split[split.length - 1];
    const fashionProduct = ProductsData.filter(data => slugify(data.pCate) === pageCategory);
    const transparentProduct = ProductsData.filter(data => slugify(data.pCate) === pageCategory && data.thumbnailTransparent === true);
    const exploreProduct = mapInSlices(fashionProduct, 8);

    return ( 
        <>
        <HeaderTwo />
        <main className="main-wrapper">
            <BannerThree />
            <ServiceOne />
            <Section pClass="axil-new-arrivals-product-area fullwidth-container" sectionPadding="pb--0 pt--50" containerClass="ml--xxl-0" borderBottom="pb--50">
                <SectionTitle
                title="New Arrivals"
                subtitle="This Week’s"
                subtitleIcon="far fa-shopping-basket"
                subColor="highlighter-secondary"
                />
                <SlickSlider
                class="slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide"
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
                {fashionProduct.map((data) => (
                    <ProductFour product={data} key={data.id}/>
                ))}
                </SlickSlider>
            </Section>
            <Section pClass="pb--50 pb_sm--30">
                <SectionTitle
                title="Best Sellers"
                subtitle="This Month"
                subtitleIcon="far fa-shopping-basket"
                subColor="highlighter-secondary"
                />
                <SlickSlider 
                class="product-transparent-layout slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide product-slide-mobile"
                slidesToShow={4}
                infinite={false}
                responsive = {[
                    {
                      breakpoint: 1200,
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
                      breakpoint: 576,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                      }
                    },
                  ]}
                >
                    {transparentProduct.slice(0, 8).map((data) => (
                        <ProductSeven product={data} key={data.id}/>
                    ))}

                </SlickSlider>
            </Section>
            <PosterOne 
            subtitleIcon="far fa-shopping-basket"
            title="Let's Shopping Today"
            thumbnail="/images/product/poster/poster-05.png"
            thumbWidth={418}
            thumbHeight={502}
            />
            <Section>
                <SectionTitle
                title="Explore our Products"
                subtitle="Our Products"
                subtitleIcon="far fa-shopping-basket"
                subColor="highlighter-primary"
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
            <Section pClass="pb--50">
                <SectionTitle 
                    title="New Arrivals"
                    subtitle="This Week’s"
                    subtitleIcon="far fa-shopping-basket"
                />
                <SlickSlider 
                class="slick-layout-wrapper--30 axil-slick-arrow arrow-top-slide"
                slidesToShow={4}
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
                    {fashionProduct.slice(0, 8).map((data) => (
                        <ProductTwo product={data} key={data.id}/>
                    ))}

                </SlickSlider>
            </Section>
            <NewsLetter bgImage="bg_image--12"/>
            <ServiceTwo />
        </main>
        <FooterTwo />
        </>
    );
}
 
export default HomeFashion;