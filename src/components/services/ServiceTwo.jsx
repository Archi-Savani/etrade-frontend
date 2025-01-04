import Image from "next/image";
import { ServiceData } from "@/data/Service";


const ServiceTwo = () => {
  return (
    <div className="service-area">
      <div className="container">
        <div className="row row-cols-xl-4 row-cols-sm-2 row-cols-1 row--20">
		{ServiceData.slice(0, 4).map((data, index) => (
          <div className="col" key={index}>
            <div className="service-box service-style-2">
              <div className="icon">
                <Image 
                src={data.icon}
                height={50}
                width={45}
                alt="Thumbnail"
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
    </div>
  );
};

export default ServiceTwo;
