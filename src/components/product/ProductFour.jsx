import ProductPrice from "./elements/ProductPrice";
import ProductThumbnail from "./elements/ProductThumbnail";
import ProductTitle from "./elements/ProductTitle";

const ProductFour = ({product}) => {
    return (
      <div className="axil-product product-style-four">
        <ProductThumbnail productThumb={product}
        isHoverThumbnail
        hoverItems
        wishlistBtn
        cartBtn
        quickViewBtn
        discountLabel
        />
        <div className="product-content">
          <div className="inner">
            <ProductTitle productTitle={product}/>
            <ProductPrice price={product} />
          </div>
        </div>
      </div>
    );
}
 
export default ProductFour;