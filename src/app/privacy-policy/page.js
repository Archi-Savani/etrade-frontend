import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import Section from "@/components/elements/Section";
import FooterTwo from "@/components/footer/FooterTwo";
import HeaderFive from "@/components/header/HeaderFive";
import ServiceTwo from "@/components/services/ServiceTwo";
import { fetchMarkdownFile } from "@/utils/api";
import markdownToHtml from "@/utils/markdownToHtml";

const PrivacyPolicy = async() => {
    const privacyMeta = fetchMarkdownFile('Privacy', 'src/data');
    const privacyContent = await markdownToHtml(privacyMeta.content || "");
    const getPrivacy = {...privacyMeta.data, privacyContent};

    return ( 
        <>
        <HeaderFive headerSlider />
        <main className="main-wrapper">
        <Breadcrumb activeItem="Pages" title="Privacy Policy" />
        <Section>
            <div className="row">
                <div className="col-lg-10">
                    <div className="axil-privacy-policy">
                        <span className="policy-published">This Privacy policy was published on {getPrivacy.date}.</span>
                        <div dangerouslySetInnerHTML={{__html: getPrivacy.privacyContent}}></div>
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
 
export default PrivacyPolicy;