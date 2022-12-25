import Link from "next/link";
import Slider from "react-slick";

function Slider1() {
  return (
    <>
      <div
        className="banner-one"
        style={{ backgroundImage: "url(images/main-slider/slider1/pic2.png)" }}
      >
        <div className="container">
          <div className="banner-inner">
            <div className="img1">
              <img src="images/main-slider/slider1/pic3.png" alt="" />
            </div>
            <div className="img2">
              <img src="images/main-slider/slider1/pic4.png" alt="" />
            </div>
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="banner-content">
                  <h6
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                    className="wow fadeInUp sub-title text-primary"
                  >
                    More than a company, We are Your Team!
                  </h6>
                  <h6
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                    className="wow fadeInUp sub-title text-primary"
                  >
                    You think we create
                  </h6>
                  <h1
                    data-wow-duration="1.2s"
                    data-wow-delay="1s"
                    className="wow fadeInUp "
                  >
                    Build Stunning{" "}
                    <span className="text-primary">
                      Mobile and Web Applications
                    </span>{" "}
                    With BaB IT Solutions
                  </h1>
                  <p
                    data-wow-duration="1.4s"
                    data-wow-delay="1.5s"
                    className="wow fadeInUp m-b30"
                  >
                    Breathing life into the development of ideas you dream of,
                    with new-age creators to make your brand unstoppable!
                  </p>
                  <Link href="/about-us">
                    <a
                      data-wow-duration="1.6s"
                      data-wow-delay="2s"
                      className="wow fadeInUp btn btn-link d-inline-flex align-items-center"
                      aria-label="Learn more about our organization and service we are offering"
                    >
                      <i className="fa fa-angle-right m-r10"></i>Learn More
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="dz-media move-box wow fadeIn"
                  data-wow-duration="1.6s"
                  data-wow-delay="0.8s"
                >
                  <img className="move-1" src="images/move/pic1.png" alt="" />
                  <img className="move-2" src="images/move/pic2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider1;
