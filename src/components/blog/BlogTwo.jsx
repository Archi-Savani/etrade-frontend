import { slugify } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const BlogTwo = ({posts}) => {
    return (
      <div className={`content-blog blog-grid ${posts.postFormat === "quote" ? "format-quote" : ""}`}>
        <div className="inner">
			{posts.featureImg &&  
          <div className="thumbnail">
            <Link href={`/blog/${posts.slug}`}>
                <Image 
                src={posts.featureImg}
                height={360}
                width={640}
                alt="Post Image"
                />
            </Link>
            <div className="blog-category">
                <Link href={`/blog/category/${slugify(posts.cate)}`}>{posts.cate}</Link>
            </div>
          </div>
			}
          <div className="content">
            <h5 className="title">
                <Link href={`/blog/${posts.slug}`}>{posts.title}</Link>
            </h5>
            <div className="read-more-btn">
                <Link href={`/blog/${posts.slug}`} className="axil-btn right-icon">
                    Read More <i className="fal fa-long-arrow-right" />
                </Link>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default BlogTwo;