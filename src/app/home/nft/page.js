import { getAllPosts } from "@/utils/api";
import CategoryNft from "@/components/category/CategoryNft";
import Section from "@/components/elements/Section";
import SectionTitle from "@/components/elements/SectionTitle";
import SlickSlider from "@/components/elements/SlickSlider";
import FooterOne from "@/components/footer/FooterOne";
import HeaderFive from "@/components/header/HeaderFive";
import BannerTwo from "@/components/hero-banner/BannerTwo";
import ProductSix from "@/components/product/ProductSix";
import ProductsData from "@/data/Products";
import { slugify } from '@/utils';
import BlogTwo from '@/components/blog/BlogTwo';
import VideoBanner from '@/components/banner/VideoBanner';
import ServiceThree from '@/components/services/ServiceThree';
import ProductListTwo from '@/components/product/ProductListTwo';
import ProductIsotop from './ProductIsotop';

const HomeNft = () => {
    const pageCategory = "nft";
    const nftProduct = ProductsData.filter(data => slugify(data.pCate) === pageCategory);
    const allPost = getAllPosts([
        'id',
        'slug',
        'postFormat',
        'videoUrl',
        'title',
        'pCate',
        'cate',
        'featureImg',
    ])
    const nftPost = allPost.filter(data => slugify(data.pCate) === pageCategory);
    return ( 
        <>
        <HeaderFive />
        <main className="main-wrapper">
            <BannerTwo />
            <CategoryNft />
            <Section 
            pClass="axil-best-seller-product-area pb--0"
            borderBottom="pb--50"
            >
            <SectionTitle 
                title="Best Sellers"
                subtitle="This Month"
                subtitleIcon="far fa-shopping-basket"
                subColor="highlighter-primary"
            />
            <SlickSlider 
            class="slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide product-slide-mobile"
            slidesToShow={4}
            infinite={false}
            responsive = {[
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                  }
                },
                {
                  breakpoint: 767,
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
            {nftProduct.slice(0, 10).map((data) => (
                <ProductSix product={data} key={data.id}/>
            ))} 
            </SlickSlider>
            </Section>
            <ProductIsotop />
            <Section pClass="axil-most-sold-product pb--0" borderBottom="pb--50">
                <SectionTitle 
                    title="Most Sold Last 7 Days"
                    subtitle="Most Sold"
                    subtitleIcon="fas fa-star"
                    subColor="highlighter-primary"
                    pClass="section-title-center"
                /> 
                <div className="row row-cols-xl-3 row-cols-md-2 row-cols-1 row--15">
                    {nftProduct.slice(0, 9).map((data) => (
                        <div className="col" key={data.id}>
                            <ProductListTwo product={data} />
                        </div>
                    ))}
                </div>
            </Section>
            <ServiceThree />
            <VideoBanner />
            <Section>
                <SectionTitle 
                    title="Latest NFT News"
                    subtitle="Regular Post"
                    subtitleIcon="fas fa-fire"
                    subColor="highlighter-primary"
                    pClass="section-title-center"
                />
                <div className="row g-5">
                    {nftPost.slice(0, 3).map((data) => (
                        <div className="col-lg-4" key={data.id}>
                            <BlogTwo posts={data}/>
                        </div>
                    ))}
                </div>
            </Section>
        </main>
        <FooterOne dark />
        </>
    );
}
 
export default HomeNft;