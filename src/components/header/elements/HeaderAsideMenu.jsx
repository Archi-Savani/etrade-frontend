import Image from "next/image";
import Link from "next/link";
import { CateMenu } from "@/data/Menu";
import { slugify } from "@/utils";
import { useEffect, useState } from "react";

const HeaderAsideMenu = () => {
  const [asideMenuToggler, setAsideMenuToggler] = useState(false);
  const [windowWidth, setWindowWidth] = useState();

  const asideMenuHandler = () => {
    setAsideMenuToggler(!asideMenuToggler);
  }

  const asideMobileMenuHandler = () => {
		let windowWidthCheck = window.innerWidth;
		setWindowWidth(windowWidthCheck);
		window.addEventListener("resize", (e) => {
			let windowWidth = window.innerWidth;
			setWindowWidth(windowWidth);
		});
		let subMenuToggler = document.getElementsByClassName("has-megamenu");
		if (windowWidth < 1200) {
			for (let i = 0; i < subMenuToggler.length; i++) {
				let element = subMenuToggler[i];
				element.addEventListener("click", function (e) {
				e.preventDefault();
				if (element.offsetParent.classList.contains("open")) {
					for (let j = 0; j < subMenuToggler.length; j++) {
					const subElem = subMenuToggler[j];
					subElem.offsetParent.classList.remove("open");
					subElem.nextSibling.style.display = "none";
					}
				} else {
					for (let j = 0; j < subMenuToggler.length; j++) {
						const subElem = subMenuToggler[j];
						subElem.offsetParent.classList.remove("open");
						subElem.nextSibling.style.display = "none";
					}
					element.offsetParent.classList.add("open");
					element.nextSibling.style.display = "block";
				}
				});
			}
		}
	}

	useEffect(() => {
		asideMobileMenuHandler();
	}, [windowWidth]);

  return (
    <div className="header-nav-department">
      <aside className="header-department">
        <button className="header-department-text department-title" onClick={asideMenuHandler}>
          <span className="icon">
            <i className="fal fa-bars" />
          </span>
          <span className="text">Categories</span>
        </button>
        <nav className={`department-nav-menu ${asideMenuToggler ? "open" : ""}`}>
          <button className="sidebar-close" onClick={asideMenuHandler}>
            <i className="fas fa-times" />
          </button>
          <ul className="nav-menu-list">
            {CateMenu.map((menuItem, index) => (
              <li key={index}>
                <Link
                  href={menuItem.url}
                  className={`nav-link ${
                    menuItem.hasChildren ? "has-megamenu" : ""
                  }`}
                >
                  <span className="menu-icon">
                    <Image
                      src={menuItem.icon}
                      alt="icon"
                      height={25}
                      width={25}
                    />
                  </span>
                  <span className="menu-text">{menuItem.name}</span>
                </Link>
				{menuItem.hasChildren && (
                <div className="department-megamenu">
                  <div className="department-megamenu-wrap">
                    <div className="department-submenu-wrap">
						{menuItem.children.slice(0, 3).map((submenu, index) => (
							<div className="department-submenu" key={index}>
								<h3 className="submenu-heading">{submenu.label}</h3>
								<ul>
									{submenu.items.map((item, index) => (
										<li key={index}>
											<Link href={`/products/category/${slugify(menuItem.name)}/${slugify(item.name)}`}>{item.name}</Link>
										</li>
									))}
								</ul>
							</div>
						))}
                    </div>
					{menuItem.featured && (
                    <div className="featured-product">
                      <h3 className="featured-heading">Featured</h3>
                      <div className="product-list">
						{menuItem.featured.slice(0, 4).map((feature, index) => (
                        <div className="item-product" key={index}>
							<Link href={feature.url}>
								<Image
									src={feature.thumb}
									alt="icon"
									height={110}
									width={276}
								/>
							</Link>
                        </div>
						))}
                      </div>
					  <Link href="/shop" className="axil-btn btn-bg-primary">See All Offers</Link>
                    </div>
					)}
                  </div>
                </div>
				)}
              </li>
            ))}
          </ul>
        </nav>
        {asideMenuToggler && windowWidth < 1200 && (
        <div
          className="closeMask"
          onClick={asideMenuHandler}
        ></div>
      )}
      </aside>
    </div>
  );
};

export default HeaderAsideMenu;
