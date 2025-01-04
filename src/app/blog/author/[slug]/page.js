import BlogTwo from "@/components/blog/BlogTwo";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Section from "@/components/elements/Section";
import FooterTwo from "@/components/footer/FooterTwo";
import HeaderFive from "@/components/header/HeaderFive";
import NewsLetter from "@/components/newsletter/NewsLetter";
import ServiceTwo from "@/components/services/ServiceTwo";
import { slugify, unSlugify } from "@/utils";
import { getAllPosts } from "@/utils/api";

const BlogAuthor = ({params}) => {
    const allPosts = getAllPosts([
        'id',
        'slug',
        'title',
        'cate',
        'featureImg',
        'author_name'
    ]);

    const postsByAuthor = allPosts.filter((post) => slugify(post.author_name) === params.slug);
    return ( 
        <>
        <HeaderFive headerSlider />
        <main className="main-wrapper">
            <Breadcrumb activeItem="Author" title={unSlugify(params.slug)}/>
            <Section>
                <div className="row g-5">
                    {postsByAuthor.map((data) => (
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
 
export default BlogAuthor;

export async function generateStaticParams() {
    const posts = getAllPosts(['author_name']);
    return posts.map((post) => ({
        slug: slugify(post.author_name)
    }));
}