import BlogTwo from "@/components/blog/BlogTwo";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Section from "@/components/elements/Section";
import FooterTwo from "@/components/footer/FooterTwo";
import HeaderFive from "@/components/header/HeaderFive";
import NewsLetter from "@/components/newsletter/NewsLetter";
import ServiceTwo from "@/components/services/ServiceTwo";
import { slugify, unSlugify } from "@/utils";
import { getAllPosts } from "@/utils/api";

const BlogCategory = ({params}) => {
    const allPosts = getAllPosts([
        'id',
        'slug',
        'title',
        'cate',
        'featureImg',
    ]);
    // filter by category
    const postsByCate = allPosts.filter((post) => slugify(post.cate) === params.slug);

    return ( 
        <>
        <HeaderFive headerSlider />
        <main className="main-wrapper">
            <Breadcrumb activeItem="Blogs" title={unSlugify(params.slug)}/>
            <Section>
                <div className="row g-5">
                    {postsByCate.map((data) => (
                        <div className="col-md-4" key={data.id}>
                            <BlogTwo posts={data}/>
                        </div>
                    ))}
                </div> 
            </Section>
            <NewsLetter />
            <ServiceTwo />
        </main>
        <FooterTwo />
        </>
    );
}
 
export default BlogCategory;

export async function generateStaticParams() {
    const posts = getAllPosts(['cate']);
    return posts.map((post) => ({
        slug: slugify(post.cate)
    }));
}