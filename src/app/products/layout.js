'use client';
import FooterTwo from "@/components/footer/FooterTwo";
import HeaderFive from "@/components/header/HeaderFive";
import NewsLetter from "@/components/newsletter/NewsLetter";
import ServiceTwo from "@/components/services/ServiceTwo";

const SingleProductLayout = ({ children }) => {
    return ( 
        <>
        <HeaderFive headerSlider/>
        <main className="main-wrapper">
           {children}
            <NewsLetter />
            <ServiceTwo />
        </main>
        <FooterTwo />
        </>
    );
}
 
export default SingleProductLayout;