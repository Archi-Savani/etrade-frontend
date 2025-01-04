import Image from "next/image";
import SectionTitle from "../elements/SectionTitle";

const SplashFeatures = () => {

    const ThemeFeatures = [
        {
            title: "Powered by Next.js",
            icon: "/images/preview/feature-icon-10.png",
            text: "Our Template is Perfect for all devices. It is made by Next.js Structure. Next.js was designed to provide high performance in mind."
        },
        {
            title: "Reusable Components",
            icon: "/images/preview/feature-icon-11.png",
            text: "All the Components of this template are reusable. We made eTrade using functional components. You can reuse any components"
        },
        {
            title: "Fast Loading Speed",
            icon: "/images/preview/feature-icon-05.png",
            text: "The website speed is very important. Hence we’ve created eTrade in a way that your website will load fast, and you will get better performance."
        },
        {
            title: "Fully Responsive <br /> Layout",
            icon: "/images/preview/feature-icon-01.png",
            text: "All the pages of this theme are responsive. We used Bootstrap framework to build the website. It’s the best in class."
        },
        {
            title: "25+ Resourceful <br /> Pages",
            icon: "/images/preview/feature-icon-02.png",
            text: "All the pages are created based on real content that you will need to run your business. Change image and text and you’re good to go!"
        },
        {
            title: "Fully <br /> Customizable",
            icon: "/images/preview/feature-icon-09.png",
            text: "Our template is fully customizable. You can change color combination, fonts, icons, contents, images etc. You can also add custom css."
        },
        {
            title: "Font Awesome 5 <br /> Pro Icons",
            icon: "/images/preview/feature-icon-03.png",
            text: "This template comes with licensed premium quality icons from FontAwesome. All the icons are font based and ready to match the quality of any HQ screen."
        },
        {
            title: "Google <br /> Font",
            icon: "/images/preview/feature-icon-04.png",
            text: "A vast collection of Google fonts are integrated with the theme. You can use any of them that goes with your branding."
        },
        {
            title: "Lifetime <br /> Update",
            icon: "/images/preview/feature-icon-05.png",
            text: "Purchase our theme only once and get lifetime updates. We keep updating our products to stay up to date with latest trends and technology."
        },

    ]
    return (
      <div className="pv-feature-area" id="features">
        <div className="container">
          <div className="pv-feature-box">
          <SectionTitle 
                pClass="section-title-center"
                subColor="highlighter-secondary"
                subtitle="Features"
                subtitleIcon="fas fa-fire"
                title="We have Impressive <br/>
                Features"
            />
            <div className="row">
            {ThemeFeatures.map((data, index) => (
                 <div className="col-lg-4 col-md-6 col-12" key={index}>
                 <div className="pv-feature">
                   <div className="service-box">
                     <div className="icon">
                        <Image
                        src={data.icon}
                        height={48}
                        width={48}
                        alt="icon" 
                        />
                     </div>
                     <div className="content">
                       <h3 className="title" dangerouslySetInnerHTML={{__html: data.title}}></h3>
                       <p>{data.text}</p>
                     </div>
                   </div>
                 </div>
               </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default SplashFeatures;