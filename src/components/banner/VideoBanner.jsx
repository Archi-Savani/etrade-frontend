'use client';
import { useState } from "react";
import Image from "next/image";
import Section from "../elements/Section";
import SectionTitle from "../elements/SectionTitle";
import FsLightbox from "fslightbox-react";

const VideoBanner = () => {
    const [toggler, setToggler] = useState(false);

  return (
    <Section
      pClass="video-banner-area"
      sectionPadding="no-gap"
      borderBottom="pb--80"
    >
      <SectionTitle
        title="Meet The Greater"
        subtitle="Video"
        subtitleIcon="far fa-film-alt"
        subColor="highlighter-primary"
        pClass="section-title-center"
      />
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="video-banner">
            <Image
              src="/images/bg/bg-image-7.jpg"
              width={850}
              height={500}
              alt="Images"
            />
            <div className="popup-video-icon">
                <button className="video-icon" onClick={ () => setToggler(!toggler) }><i className="fas fa-play" /></button>
            </div> 
            <FsLightbox toggler={ toggler } sources={ ['https://www.youtube.com/watch?v=FkUn86bH34M'] }/>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default VideoBanner;
