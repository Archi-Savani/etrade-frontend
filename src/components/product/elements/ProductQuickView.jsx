'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToQuickView, addToWishlist } from "@/store/slices/productSlice";
import ProductRating from "./ProductRating";
import SlickSlider from "@/components/elements/SlickSlider";
import ProductDiscountLabel from "./ProductDiscountLabel";

const ProductQuickView = () => {
    const dispatch = useDispatch();
    const [quantity, setquantity] = useState(0);
    const [colorImage, setColorImage] = useState("");
    const [productSize, setProductSize] = useState("");
    const [nav1, setNav1] = useState();
	const [nav2, setNav2] = useState();
    const getQuickViewItem = useSelector((state) => state.productData.quickViewItems);
    const getWishlist = useSelector((state) => state.productData.wishlistItems);
    const isWishlistAdded = getWishlist.filter((data) => data.id === getQuickViewItem.id);
    
	const handleAddToCart = (product) => {
		let cartItems = {...product, cartQuantity: quantity, productColor: colorImage.color, productSize: productSize};
        if (quantity > 0) {
            dispatch(addToCart(cartItems));
        }else {
            alert("Please select minimum 1 quantity")
        }
    };

const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
};

const decrementQuantity = () => {
    if (quantity > 0) {
        setquantity(quantity - 1);
    }
}
const incrementQuantity = () => {
    setquantity(quantity + 1);
}

  const quickViewHandler = () => {
    dispatch(addToQuickView({
        viewItem: null,
        quickView: false
    }));
	};

    const productSizeHandler = (size) => {
        setProductSize(size);
    }

    const colorImageHandler = (color) => {
        setColorImage(color);
    };

    return (
      <>
        <div
          className="modal fade quick-view-product show"
          tabIndex={-1}
          aria-modal="true"
          role="dialog"
          style={{ paddingRight: "17px", display: "block" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  onClick={() => quickViewHandler()}
                  className="btn-close"
                >
                  <i className="far fa-times" />
                </button>
              </div>
              <div className="modal-body">
                <div className="single-product-thumb">
                  <div className="row">
                    <div className="col-lg-7 mb--40">
                      <div className="row">
                        <div className="col-lg-10 order-lg-2">
                          <SlickSlider
                            class="single-product-thumbnail product-large-thumbnail axil-product thumbnail-badge"
                            slidesToShow={1}
                            infinite={false}
                            draggable={false}
                            focusOnSelect={true}
                            adaptiveHeight={true}
                            asNavFor={nav2}
                            ref={(slider1) => setNav1(slider1)}
                          >
                            {getQuickViewItem.gallery ? getQuickViewItem.gallery?.map((data, index) => (
                              <div className="thumbnail" key={index}>
                                <Image
                                  src={data}
                                  width={446}
                                  height={446}
                                  alt="Gallery Thumbnail"
                                />
								{getQuickViewItem.salePrice && 
                                <ProductDiscountLabel discount={getQuickViewItem} />
								}
                              </div>
                            )): 
                            <div className="thumbnail">
                                <Image
                                  src={getQuickViewItem.thumbnail}
                                  width={446}
                                  height={446}
                                  alt="Gallery Thumbnail"
                                />
                                {getQuickViewItem.salePrice && 
                                <ProductDiscountLabel discount={getQuickViewItem} />
								}
                              </div>
                            }
                          </SlickSlider>
                        </div>
                        <div className="col-lg-2 order-lg-1">
                          <SlickSlider
                            class="product-small-thumb small-thumb-wrapper"
                            slidesToShow={5}
                            infinite={false}
                            draggable={false}
                            focusOnSelect={true}
                            vertical={true}
                            asNavFor={nav1}
                            ref={(slider2) => setNav2(slider2)}
                            responsive = {[
                              {
                                breakpoint: 992,
                                settings: {
                                  vertical: false
                                }
                              },
                            ]}
                          >
                            {getQuickViewItem.gallery ? getQuickViewItem.gallery?.map((data, index) => (
                              <div className="small-thumb-img" key={index}>
                                <Image
                                  src={data}
                                  width={73}
                                  height={71}
                                  alt="Gallery Thumbnail"
                                />
                              </div>
                            )): 
                            <div className="small-thumb-img">
                                <Image
                                  src={getQuickViewItem.thumbnail}
                                  width={73}
                                  height={71}
                                  alt="Gallery Thumbnail"
                                />
                            </div>
                            }
                          </SlickSlider>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 mb--40">
                      <div className="single-product-content">
                        <div className="inner">
                          <ProductRating rating={getQuickViewItem} textEnable />
                          <h3 className="product-title">
                            {getQuickViewItem.title}
                          </h3>
                          <span className="price-amount">
                            <span className="currency-symbol">$</span>
                            {getQuickViewItem.salePrice
                              ? getQuickViewItem.salePrice
                              : getQuickViewItem.price}
                          </span>
                          {getQuickViewItem.shortDes && 
                          <>
                            <ul
                            className="product-meta"
                            dangerouslySetInnerHTML={{
                              __html: getQuickViewItem.shortDes.listItem,
                            }}
                            ></ul>
                            <p className="description">
                              {getQuickViewItem.shortDes.text}
                            </p>
                          </>
                          }
                          <div className="product-variations-wrapper">
							{getQuickViewItem.colorAttribute && 
                            <div className="product-variation">
                              <h6 className="title">Colors:</h6>
                              <div className="color-variant-wrapper">
                                <ul className="color-variant">
                                  {getQuickViewItem.colorAttribute?.map(
                                    (data, index) => (
                                      <li
                                        className={`${data.color} ${
                                          colorImage.color === data.color
                                            ? "active"
                                            : ""
                                        }`}
                                        key={index}
                                        onClick={() => colorImageHandler(data)}
                                      >
                                        <span>
                                          <span className="color" />
                                        </span>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            </div>
							}
							{getQuickViewItem.sizeAttribute && 
                            <div className="product-variation product-size-variation">
                              <h6 className="title">Size:</h6>
                              <ul className="range-variant">
                                {getQuickViewItem.sizeAttribute?.map(
                                  (data, index) => (
                                    <li key={index} className={productSize === data ? "active" : ""} onClick={() => productSizeHandler(data)}>{data}</li>
                                  )
                                )}
                              </ul>
                            </div>
							}
                          </div>
                          <div className="product-action-wrapper d-flex-center">
							{getQuickViewItem.pCate !== "NFT" && 
                            <div className="pro-qty">
                              <span
                                className="qtybtn"
                                onClick={decrementQuantity}
                              >
                                -
                              </span>
                              <input
                                type="number"
                                className="quantity-input"
                                value={quantity}
                                readOnly
                              />
                              <span
                                className="qtybtn"
                                onClick={incrementQuantity}
                              >
                                +
                              </span>
                            </div>
							}
                            <ul className="product-action d-flex-center mb--0">
                              <li className="add-to-cart">
								{getQuickViewItem.pCate !== "NFT" ?
                                <button disabled={(getQuickViewItem.colorAttribute && !colorImage) || (getQuickViewItem.sizeAttribute && !productSize) ? true : false}
                                  onClick={() =>
                                    handleAddToCart(getQuickViewItem)
                                  }
                                  className="axil-btn btn-bg-primary"
                                >
                                  Add to Cart
                                </button>
								: 
								<Link className="axil-btn btn-bg-primary" href={`/products/${getQuickViewItem.id}`}>Buy Product</Link>}
                              </li>
                              <li className="wishlist">
                                <button
                                  className="axil-btn wishlist-btn"
                                  onClick={() =>
                                    handleAddToWishlist(getQuickViewItem)
                                  }
                                >
                                  <i className={isWishlistAdded.length === 1 ? "fas fa-heart" : "far fa-heart"} />
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal-backdrop fade show"
          onClick={() => quickViewHandler()}
        ></div>
      </>
    );
}
 
export default ProductQuickView;