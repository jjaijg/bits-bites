import Link from "next/link";

function AboutUs() {
  return (
    <>
      <section className="content-inner">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 m-b30 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="dz-media">
                <img src="images/about/img4.png" className="move-1" alt="" />
              </div>
            </div>
            <div
              className="col-lg-6 m-b30 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <div className="section-head style-1 mb-4">
                <h6 className="sub-title bgl-primary m-b20 text-primary">
                  About Us
                </h6>
                <h2 className="title">
                  How We Can Help You Achieve Your Business Goal
                </h2>
              </div>
              <p>
                We offer a full range of software development services for each
                & every business domain. Our clients have an amazing benefit;
                they are open to track the developing process on each stage by
                receiving timely status reports. Interact with our team and stay
                up to date. BaB India is completely tailored to meet clients’
                requirements and expectations. We always keep on exploring new
                innovations and leverage creativity to serve across 360°
                solutions. Are you ready to grow your business with our experts’
                assistance?
              </p>
              <p className="m-b10 text-primary font-weight-bold">Our Vision</p>
              <p className="m-b30">
                Our vision is to be a globally reputed IT company that leverages
                technology to deliver customized, cost-effective solutions. We
                hope to be recognized as one of the Top 50 IT solutions
                companies in India by the year 2020.
              </p>
              <p className="m-b10 text-primary font-weight-bold">Our Mission</p>
              <p className="m-b30">
                To provide innovative IT solutions and services that streamline
                business processes, galvanize enterprise productivity and help
                our clients achieve their business objectives with the aim of
                achieving 100% customer satisfaction every time.
              </p>
              {/* <img src="images/sign.png" alt="" />
              <h4 className="m-b30">CEO Jhone Doe</h4> */}
              <Link href="about-us">
                <a className="btn btn-link d-inline-flex align-items-center">
                  <i className="fa fa-angle-right m-r10"></i>Learn More
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
