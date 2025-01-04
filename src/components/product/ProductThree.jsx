import ProductPrice from "./elements/ProductPrice";
import ProductRating from "./elements/ProductRating";
import ProductThumbnail from "./elements/ProductThumbnail";
import ProductTitle from "./elements/ProductTitle";

const ProductThree = ({product}) => {
    return ( 
        <div className="axil-product product-style-three">
            <ProductThumbnail 
            productThumb={product} 
            hoverItems
            wishlistBtn
            cartBtn
            quickViewBtn
            />
            <div className="product-content">
                <div className="inner">
                    <ProductRating rating={product}/>
                    <ProductTitle productTitle={product}/>
                    <ProductPrice price={product} />
                </div>
            </div>
        </div>
     );
}
 
export default ProductThree;