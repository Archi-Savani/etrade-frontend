'use client';
import { useState, useEffect } from "react";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Section from "@/components/elements/Section";
import ProductOne from "@/components/product/ProductOne";
import ProductsData from "@/data/Products";
import { slugify, unSlugify } from "@/utils";

const CategoryProduct = ({ params }) => {
    const [cateProduct, setCateProduct] = useState([]);
    const catParam = params.slug[params.slug.length-1];
   
    useEffect(() => {
        let products = ProductsData.filter((items) => {
            let category = items.cate?.filter(cat => slugify(cat) === catParam)
            return category.length > 0;
        })
        setCateProduct(products);
    }, [catParam]);
    
    return (
        <>
        <Breadcrumb activeItem="Category" title={unSlugify(catParam)}/>
        <Section pClass="axil-shop-area" sectionPadding="axil-section-gapcommon">
            <div className="row row--15">
                {cateProduct.length > 0 ? cateProduct?.map((data) => (
                    <div className="col-xl-3 col-lg-4 col-sm-6" key={data.id}>
                        <ProductOne product={data}/>
                    </div>
                )): <h2 className="text-center">No Category Products Found</h2>}
            </div>
        </Section>
        </>
    );
}
 
export default CategoryProduct;