'use client';
import { usePathname } from 'next/navigation';
import Section from "@/components/elements/Section";
import SlickSlider from "@/components/elements/SlickSlider";
import FooterTwo from "@/components/footer/FooterTwo";
import HeaderFour from "@/components/header/HeaderFour";
import NewsLetter from "@/components/newsletter/NewsLetter";
import ServiceTwo from "@/components/services/ServiceTwo";
import ProductsData from '@/data/Products';
import { slugify } from '@/utils';
import SectionTitle from '@/components/elements/SectionTitle';
import ProductTwo from '@/components/product/ProductTwo';
import BannerFour from '@/components/hero-banner/BannerFour';
import PosterTwo from '@/components/poster/PosterTwo';
import ProductFour from '@/components/product/ProductFour';
import ProductThree from '@/components/product/ProductThree';
import CategoryJewellery from '@/components/category/CategoryJewellery';
import TestimonialOne from '@/components/testimonial/TestimonialOne';
import ProductOne from '@/components/product/ProductOne';
import Link from 'next/link';

const HomeJewellery = () => {
    const pathname = usePathname();
    const split = pathname.split("/");
    const pageCategory = split[split.length - 1];

    const jewelleryProduct = ProductsData.filter(data => slugify(data.pCate) === pageCategory);
    return ( 
        <>
        <HeaderFour />
        <main className="main-wrapper">
            <BannerFour />
            <PosterTwo 
            section="axil-section-gap pb--0"
            row="g-lg-5 g-4"
            leftThumb="/images/product/poster/poster-08.png"
            leftTitle="Premimum Quality."
            rightThumb="/images/product/poster/poster-09.png"
            rightSubtitle="50% Offer In Winter"
            rightTitle="Get Exclusive Diamond"
            />
            <Section pClass="axil-new-arrivals-product-area fullwidth-container pb--0" containerClass="ml--xxl-0" borderBottom="pb--50">
                <SectionTitle
                title="New Arrivals"
                subtitle="This Week’s"
                subtitleIcon="far fa-shopping-basket"
                subColor="highlighter-primary"
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
                {jewelleryProduct.map((data) => (
                    <ProductFour product={data} key={data.id}/>
                ))}
                </SlickSlider>
            </Section>
            <Section pClass="pb--0" borderBottom="pb--50">
                <SectionTitle
                title="Best Sellers"
                subtitle="This Month"
                subtitleIcon="far fa-shopping-basket"
                subColor="highlighter-primary"
                />
                <SlickSlider 
                class="product-transparent-layout slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide product-slide-mobile"
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
                    {jewelleryProduct.map((data) => (
                        <ProductThree product={data} key={data.id}/>
                    ))}

                </SlickSlider>
            </Section>
            <CategoryJewellery />
            <TestimonialOne />
            <Section pClass="pb--0" borderBottom="pb--80">
                <SectionTitle
                title="Explore our Products"
                subtitle="Our Products"
                subtitleIcon="far fa-shopping-basket"
                subColor="highlighter-primary"
                />
                <div className="row row--15">
                    {jewelleryProduct.slice(0, 12).map((data) => (
                        <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30" key={data.id}>
                            <ProductOne product={data} />
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center mt--20 mt_sm--0">
                        <Link href="/shop" className="axil-btn btn-bg-lighter btn-load-more">View All Products</Link>
                    </div>
                </div>
            </Section>
            <Section pClass="pb--50">
                <SectionTitle 
                    title="New Arrivals"
                    subtitle="This Week’s"
                    subtitleIcon="far fa-shopping-basket"
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
                    {jewelleryProduct.slice(0, 8).map((data) => (
                        <ProductTwo product={data} key={data.id}/>
                    ))}

                </SlickSlider>
            </Section>
            <NewsLetter bgImage="bg_image--11"/>
            <ServiceTwo />
        </main>
        <FooterTwo />
        </>
     );
}
 
export default HomeJewellery;