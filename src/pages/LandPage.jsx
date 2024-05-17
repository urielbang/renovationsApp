import React from "react";
import "./style/reset.css";

import "./style/superfish.css";
import "./style/prettyPhoto.css";
import "./style/jquery.qtip.css";
import "./style/style.css";
import "./style/animations.css";
import "./style/responsive.css";
import "./style/odometer-theme-default.css";
import "./fonts/streamline-small/styles.css";
import "./fonts/streamline-large/styles.css";
import "./fonts/template/styles.css";
import "./fonts/social/styles.css";
import img from "../assets/images/samples/390x260/image_01.jpg";
import img2 from "../assets/images/samples/390x260/image_02.jpg";
import img3 from "../assets/images/samples/390x260/image_03.jpg";

import projectImg from "../assets/images/samples/480x320/image_04.jpg";
import projectImg1 from "../assets/images/samples/480x320/image_05.jpg";
import projectImg2 from "../assets/images/samples/480x320/image_06.jpg";
import projectImg3 from "../assets/images/samples/480x320/image_07.jpg";
import warper from "../assets/images/samples/480x480/image_10.jpg";
import logo from "../assets/images/logos/logo_01.png";
import logo1 from "../assets/images/logos/logo_02.png";
import logo2 from "../assets/images/logos/logo_03.png";
import logo3 from "../assets/images/logos/logo_04.png";
import logo4 from "../assets/images/logos/logo_05.png";
import logo5 from "../assets/images/logos/logo_06.png";
import logo6 from "../assets/images/logos/logo_06.png";
import logo7 from "../assets/images/logos/logo_04.png";
import logo8 from "../assets/images/logos/logo_03.png";
import logo9 from "../assets/images/logos/logo_02.png";
import logo10 from "../assets/images/logos/logo_01.png";
import Sliderr from "../components/Slider";

