'use client';
import Link from "next/link";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeWishlistItem } from "@/store/slices/productSlice";
import HeaderOne from "@/components/header/HeaderOne";
import FooterOne from "@/components/footer/FooterTwo";

const Wishlist = () => {
    const dispatch = useDispatch();
    const getWishlist = useSelector((state) => state.productData.wishlistItems);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    const removeWishlistHandler = (data) => {
        dispatch(removeWishlistItem(data))
    }

    return (
        <>
            <HeaderOne />
            <main>
                <div className="axil-wishlist-area axil-section-gap">
                    <div className="container">
                        {getWishlist.length > 0 ?
                            <>
                                <div className="product-table-heading">
                                    <h4 className="title">My Wish List on eTrade</h4>
                                </div>
                                <div className="table-responsive">
                                    <table className="table axil-product-table axil-wishlist-table">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="product-remove" />
                                                <th scope="col" className="product-thumbnail">Product</th>
                                                <th scope="col" className="product-title" />
                                                <th scope="col" className="product-price">Unit Price</th>
                                                <th scope="col" className="product-stock-status">Stock Status</th>
                                                <th scope="col" className="product-add-cart" />
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {getWishlist.map((product) => (
                                                <tr key={product.id}>
                                                    <td className="product-remove">
                                                        <button onClick={() => removeWishlistHandler(product)} className="remove-wishlist">
                                                            <i className="fal fa-times" />
                                                        </button>
                                                    </td>
                                                    <td className="product-thumbnail">
                                                        <Link href={`/products/${product.id}`}>
                                                            <Image
                                                                src={product.thumbnail}
                                                                height={80}
                                                                width={80}
                                                                alt="thumnail"
                                                            />
                                                        </Link>
                                                    </td>
                                                    <td className="product-title">
                                                        <Link href={`/products/${product.id}`}>
                                                            {product.title}
                                                        </Link>
                                                    </td>
                                                    <td className="product-price" data-title="Price">
                                                        <span className="currency-symbol">$</span>
                                                        {product.salePrice ? product.salePrice : product.price}
                                                    </td>
                                                    <td className="product-stock-status" data-title="Status">In Stock</td>
                                                    <td className="product-add-cart">
                                                        <button className="axil-btn btn-outline" onClick={() => handleAddToCart(product)}>
                                                            Add to Cart
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </>
                            : <h4 className="title text-center">There is no Wishlist</h4>
                        }
                    </div>
                </div>
            </main>
            <FooterOne />
        </>
    );
}

export default Wishlist;