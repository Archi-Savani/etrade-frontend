import ProductPrice from "./elements/ProductPrice";
import ProductThumbnail from "./elements/ProductThumbnail";
import ProductTitle from "./elements/ProductTitle";
import ActionButtons from "./elements/ActionButtons";

const ProductFive = ({product}) => {
    return ( 
        <div className="axil-product product-style-five">
            <ProductThumbnail productThumb={product}/>
            <div className="product-content">
                <div className="inner">
                    <ProductTitle productTitle={product} />
                    <ProductPrice price={product} />
                    <ActionButtons productAction={product} cartBtn/>
                </div>
            </div>
      </div>
     );
}
 
export default ProductFive;