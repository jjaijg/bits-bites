import Link from "next/link";
import { useState } from "react";
function Header3() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState("home");
  return (
    <>
      {/* <!-- Header --> */}
      <header
        className="site-header header-transparent mo-left"
        id="fix-header"
      >
        {/* <!-- Main Header --> */}
        <div className="sticky-header main-bar-wraper navbar-expand-lg">
          <div className="main-bar clearfix ">
            <div className="container clearfix">
              {/* <!-- Website Logo --> */}
              <div className="logo-header mostion logo-dark">
                <Link href="/">
                  <a aria-label="Bits & Bytes Logo">
                    <img
                      className="custom-logo-white"
                      src="images/logo-white.png"
                      alt="Bits & Bytes Logo"
                    />
                    <img
                      className="custom-logo"
                      src="images/logo.png"
                      alt="Bits & Bytes Logo"
                    />
                  </a>
                </Link>
              </div>
              {/* <!-- Nav Toggle Button --> */}
              <button
                className={`navbar-toggler collapsed navicon justify-content-end ${
                  show ? "open" : ""
                }`}
                onClick={() => setShow(!show)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              {/* <!-- Extra Nav --> */}
              <div className="extra-nav">
                <div className="extra-cell">
                  <Link href="contact-us">
                    <a className="btn btn-corner gradient btn-primary">
                      <i className="fa fa-angle-right m-r10"></i>Get A Quote
                    </a>
                  </Link>
                </div>
              </div>
              <div
                className={`header-nav navbar-collapse collapse justify-content-end ${
                  show ? "show" : ""
                }`}
                id="navbarNavDropdown"
              >
                <div className="logo-header">
                  <Link href="/">
                    <a aria-label="Bits & Bytes Logo">
                      <img src="images/logo.png" alt="Bits & Bytes Logo" />
                    </a>
                  </Link>
                </div>
                <ul className="nav navbar-nav navbar">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services-details">
                      <a>Services</a>
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/blog-large-right-sidebar">
                      <a>Blog</a>
                    </Link>
                  </li> */}
                </ul>
                <div className="dlab-social-icon">
                  <ul>
                    <Link href="https://www.facebook.com/profile.php?id=100088184373100">
                      <a
                        className="fa fa-facebook"
                        aria-label="Bits & Bytes facebook"
                      ></a>
                    </Link>
                    <Link href="https://twitter.com/bab_itsolutions">
                      <a
                        className="fa fa-twitter"
                        aria-label="Bits & Bytes twitter"
                      ></a>
                    </Link>
                    {/* <Link href="https://www.linkedin.com/login">
                      <a
                        className="fa fa-linkedin"
                        aria-label="Bits & Bytes Linkedin"
                      ></a>
                    </Link> */}
                    <Link href="https://www.instagram.com/bab_it_solutions/">
                      <a
                        className="fa fa-instagram"
                        aria-label="Bits & Bytes instagram"
                      ></a>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Main Header End --> */}
      </header>
      {/* <!-- Header End --> */}
    </>
  );
}

export default Header3;
