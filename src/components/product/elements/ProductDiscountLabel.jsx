import { discountPercentage } from "@/utils";


const ProductDiscountLabel = (props) => {
  
    return ( 
        <div className="label-block label-right">
              <div className="product-badget">
                {`${discountPercentage(props.discount.price, props.discount.salePrice)}% OFF`}
              </div>
            </div>
     );
}
 
export default ProductDiscountLabel;