import { WhoAreData, WhoAreGallery } from "@/data/About";
import SectionTitle from "../elements/SectionTitle";
import Image from "next/image";
import { mapInSlices } from "@/utils";

const WhoWeAre = () => {
	const whoAreGallery = mapInSlices(WhoAreGallery, 2);

  return (
    <section className="axil-about-area about-style-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <SectionTitle
              title="Who we are"
              subtitle="About Us"
              subtitleIcon="fal fa-star"
              subColor="highlighter-primary2"
            />
            <div className="row">
              {WhoAreData.map((data, index) => (
                <div className="col-sm-6" key={index}>
                  <div className="about-features">
                    <div className="spam sl-number">{index + 1}.</div>
                    <h4 className="title">{data.title}</h4>
                    <p>{data.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-gallery">
              <div className="row row--10">
				{whoAreGallery.map((thumbnails, thumbsIndex) => (
					<div className="col-6" key={thumbsIndex}>
						{thumbnails.map((data, index) => (
							<div
							className={`thumbnail thumbnail-${index + 1}`}
							key={index}
							>
							<Image src={data} alt="About" fill />
						  </div>
						))}
					</div>
				))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
