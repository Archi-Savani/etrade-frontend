const SplashSupport = () => {
    const SupportData = [
        {
            title: "Online Documentation",
            icon: "fal fa-book",
            text: "Well organized and up to date",
            btnText: "View Documentation",
            btnUrl: "https://new.axilthemes.com/docs/etrade-react/",
            class: "online-documentation"
        },
        {
            title: "Dedicated Support",
            icon: "fal fa-user-headset",
            text: "We response within 1 business day. Weekends excluded",
            btnText: "Create Support",
            btnUrl: "https://support.axilthemes.com/support/login/",
            class: "datecated-support"
        }
    ]
    return (
      <div className="pv-support-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row row--20">
                {SupportData.map((data, index) => (
                    <div className="col-lg-6" key={index}>
                    <div className={`pv-support ${data.class}`}>
                      <a
                      target="_blank"
                        href={data.btnUrl}
                        className="inner"
                      >
                        <span className="icon">
                          <i className={data.icon} />
                        </span>
                        <span className="content">
                          <span className="h3 title">{data.title}</span>
                          <span className="b1 paragraph">{data.text}</span>
                          <span className="axil-btn">
                            {data.btnText} {" "}
                            <i className="fal fa-long-arrow-right" />
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default SplashSupport;