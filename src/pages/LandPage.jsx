import React from "react";
import "./style/reset.css";
import $ from "jquery";
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
import Sliderr from "../components/Slider";

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
                        <a
                          className="more"
                          href="cost_calculator.html"
                          title="REQUEST A QUOTE"
                        >
                          REQUEST A QUOTE
                        </a>
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
                    <a
                      href="service_interior_renovation.html"
                      title="Interior Renovation"
                    >
                      <img src="images/samples/390x260/image_01.jpg" alt="" />
                    </a>
                    <h4 className="box-header">
                      <a
                        href="service_interior_renovation.html"
                        title="Interior Renovation"
                      >
                        INTERIOR RENOVATION
                      </a>
                    </h4>
                    <p>
                      We can help you bring new life to existing rooms and
                      develop unused spaces.
                    </p>
                  </li>
                  <li>
                    <a
                      href="service_design_build.html"
                      title="Design and Build"
                    >
                      <img src="images/samples/390x260/image_02.jpg" alt="" />
                    </a>
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
                    <a
                      href="service_tiling_painting.html"
                      title="Tiling and Painting"
                    >
                      <img src="images/samples/390x260/image_03.jpg" alt="" />
                    </a>
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
                  <a
                    className="more"
                    href="services.html"
                    title="VIEW ALL SERVICES"
                  >
                    VIEW ALL SERVICES
                  </a>
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
                  <a href="project_design_build.html" title="Design and Build">
                    <img src="images/samples/480x320/image_07.jpg" alt="" />
                  </a>
                  <div className="view align-center">
                    <div className="vertical-align-table">
                      <div className="vertical-align-cell">
                        <p className="description">Design and Build</p>
                        <a
                          className="more simple"
                          href="project_design_build.html"
                          title="VIEW PROJECT"
                        >
                          VIEW PROJECT
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    href="project_garden_renovation.html"
                    title="Garden Renovation"
                  >
                    <img src="images/samples/480x320/image_04.jpg" alt="" />
                  </a>
                  <div className="view align-center">
                    <div className="vertical-align-table">
                      <div className="vertical-align-cell">
                        <p className="description">Garden Renovation</p>
                        <a
                          className="more simple"
                          href="project_garden_renovation.html"
                          title="VIEW PROJECT"
                        >
                          VIEW PROJECT
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    href="project_interior_renovation.html"
                    title="Interior Renovation"
                  >
                    <img src="images/samples/480x320/image_05.jpg" alt="" />
                  </a>
                  <div className="view align-center">
                    <div className="vertical-align-table">
                      <div className="vertical-align-cell">
                        <p className="description">Interior Renovation</p>
                        <a
                          className="more simple"
                          href="project_interior_renovation.html"
                          title="VIEW PROJECT"
                        >
                          VIEW PROJECT
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="project_solar_systems.html" title="Solar Systems">
                    <img src="images/samples/480x320/image_06.jpg" alt="" />
                  </a>
                  <div className="view align-center">
                    <div className="vertical-align-table">
                      <div className="vertical-align-cell">
                        <p className="description">Solar Systems</p>
                        <a
                          className="more simple"
                          href="project_solar_systems.html"
                          title="VIEW PROJECT"
                        >
                          VIEW PROJECT
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="row gray full-width padding-top-54 padding-bottom-61 align-center">
              <h3>
                <span className="button-label">EXPLORE OUR PROJECTS</span>{" "}
                <a
                  className="more"
                  href="projects.html"
                  title="VIEW ALL PROJECTS"
                >
                  VIEW ALL PROJECTS
                </a>
              </h3>
            </div>
            {/*<div class="row gray full-width padding-top-bottom-50">
                    <div class="row">
                        <div class="column column-1-2 align-right padding-top-7">
                            <h3>EXPLORE OUR PROJECTS</h3>
                        </div>
                        <div class="column column-1-2">
                            <a class="more float" href="projects.html" title="VIEW ALL PROJECTS">VIEW ALL PROJECTS</a>
                        </div>
                    </div>
                </div>*/}
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
                    <img
                      src="images/samples/480x480/image_10.jpg"
                      alt=""
                      className="radius"
                    />
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
                      <a
                        href="#we-offer"
                        title="We Offer"
                        className="sl-small-bubble-check"
                      >
                        We Offer
                      </a>
                      <span />
                    </li>
                    <li>
                      <a
                        href="#we-guarantee"
                        title="We Guarantee"
                        className="sl-small-shield"
                      >
                        We Guarantee
                      </a>
                      <span />
                    </li>
                    <li>
                      <a
                        href="#we-provide"
                        title="We Provide"
                        className="sl-small-truck"
                      >
                        We Provide
                      </a>
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
            <div className="row full-width padding-top-70 padding-bottom-66 parallax parallax-1">
              <div className="row testimonials-container">
                <a
                  href="#"
                  className="slider-control left template-arrow-left-1"
                />
                <ul className="testimonials-list">
                  <li className="sl-small-conversation">
                    <div className="ornament" />
                    <p>
                      "We would like to thank Renovate Company for an
                      outstanding effort on this recently completed project
                      located in the Moscow. The project involved a very
                      aggressive schedule and it was completed on time. We would
                      certainly like to use their professional services again."
                    </p>
                    <div className="author">MITCHEL SMITH</div>
                    <div className="author-details">
                      CEO OF NEW PORT COMPANY
                    </div>
                  </li>
                  <li className="sl-small-conversation">
                    <div className="ornament" />
                    <p>
                      "We would like to thank Renovate Company for an
                      outstanding effort on this recently completed project
                      located in the Moscow. The project involved a very
                      aggressive schedule and it was completed on time. We would
                      certainly like to use their professional services again."
                    </p>
                    <div className="author">MITCHEL SMITH</div>
                    <div className="author-details">
                      CEO OF NEW PORT COMPANY
                    </div>
                  </li>
                  <li className="sl-small-conversation">
                    <div className="ornament" />
                    <p>
                      "We would like to thank Renovate Company for an
                      outstanding effort on this recently completed project
                      located in the Moscow. The project involved a very
                      aggressive schedule and it was completed on time. We would
                      certainly like to use their professional services again."
                    </p>
                    <div className="author">MITCHEL SMITH</div>
                    <div className="author-details">
                      CEO OF NEW PORT COMPANY
                    </div>
                  </li>
                </ul>
                <a
                  href="#"
                  className="slider-control right template-arrow-left-1"
                />
              </div>
            </div>
            <div className="row gray full-width page-padding-top-section padding-bottom-66">
              <div className="row">
                <h2 className="box-header">WE WORK WITH</h2>
                <div className="our-clients-list-container page-margin-top">
                  <ul className="our-clients-list">
                    <li>
                      <img src="images/logos/logo_01.png" alt="" />
                    </li>
                    <li>
                      <img src="images/logos/logo_02.png" alt="" />
                    </li>
                    <li>
                      <img src="images/logos/logo_03.png" alt="" />
                    </li>
                    <li>
                      <img src="images/logos/logo_04.png" alt="" />
                    </li>
                    <li>
                      <img src="images/logos/logo_05.png" alt="" />
                    </li>
                    <li>
                      <img src="images/logos/logo_06.png" alt="" />
                    </li>
                    <li>
                      <img src="images/logos/logo_06.png" alt="" />
                    </li>
                    <li>
                      <img src="images/logos/logo_05.png" alt="" />
                    </li>
                    <li>
                      <img src="images/logos/logo_04.png" alt="" />
                    </li>
                    <li>
                      <img src="images/logos/logo_03.png" alt="" />
                    </li>
                    <li>
                      <img src="images/logos/logo_02.png" alt="" />
                    </li>
                    <li>
                      <img src="images/logos/logo_01.png" alt="" />
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
                    <a href="mailto:kevin.smith@connect.com">
                      renovate@mail.com
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
                  <a
                    target="_blank"
                    href="https://facebook.com/QuanticaLabs"
                    className="social-facebook"
                    title="facebook"
                  />
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://twitter.com/QuanticaLabs"
                    className="social-twitter"
                    title="twitter"
                  />
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://1.envato.market/quanticalabs-portfolio"
                    className="social-linkedin"
                    title="linkedin"
                  />
                </li>
                <li>
                  <a
                    href="https://pinterest.com/quanticalabs/"
                    className="social-pinterest"
                    title="pinterest"
                  />
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
        <div className="row align-center padding-top-bottom-30">
          <span className="copyright">
            © Copyright 2021{" "}
            <a
              href="https://1.envato.market/renovate-construction-renovation-template"
              title="Renovate Template"
              target="_blank"
            >
              Renovate Template
            </a>{" "}
            by{" "}
            <a
              href="https://quanticalabs.com"
              title="QuanticaLabs"
              target="_blank"
            >
              QuanticaLabs
            </a>
          </span>
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
