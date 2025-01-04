"use client";
import { useEffect, useRef } from "react";
import HeaderBrand from "../header/elements/HeaderBrand";
import HeaderTopNotify from "../header/elements/HeaderTopNotify";

const SplashHeader = () => {
	const axilPlaceholder = useRef();
	const axilMainmenu = useRef();
  
	useEffect(() => {
	  const mainMenu = axilMainmenu.current;
	  const mainMenuHeight = axilMainmenu.current.clientHeight;
	  const mainmenuPlaceholder = axilPlaceholder.current;
	  window.addEventListener("scroll", (event) => {
		  if (window.scrollY > 40) {
			  mainmenuPlaceholder.style.height = mainMenuHeight + 'px';
			  mainMenu.classList.add("axil-sticky");
		  } else {
			  mainmenuPlaceholder.style.height = '0';
			  mainMenu.classList.remove("axil-sticky");
		  }
	  });
	}, []);

  return (
    <header className="header axil-header header-style-3">
      <HeaderTopNotify bgImage="/images/others/campaign-bg2.png">
        <p>
          Introductory Offer Get Upto 50% Off{" "}
          <a
            target="_blank"
            href="https://themeforest.net/item/etrade-multipurpose-ecommerce-nextjs-template/48473978"
          >
            Buy Now
          </a>
        </p>
      </HeaderTopNotify>
      <div id="axil-sticky-placeholder" ref={axilPlaceholder}/>
      <div className="axil-mainmenu" ref={axilMainmenu}>
        <div className="container">
          <div className="header-navbar">
            <HeaderBrand />
            <div className="header-main-nav">
              <nav className="mainmenu-nav">
                <ul className="mainmenu">
                  <li>
                    <a href="#demos" className="smoth-animation">
                      Demo
                    </a>
                  </li>
                  <li>
                    <a href="#features" className="smoth-animation">
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://new.axilthemes.com/docs/etrade-react/"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://support.axilthemes.com/support/"
                    >
                      Support
                    </a>
                  </li>
                </ul>
              </nav>
              {/* End Mainmanu Nav */}
            </div>
            <div className="header-action">
              <div className="header-btn">
                <a
                  target="_blank"
                  href="https://themeforest.net/item/etrade-multipurpose-ecommerce-nextjs-template/48473978"
                  className="axil-btn btn-bg-primary"
                >
                  <i className="fal fa-shopping-cart" /> Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SplashHeader;
