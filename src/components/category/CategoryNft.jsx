'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import SectionTitle from "../elements/SectionTitle";
import SlickSlider from "../elements/SlickSlider";
import Section from "../elements/Section";
import { Category } from "@/data/ProductCategory";
import { slugify } from "@/utils";

const CategoryNft = () => {
    const pathname = usePathname();
    const split = pathname.split("/");
    const pageCategory = split[split.length - 1];
    
    const findCategory = Category.filter(
      (data) => slugify(data.cate) === pageCategory
      );
      const nft = findCategory[0].subCate;

    return ( 
        <Section pClass="axil-categorie-area pb--0" borderBottom="pb--50">
        <SectionTitle
          title="Browse by Category"
          subtitle="Categories"
          subtitleIcon="far fa-shopping-basket"
          subColor="highlighter-secondary"
        />
        <SlickSlider
          class="slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide"
          slidesToShow={6}
          infinite={false}
          responsive = {[
            {
              breakpoint: 1199,
              settings: {
                  slidesToShow: 5,
                  slidesToScroll: 5
              }
          },
          {
              breakpoint: 991,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4
              }
          },
          {
              breakpoint: 767,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
              }
          },
          {
              breakpoint: 479,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          },
          {
              breakpoint: 400,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          },
          ]}
        >
          {nft.map((data, index) => (
            <div className="categrie-product categrie-product-3" key={index}>
              <Link href={`/products/category/${pageCategory}/${slugify(data.name)}`}>
                <Image src={data.thumb} height={105} width={160} alt={data.name} />
                <h6 className="cat-title">{data.name}</h6>
              </Link>
            </div>
          ))}
        </SlickSlider>
      </Section>
     );
}
 
export default CategoryNft;