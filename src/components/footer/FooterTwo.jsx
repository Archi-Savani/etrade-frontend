"use client";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { ScocialLink } from "@/data/Common";
import { FooterData } from "@/data/Footer";
import ProductQuickView from "../product/elements/ProductQuickView";

const FooterTwo = () => {
  const getQuickView = useSelector((state) => state.productData);

  return (
    <>
      <footer className="axil-footer-area footer-style-2">
        <div className="footer-top separator-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="axil-footer-widget">
                  <h5 className="widget-title">Support</h5>
                  <div className="inner">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: FooterData.footerInfo.address,
                      }}
                    ></p>
                    <ul className="support-list-item">
                      <li>
                        <a href={`mailto:${FooterData.footerInfo.email}`}>
                          <i className="fal fa-envelope-open" />
                          {FooterData.footerInfo.email}
                        </a>
                      </li>
                      <li>
                        <a href={`tel:${FooterData.footerInfo.phone}`}>
                          <i className="fal fa-phone-alt" />{" "}
                          {FooterData.footerInfo.phone}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {FooterData.footerLink.slice(0, 2).map((items, index) => (
                <div className="col-lg-3 col-sm-6" key={index}>
                  <div className="axil-footer-widget">
                    <h5 className="widget-title">{items.label}</h5>
                    <div className="inner">
                      <ul>
                        {items.linkList.map((link, index) => (
                          <li key={index}>
                            <Link href={link.url}>{link.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
              <div className="col-lg-3 col-sm-6">
                <div className="axil-footer-widget">
                  <h5 className="widget-title">Download App</h5>
                  <div className="inner">
                    <span>{FooterData.footerAppInfo.title}</span>
                    <div className="download-btn-group">
                      <div className="qr-code">
                        <Image
                          src={FooterData.footerAppInfo.qrCode}
                          alt="Axilthemes"
                          height={98}
                          width={98}
                        />
                      </div>
                      <div className="app-link">
                        <a href={FooterData.footerAppInfo.appStoreLink}>
                          <Image
                            src={FooterData.footerAppInfo.appStoreLogo}
                            alt="App Store"
                            height={42}
                            width={140}
                          />
                        </a>
                        <a href={FooterData.footerAppInfo.googlePlayLink}>
                          <Image
                            src={FooterData.footerAppInfo.googlePlayLogo}
                            alt="Google Play Store"
                            height={42}
                            width={140}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area copyright-default separator-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-4">
                <div className="social-share">
                  <a href={ScocialLink.facebook.url}>
                    <i className={ScocialLink.facebook.icon} />
                  </a>
                  <a href={ScocialLink.instagram.url}>
                    <i className={ScocialLink.instagram.icon} />
                  </a>
                  <a href={ScocialLink.twitter.url}>
                    <i className={ScocialLink.twitter.icon} />
                  </a>
                  <a href={ScocialLink.linkedin.url}>
                    <i className={ScocialLink.linkedin.icon} />
                  </a>
                  <a href={ScocialLink.discord.url}>
                    <i className={ScocialLink.discord.icon} />
                  </a>
                </div>
              </div>
              <div className="col-xl-4 col-lg-12">
                <div className="copyright-left d-flex flex-wrap justify-content-center">
                  <ul className="quick-link">
                    <li>
                      © {new Date().getFullYear()}. All rights reserved by {" "}
                      <a target="_blank" href="https://axilthemes.com/">
                        Axilthemes
                      </a>
                      .
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-12">
                <div className="copyright-right d-flex flex-wrap justify-content-xl-end justify-content-center align-items-center">
                  <span className="card-text">Accept For</span>
                  <ul className="payment-icons-bottom quick-link">
                    <li>
                      <Image
                        src="/images/icons/cart/cart-1.png"
                        alt="paypal cart"
                        width={17}
                        height={20}
                      />
                    </li>
                    <li>
                      <Image
                        src="/images/icons/cart/cart-2.png"
                        alt="Master card"
                        width={33}
                        height={20}
                      />
                    </li>
                    <li>
                      <Image
                        src="/images/icons/cart/cart-5.png"
                        alt="Visa card"
                        width={46}
                        height={20}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {getQuickView.quickView && <ProductQuickView />}
    </>
  );
};

export default FooterTwo;