import { Link } from "react-router-dom";
function LandPage() {
  return (
    <div>
      <div className="site-container">
        {/* Slider Revolution */}
        <Sliderr />
        {/*/*/}
        <div className="theme-page">
          <div className="clearfix">
            <div className="row full-width">
              <div className="announcement clearfix">
                <ul className="columns no-width">
                  <li className="column column-3-4">
                    <div className="vertical-align">
                      <div className="vertical-align-cell sl-small-wallet">
                        <h3>COST OF RENOVATION</h3>
                        <p className="description">
                          Use our form to estimate the initial cost of
                          renovation or installation.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="column-right column-1-4">
                    <div className="vertical-align">
                      <div className="vertical-align-cell">
                        <Link to="/calculator" className="more">
                          REQUEST A QUOTE
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row full-width gray page-padding-top-section">
              <div className="row">
                <h2 className="box-header">OUR SERVICES</h2>
                <p className="description align-center">
                  With over 15 years experience and real focus on customer
                  satisfaction, you can rely on us for your next renovation,
                  <br />
                  driveway sett or home repair. We provide a professional
                  service for private and commercial customers.
                </p>
                <ul className="services-list clearfix page-margin-top">
                  <li>
                    <Link to="/serviceInterior" title="Interior Renovation">
                      <img src={img} alt="" />
                    </Link>
                    <h4 className="box-header">
                      <Link to="/serviceInterior" title="Interior Renovation">
                        INTERIOR RENOVATION
                      </Link>
                    </h4>
                    <p>
                      We can help you bring new life to existing rooms and
                      develop unused spaces.
                    </p>
                  </li>
                  <li>
                    <Link to="/serviceDesign">
                      <img src={img3} alt="" />
                    </Link>
                    <h4 className="box-header">
                      <a
                        href="service_design_build.html"
                        title="Design and Build"
                      >
                        DESIGN AND BUILD
                      </a>
                    </h4>
                    <p>
                      From initial design and project specification to
                      archieving a high end finish.
                    </p>
                  </li>
                  <li>
                    <Link to="/serviceDesign">
                      <img src={img2} alt="" />
                    </Link>
                    <h4 className="box-header">
                      <a
                        href="service_tiling_painting.html"
                        title="Tiling and Painting"
                      >
                        TILING AND PAINTING
                      </a>
                    </h4>
                    <p>
                      We offer quality tiling and painting solutions for
                      interior and exterior.
                    </p>
                  </li>
                </ul>
                <div className="align-center margin-top-67 padding-bottom-87">
                  <Link to="/services" className="more">
                    VIEW ALL SERVICES
                  </Link>
                </div>
              </div>
            </div>
            <div className="row full-width page-margin-top-section">
              <div className="row">
                <h2 className="box-header">RECENT PROJECTS</h2>
                <p className="description align-center">
                  Here are a few of many projects we have completed for our
                  customers. We provide a professional service
                  <br />
                  which includes consultation, free estimate, design, supply of
                  materials and installation.
                </p>
              </div>
              <ul className="projects-list clearfix page-margin-top">
                <li>
                  <Link to="/oneProject/:id">
                    <img src={projectImg3} alt="" />
                  </Link>
                  <div className="view align-center">
                    <div className="vertical-align-table">
                      <div className="vertical-align-cell">
                        <p className="description">Design and Build</p>
                        <Link to="/projectDesign" className="more simple">
                          VIEW PROJECT
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to="/oneProject/:id">
                    <img src={projectImg} alt="" />
                  </Link>
                  <div className="view align-center">
                    <div className="vertical-align-table">
                      <div className="vertical-align-cell">
                        <p className="description">Garden Renovation</p>
                        <Link to="/oneProject/:id" className="more simple">
                          VIEW PROJECT
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to="/oneProject/:id">
                    <img src={projectImg1} alt="" />
                  </Link>
                  <div className="view align-center">
                    <div className="vertical-align-table">
                      <div className="vertical-align-cell">
                        <p className="description">Interior Renovation</p>
                        <Link to="/oneProject/:id" className="more simple">
                          VIEW PROJECT
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to="/oneProject/:id">
                    <img src={projectImg2} alt="" />
                  </Link>
                  <div className="view align-center">
                    <div className="vertical-align-table">
                      <div className="vertical-align-cell">
                        <p className="description">Solar Systems</p>
                        <Link to="/oneProject/:id" className="more simple">
                          VIEW PROJECT
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="row gray full-width padding-top-54 padding-bottom-61 align-center">
              <h3>
                <span className="button-label">EXPLORE OUR PROJECTS</span>{" "}
                <Link to="/projects" className="more">
                  VIEW ALL PROJECTS
                </Link>
              </h3>
            </div>

            <div className="row page-margin-top-section">
              <div className="row">
                <h2 className="box-header">ABOUT US</h2>
                <p className="description align-center">
                  We provide a professional renovation and installation services
                  with a real focus on customer satisfaction.
                  <br />
                  Our installations are carried out by fully trained staff to
                  the highest professional standards.
                </p>
              </div>
              <div className="row page-margin-top">
                <div className="column column-1-2 align-center re-preload">
                  <div className="image-wrapper">
                    <img src={warper} alt="" className="radius" />
                  </div>
                </div>
                <div className="column column-1-2">
                  <ul className="features-list">
                    <li className="sl-small-helmet margin-top-40">
                      <h4>OVER 15 YEARS EXPERIENCE</h4>
                      <p>
                        We combine quality workmanship, superior knowledge and
                        low prices to provide you with service unmatched by our
                        competitors.
                      </p>
                    </li>
                    <li className="sl-small-roller">
                      <h4>BEST MATERIALS</h4>
                      <p>
                        We have the experience, personel and resources to make
                        the project run smoothly. We can ensure a job is done on
                        time.
                      </p>
                    </li>
                    <li className="sl-small-driller">
                      <h4>PROFESSIONAL STANDARDS</h4>
                      <p>
                        Work with us involve a carefully planned series of
                        steps, centered around a schedule we stick to and daily
                        communication.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row gray full-width page-margin-top-section page-padding-top-section padding-bottom-66">
              <div className="row">
                <div className="tabs no-scroll clearfix">
                  <ul className="tabs-navigation clearfix">
                    <li>
                      <Link className="sl-small-bubble-check">We Offer</Link>
                      <span />
                    </li>
                    <li>
                      <Link className="sl-small-shield">We Guarantee</Link>
                      <span />
                    </li>
                    <li>
                      <Link className="sl-small-truck">We Provide</Link>
                      <span />
                    </li>
                  </ul>
                  <div id="we-offer">
                    <h4 className="box-header">OUR OFFER</h4>
                    <p>
                      Paetos dignissim at cursus elefeind norma arcu.
                      Pellentesque accumsan est in tempus etos ullamcorper, sem
                      quam suscipit lacus maecenas tortor. Erates vitae node
                      metus. Suspendisse gravida ornare non mattis velit rutrum
                      modest. Morbi suspendisse a tortor velim pellentesque uter
                      justo magna gravida.
                    </p>
                  </div>
                  <div id="we-guarantee">
                    <h4 className="box-header">OUR WARRANTY COVERS</h4>
                    <p>
                      Paetos dignissim at cursus elefeind norma arcu.
                      Pellentesque accumsan est in tempus etos ullamcorper, sem
                      quam suscipit lacus maecenas tortor. Erates vitae node
                      metus. Suspendisse gravida ornare non mattis velit rutrum
                      modest. Morbi suspendisse a tortor velim pellentesque uter
                      justo magna gravida.
                    </p>
                  </div>
                  <div id="we-provide">
                    <h4 className="box-header">OUR SERVICES</h4>
                    <p>
                      Paetos dignissim at cursus elefeind norma arcu.
                      Pellentesque accumsan est in tempus etos ullamcorper, sem
                      quam suscipit lacus maecenas tortor. Erates vitae node
                      metus. Suspendisse gravida ornare non mattis velit rutrum
                      modest. Morbi suspendisse a tortor velim pellentesque uter
                      justo magna gravida.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row page-margin-top-section padding-bottom-66">
              <h2 className="box-header">WHY CHOOSE RENOVATE</h2>
              <p className="description align-center">
                Founded by Kevin Smith back in 2000, Renovate has established
                itself as one of the greatest and prestigious
                <br />
                providers of construction focused interior renovation services
                and building.
              </p>
              <div className="row page-margin-top">
                <div className="column column-1-3">
                  <ul className="features-list big">
                    <li className="sl-large-house-1">
                      <div className="ornament" />
                      <h4 className="box-header page-margin-top">
                        OVER 15 YEARS EXPERIENCE
                      </h4>
                      <p>
                        Morbi nulla tortor, dignissim est node cursus euismod
                        est arcu. Nomad at vehicula novum justo magna.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="column column-1-3">
                  <ul className="features-list big">
                    <li className="sl-large-eco">
                      <div className="ornament" />
                      <h4 className="box-header page-margin-top">
                        BEST MATERIALS
                      </h4>
                      <p>
                        Morbi nulla tortor, dignissim est node cursus euismod
                        est arcu. Nomad at vehicula novum justo magna.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="column column-1-3">
                  <ul className="features-list big">
                    <li className="sl-large-garage">
                      <div className="ornament" />
                      <h4 className="box-header page-margin-top">
                        PROFESSIONAL STANDARDS
                      </h4>
                      <p>
                        Morbi nulla tortor, dignissim est node cursus euismod
                        est arcu. Nomad at vehicula novum justo magna.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row gray full-width page-padding-top-section padding-bottom-66">
              <div className="row">
                <h2 className="box-header">WE WORK WITH</h2>
                <div className="our-clients-list-container page-margin-top">
                  <ul className="our-clients-list">
                    <li>
                      <img src={logo} alt="" />
                    </li>
                    <li>
                      <img src={logo1} alt="" />
                    </li>
                    <li>
                      <img src={logo2} alt="" />{" "}
                    </li>
                    <li>
                      <img src={logo3} alt="" />{" "}
                    </li>
                    <li>
                      <img src={logo4} alt="" />{" "}
                    </li>
                    <li>
                      <img src={logo5} alt="" />{" "}
                    </li>
                    <li>
                      <img src={logo6} alt="" />{" "}
                    </li>
                    <li>
                      <img src={logo7} alt="" />{" "}
                    </li>
                    <li>
                      <img src={logo8} alt="" />{" "}
                    </li>
                    <li>
                      <img src={logo9} alt="" />{" "}
                    </li>
                    <li>
                      <img src={logo10} alt="" />{" "}
                    </li>
                    <li>
                      <img src={logo} alt="" />{" "}
                    </li>
                  </ul>
                  <div className="re-carousel-pagination" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row yellow full-width padding-top-bottom-30">
          <div className="row">
            <div className="column column-1-3">
              <ul className="contact-details-list">
                <li className="sl-small-phone">
                  <p>
                    Phone:
                    <br />
                    +149 75 23 222 35
                  </p>
                </li>
              </ul>
            </div>
            <div className="column column-1-3">
              <ul className="contact-details-list">
                <li className="sl-small-location">
                  <p>
                    272 Linden Avenue
                    <br />
                    Winter Park, FL 32789
                  </p>
                </li>
              </ul>
            </div>
            <div className="column column-1-3">
              <ul className="contact-details-list">
                <li className="sl-small-mail">
                  <p>
                    E-mail:
                    <br />
                    <a href="mailto:adiSambata@gmail.com">
                      adiSambata@gmail.com
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row gray full-width page-padding-top padding-bottom-50">
          <div className="row row-4-4">
            <div className="column column-1-4">
              <h6 className="box-header">About Us</h6>
              <p className="description t1">
                Founded by Kevin Smith back in 2000. Renovate has estabilished
                itself as one of the greatest and prestigious providers of
                construction focused interior renovation services and building.
              </p>
              <ul className="social-icons yellow margin-top-26">
                <li>
                  <Link className="social-facebook" />
                </li>
                <li>
                  <Link className="social-twitter" />
                </li>
                <li>
                  <Link className="social-linkedin" />
                </li>
                <li>
                  <Link className="social-pinterest" />
                </li>
              </ul>
            </div>
            <div className="column column-1-4">
              <h6 className="box-header">Our Services</h6>
              <ul className="list margin-top-20">
                <li className="template-bullet">Interior Renovation</li>
                <li className="template-bullet">Design and Build</li>
                <li className="template-bullet">Tiling and Painting</li>
                <li className="template-bullet">Paver Walkways</li>
                <li className="template-bullet">Household Repairs</li>
                <li className="template-bullet">Solar Systems</li>
              </ul>
            </div>
            <div className="column column-1-4">
              <h6 className="box-header">Categories</h6>
              <ul className="taxonomies margin-top-30">
                <li>
                  <a href="category.html" title="BUILD">
                    BUILD
                  </a>
                </li>
                <li>
                  <a href="category.html" title="DESIGN">
                    DESIGN
                  </a>
                </li>
                <li>
                  <a href="category.html" title="FLOORING">
                    FLOORING
                  </a>
                </li>
                <li>
                  <a href="category.html" title="PAINTING">
                    PAINTING
                  </a>
                </li>
                <li>
                  <a href="category.html" title="PAVERS">
                    PAVERS
                  </a>
                </li>
                <li>
                  <a href="category.html" title="PLUMBING">
                    PLUMBING
                  </a>
                </li>
                <li>
                  <a href="category.html" title="RENOVATION">
                    RENOVATION
                  </a>
                </li>
                <li>
                  <a href="category.html" title="REPAIRS">
                    REPAIRS
                  </a>
                </li>
                <li>
                  <a href="category.html" title="SOLAR SYSTEMS">
                    SOLAR SYSTEMS
                  </a>
                </li>
                <li>
                  <a href="category.html" title="TILING">
                    TILING
                  </a>
                </li>
              </ul>
            </div>
            <div className="column column-1-4">
              <h6 className="box-header">Latest Posts</h6>
              <ul className="blog small margin-top-30">
                <li>
                  <a
                    href="post.html"
                    title="What a Difference a Few Months Make"
                    className="post-image"
                  >
                    <img src="images/samples/90x90/image_10.jpg" alt="" />
                  </a>
                  <div className="post-content">
                    <a
                      href="post.html"
                      title="What a Difference a Few Months Make"
                    >
                      What a Difference a Few Months Make
                    </a>
                    <ul className="post-details">
                      <li className="date">April 25, 2015</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a
                    href="post.html"
                    title="Kitchen and Living Room Renovation"
                    className="post-image"
                  >
                    <img src="images/samples/90x90/image_07.jpg" alt="" />
                  </a>
                  <div className="post-content">
                    <a
                      href="post.html"
                      title="Kitchen and Living Room Renovation"
                    >
                      Kitchen and Living Room Renovation
                    </a>
                    <ul className="post-details">
                      <li className="date">April 17, 2015</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#top"
        className="scroll-top animated-element template-arrow-up"
        title="Scroll to top"
      />
    </div>
  );
}

export default LandPage;
