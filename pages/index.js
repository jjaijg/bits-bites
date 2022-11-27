import { useEffect } from "react";
import AboutUs from "../element/aboutUs";
import Blog from "../element/blog";
import Clients from "../element/clients";
import Counter from "../element/counter";
import Cta from "../element/cta";
import Newsletter from "../element/newsletter";
import Features from "../element/our-features-3";
import Pricing from "../element/pricing";
import Projects from "../element/projects";
import Quote from "../element/quote";
import Service from "../element/service-2";
import Slider from "../element/slider-1";
import Team from "../element/team";
import Testimonial from "../element/testimonial";
import Footer from "../layout/footer-2";
import Header from "../layout/header";
function Home() {
  useEffect(() => {
    document.querySelector("body").setAttribute("color", "color_1");
  }, []);
  return (
    <>
      <Header />
      <div className="page-content bg-white" id="top">
        <Slider />
        {/* <Clients /> */}
        <Service />
        <AboutUs />
        <Counter />
        <Features />
        {/* <Projects /> */}
        {/* <Newsletter /> */}
        {/* <Team /> */}
        {/* <Pricing /> */}
        <Testimonial />
        <Blog />
        <Quote />
        <Cta />
      </div>
      <Footer />
    </>
  );
}

export default Home;
