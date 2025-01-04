import BlogOne from "@/components/blog/BlogOne";
import Section from "@/components/elements/Section";
import SectionTitle from "@/components/elements/SectionTitle";
import SlickSlider from "@/components/elements/SlickSlider";
import FooterTwo from "@/components/footer/FooterTwo";
import HeaderFive from "@/components/header/HeaderFive";
import NewsLetter from "@/components/newsletter/NewsLetter";
import ServiceTwo from "@/components/services/ServiceTwo";
import { getAllPosts, getPostBySlug } from "@/utils/api";
import markdownToHtml from "@/utils/markdownToHtml";
import SingleBlogContent from "@/components/blog/single-post/SingleBlogContent";

const BlogDetails = async ({params}) => {
    const postMeta = getPostBySlug(params.slug, [
        'id',
        'title',
        'postFormat',
        'videoUrl',
        'audioFile',
        'cate',
        'featureImg',
        'largeImg',
        'gallery',
        'author_name',
        'author_img',
        'date',
        'views',
        'content'
    ]);
    const postContent = await markdownToHtml(postMeta.content || '');

    const allPosts = getAllPosts([
        'id',
        'slug',
        'postFormat',
        'featureImg',
        'title',
        'author_name',
        'author_img',
        'date',
        'views',
    ])

    return ( 
        <>
        <HeaderFive headerSlider />
        <main className="main-wrapper">
            <SingleBlogContent meta={postMeta} content={postContent} />
            <Section pClass="related-blog-area" sectionPadding="pb--60 pb_sm--40">
                <SectionTitle 
                 title="Latest Blog"
                 subtitle="Hot News"
                 subtitleIcon="fal fa-bell"
                 subColor="highlighter-primary"
                />
                <SlickSlider
                class="slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide"
                slidesToShow={3}
                infinite={false}
                >
                    {allPosts.map((data) => (
                        <BlogOne posts={data} key={data.id} thumbHeight={300} thumbWidth={410} spacing="no-space"/>
                    ))}
                </SlickSlider>
            </Section>
            <NewsLetter />
            <ServiceTwo />
        </main>
        <FooterTwo />
        </>
     );
}
 
export default BlogDetails;

export async function generateStaticParams() {
    const posts = getAllPosts(['slug']);
    return posts.map((post) => ({
        slug: post.slug
    }));
}