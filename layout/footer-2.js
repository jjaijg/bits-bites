function Footer2() {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer
        className="site-footer style-2"
        id="footer"
        style={{ backgroundImage: "url(images/background/bg4.png)" }}
      >
        <div className="container">
          <div
            className="dlab-subscribe style-1 wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div className="row align-items-center">
              <div className="col-lg-7">
                <h2 className="title">
                  Subscribe To Our Newsletter For Latest Update
                </h2>
              </div>
              <div className="col-lg-5">
                <form
                  className="dzSubscribe"
                  action="script/mailchamp.php"
                  method="post"
                >
                  <div className="dzSubscribeMsg"></div>
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        name="dzEmail"
                        required="required"
                        type="email"
                        className="form-control"
                        placeholder="Your Email Address"
                      />
                      <div className="input-group-addon">
                        <button
                          name="submit"
                          value="Submit"
                          type="submit"
                          className="btn btn-primary gradient fa fa-paper-plane-o"
                          aria-label="subscirbe now"
                        ></button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-3 col-lg-4 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="widget widget_about">
                  <div className="footer-logo">
                    <a href="/" aria-label="Bits & Bytes Logo">
                      <img
                        src="images/logo.png"
                        alt=""
                        width={"110px"}
                        // height={"100px"}
                      />
                    </a>
                  </div>
                  <div className="widget widget_getintuch">
                    <ul>
                      <li>
                        <i className="fa fa-phone gradient"></i>
                        <span>
                          <a className="text-white" href="tel:+91 8248663588">
                            +91 82486 63588
                          </a>
                          <br />
                          <a className="text-white" href="tel:+91 9994637363">
                            +91 99946 37363
                          </a>
                        </span>
                      </li>
                      <li>
                        <i className="fa fa-envelope gradient"></i>
                        <span>
                          <a
                            className="text-white"
                            href="mailto:admin@babindia.com"
                          >
                            admin@babindia.com
                          </a>
                        </span>
                      </li>
                      <li>
                        <i className="fa fa-map-marker gradient"></i>
                        <address>
                          Rajiv nagar, Kovilpatti, <br /> Tamil Nadu
                          <br />
                          India - 628501
                        </address>
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
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/about-us">About Us</a>
                    </li>
                    <li>
                      <a href="/service-details">Services</a>
                    </li>
                    {/* <li>
                      <a href="#">Team</a>
                    </li> */}
                    {/* <li>
                      <a href="#">Blog</a>
                    </li> */}
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
                      <a href="#">Mobile Development</a>
                    </li>
                    <li>
                      <a href="#">Web Development</a>
                    </li>
                    <li>
                      <a href="#">SEO & Marketing</a>
                    </li>
                    <li>
                      <a href="#">BPO Services</a>
                    </li>
                    <li>
                      <a href="#">E-Commerce </a>
                    </li>
                    <li>
                      <a href="#">Hire Us </a>
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
                    {/* <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Portfolio</a>
                    </li> */}
                    <li>
                      <a href="/privacy-policy">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/terms-and-conditions">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="/contact-us">Support </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- footer bottom part --> */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-7 text-left">
                <span className="copyright-text">
                  Copyright © 2022{" "}
                  <a href="#" target="_blank">
                    BaB IT Solutions
                  </a>
                  . All rights reserved.
                </span>
              </div>
              <div className="col-lg-6 col-md-5 text-right">
                <div className="dlab-social-icon">
                  <ul>
                    <li>
                      <a
                        className="fa fa-facebook"
                        href="https://en-gb.facebook.com/"
                      ></a>
                    </li>
                    <li>
                      <a
                        className="fa fa-instagram"
                        href="https://www.instagram.com/"
                      ></a>
                    </li>
                    <li>
                      <a
                        className="fa fa-twitter"
                        href="https://twitter.com/login?lang=en"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Footer End --></footer> */}
    </>
  );
}

export default Footer2;
