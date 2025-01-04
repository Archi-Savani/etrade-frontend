'use client';
import { useState } from "react";
import ProductPrice from "./elements/ProductPrice";
import ProductColorAttribute from "./elements/ProductColorAttribute";
import ProductThumbnail from "./elements/ProductThumbnail";
import ProductTitle from "./elements/ProductTitle";

const ProductOne = ({ product, pClass }) => {
    const [colorAttribute, setColorAttribute] = useState('');

    const getAttributeData = (data) => {
        setColorAttribute(data.img);
    }

  return (
    <>
      <div className={`axil-product product-style-one ${pClass ?? ""}`}>
       <ProductThumbnail 
       productThumb={product} 
       attributeImg={colorAttribute} 
       discountLabel 
       hoverItems
       wishlistBtn
       cartBtn
       quickViewBtn
       isHoverThumbnail
       />
        <div className="product-content">
          <div className="inner">
            <ProductTitle verified={product.verified} productTitle={product} />
            <ProductPrice price={product} />
            {product.colorAttribute && <ProductColorAttribute attributeColor={product} getAttribute={getAttributeData}/>}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductOne;
