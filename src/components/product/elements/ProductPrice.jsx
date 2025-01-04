
const ProductPrice = (props) => {
    return ( 
        <div className="product-price-variant">
              {props.price.salePrice ? (
                <span className="price old-price">
                  <span className="currency-symbol">$</span>
                  {props.price.price}
                </span>
              ) : (
                ""
              )}
              <span className="price current-price">
                <span className="currency-symbol">$</span>
                {props.price.salePrice
                  ? props.price.salePrice
                  : props.price.price}
              </span>
            </div>
     );
}
 
export default ProductPrice;