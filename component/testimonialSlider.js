import { useState } from "react";
import Slider from "react-slick";

import testimonials from "../data/testimonials.json";

function TestimonialSlider() {
  const [asd, setAsd] = useState();
  const settings = {
    dots: true,
    arrows: false,
    centerMode: true,
    slidesToShow: 3,
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: false,
        },
      },
    ],
  };
  const renderArrows = () => {
    return (
      <div className="owl-nav">
        <div className="owl-prev" onClick={() => asd.slickPrev()}>
          <i className="fa fa-arrow-left"></i>
        </div>
        <div className="owl-next" onClick={() => asd.slickNext()}>
          <i className="fa fa-arrow-right"></i>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="testimonials-carousel1 owl-carousel owl-theme owl-btn-2 owl-btn-white owl-btn-center">
        <Slider ref={(c) => setAsd(c)} {...settings}>
          {/* <div
            className="item wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div className="testimonial-1">
              <div className="testimonial-text">
                <p>
                  “Outstanding services. I would highly recommend Sentersoft for
                  your web design services. Hey they get 5 stars in every
                  category for good reason. A great value as well”
                </p>
              </div>
              <div className="testimonial-detail">
                <div className="clearfix">
                  <strong className="testimonial-name">Venky</strong>
                  <span className="testimonial-position">CEO & Founder </span>
                  <ul className="star-rating">
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="item wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.4s"
          >
            <div className="testimonial-1">
              <div className="testimonial-text">
                <p>
                  “Excellent place to get your custom software solutions
                  designed. Fully satisfied. Market prices.”
                </p>
              </div>
              <div className="testimonial-detail">
                <div className="clearfix">
                  <strong className="testimonial-name">Lora Price</strong>
                  <span className="testimonial-position">CEO & Founder </span>
                  <ul className="star-rating">
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="item wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.6s"
          >
            <div className="testimonial-1">
              <div className="testimonial-text">
                <p>
                  “Your engineer makes things easy for me. He is thorough and
                  polite. I know things are going to get fixed in a timely
                  matter.”
                </p>
              </div>
              <div className="testimonial-detail">
                <div className="clearfix">
                  <strong className="testimonial-name">Cak Dikin</strong>
                  <span className="testimonial-position">CEO & Founder </span>
                  <ul className="star-rating">
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="item wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.6s"
          >
            <div className="testimonial-1">
              <div className="testimonial-text">
                <p>
                  “Fantastic vendor. Trustworthy, highly skilled and experienced
                  team members.”
                </p>
              </div>
              <div className="testimonial-detail">
                <div className="clearfix">
                  <strong className="testimonial-name">Cak Dikin</strong>
                  <span className="testimonial-position">CEO & Founder </span>
                  <ul className="star-rating">
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className="item wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.6s"
          >
            <div className="testimonial-1">
              <div className="testimonial-text">
                <p>
                  “Great work!!! The team was solid, efficient and
                  knowledgeable. They did an amazing job on my very challenging
                  app. I will be using them again. Thank you for doing such a
                  great job!”
                </p>
              </div>
              <div className="testimonial-detail">
                <div className="clearfix">
                  <strong className="testimonial-name">Cak Dikin</strong>
                  <span className="testimonial-position">CEO & Founder </span>
                  <ul className="star-rating">
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
          {testimonials?.map((testimonial) => (
            <div
              key={testimonial.id}
              className="item wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="testimonial-1">
                <div className="testimonial-text">
                  <p>“{testimonial.description}”</p>
                </div>
                <div className="testimonial-detail">
                  <div className="clearfix">
                    <strong className="testimonial-name">
                      {testimonial.by}
                    </strong>
                    <span className="testimonial-position">
                      {testimonial.designation}{" "}
                    </span>
                    <ul className="star-rating">
                      {Array(testimonial.rating)
                        .fill("")
                        .map((_, idx) => (
                          <li key={`${testimonial.id}-rating-${idx}`}>
                            <i className="fa fa-star text-warning"></i>
                          </li>
                        ))}
                      {/* <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li>
                    <li>
                      <i className="fa fa-star text-warning"></i>
                    </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {renderArrows()}
      </div>
    </>
  );
}

export default TestimonialSlider;
