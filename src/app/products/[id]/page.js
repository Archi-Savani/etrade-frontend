import ProductsData from "@/data/Products";
import ProductOne from "@/components/product/ProductOne";
import { slugify } from "@/utils";
import SlickSlider from "@/components/elements/SlickSlider";
import SingleLayouThree from "./SingleLayouThree";
import Section from "@/components/elements/Section";
import SectionTitle from "@/components/elements/SectionTitle";
import SingleLayouSeven from "./SingleLayouSeven";
import SingleLayoutOne from "./SingleLayoutOne";
import SingleLayoutTwo from "./SingleLayoutTwo";
import SingleLayoutFour from "./SingleLayoutFour";

const ProductDetails = ({ params }) => {
    const findProduct = ProductsData.filter(product => slugify(product.id) === slugify(params.id));
    const singleProduct = findProduct[0];
    const productCategory = singleProduct.pCate;
    const relatedProduct = ProductsData.filter(product => slugify(product.pCate) === slugify(productCategory));

    const ProductSingleLayout = () => {
        switch (singleProduct.pCate) {
            case "NFT":
                return <SingleLayouSeven singleData={singleProduct} />
                break;
            case "Electronics":
                return <SingleLayouThree singleData={singleProduct} />
                break;
            case "Fashion":
                return <SingleLayoutOne singleData={singleProduct} />
                break;
            case "Furniture":
                return <SingleLayoutFour singleData={singleProduct} />
                break;
            default:
                return <SingleLayoutTwo singleData={singleProduct} />
                break;
        }
    }

    return (
        <>
            <ProductSingleLayout />
            <Section pClass="pb--50 pb_sm--30">
                <SectionTitle 
                    title="Viewed Items"
                    subtitle="Your Recently"
                    subtitleIcon="far fa-shopping-basket"
                    subColor="highlighter-primary"
                />
                <SlickSlider
                class="recent-product-activation slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide"
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
                    {relatedProduct?.slice(0, 10).map((data) => (
                        <ProductOne product={data} key={data.id}/>
                    ))}
                </SlickSlider>
            </Section>
        </>
    );
}

export default ProductDetails;


export async function generateStaticParams() {
    const products = ProductsData;

    return products.map((post) => ({
        id: slugify(post.id),
    }));
}