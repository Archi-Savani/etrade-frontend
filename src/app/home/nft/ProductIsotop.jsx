'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { slugify } from '@/utils';
import ProductsData from "@/data/Products";
import ProductOne from '@/components/product/ProductOne';
import Section from '@/components/elements/Section';
import SectionTitle from '@/components/elements/SectionTitle';

const ProductIsotop = () => {
    const pathname = usePathname();
    const split = pathname.split("/");
    const pageCategory = split[split.length - 1];

    const nftProduct = ProductsData.filter(data => slugify(data.pCate) === pageCategory);
    const [nftCateProduct, setNftCateProduct] = useState(nftProduct);
    const [nftCateName, setNftCateName] = useState("all");
  
    const nftCategory = [
        {
            id: 1,
            name: "All",
        },
        {
            id: 2,
            name: "Art",
        },
        {
            id: 3,
            name: "Music",
        },
        {
            id: 4,
            name: "Photography",
        },
        {
            id: 5,
            name: "Sports",
        }
    ]
    
    const CategoryHandler = (cate) => {
        const cateProduct = nftProduct.filter(data => slugify(data.cate).includes(slugify(cate)));
        if (slugify(cate) === "all") {
            setNftCateProduct(nftProduct);
        }else {
            setNftCateProduct(cateProduct);
        }
        setNftCateName(slugify(cate));
    };
    return ( 
        <Section
        pClass="axil-product-area pb--0"
        borderBottom="pb--20"
        >
        <div className="axil-isotope-wrapper">
            <div className="product-isotope-heading">
                    <SectionTitle 
                    title="New Arraival Products"
                    subtitle="Our Products"
                    subtitleIcon="far fa-shopping-basket"
                    subColor="highlighter-primary"
                />
                <div className="isotope-button">
                    {nftCategory.map((data)=> (
                        <button className={slugify(data.name) === nftCateName ? "is-checked" : ""} key={data.id} onClick={()=> CategoryHandler(data.name)}>{data.name}</button>
                    ))}
                </div>

            </div>
        </div>
        <div className="row row--15">
            {nftCateProduct.slice(0, 8).map((data) => (
                <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30" key={data.id}>
                    <ProductOne product={data} />
                </div>
            ))}
        </div>
        </Section>
    );
}
 
export default ProductIsotop;