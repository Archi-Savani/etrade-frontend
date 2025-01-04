import Link from "next/link";
import ProductThumbnail from "./elements/ProductThumbnail";
import ProductPrice from "./elements/ProductPrice";
import ProductTitle from "./elements/ProductTitle";
import ActionButtons from "./elements/ActionButtons";

const ProductSix = ({product}) => {
    return (
      <div className="axil-product product-style-six">
        <ProductThumbnail productThumb={product} />
        <div className="product-content">
          <div className="inner">
            <ProductPrice price={product} />
            <ProductTitle productTitle={product} verified={product.verified}/>
            <div className="product-hover-action">
                <ActionButtons productAction={product} cartBtn/>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default ProductSix;