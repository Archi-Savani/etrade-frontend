import Image from "next/image";
import CountDown from "@/components/elements/CountDown";
import { Logo, ComingSoonData } from "@/data/Common";

const ComingSoon = () => {
    return ( 
        <div className="comming-soon-area">
            <div className="row align-items-center">
                <div className="col-xl-4 col-lg-6">
                    <div className="comming-soon-banner bg_image bg_image--13" />
                </div>
                <div className="col-lg-5 offset-xl-1">
                    <div className="comming-soon-content">
                        <div className="brand-logo">
                            <Image
                            src={Logo.large}
                            height={60}
                            width={200}
                            alt="Logo"
                            />
                        </div>
                        <h2 className="title">{ComingSoonData.title}</h2>
                        <p>{ComingSoonData.subtitle}</p>
                        <div className="coming-countdown countdown">
                            <CountDown unit date={ComingSoonData.launchDate} />
                        </div>
                        <form>
                            <div className="input-group newsletter-form">
                                <div className="position-relative newsletter-inner mb--15">
                                    <input placeholder="example@gmail.com" type="text" />
                                </div>
                                <button type="submit" className="axil-btn mb--15">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}
 
export default ComingSoon;