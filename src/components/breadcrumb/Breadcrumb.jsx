'use client';
import Image from "next/image";
import Link from "next/link";

const Breadcrumb = (props) => {
    return (
      <div className="axil-breadcrumb-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-8">
              <div className="inner">
                <ul className="axil-breadcrumb">
                  <li className="axil-breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="separator" />
                  <li
                    className="axil-breadcrumb-item active"
                    aria-current="page"
                  >
                    {props.activeItem}
                  </li>
                </ul>
                <h1 className="title">{props.title}</h1>
              </div>
            </div>
            <div className="col-lg-6 col-md-4">
              <div className="inner">
                <div className="bradcrumb-thumb">
                    <Image 
                    src="/images/product/product-45.png"
                    width={126}
                    height={120}
                    alt="Image"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Breadcrumb;