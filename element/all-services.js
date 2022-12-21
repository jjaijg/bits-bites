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
                    Fusce sit amet dui vitae urna tristique imperdiet. Donec
                    eget sapien euismod, faucibus nibh non, consequat elit.
                    Praesent sed vehicula.
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
                    Fusce sit amet dui vitae urna tristique imperdiet. Donec
                    eget sapien euismod, faucibus nibh non, consequat elit.
                    Praesent sed vehicula.
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
                    Fusce sit amet dui vitae urna tristique imperdiet. Donec
                    eget sapien euismod, faucibus nibh non, consequat elit.
                    Praesent sed vehicula.
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
                    Fusce sit amet dui vitae urna tristique imperdiet. Donec
                    eget sapien euismod, faucibus nibh non, consequat elit.
                    Praesent sed vehicula.
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
                    Fusce sit amet dui vitae urna tristique imperdiet. Donec
                    eget sapien euismod, faucibus nibh non, consequat elit.
                    Praesent sed vehicula.
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
                    Fusce sit amet dui vitae urna tristique imperdiet. Donec
                    eget sapien euismod, faucibus nibh non, consequat elit.
                    Praesent sed vehicula.
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
                    Fusce sit amet dui vitae urna tristique imperdiet. Donec
                    eget sapien euismod, faucibus nibh non, consequat elit.
                    Praesent sed vehicula.
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
                    Fusce sit amet dui vitae urna tristique imperdiet. Donec
                    eget sapien euismod, faucibus nibh non, consequat elit.
                    Praesent sed vehicula.
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
                    Fusce sit amet dui vitae urna tristique imperdiet. Donec
                    eget sapien euismod, faucibus nibh non, consequat elit.
                    Praesent sed vehicula.
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
