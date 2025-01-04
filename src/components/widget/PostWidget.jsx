import Link from "next/link";
import Image from "next/image";
import { slugify } from "@/utils";
import { getAllPosts } from "@/utils/api";

const PostWidget = () => {
	const allPosts = getAllPosts([
        'id',
        'slug',
        'title',
        'featureImg',
        'date',
        'views'
    ]);
  return (
    <div className="axil-single-widget mt--40">
      <h6 className="widget-title">Latest Posts</h6>
	  {allPosts.slice(0, 4).map((data) => (
		<div className="content-blog post-list-view mb--20" key={data.id}>
			{data.featureImg &&
			<div className="thumbnail">
				<Link href={`/blog/${data.slug}`}>
					<Image 
					src={data.featureImg}
					width={120}
					height={78}
					alt="Blog Thumbnai"
					/>
				</Link>
			</div>
	  		}
			<div className="content">
			<h6 className="title">
				<Link href={`/blog/${slugify(data.title)}`}>{data.title}</Link>
			</h6>
			<div className="axil-post-meta">
				<div className="post-meta-content">
				<ul className="post-meta-list">
					<li>{data.date}</li>
					<li>{data.views}</li>
				</ul>
				</div>
			</div>
			</div>
		</div>
		))}
    </div>
  );
};

export default PostWidget;
