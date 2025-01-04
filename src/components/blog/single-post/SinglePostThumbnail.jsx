'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FsLightbox from "fslightbox-react";
import SlickSlider from "@/components/elements/SlickSlider";
import { slugify } from "@/utils";

const SinglePostThumbnail = ({metaData}) => {
    const FormatClass = () => {
        if(metaData.postFormat === "standard"){
            return "post-standard";
        } else if (metaData.postFormat === "video") {
            return "post-video";
        } else if (metaData.postFormat === "gallery") {
            return "post-gallery"; 
        } else if (metaData.postFormat === "audio") {
            return "post-audio"; 
        } else if (metaData.postFormat === "quote") {
            return "post-quote"; 
        } else {
            return "";
        }
    }

    const [toggler, setToggler] = useState(false);
    return (
      <>
        <div className={`axil-single-post post-formate ${FormatClass()}`}>
          <div className="container">
            <div
              className={`content-block ${
                metaData.postFormat === "video"
                  ? "format-video content-blog"
                  : ""
              } ${
                metaData.postFormat === "quote"
                  ? "format-quote content-blog"
                  : ""
              }`}
            >
              <div className="inner">
                {metaData.gallery && (
                  <SlickSlider
                    class="blog-gallery-activation axil-slick-arrow arrow-between-side"
                    slidesToShow
                  >
                    {metaData.gallery?.map((thumb, index) => (
                      <div className="post-thumbnail" key={index}>
                        <Image
                          src={thumb}
                          width={1290}
                          height={605}
                          alt="Gallery Imag"
                        />
                      </div>
                    ))}
                  </SlickSlider>
                )}
                {(metaData.postFormat === "standard" ||
                  metaData.postFormat === "video" ||
                  metaData.postFormat === "audio") && (
                  <div
                    className={`post-thumbnail ${
                      metaData.postFormat === "video" ? "thumbnail" : ""
                    }`}
                  >
                    <Image
                      src={metaData.largeImg}
                      width={1290}
                      height={605}
                      alt={metaData.title}
                    />
                    {metaData.postFormat === "video" && (
                      <>
                        <div className="popup-video">
                          <button
                            className="play-btn popup-youtube"
                            onClick={() => setToggler(!toggler)}
                          >
                            <i className="fas fa-play"></i>
                          </button>
                        </div>
                        <FsLightbox
                          toggler={toggler}
                          sources={[metaData.videoUrl]}
                        />
                      </>
                    )}
                  </div>
                )}
                {metaData.postFormat === "quote" && (
                  <div className="content">
                    <blockquote>
                      <h4 className="title">
                        {metaData.title}
                      </h4>
                    </blockquote>
                    <div className="axil-post-meta">
                      <div className="post-author-avatar">
                        <Image 
                        src={metaData.author_img}
                        width={50}
                        height={50}
                        alt={metaData.author_name}
                        />
                      </div>
                      <div className="post-meta-content">
                        <h6 className="author-title">
                            <Link href={`blog/author/${slugify(metaData.author_name)}`}>{metaData.author_name}</Link>
                        </h6>
                        <ul className="post-meta-list">
                          <li>{metaData.date}</li>
                          <li>{metaData.views}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
 
export default SinglePostThumbnail;