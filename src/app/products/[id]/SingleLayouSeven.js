'use client';
import { slugify } from "@/utils";
import Image from "next/image";

const SingleLayouSeven = ({ singleData }) => {
   
    return (
        <section className="axil-single-product-area bg-color-white">
            <div className="single-product-thumb axil-section-gap pb--30 pb_sm--20">
                <div className="container">
                    <div className="row row--50">
                        <div className="col-lg-6 mb--40">
                            <div className="h-100">
                                <div className="position-sticky sticky-top">
                                    <div className="single-product-thumbnail axil-product">
                                        <div className="thumbnail">
                                            <Image 
                                            src={singleData.thumbnail}
                                            width={595}
                                            height={595}
                                            alt={singleData.title}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb--40">
                            <div className="h-100">
                                <div className="position-sticky sticky-top">
                                    <div className="single-product-content nft-single-product-content">
                                        <div className="inner">
                                            <h2 className="product-title">{singleData.title}</h2>
                                            <div className="price-amount price-offer-amount">
                                                <span className="price current-price">${singleData.price}</span>
                                            </div>
                                            {/* Start Product Action Wrapper  */}
                                            <div className="product-action-wrapper d-flex-center">
                                                {/* Start Product Action  */}
                                                <ul className="product-action action-style-two d-flex-center mb--0">
                                                    <li className="add-to-cart"><a href={singleData.buyUrl} className="axil-btn btn-bg-primary">Buy Product</a></li>
                                                </ul>
                                                {/* End Product Action  */}
                                            </div>
                                            <div className="nft-short-meta">
                                                <div className="row align-items-center">
                                                    <div className="col-md-6">
                                                        <div className="nft-category">
                                                            <label>Category :</label>
                                                            <div className="category-list">
                                                                {singleData.cate.map((cat, index)=>(
                                                                    <span key={index}>{cat}, </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="nft-verified-option">
                                                            <label>Is this item Authentic?</label>
                                                            <a className="verify-btn axil-btn btn-bg-secondary" href={`https://www.google.com/search?q=${slugify(singleData.title)}`}>Verifiy</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="woocommerce-tabs wc-tabs-wrapper bg-vista-white nft-info-tabs">
                                                <div className="container">
                                                    <ul className="nav tabs" id="myTab" role="tablist">
                                                        <li className="nav-item" role="presentation">
                                                            <a className="active" id="description-tab" data-bs-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</a>
                                                        </li>
                                                        <li className="nav-item " role="presentation">
                                                            <a id="additional-info-tab" data-bs-toggle="tab" href="#additional-info" role="tab" aria-controls="additional-info" aria-selected="false">Additional Information</a>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <a id="reviews-tab" data-bs-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Property</a>
                                                        </li>
                                                    </ul>
                                                    <div className="tab-content" id="myTabContent">
                                                        <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                                                            <div className="product-additional-info">
                                                                <p className="mb--15"><strong>{singleData.description.textDesc.title}</strong></p>
                                                                <p>{singleData.description.textDesc.text}</p>
                                                                <div className="table-responsive">
                                                                    <table>
                                                                        <tbody>
                                                                            {singleData.description.listDesc?.map((data, index)=> (
                                                                                <tr key={index}>
                                                                                    <th>{data.title}</th>
                                                                                    <td>{data.text}</td>
                                                                                </tr>
                                                                            ))}
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane fade" id="additional-info" role="tabpanel" aria-labelledby="additional-info-tab">
                                                            <div className="product-additional-info">
                                                                <div className="table-responsive">
                                                                    <table>
                                                                        <tbody>
                                                                            {singleData.addInfo?.map((data, index)=> (
                                                                                <tr key={index}>
                                                                                    <th>{data.title}</th>
                                                                                    <td>{data.text}</td>
                                                                                </tr>
                                                                            ))}
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                                                            <div className="product-additional-info">
                                                                <div className="table-responsive">
                                                                    <table>
                                                                        <tbody>
                                                                        {singleData.property?.map((data, index)=> (
                                                                                <tr key={index}>
                                                                                    <th>{data.title}</th>
                                                                                    <td>{data.text}</td>
                                                                                </tr>
                                                                            ))}
                                                                        </tbody>
                                                                    </table>
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
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default SingleLayouSeven;