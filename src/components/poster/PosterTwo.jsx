import Image from "next/image";
import Link from "next/link";

const PosterTwo = (props) => {
    return (
      <div className={`axil-poster ${props.section ? props.section : ""}`}>
        <div className="container">
          <div className={`row ${props.row ? props.row : "" }`}>
            <div className={`col-lg-6 ${props.column ? props.column : ""}`}>
              <div className="single-poster">
                <Link href="/shop">
                  <Image
                    src={props.leftThumb ?? "/images/product/poster/poster-01.png"}
                    alt="poster"
                    width={645}
                    height={252}
                  />
                  <div className="poster-content">
                    <div className="inner">
                      <h3 className="title">
						{props.leftTitle ?? "Rich sound, for less.."}
                      </h3>
                      <span className="sub-title">
                        Collections <i className="fal fa-long-arrow-right" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className={`col-lg-6 ${props.column ? props.column : ""}`}>
              <div className="single-poster">
                <Link href="/shop">
                  <Image
                    src={props.rightThumb ?? "/images/product/poster/poster-02.png"}
                    alt="poster"
                    width={645}
                    height={252}
                  />
                  <div className="poster-content content-left">
                    <div className="inner">
                      <span className="sub-title">{props.rightSubtitle ?? "50% Offer In Winter"}</span>
                      <h3 className="title">
					  {props.rightTitle ?? " Get VR Reality Glass"}
                      </h3>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default PosterTwo;