import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import SectionTitle from "../elements/SectionTitle";
import SlickSlider from "../elements/SlickSlider";
import Section from "../elements/Section";
import { Category } from "@/data/ProductCategory";
import { slugify } from "@/utils";

const CategoryElectronics = () => {
  const pathname = usePathname();
  const split = pathname.split("/");
  const pageCategory = split[split.length - 1];
  
  const findCategory = Category.filter(
    (data) => slugify(data.cate) === pageCategory
    );
    const electronics = findCategory[0].subCate;

  return (
    <Section pClass="axil-categorie-area" sectionPadding="axil-section-gapcommon">
      <SectionTitle
        title="Browse by Category"
        subtitle="Categories"
        subtitleIcon="far fa-tags"
        subColor="highlighter-secondary"
      />
      <SlickSlider
        class="slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide"
        slidesToShow={7}
        infinite={false}
        responsive = {[
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 6,
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
            }
          },
          {
            breakpoint: 992,
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
        ]}
      >
        {electronics.map((data, index) => (
          <div className="categrie-product" key={index}>
            <Link href={`/products/category/${pageCategory}/${slugify(data.name)}`}>
              <Image src={data.thumb} height={64} width={64} alt={data.name} />
              <h6 className="cat-title">{data.name}</h6>
            </Link>
          </div>
        ))}
      </SlickSlider>
    </Section>
  );
};

export default CategoryElectronics;
