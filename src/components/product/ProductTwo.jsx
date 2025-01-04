'use client';
import ProductThumbnail from "./elements/ProductThumbnail";
import ProductTitle from "./elements/ProductTitle";
import ProductPrice from "./elements/ProductPrice";
import ActionButtons from "./elements/ActionButtons";

const ProductTwo = ({product}) => {
    return (
      <div className="axil-product product-style-two">
        <ProductThumbnail 
        productThumb={product}
        discountLabel 
        isHoverThumbnail
        />
        
        <div className="product-content">
          <div className="inner">
            <ProductTitle productTitle={product}/>
            <ProductPrice price={product} />
            <ActionButtons 
            productAction={product}
            wishlistBtn
            cartBtn
            quickViewBtn
            />
          </div>
        </div>
      </div>
    );
}
 
export default ProductTwo;