function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer
        className="site-footer style-1"
        id="footer"
        style={{ backgroundImage: "url(images/background/bg10.png)" }}
      >
        <div className="footer-top">
          <div className="container">
            <div
              className="footer-info wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.8s"
            >
              <div className="row align-items-center">
                <div className="col-xl-5 col-md-4">
                  <div className="footer-logo">
                    <a href="/" aria-label="Bits & Bytes Logo">
                      <img
                        src="images/logo.png"
                        alt=""
                        // height={"50px"}
                        width={"200px"}
                      />
                    </a>
                  </div>
                </div>
                <div className="col-xl-4 col-md-4 col-sm-6">
                  <div className="icon-bx-wraper left m-b10">
                    <div className="icon-lg">
                      <a href="#" className="icon-cell">
                        <i className="flaticon-email"></i>
                      </a>
                    </div>
                    <div className="icon-content">
                      <p>
                        <a className="text-white" href="tel:+91 8248663588">
                          +91 8248663588
                        </a>
                        <br />
                        <a className="text-white" href="tel:+91 9994637363">
                          +91 9994637363
                        </a>
                        <br />
                        <a
                          className="text-white"
                          href="mailto:babindiaofficial@gmail.com"
                        >
                          babindiaofficial@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-4 col-sm-6">
                  <div className="icon-bx-wraper left m-b10">
                    <div className="icon-lg">
                      <a href="#" className="icon-cell">
                        <i className="flaticon-location"></i>
                      </a>
                    </div>
                    <div className="icon-content">
                      <p>Marmora Road Chi Minh City, Vietnam</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-xl-3 col-lg-4 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="widget widget_about">
                  <h5 className="footer-title">About Us</h5>
                  <p>
                    Maecenas pellentesque placerat quam, in finibus nisl
                    tincidunt sed. Aliquam magna augue, malesuada ut feugiat
                    eget, cursus eget felis.
                  </p>
                  <div className="dlab-social-icon">
                    <ul>
                      <li>
                        <a
                          className="fa fa-facebook"
                          href="https://www.facebook.com/profile.php?id=100088184373100"
                          aria-label="Bits & Bytes facebook"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="fa fa-instagram"
                          href="https://www.instagram.com/bab_it_solutions/"
                          aria-label="Bits & Bytes Instagram"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="fa fa-twitter"
                          href="https://twitter.com/bab_itsolutions"
                          aria-label="Bits & Bytes twitter"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-2 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div className="widget widget_services">
                  <h5 className="footer-title">Our links</h5>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Team</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.6s"
              >
                <div className="widget widget_services">
                  <h5 className="footer-title">Our Services</h5>
                  <ul>
                    <li>
                      <a href="#">Strategy & Research</a>
                    </li>
                    <li>
                      <a href="#">Web Development</a>
                    </li>
                    <li>
                      <a href="#">Web Solution</a>
                    </li>
                    <li>
                      <a href="#">Digital Marketing</a>
                    </li>
                    <li>
                      <a href="#">App Design </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.8s"
              >
                <div className="widget widget_services">
                  <h5 className="footer-title">Other links</h5>
                  <ul>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Portfolio</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="#">Support </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- footer bottom part --> */}
        <div
          className="footer-bottom wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <span className="copyright-text">
                  Copyright © 2021{" "}
                  <a href="https://www.babindia.com/" target="_blank">
                    BabIndia
                  </a>
                  . All rights reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Footer End --> */}
    </>
  );
}

export default Footer;
