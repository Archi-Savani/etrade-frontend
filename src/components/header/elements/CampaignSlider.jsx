import Link from "next/link";
import SlickSlider from "@/components/elements/SlickSlider";

const CampaignSlider = () => {
  const SlideData = [
    {
      title: "STUDENT NOW GET 10% OFF",
    },
    {
      title: "FLAT SELL GET 10% OFF",
    },
  ];

  return (
    <div className="header-top-campaign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6 col-md-10">
            <SlickSlider
              class="header-campaign-activation axil-slick-arrow arrow-both-side header-campaign-arrow"
              slidesToShow={1}
            >
              {SlideData.map((data, index) => (
                <div key={index}>
                  <div className="campaign-content" key={index}>
                    <p>
                      {data.title} : {" "}
                      <Link href="/shop">GET OFFER</Link>
                    </p>
                  </div>
                </div>
              ))}
            </SlickSlider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignSlider;
