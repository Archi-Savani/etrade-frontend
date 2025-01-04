'use client';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/slices/productSlice";
import { reviewAverage, slugify } from "@/utils";
import ProductPrice from "./elements/ProductPrice";
import ProductThumbnail from "./elements/ProductThumbnail";
import ProductTitle from "./elements/ProductTitle";
import { ProductReview } from "@/data/Comments";
import ProductRating from "./elements/ProductRating";



const ProductSeven = ({product}) => {
    const findReview = ProductReview.filter((data) => slugify(data.productId) === slugify(product.id));
    const ratingNumber = reviewAverage(findReview);

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
      dispatch(addToCart(product));
    };

    return (
      <div className="axil-product product-style-seven">
        <div className="product-content">
          <div className="cart-btn">
            <button onClick={() => handleAddToCart(product)}><i className="far fa-shopping-cart" /></button>
          </div>
          <div className="inner">
            <ProductTitle productTitle={product}/>
            <ProductPrice price={product} />
            <ProductRating rating={product} />
          </div>
        </div>
        <ProductThumbnail productThumb={product}/>   
      </div>
    );
}
 
export default ProductSeven;