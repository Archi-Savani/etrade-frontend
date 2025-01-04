import Link from "next/link";
import SectionTitle from "../elements/SectionTitle";
import Image from "next/image";

const SplashInnerDemo = () => {
    const InnerDemo = [
        {
            title: "Shop",
            thumb: "/images/preview/shop.png",
            url: "/shop"
        },
        {
            title: "Shop With Sidebar",
            thumb: "/images/preview/shop-sidebar.png",
            url: "/shop?layout=no-sidebar"
        },
        {
            title: "Product Variation 1",
            thumb: "/images/preview/variation-1.png",
            url: "/products/43"
        },
        {
            title: "Product Variation 2",
            thumb: "/images/preview/variation-2.png",
            url: "/products/65"
        },
        {
            title: "Product Variation 3",
            thumb: "/images/preview/variation-3.png",
            url: "/products/2"
        },
        {
            title: "Product Variation 4",
            thumb: "/images/preview/variation-4.png",
            url: "/products/77"
        },
        {
            title: "Product Variation 5",
            thumb: "/images/preview/variation-5.png",
            url: "/products/19"
        },
    ]
    return (
      <div className="axil-section-gap pv-inner-demo-area">
        <div className="container">
            <SectionTitle 
                pClass="section-title-center"
                subtitle="Inner Pages"
                subtitleIcon="fas fa-fire"
                title="Eye Catching Pre-build <br/>
                Inner Pages"
            />
          <div className="row">
            {InnerDemo.map((data, index) => (
                <div className="col-lg-4 col-md-6 col-12" key={index}>
                <div className="pv-single-demo">
                   <div className="thumb box">
                    <Image
                    src={data.thumb}
                    width={410}
                    height={410}
                    alt={data.title}
                    />
                    <Link href={data.url} className="axil-btn btn-bg-primary right-icon view-btn">View Demo <i className="fal fa-long-arrow-right" /></Link>
                   </div>
                   <h5 className="title">
                    <Link href={data.url}>{data.title}</Link>
                   </h5>
                 </div>
               </div>
            ))}
          </div>
        </div>
      </div>
    );
}
 
export default SplashInnerDemo;