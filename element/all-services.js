import { useState } from "react";

function AllServices() {
  const [open, setOpen] = useState("p2");
  return (
    <>
      {/* <!-- Service --> */}
      <section
        className="content-inner"
        style={{ backgroundImage: "url(images/background/bg1.png)" }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.1s"
            >
              <div
                className={`${
                  open === "p1"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p1")}
              >
                <div className="icon-bx-md radius bg-yellow shadow-yellow">
                  <a href="#" className="icon-cell">
                    <i className="flaticon-office"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Web Design & Development</h4>
                  <p>
                    As a web design and development company, we always have new
                    clients with views on what the perfect website should look
                    like. Yes, well-designed websites have many benefits as we
                    all know, but that's not what your customers want. Here at
                    BabIndia, every project is different and has it's own unique
                    set of objectives and features.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div
                className={`${
                  open === "p2"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p2")}
              >
                <div className="icon-bx-md radius bg-red shadow-red">
                  <a href="#" className="icon-cell">
                    <i className="fa fa-mobile"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Mobile Apps Development</h4>
                  <p>
                    Allow us as your trusted mobile app company get you started
                    with designing a customized solution that meets both your
                    individual business needs, as well as the technological
                    changes in the world.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              <div
                className={`${
                  open === "p3"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p3")}
              >
                <div className="icon-bx-md radius bg-green shadow-green">
                  <a href="#" className="icon-cell">
                    <i className="fa fa-handshake-o"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Hire Our Dedicated Developers</h4>
                  <p>
                    Despite the constraint, our developers are consistently
                    producing error-free, user-friendly and dependable products.
                    We make it a point to innovate to keep up with the latest
                    industry standards and innovations. Get in touch with us
                    today and make your life easier!.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <div
                className={`${
                  open === "p4"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p4")}
              >
                <div className="icon-bx-md radius bg-skyblue shadow-skyblue">
                  <a href="#" className="icon-cell">
                    <i className="fa fa-cart-plus"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">E-Commerce</h4>
                  <p>
                    The #futureofecommerce includes new modes of selling, buying
                    and communicating with retailers and vendors. This will
                    affect the way we do business with one another and what
                    consumers expect from the shopping experience.⁣⁣ The way we
                    shop is changing - sooner or later, it’s going to be 100%
                    digital! What does this mean for e-commerce? The future for
                    us all? Contact us to know more
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.5s"
            >
              <div
                className={`${
                  open === "p5"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p5")}
              >
                <div className="icon-bx-md radius bg-orange shadow-orange">
                  <a href="#" className="icon-cell">
                    <i className="flaticon-line-graph"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">SEO & Marketing</h4>
                  <p>
                    Marketing tactics are about who you're trying to please. We
                    think it's time to organize a clean up day and make it
                    beneficial for the whole world. With BabIndia, you can turn
                    your social media followers into success stories by solving
                    their problems with our marketing and SEO strategies.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.5s"
            >
              <div
                className={`${
                  open === "p6"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p6")}
              >
                <div className="icon-bx-md radius bg-yellow shadow-yellow">
                  <a href="#" className="icon-cell">
                    <i className="fa fa-headphones"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">BPO Services</h4>
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
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.6s"
            >
              <div
                className={`${
                  open === "p7"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p7")}
              >
                <div className="icon-bx-md radius bg-green shadow-green">
                  <a href="#" className="icon-cell">
                    <i className="fa fa-money"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Payment Integrations</h4>
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
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.6s"
            >
              <div
                className={`${
                  open === "p8"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p8")}
              >
                <div className="icon-bx-md radius bg-skyblue shadow-skyblue">
                  <a href="#" className="icon-cell">
                    <i className="fa fa-flask"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Application Testing</h4>
                  <p>
                    Faster, quicker, better. Applications are constantly
                    evolving and we want to understand the feedback before they
                    go live. Does your app need a fresh perspective from our
                    testing team? Get in touch!
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.6s"
            >
              <div
                className={`${
                  open === "p9"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p9")}
              >
                <div className="icon-bx-md radius bg-maroon shadow-maroon">
                  <a href="#" className="icon-cell">
                    <i className="flaticon-help"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">24X7 Support</h4>
                  <p>
                    We take pride in providing the best customer service, love
                    and respect We are 24x7 with you, even on important national
                    holidays and weekends. We love to chat with you for hours if
                    we can. And know that we will provide the utmost respect
                    when you need us. Because when our #community members value
                    us, we value them more.
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

export default AllServices;
