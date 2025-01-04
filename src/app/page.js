import SplashFooter from "@/components/splash/SpalshFooter";
import SplashBanner from "@/components/splash/SplashBanner";
import SplashCta from "@/components/splash/SplashCta";
import SplashFeatures from "@/components/splash/SplashFeatures";
import SplashHeader from "@/components/splash/SplashHeader";
import SplashHomeDemo from "@/components/splash/SplashHomeDemo";
import SplashInnerDemo from "@/components/splash/SplashInnerDemo";
import SplashSupport from "@/components/splash/SplashSupport";

export const metadata = {
	title: 'eTrade Multipurpose eCommerce Next JS Template',
  description: 'eTrade Multipurpose eCommerce Nextjs Template',
}

const HomeOne = () => {
  return ( 
    <>
	<SplashHeader />
	<main className="main-wrapper pv-main-wrapper">
		<SplashBanner />
		<SplashHomeDemo />
		<SplashInnerDemo />
		<SplashFeatures />
		<SplashSupport />
		<SplashCta />
	</main>
	<SplashFooter />
    </>
   );
}
 
export default HomeOne;
