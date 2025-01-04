'use client';
import ProductsData from "@/data/Products";
import ProductThumbnail from "../product/elements/ProductThumbnail";
import ProductTitle from "../product/elements/ProductTitle";

const ProductWidget = () => {
    return (
      <div className="axil-single-widget mt--40">
        <h6 className="widget-title">Recent Viewed Products</h6>
        <ul className="product_list_widget recent-viewed-product">
            {ProductsData.slice(0, 4).map((data) => (
            <li key={data.id}>
                <ProductThumbnail productThumb={data} width={120} height={86} />
                <div className="content">
                    <ProductTitle titleTag="h6" productTitle={data}/>
                <div className="product-meta-content">
                    <span className="woocommerce-Price-amount amount">
                        {data.salePrice && <del>{data.price}</del>}
                        {data.salePrice ? data.salePrice : data.price}
                    </span>
                </div>
                </div>
            </li>
           ))}
        </ul>
      </div>
    );
}
 
export default ProductWidget;