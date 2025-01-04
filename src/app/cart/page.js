'use client';
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch} from "react-redux";
import HeaderOne from "@/components/header/HeaderOne";
import { slugify } from "@/utils";
import { removeCartItem, cartQuantityIncrease, cartQuantityDecrease, cartClear, updateCartAmount } from "@/store/slices/productSlice";
import FooterTwo from "@/components/footer/FooterTwo";

const Cart = () => {
    const dispatch = useDispatch();
    const cartProducts = useSelector((state) => state.productData);

    const removeCartHandler = (data) => {
        dispatch(removeCartItem(data))
    }

    const quantityIncreaseHandler = (data) => {
        dispatch(cartQuantityIncrease(data))
    }
    const quantityDecreaseHandler = (data) => {
        dispatch(cartQuantityDecrease(data))
    }
    const cartClearHandler = () => {
        dispatch(cartClear()) 
    }
    const updateCartHandler = () => {
        dispatch(updateCartAmount())
    }

    return (
        <>
        <HeaderOne />
        <main className="main-wrapper">
            <div className="axil-product-cart-area axil-section-gap">
                <div className="container">
                    {cartProducts.cartItems.length > 0 ? 
                    <div className="axil-product-cart-wrap">
                        <div className="product-table-heading">
                            <h4 className="title">Your Cart</h4>
                            <button className="cart-clear" onClick={() => cartClearHandler()}>Clear Shoping Cart</button>
                        </div>
                        <div className="table-responsive">
                            <table className="table axil-product-table axil-cart-table mb--40">
                                <thead>
                                    <tr>
                                        <th scope="col" className="product-remove" />
                                        <th scope="col" className="product-thumbnail">Product</th>
                                        <th scope="col" className="product-title" />
                                        <th scope="col" className="product-price">Price</th>
                                        <th scope="col" className="product-quantity">Quantity</th>
                                        <th scope="col" className="product-subtotal">Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartProducts.cartItems.map((product) => (
                                        <tr key={product.id}>
                                        <td className="product-remove">
                                            <button className="remove-wishlist" onClick={() => removeCartHandler(product)}>
                                                <i className="fal fa-times" />
                                            </button>
                                            </td>
                                        <td className="product-thumbnail">
                                            <Link href={`/products/${slugify(product.id)}`}>
                                                <Image 
                                                src={product.thumbnail}
                                                width={80}
                                                height={80}
                                                alt={product.title}
                                                
                                                />
                                            </Link>
                                        </td>
                                        <td className="product-title">
                                            <Link href={`/products/${slugify(product.id)}`}>
                                                {product.title}
                                            </Link>
                                        </td>
                                        <td className="product-price" data-title="Price">
                                            <span className="currency-symbol">$</span>
                                            {product.salePrice ? product.salePrice : product.price}
                                            </td>
                                        <td className="product-quantity" data-title="Qty">
                                            <div className="pro-qty">
                                                <span className="qtybtn" onClick={() => quantityDecreaseHandler(product)}>-</span>
                                                <input type="number" className="quantity-input" value={product.cartQuantity} readOnly />
                                                <span className="qtybtn" onClick={() => quantityIncreaseHandler(product)}>+</span>
                                            </div>
                                        </td>
                                        <td className="product-subtotal" data-title="Subtotal">
                                            <span className="currency-symbol">$</span>
                                            {parseFloat(product.salePrice ? product.salePrice * product.cartQuantity : product.price * product.cartQuantity).toFixed(2)}
                                            </td>
                                    </tr>
                                    ))}
                                
                                </tbody>
                            </table>
                        </div>
                        <div className="cart-update-btn-area">
                            <div className="input-group product-cupon">
                                <input placeholder="Enter coupon code" type="text" />
                                <div className="product-cupon-btn">
                                    <button type="submit" className="axil-btn btn-outline">Apply</button>
                                </div>
                            </div>
                            <div className="update-btn">
                                <button className="axil-btn btn-outline" onClick={() => updateCartHandler()}>Update Cart</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-5 col-lg-7 offset-xl-7 offset-lg-5">
                                <div className="axil-order-summery mt--80">
                                <h5 className="title mb--20">Order Summary</h5>
                                <div className="summery-table-wrap">
                                    <table className="table summery-table mb--30">
                                    <tbody>
                                        <tr className="order-subtotal">
                                        <td>Subtotal</td>
                                        <td>${cartProducts.cartTotalAmount}</td>
                                        </tr>
                                        <tr className="order-shipping">
                                        <td>Shipping</td>
                                        <td>
                                            <div className="input-group">
                                            <input type="radio" id="radio1" name="shipping" defaultChecked />
                                            <label htmlFor="radio1">Free Shippping</label>
                                            </div>
                                            <div className="input-group">
                                            <input type="radio" id="radio2" name="shipping" />
                                            <label htmlFor="radio2">Local: $35.00</label>
                                            </div>
                                            <div className="input-group">
                                            <input type="radio" id="radio3" name="shipping" />
                                            <label htmlFor="radio3">Flat rate: $12.00</label>
                                            </div>
                                        </td>
                                        </tr>
                                        <tr className="order-total">
                                        <td>Total</td>
                                        <td className="order-total-amount">${cartProducts.cartTotalAmount}</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                <Link href="/checkout" className="axil-btn btn-bg-primary checkout-btn">
                                Process to Checkout
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>:
                    <div className="text-center">
                        <h4>Your Cart is empty</h4>
                        <Link className="axil-btn btn-bg-primary" href="/shop">Back to shop</Link>
                    </div>
                    }
                </div>
            </div>
        </main>
        <FooterTwo />
        </>
    );
}

export default Cart;