'use client';
import { useState, useEffect } from "react";
import { getPriceRange, slugify } from "@/utils";
import { Category } from "@/data/ProductCategory";
import ProductOne from "@/components/product/ProductOne";
import ProductsData from "@/data/Products";
import Section from "@/components/elements/Section";
import { ColorAttribute } from "@/data/ProductAttribute";

const ShopNoSidebar = () => {

    const [cateProduct, setcateProduct] = useState(ProductsData);
    const [productShow, setProductShow] = useState(12);
    const priceRange = getPriceRange(ProductsData);

    const ProductShowHandler = () => {
        setProductShow(productShow + 4);
    }
    const CategoryHandler = (e) => {
        const getCategoryData = ProductsData.filter(data => slugify(data.pCate) === e.target.value);
        if (e.target.value === "all") {
            setcateProduct(ProductsData);
        }else {
            setcateProduct(getCategoryData);
        }
    }
    const colorHandler = (e) => {
        let getColorData = ProductsData.filter((items) => {
            let colors = items.colorAttribute?.filter(color => slugify(color.color) === e.target.value)
            return colors?.length > 0;
        })
        setcateProduct(getColorData)
    }
    const priceRangeHandler = (e) => {
        const value = e.target.value;
        const splitValue = value.split("-");
        const getPriceData = ProductsData.filter(data => data.price >= parseInt(splitValue[0]) && data.price <= parseInt(splitValue[1]));
        if (value === "null") {
            setcateProduct(ProductsData);
        }else {
            setcateProduct(getPriceData);
        }
    }
    
    const sortHandler = (e) => {
        const value = e.target.value;
        if (value === 'price') {
            const getSortingData = ProductsData.sort((product1, product2) => (product1.price > product2.price ? -1 : 1));
            setcateProduct(getSortingData);
        } else if(value === 'name') {
            const getSortingData = ProductsData.sort((product1, product2) => (product1.title > product2.title ? 1 : -1));
            setcateProduct(getSortingData);
        }else if(value === 'latest'){
            setcateProduct(ProductsData.reverse());
        }
    }
    
    return (
        <Section pClass="axil-shop-area">
            <div className="row">
                <div className="col-lg-12">
                    <div className="axil-shop-top">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="category-select">
                                    <select className="single-select" onChange={CategoryHandler}>
                                        <option value="all">All Categories</option>
                                        {Category.map((data, index) => (
                                            <option value={slugify(data.cate)} key={index}>{data.cate}</option>
                                        ))}
                                    </select>
                                    <select className="single-select" onChange={colorHandler}>
                                        {ColorAttribute.map((data, index) => (
                                            <option value={slugify(data)} key={index}>{data}</option>
                                        ))}
                                    </select>
                                    <select className="single-select" onChange={priceRangeHandler}>
                                        <option value="null">Price Range</option>
                                        {priceRange.map((data, index) => (
                                            <option value={`${data.from}-${data.to}`} key={index}>{data.from} - {data.to}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="category-select mt_md--10 mt_sm--10 justify-content-lg-end">
                                    <select className="single-select" onChange={sortHandler}>
                                        <option value="latest">Sort by Latest</option>
                                        <option value="name">Sort by Name</option>
                                        <option value="price">Sort by Price</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row--15">
                {cateProduct.length > 0 ? cateProduct.slice(0, productShow).map((data) => (
                    <div className="col-xl-3 col-lg-4 col-sm-6" key={data.id}>
                        <ProductOne product={data} pClass="mt--40" />
                    </div>
                )) : <h4 className="text-center pt--30">No Data Found</h4>}
            </div>
            <div className="text-center pt--30">
                <button className={`axil-btn btn-bg-lighter btn-load-more ${cateProduct.length < productShow ? "disabled" : ""}`} onClick={ProductShowHandler}>{cateProduct.length < productShow ? "No More Data" : "Load more"}</button>
            </div>
        </Section>
    );
}

export default ShopNoSidebar;