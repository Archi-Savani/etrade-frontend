'use client';
import { useState } from "react";
import Section from "@/components/elements/Section";
import ProductsData from "@/data/Products";
import ProductOne from "@/components/product/ProductOne";
import { slugify } from "@/utils";
import { Category } from "@/data/ProductCategory";
import { Gender } from "@/data/ProductAttribute";
import { ColorAttribute } from "@/data/ProductAttribute";
import { SizeAttribute } from "@/data/ProductAttribute";


const ShopWithSidebar = () => {
    const [filterProduct, setFilterProduct] = useState(ProductsData);
    const [productShow, setProductShow] = useState(9);
    const [filterText, setFilterText] = useState('');
    const [cateToggle, setcateToggle] = useState(true);
    const [genderToggle, setgenderToggle] = useState(true);
    const [colorToggle, setcolorToggle] = useState(true);
    const [sizeToggle, setsizeToggle] = useState(true);
    const [priceRangeToggle, setpriceRangeToggle] = useState(true);

    const categoryHandler = (cateSelect) => {
        const cateFilterProduct = ProductsData.filter((data) =>(slugify(data.pCate) === cateSelect));
        setFilterProduct(cateFilterProduct)
        setFilterText(cateSelect);
    }
    const genderHandler = (genderSelect) => {
        const genderFilterProduct = ProductsData.filter(data => data.gender === genderSelect);
        setFilterProduct(genderFilterProduct)
        setFilterText(genderSelect);
    }
    const colorHandler = (colorSelect) => {
        let getColorData = ProductsData.filter((items) => {
            let colors = items.colorAttribute?.filter(color => slugify(color.color) === colorSelect)
            return colors?.length > 0;
        })
        setFilterProduct(getColorData)
        setFilterText(colorSelect);
    }
    const sizeHandler = (sizeSelect) => {
        let getSizeData = ProductsData.filter((items) => {
            let sizes = items.sizeAttribute?.filter(size => slugify(size) === sizeSelect)
            return sizes?.length > 0;
        })
        setFilterProduct(getSizeData);
        setFilterText(sizeSelect);
    }

    const priceRangeHandler = (rangeSelect) => {
        const getPriceData = ProductsData.filter(data => data.price <= rangeSelect);
        setFilterProduct(getPriceData);
        setFilterText(rangeSelect);
    }

    const ProductShowHandler = () => {
        setProductShow(productShow + 3);
    }

    const productFilterReset = () => {
        setFilterProduct(ProductsData);
        setFilterText('');
    }

    const priceRangeData = [
        50,
        100,
        200,
        300,
        400,
        500
    ]

    return ( 
        <Section pClass="axil-shop-area">
            <div className="row">
                <div className="col-lg-3">
                    <div className="axil-shop-sidebar">
                        <div className="d-lg-none">
                            <button className="sidebar-close filter-close-btn"><i className="fas fa-times" /></button>
                        </div>
                        {/* Category Filter */}
                        <div className={`toggle-list product-categories ${cateToggle ? "active" : ""}`}>
                            <h6 onClick={() => setcateToggle(!cateToggle)} className="title">CATEGORIES</h6>
                            {cateToggle && 
                                <div className="shop-submenu">
                                    <ul>
                                        {Category.map((data, index) => (
                                            <li className={filterText === slugify(data.cate) ? "current-cat" :""} key={index}>
                                                <button onClick={() => categoryHandler(slugify(data.cate))}>{data.cate}</button>
                                            </li>
                                            ))}
                                    </ul>
                                </div>
                            }
                        </div> 
                        {/* Gender Filter  */}
                        <div className={`toggle-list product-categories product-gender ${genderToggle ? "active" : ""}`}>
                            <h6 onClick={() => setgenderToggle(!genderToggle)} className="title">GENDER</h6>
                            {genderToggle && 
                            <div className="shop-submenu">
                            <ul>
                                {Gender?.map((data, index) => (
                                    <li className={filterText === data ? "chosen" :""} key={index}>
                                        <button onClick={() => genderHandler(data)}>{data}</button>
                                    </li>
                                ))}
                            </ul>
                            </div>
                            }
                        </div>
                        {/* Color Filter  */}
                        <div className={`toggle-list product-color ${colorToggle ? "active" : ""}`}>
                            <h6 onClick={() => setcolorToggle(!colorToggle)} className="title">COLORS</h6>
                            {colorToggle && 
                            <div className="shop-submenu">
                                <ul>
                                    {ColorAttribute?.map((data, index) => (
                                        <li className={filterText === slugify(data) ? "chosen" :""} key={index}>
                                            <button onClick={() => colorHandler(slugify(data))} className={slugify(data)}></button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            }
                        </div>
                        {/* Size Filter  */}
                        <div className={`toggle-list product-size ${sizeToggle ? "active" : ""}`}>
                            <h6 onClick={() => setsizeToggle(!sizeToggle)} className="title">SIZE</h6>
                            {sizeToggle && 
                            <div className="shop-submenu">
                                <ul>
                                    {SizeAttribute?.map((data, index) => (
                                        <li className={filterText === slugify(data) ? "chosen" :""} key={index}>
                                            <button onClick={() => sizeHandler(slugify(data))}>{data}</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            }
                        </div>
                        {/* Price Filter  */}
                        <div className={`toggle-list product-price-range ${priceRangeToggle ? "active" : ""}`}>
                            <h6 onClick={() => setpriceRangeToggle(!priceRangeToggle)} className="title">PRICE</h6>
                            {priceRangeToggle && 
                            <div className="shop-submenu">
                                <ul>
                                    {priceRangeData?.map((data, index) => (
                                        <li className={filterText === data ? "chosen" :""} key={index}>
                                            <button onClick={() => priceRangeHandler(data)}>{data}</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            }
                        </div>
                        <button className="axil-btn btn-bg-primary" onClick={() => productFilterReset()} >All Reset</button>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="row row--15">
                        {filterProduct.length > 0 ? filterProduct.slice(0, productShow).map((data) => (
                            <div className="col-xl-4 col-sm-6" key={data.id}>
                                <ProductOne product={data} pClass="mb--30" />
                            </div>
                        )) : <h4 className="text-center pt--30">No Product Found</h4>}
                    </div>
                    <div className="text-center pt--20">
                        <button className={`axil-btn btn-bg-lighter btn-load-more ${filterProduct.length < productShow ? "disabled" : ""}`} onClick={ProductShowHandler}>{filterProduct.length < productShow ? "No More Data" : "Load more"}</button>
                    </div>
                </div>
            </div>

        </Section>
    );
}
 
export default ShopWithSidebar;