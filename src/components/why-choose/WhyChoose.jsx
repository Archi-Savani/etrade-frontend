import Image from "next/image";
import Section from "../elements/Section";
import SectionTitle from "../elements/SectionTitle";
import { WhyChooseData } from "@/data/WhyChoose";

const WhyChoose = () => {
    return (
      <Section pClass="axil-why-choose-area" sectionPadding="axil-section-gap pb--50 pb_sm--30">
        <SectionTitle
          pClass="section-title-center"
          title="Why People Choose Us"
          subtitle="Why Us"
          subtitleIcon="fal fa-thumbs-up"
          subColor="highlighter-secondary"
        />
        <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 row--20">
            {WhyChooseData.slice(0, 5).map((data, index) => (
          <div className="col" key={index}>
            <div className="service-box">
              <div className="icon">
                <Image 
                src={data.icon}
                width={60}
                height={60}
                alt={data.title}
                />
              </div>
              <h6 className="title">{data.title}</h6>
            </div>
          </div>
           ))}
        </div>
      </Section>
    );

}
 
export default WhyChoose;