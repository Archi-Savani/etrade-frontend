'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FsLightbox from "fslightbox-react";
import { slugify } from "@/utils";
import SlickSlider from "../elements/SlickSlider";

const BlogOne = ({ posts, moreBtn, excerpt, thumbHeight, thumbWidth, spacing }) => {
    
	const [toggler, setToggler] = useState(false);
	const FormatClass = () => {
		if (posts.postFormat === "quote") {
			return "format-quote";
		}else if (posts.postFormat === "video") {
			return "format-video";
		} else {
			return "";
		}
	}
	
  return (
    <div
      className={`content-blog ${spacing ? spacing : "mt--60"} ${FormatClass()}`}
    >
      <div className="inner">
		{posts.gallery ? 
		<SlickSlider
		class="axil-slick-arrow arrow-between-side"
		slidesToShow={1}
		>
			{posts?.gallery.map((image, index) => (
				<div className="thumbnail" key={index}>
					<Link href={`blog/${posts.slug}`}>
					<Image
						src={image}
						height={thumbHeight ?? 450}
						width={thumbWidth ?? 850}
						alt="Post Image"
					/>
					</Link>
				</div>
			))}
		</SlickSlider>
		: 
		posts.featureImg && (
		<div className="thumbnail">
			<Link href={`blog/${posts.slug}`}>
			<Image
				src={posts.featureImg}
				height={thumbHeight ?? 450}
				width={thumbWidth ?? 850}
				alt="Post Image"
			/>
			</Link>
			{posts.postFormat === "video" && (
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
				sources={[posts.videoUrl]}
				/>
			</>
			)}
		</div>
		)
		}
        <div className="content">
          <h4 className="title">
            <Link href={`/blog/${posts.slug}`}>{posts.title}</Link>
          </h4>
          <div className="axil-post-meta">
            <div className="post-author-avatar">
              <Image
                src={posts.author_img}
                height={50}
                width={50}
                alt="Author"
              />
            </div>
            <div className="post-meta-content">
              <h6 className="author-title">
                <Link href={`/blog/author/${slugify(posts.author_name)}`}>
                  {posts.author_name}
                </Link>
              </h6>
              <ul className="post-meta-list">
                <li>{posts.date}</li>
                <li>{posts.views}</li>
              </ul>
            </div>
          </div>
		  {excerpt && (
			<p>{posts.excerpt}</p>
		  )}
          {moreBtn && (
            <div className="read-more-btn">
              <Link
                className="axil-btn btn-bg-primary"
                href={`/blog/${posts.slug}`}
              >
                Read More
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogOne;
