'use client';
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Section from "@/components/elements/Section";
import SectionTitle from "@/components/elements/SectionTitle";
import SlickSlider from "@/components/elements/SlickSlider";
import FooterTwo from "@/components/footer/FooterTwo";
import HeaderFive from "@/components/header/HeaderFive";
import NewsLetter from "@/components/newsletter/NewsLetter";
import ServiceTwo from "@/components/services/ServiceTwo";
import { AboutAchievment, AboutFeatures, AboutStore } from "@/data/About";
import { TeamData } from "@/data/Team";

const AboutUs = () => {
    return ( 
        <>
        <HeaderFive headerSlider/>
        <main className="main-wrapper">
            <Breadcrumb 
            activeItem="About Us"
            title="About Our Store"
            />
            <Section pClass="axil-about-area about-style-1">
                <div className="row align-items-center">
                    <div className="col-xl-4 col-lg-6">
                        <div className="about-thumbnail">
                            <div className="thumbnail">
                                <Image 
                                src={AboutStore.thumbnail} 
                                alt="About Us"
                                width={420}
                                height={501}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-6">
                        <div className="about-content content-right">
                            <span className="title-highlighter highlighter-primary2"> 
                                <i className={AboutStore.subtitleIcon} />{AboutStore.subtitle}
                            </span>
                            <h3 className="title">{AboutStore.title}</h3>
                            <span className="text-heading">{AboutStore.higlightLine}</span>
                            <div className="row">
                                {AboutStore.description?.map((data, index) => (
                                    <div className="col-xl-6" key={index}>
                                        <p>{data}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            <section className="about-info-area">
                <div className="container">
                    <div className="row row--20">
                        {AboutAchievment?.map((data, index) => (
                            <div className="col-lg-4" key={index}>
                                <div className="about-info-box">
                                    <div className="thumb">
                                        <Image 
                                            src={data.icon} 
                                            width={60}
                                            height={60}
                                            alt="Shape"
                                        />
                                    </div>
                                    <div className="content">
                                        <h6 className="title">{data.title}</h6>
                                        <p>{data.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
            <section className="axil-team-area axil-section-gap bg-wild-sand">
                <div className="team-left-fullwidth">
                    <div className="container ml--xxl-0">
                        <SectionTitle
                        title="Expart Management Team"
                        subtitle="Our Team"
                        subtitleIcon="fas fa-users"
                        subColor="highlighter-primary"
                        />
                        <SlickSlider
                        class="team-slide-activation slick-layout-wrapper--20 axil-slick-arrow arrow-top-slide"
                        slidesToShow={4}
                        infinite={false}
                        >
                            {TeamData?.map((data, index) => (
                                <div className="axil-team-member" key={index}>
                                    <div className="thumbnail">
                                        <Image 
                                        src={data.thumbnail} 
                                        width={330}
                                        height={380}
                                        alt={data.name}
                                        />
                                    </div>
                                    <div className="team-content">
                                        <span className="subtitle">{data.designation}</span>
                                        <h5 className="title">{data.name}</h5>
                                    </div>
                                </div>
                            ))}
                        </SlickSlider>
                    </div>
                </div>
            </section>
            <section className="axil-about-area about-style-2">
                <div className="container">
                    {AboutFeatures?.map((data, index) => (
                        <div className="row align-items-center mb--80 mb_sm--60" key={index}>
                            <div className={`col-lg-5 ${index % 2 === 0 ? "" : "order-lg-2"}`}>
                                <div className="about-thumbnail">
                                    <Image 
                                    src={data.thumbnail}
                                    width={545}
                                    height={440}
                                    alt="About Us"
                                    />
                                </div>
                            </div>
                            <div className={`col-lg-7 ${index % 2 === 0 ? "" : "order-lg-1"}`}>
                                <div className={`about-content ${index % 2 === 0 ? "content-right" : "content-left"}`}>
                                    <span className="subtitle">{data.subtitle}</span>
                                    <h4 className="title">{data.title}</h4>
                                    <p>{data.text}</p>
                                    <Link href="/contact" className="axil-btn btn-outline">Get In Touch</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <NewsLetter />
            <ServiceTwo />
        </main>
        <FooterTwo />
        </>
     );
}
 
export default AboutUs;