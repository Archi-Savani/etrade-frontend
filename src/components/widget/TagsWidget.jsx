import { BlogTags } from "@/data/Tags";
import { slugify } from "@/utils";
import Link from "next/link";

const TagsWidget = () => {
    return (
      <div className="axil-single-widget mt--40 widget_tag_cloud">
        <h6 className="widget-title">Tags</h6>
        <div className="tagcloud">
          {BlogTags.map((data, index) => (
            <Link href={`blog/tag/${slugify(data)}`} key={index}>{data}</Link>
          ))}
        </div>
      </div>
    );
}
 
export default TagsWidget;