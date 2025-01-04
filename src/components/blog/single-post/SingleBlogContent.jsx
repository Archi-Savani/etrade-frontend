import Image from "next/image";
import Link from "next/link";
import ArchiveWidget from "@/components/widget/ArchiveWidget";
import PostWidget from "@/components/widget/PostWidget";
import ProductWidget from "@/components/widget/ProductWidget";
import SearchWidget from "@/components/widget/SearchWidget";
import TagsWidget from "@/components/widget/TagsWidget";
import SinglePostThumbnail from "./SinglePostThumbnail";
import { slugify } from "@/utils";
import BlogCommentForm from "./BlogCommentForm";

const SingleBlogContent = ({meta, content}) => {
    return (
      <div className="axil-blog-area axil-section-gap">
        <SinglePostThumbnail metaData={meta} />
        <div className="post-single-wrapper position-relative">
          <div className="container">
            <div className="row">
              <div className="col-lg-1">
                <div className="d-flex flex-wrap align-content-start h-100">
                  <div className="position-sticky sticky-top">
                    <div className="post-details__social-share">
                      <span className="share-on-text">Share on:</span>
                      <div className="social-share">
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                        <a href="#">
                          <i className="fab fa-discord" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 axil-post-wrapper">
                {meta.postFormat !== "quote" && (
                  <div className="post-heading">
                    <h2 className="title">{meta.title}</h2>
                    <div className="axil-post-meta">
                      <div className="post-author-avatar">
                        <Image
                          src={meta.author_img}
                          height={50}
                          width={50}
                          alt={meta.author_name}
                        />
                      </div>
                      <div className="post-meta-content">
                        <h6 className="author-title">
                          <Link
                            href={`blog/author/${slugify(meta.author_name)}`}
                          >
                            {meta.author_name}
                          </Link>
                        </h6>
                        <ul className="post-meta-list">
                          <li>{meta.date}</li>
                          <li>{meta.views}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                {(meta.postFormat === "audio") && 
                    <div className="audio-player">
                    <audio controls>
                    <source
                        src={meta.audioFile}
                        type="audio/ogg"
                    />
                    <source
                        src={meta.audioFile}
                        type="audio/mpeg"
                    />
                    </audio>
                </div>
                }
                <div
                  className="single-blog-content"
                  dangerouslySetInnerHTML={{ __html: content }}
                ></div>
                <BlogCommentForm metaData={meta} />
              </div>
              <div className="col-lg-4">
                <aside className="axil-sidebar-area">
                  <PostWidget />
                  <ProductWidget />
                  <SearchWidget />
                  <ArchiveWidget />
                  <TagsWidget />
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SingleBlogContent;