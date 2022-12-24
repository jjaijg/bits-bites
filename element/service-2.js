import { useState } from "react";

function Service2() {
  const [open, setOpen] = useState("p2");
  return (
    <>
      {/* <!-- Service --> */}
      <section
        className="content-inner-2"
        style={{ backgroundImage: "url(images/background/bg2.png)" }}
      >
        <div className="container">
          <div className="row icon-wraper-1">
            <div className="col-lg-4 col-md-6">
              <div
                className="section-head style-3 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <h6 className="sub-title text-primary bgl-primary m-b15">
                  OUR SERVICES
                </h6>
                <h2 className="title m-t10">
                  We Are Providing Digital Services
                </h2>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className={`${
                  open === "p1"
                    ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active"
                    : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"
                }`}
                onMouseOver={() => setOpen("p1")}
              >
                <div className="icon-bx-sm radius bgl-primary">
                  <a href="#" className="icon-cell">
                    <i className="flaticon-office"></i>
                  </a>
                </div>
                <div className="wraper-effect"></div>
                <div className="icon-content">
                  <h4 className="dlab-title m-b15">Web Design & Development</h4>
                  <p>
                    Your website is the face of your business. The first
                    impression you make on your potential customers is through
                    your website. We don't just build websites, we build
                    websites that SELLS
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className={`${
                  open === "p2"
                    ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active"
                    : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"
                }`}
                onMouseOver={() => setOpen("p2")}
              >
                <div className="icon-bx-sm radius bgl-primary">
                  <a href="#" className="icon-cell">
                    <i className="fa fa-mobile"></i>
                  </a>
                </div>
                <div className="wraper-effect"></div>
                <div className="icon-content">
                  <h4 className="dlab-title m-b15">Mobile Development</h4>
                  <p>
                    Allow us as your trusted mobile app company get you started
                    with designing a customized solution that meets both your
                    individual business needs, as well as the technological
                    changes in the world.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className={`${
                  open === "p3"
                    ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active"
                    : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"
                }`}
                onMouseOver={() => setOpen("p3")}
              >
                <div className="icon-bx-sm radius bgl-primary">
                  <a href="#" className="icon-cell">
                    {/* <i className="flaticon-dollar"></i> */}
                    <i className="fa fa-handshake-o"></i>
                  </a>
                </div>
                <div className="wraper-effect"></div>
                <div className="icon-content">
                  <h4 className="dlab-title m-b15">
                    Hire Our Dedicated Developers
                  </h4>
                  <p>
                    Despite the constraint, our developers are consistently
                    producing error-free, user-friendly and dependable products.
                    We make it a point to innovate to keep up with the latest
                    industry standards and innovations. Get in touch with us
                    today and make your life easier!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className={`${
                  open === "p4"
                    ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active"
                    : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"
                }`}
                onMouseOver={() => setOpen("p4")}
              >
                <div className="icon-bx-sm radius bgl-primary">
                  <a href="#" className="icon-cell">
                    <i className="flaticon-line-graph"></i>
                  </a>
                </div>
                <div className="wraper-effect"></div>
                <div className="icon-content">
                  <h4 className="dlab-title m-b15">SEO & Marketing</h4>
                  <p>
                    Marketing tactics are about who you're trying to please.⁣⁣
                    We think it's time to organize a clean up day and make it
                    beneficial for the whole world.⁣⁣ With BabIndia, you can
                    turn your social media followers into success stories by
                    solving their problems with our marketing and SEO
                    strategies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className={`${
                  open === "p5"
                    ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active"
                    : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"
                }`}
                onMouseOver={() => setOpen("p5")}
              >
                <div className="icon-bx-sm radius bgl-primary">
                  <a href="#" className="icon-cell">
                    <i className="fa fa-cart-plus"></i>
                  </a>
                </div>
                <div className="wraper-effect"></div>
                <div className="icon-content">
                  <h4 className="dlab-title m-b15">ECommerce</h4>
                  <p>
                    The future of ecommerce includes new modes of selling,
                    buying and communicating with retailers and vendors. This
                    will affect the way we do business and what consumers expect
                    from the shopping experience.The way we shop is changing -
                    sooner or later, it's going to be 100% digital! What does
                    this mean for e-commerce? The future for us all? Contact us
                    to know more
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className={`${
                  open === "p8"
                    ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active"
                    : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"
                }`}
                onMouseOver={() => setOpen("p8")}
              >
                <div className="icon-bx-sm radius bgl-primary">
                  <a href="#" className="icon-cell">
                    <i className="fa fa-headphones"></i>
                  </a>
                </div>
                <div className="wraper-effect"></div>
                <div className="icon-content">
                  <h4 className="dlab-title m-b15">BPO Services</h4>
                  <p>
                    When you want to focus on your business, we want to help you
                    succeed. BPO Services are a great way to grow your company
                    and reach its objectives. We are here for you every step of
                    the way - providing you with the professional services that
                    promote efficiency for your company.⁣ Leverage our expertise
                    when it comes to financial management, procurement, human
                    resources, and more.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className={`${
                  open === "p6"
                    ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active"
                    : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"
                }`}
                onMouseOver={() => setOpen("p6")}
              >
                <div className="icon-bx-sm radius bgl-primary">
                  <a href="#" className="icon-cell">
                    <i className="fa fa-money"></i>
                  </a>
                </div>
                <div className="wraper-effect"></div>
                <div className="icon-content">
                  <h4 className="dlab-title m-b15">Payment integration</h4>
                  <p>
                    No matter how much we offer, there’s always a demand for
                    more. Are you an Entrepreneur looking for the best payment
                    integrations without compromising security or transparency?
                    BabIndia got you covered with our help desk and helpful
                    customer service.⁣
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className={`${
                  open === "p7"
                    ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active"
                    : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"
                }`}
                onMouseOver={() => setOpen("p7")}
              >
                <div className="icon-bx-sm radius bgl-primary">
                  <a href="#" className="icon-cell">
                    <i className="fa fa-flask"></i>
                  </a>
                </div>
                <div className="wraper-effect"></div>
                <div className="icon-content">
                  <h4 className="dlab-title m-b15">Application testing</h4>
                  <p>
                    Faster, quicker, better. Applications are constantly
                    evolving and we want to understand the feedback before they
                    go live. Does your app need a fresh perspective from our
                    testing team? Get in touch!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service2;
