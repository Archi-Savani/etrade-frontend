'use client';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import FooterTwo from "@/components/footer/FooterTwo";
import HeaderFive from "@/components/header/HeaderFive";
import NewsLetter from "@/components/newsletter/NewsLetter";
import ServiceTwo from "@/components/services/ServiceTwo";
import { DashboardAsideMenu } from "@/data/Menu";
import { UserLists } from "@/data/Users";

const DahsboardLayout = ({children}) => {
    const userInfo = UserLists[0];
    const pathname = usePathname();
    const split = pathname.split("/");
    const pageSlug = split[split.length - 1];
    
    return ( 
        <>
        <HeaderFive headerSlider/>
        <main className="main-wrapper">
            <Breadcrumb activeItem="My Account" title="Explore All Products"/>
            <div className="axil-dashboard-area axil-section-gap">
                <div className="container">
                    <div className="axil-dashboard-warp">
                        <div className="axil-dashboard-author">
                            <div className="media">
                                <div className="thumbnail">
                                    <Image 
                                        src={userInfo.avatar}
                                        height={70}
                                        width={70}
                                        alt={userInfo.name}
                                    />
                                </div>
                                <div className="media-body">
                                    <h5 className="title mb-0">Hello {userInfo.name}</h5>
                                    <span className="joining-date">eTrade Member Since {userInfo.joinDate}</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-md-4">
                                <aside className="axil-dashboard-aside">
                                    <nav className="axil-dashboard-nav">
                                        <div className="nav nav-tabs">
                                            {DashboardAsideMenu.map((data, index) => (
                                                <Link href={`dashboard/${data.slug}`} className={`nav-item nav-link ${data.slug === pageSlug ? "active": ""}`} key={index}>
                                                    <i className={data.icon} />{data.name}
                                                </Link>
                                            ))}
                                            <Link href="/sign-in" className="nav-item nav-link">
                                                <i className="fal fa-sign-out" />Logout
                                            </Link>
                                        </div>
                                    </nav>
                                </aside>
                            </div>
                            <div className="col-xl-9 col-md-8">
                                <div className="tab-content">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NewsLetter />
            <ServiceTwo />
        </main>
        <FooterTwo />
        </>
    );
}
 
export default DahsboardLayout;