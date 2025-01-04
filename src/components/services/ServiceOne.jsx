import { ServiceData } from "@/data/Service";
import Image from "next/image";

const ServiceOne = () => {
    return (
      <div className="service-area">
        <div className="container">
          <div className="row row-cols-xl-5 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-1 row--20">
            {ServiceData.slice(0, 5).map((data, index) => (
            <div className="col" key={index}>
              <div className="service-box">
                <div className="icon">
                <Image 
                src={data.icon}
                height={67}
                width={60}
                alt="Thumbnail"
                />
                </div>
                <h6 className="title">{data.title}</h6>
              </div>
            </div>
             ))}
          </div>
        </div>
      </div>
    );
}
 
export default ServiceOne;