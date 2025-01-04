import Image from "next/image";
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem, miniCartHandler } from "@/store/slices/productSlice";

const MiniCart = () => {
const dispatch = useDispatch();
const getProducts = useSelector((state) => state.productData);
const router = useRouter();

const removeCartHandler = (data) => {
    dispatch(removeCartItem(data));
}
const cartHandler = (data) => {
  dispatch(miniCartHandler(data));
}

const miniCartFooterBtnHandler = (data) => {
	router.push(data);
	dispatch(miniCartHandler(false));
}

return (
    <>
      <div className={`cart-dropdown ${getProducts.isMinicartOpen ? "open" : ""}`}>
        <div className="cart-content-wrap">
          <div className="cart-header">
            <h2 className="header-title">Cart review</h2>
            <button
              className="cart-close sidebar-close"
              onClick={() => cartHandler(false)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="cart-body">
            <ul className="cart-item-list">
              {getProducts.cartItems.length > 0 ? (
                getProducts.cartItems.map((data) => (
                  <li className="cart-item" key={data.id}>
                    <div className="item-img">
						<Image
							src={data.thumbnail}
							alt={data.title}
							height={100}
							width={100}
						/>
						<button className="close-btn" onClick={() => removeCartHandler(data)}>
							<i className="fas fa-times"></i>
						</button>
                    </div>
                    <div className="item-content">
                      <h3 className="item-title">
                        {data.title}
                      </h3>
                      <div className="item-price">
                        <span className="currency-symbol">$</span>
                        {data.salePrice
                          ? data.salePrice
                          : data.price}
                        <strong>x{data.cartQuantity}</strong>
                      </div>
                      <div className="pro-qty item-quantity">
                        <input type="number" className="quantity-input" />
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <h4 className="text-center">Your cart are empty</h4>
              )}
            </ul>
          </div>
          {getProducts.cartItems.length > 0 ? (
            <div className="cart-footer">
              <h3 className="cart-subtotal">
                <span className="subtotal-title">Subtotal:</span>
                <span className="subtotal-amount">
                  ${getProducts.cartTotalAmount}
                </span>
              </h3>
              <div className="group-btn">
				<button className="axil-btn btn-bg-primary viewcart-btn" onClick={() => miniCartFooterBtnHandler("/cart")}>View Cart</button>
				<button className="axil-btn btn-bg-secondary checkout-btn" onClick={() => miniCartFooterBtnHandler("/checkout")}>Checkout</button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {getProducts.isMinicartOpen && (
        <div className="closeMask" onClick={() => cartHandler(false)}></div>
      )}
    </>
  );
};

export default MiniCart;
