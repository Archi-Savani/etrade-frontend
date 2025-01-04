import Link from "next/link";
import ProductPrice from "./elements/ProductPrice";
import ProductThumbnail from "./elements/ProductThumbnail";
import ProductTitle from "./elements/ProductTitle";
import ActionButtons from "./elements/ActionButtons";

const ProductListTwo = ({product}) => {
    return (
      <div className="axil-product-list product-list-style-2">
        <ProductThumbnail productThumb={product} width={120} height={120} />
        <div className="product-content">
            <ProductTitle titleTag="h6" productTitle={product} verified={product.verified}/>
            <ProductPrice price={product} />
			<ActionButtons productAction={product} cartBtn/>
        </div>
      </div>
    );
}
 
export default ProductListTwo;