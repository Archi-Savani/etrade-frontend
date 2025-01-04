import { Process } from "@/data/Process";
import Section from "../elements/Section";
import SectionTitle from "../elements/SectionTitle";
import Image from "next/image";

const ServiceThree = () => {
    return (
      <Section pClass="how-to-sell-area" borderBottom="pb--50">
        <SectionTitle title="How to buy NFTs" pClass="section-title-center" />
        <div className="row row-cols-xl-4 row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-1 row--20">
          {Process.map((data, index) => (
            <div className="col" key={index}>
              <div className="service-box how-to-sell">
                <div className="icon">
                    <Image 
                        src={data.icon}
                        height={60}
                        width={60}
                        alt="icon"
                    />
                </div>
                <h6 className="title">{data.title}</h6>
                <p>{data.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    );
}
 
export default ServiceThree;