'use client';
import { useEffect, useRef } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import Nav from "@/components/header/elements/Nav";
import LangDropdown from "@/components/header/elements/LangDropdown";
import CuurencyDropdown from "@/components/header/elements/CurrencyDropdown";
import HeaderTopNotify from "@/components/header/elements/HeaderTopNotify";
import HeaderBrand from "@/components/header/elements/HeaderBrand";
import HeaderActions from "@/components/header/elements/HeaderActions";
import CountDown from "../elements/CountDown";

const HeaderFour = () => {
  const menuOption = useSelector((state) => state.menu);
  const axilHeader = useRef();
  const axilPlaceholder = useRef();
  const axilMainmenu = useRef();
  
  useEffect(() => {
    const headerHeight = axilHeader.current.clientHeight;
    const mainMenu = axilMainmenu.current;
    const mainMenuHeight = axilMainmenu.current.clientHeight;
    const mainmenuPlaceholder = axilPlaceholder.current;
  
    window.addEventListener("scroll", (event) => {
        if (window.scrollY > headerHeight) {
            mainmenuPlaceholder.style.height = mainMenuHeight + 'px';
            mainMenu.classList.add("axil-sticky");
        } else {
            mainmenuPlaceholder.style.height = '0';
            mainMenu.classList.remove("axil-sticky");
        }
    });
  }, []);
  return (
    <header className="header axil-header header-style-4" ref={axilHeader}>
      <HeaderTopNotify bgImage="/images/others/campaign-bg2.png">
      <div className="campaign-countdown">
            <CountDown unit unitShort date="2024-10-01T23:59:59" />
          </div>
      <p>
          Open Doors To A World Of Fashion <Link href="/">Discover More</Link>
        </p>
      </HeaderTopNotify>
      <div className="axil-header-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 col-12">
				<div className="header-top-dropdown dropdown-box-style">
					<CuurencyDropdown />
					<LangDropdown />
				</div>
            </div>
            <div className="col-md-4 col-5">
				<HeaderBrand />
            </div>
            <div className="col-md-4 col-7">
				<HeaderActions searchIcon />
            </div>
          </div>
        </div>
      </div>
      <div id="axil-sticky-placeholder" ref={axilPlaceholder}/>
      <div className="axil-mainmenu" ref={axilMainmenu}>
        <div className="container">
          <div className="header-navbar">
            <div className={`header-main-nav ${menuOption.isMobileMenuOpen ? "open": ""}`}>
              <Nav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderFour;
