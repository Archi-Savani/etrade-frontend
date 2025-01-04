import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Section from "@/components/elements/Section";
import FooterTwo from "@/components/footer/FooterTwo";
import HeaderFive from "@/components/header/HeaderFive";
import ServiceTwo from "@/components/services/ServiceTwo";
import { fetchMarkdownFile } from "@/utils/api";
import markdownToHtml from "@/utils/markdownToHtml";

const TermsOfUse = async() => {
    const termsUseMeta = fetchMarkdownFile('TermsUse', 'src/data');
    const termsUseContent = await markdownToHtml(termsUseMeta.content || "");
    const getTermsUse = {termsUseContent};

    return ( 
        <>
        <HeaderFive headerSlider />
        <main className="main-wrapper">
        <Breadcrumb activeItem="Pages" title="Terms of Use" />
        <Section>
            <div className="row">
                <div className="col-lg-10">
                    <div className="axil-privacy-policy">
                        <div dangerouslySetInnerHTML={{__html: getTermsUse.termsUseContent}}></div>
                    </div>
                </div>
            </div>
        </Section>
        <ServiceTwo />
        </main>
        <FooterTwo />
        </>
    );
}
 
export default TermsOfUse;