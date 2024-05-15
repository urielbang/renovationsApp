import React from "react";
import Sliderr from "./Slider";

export default function Home2() {
  return (
    <div className="site-container">
      {/* Slider Revolution */}
      <Sliderr />
      {/*/*/}
      <div className="theme-page">
        <div className="clearfix">
          <div className="row page-margin-top-section">
            <div className="column column-1-4">
              <ul className="features-list big">
                <li className="sl-large-house-2">
                  <div className="ornament" />
                  <h4 className="box-header page-margin-top">WE'RE EXPERTS</h4>
                  <p>
                    Morbi nulla tortor, dignissim est node cursus euismod est
                    arcu. Nomad at vehicula novum justo magna.
                  </p>
                </li>
              </ul>
            </div>
            <div className="column column-1-4">
              <ul className="features-list big">
                <li className="sl-large-team">
                  <div className="ornament" />
                  <h4 className="box-header page-margin-top">WE'RE FRIENDLY</h4>
                  <p>
                    Morbi nulla tortor, dignissim est node cursus euismod est
                    arcu. Nomad at vehicula novum justo magna.
                  </p>
                </li>
              </ul>
            </div>
            <div className="column column-1-4">
              <ul className="features-list big">
                <li className="sl-large-measure">
                  <div className="ornament" />
                  <h4 className="box-header page-margin-top">WE'RE ACCURATE</h4>
                  <p>
                    Morbi nulla tortor, dignissim est node cursus euismod est
                    arcu. Nomad at vehicula novum justo magna.
                  </p>
                </li>
              </ul>
            </div>
            <div className="column column-1-4">
              <ul className="features-list big">
                <li className="sl-large-brush-2">
                  <div className="ornament" />
                  <h4 className="box-header page-margin-top">WE'RE TRUSTED</h4>
                  <p>
                    Morbi nulla tortor, dignissim est node cursus euismod est
                    arcu. Nomad at vehicula novum justo magna.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="row full-width gray flex-box page-margin-top-section">
            <div className="column column-1-3 padding-left-right-100 padding-bottom-50">
              <h3 className="box-header page-margin-top-section">WHAT WE DO</h3>
              <p className="description t1 margin-top-34">
                Founded by Kevin Smith back in 2000, Renovate has established
                itself as one of the greatest
                <br />
                providers of construction services.
              </p>
              <ul className="list margin-top-26">
                <li className="template-bullet">
                  <span>Quality Workmanship and Superior Knowledge</span>
                </li>
                <li className="template-bullet">
                  <span>A Job is Done on Time and on Budget</span>
                </li>
                <li className="template-bullet">
                  <span>Proven Results for Setting Exceptional Standards</span>
                </li>
                <li className="template-bullet">
                  <span>Professional Service for Private and Commercial</span>
                </li>
              </ul>
              <div className="page-margin-top padding-bottom-17">
                <a className="more" href="services.html" title="OUR SERVICES">
                  OUR SERVICES
                </a>
              </div>
            </div>
            <div className="column column-1-3 background-1">
              <img
                className="flex-hide"
                src="images/samples/750x500/image_07.jpg"
                alt=""
              />
            </div>
            <div className="column column-1-3 padding-left-right-100 padding-bottom-50">
              <h3 className="box-header page-margin-top-section">OUR SKILLS</h3>
              <p className="description t1 margin-top-34">
                Founded by Kevin Smith back in 2000, Renovate has established
                itself as one of the greatest
                <br />
                providers of construction services.
              </p>
              <div className="progress-bar margin-top-34">
                <div className="single-bar">
                  <small className="bar-label">
                    Interior Renovation{" "}
                    <span className="bar-label-units">95%</span>
                  </small>
                  <span
                    data-percentage-value={95}
                    className="bar animated-element"
                  />
                </div>
                <div className="single-bar">
                  <small className="bar-label">
                    Paver Walkways <span className="bar-label-units">72%</span>
                  </small>
                  <span
                    data-percentage-value={72}
                    className="bar animated-element"
                  />
                </div>
                <div className="single-bar">
                  <small className="bar-label">
                    Tiling and Painting{" "}
                    <span className="bar-label-units">60%</span>
                  </small>
                  <span
                    data-percentage-value={60}
                    className="bar animated-element"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row page-margin-top-section">
            <div className="row">
              <h2 className="box-header">RECENT NEWS</h2>
              <p className="description align-center">
                Founded by Kevin Smith back in 2000, Renovate has established
                itself as one of the greatest and prestigous
                <br /> providers of construction focused interior renovation
                services and building.
              </p>
            </div>
            <div className="carousel-container page-margin-top clearfix">
              <ul className="blog horizontal-carousel three-columns autoplay-0 pause_on_hover-1">
                <li className="column column-1-3">
                  <a
                    href="post.html"
                    title="What a Difference a Few Months Make"
                    className="post-image"
                  >
                    <img src="images/samples/750x500/image_10.jpg" alt="" />
                  </a>
                  <ul className="post-details">
                    <li className="date template-calendar">
                      Apr<h2>25</h2>2015
                    </li>
                    <li className="template-eye">2 325</li>
                    <li className="template-bubble">
                      <a href="post.html#comments-list" title="5 comments">
                        5
                      </a>
                    </li>
                  </ul>
                  <h4>
                    <a href="post.html">WHAT A DIFFERENCE A FEW MONTHS MAKE</a>
                  </h4>
                  <p className="description t1">
                    Paetos dignissim at cursus elefeind norma arcu. Pellentesque
                    mode accumsan est in tempus, etos at ullamcorper quam
                    suscipit lacus maecenas tortor.
                  </p>
                </li>
                <li className="column column-1-3">
                  <a
                    href="post.html"
                    title="Kitchen And Living Room Renovation"
                    className="post-image"
                  >
                    <img src="images/samples/750x500/image_07.jpg" alt="" />
                  </a>
                  <ul className="post-details">
                    <li className="date template-calendar">
                      Apr<h2>17</h2>2015
                    </li>
                    <li className="template-eye">2 125</li>
                    <li className="template-bubble">
                      <a href="post.html#comments-list" title="5 comments">
                        5
                      </a>
                    </li>
                  </ul>
                  <h4>
                    <a href="post.html">KITCHEN AND LIVING ROOM RENOVATION</a>
                  </h4>
                  <p className="description t1">
                    Paetos dignissim at cursus elefeind norma arcu. Pellentesque
                    mode accumsan est in tempus, etos at ullamcorper quam
                    suscipit lacus maecenas tortor.
                  </p>
                </li>
                <li className="column column-1-3">
                  <a
                    href="post.html"
                    title="Signs You Need Drain Repair Services"
                    className="post-image"
                  >
                    <img src="images/samples/750x500/image_05.jpg" alt="" />
                  </a>
                  <ul className="post-details">
                    <li className="date template-calendar">
                      Apr<h2>17</h2>2015
                    </li>
                    <li className="template-eye">2 125</li>
                    <li className="template-bubble">
                      <a href="post.html#comments-list" title="5 comments">
                        5
                      </a>
                    </li>
                  </ul>
                  <h4>
                    <a href="post.html">SIGNS YOU NEED DRAIN REPAIR SERVICES</a>
                  </h4>
                  <p className="description t1">
                    Paetos dignissim at cursus elefeind norma arcu. Pellentesque
                    mode accumsan est in tempus, etos at ullamcorper quam
                    suscipit lacus maecenas tortor.
                  </p>
                </li>
                <li className="column column-1-3">
                  <a
                    href="post.html"
                    title="Steps To Improve Joint Placement"
                    className="post-image"
                  >
                    <img src="images/samples/750x500/image_09.jpg" alt="" />
                  </a>
                  <ul className="post-details">
                    <li className="date template-calendar">
                      Apr<h2>17</h2>2015
                    </li>
                    <li className="template-eye">2 125</li>
                    <li className="template-bubble">
                      <a href="post.html#comments-list" title="5 comments">
                        5
                      </a>
                    </li>
                  </ul>
                  <h4>
                    <a href="post.html">STEPS TO IMPROVE JOINT PLACEMENT</a>
                  </h4>
                  <p className="description t1">
                    Paetos dignissim at cursus elefeind norma arcu. Pellentesque
                    mode accumsan est in tempus, etos at ullamcorper quam
                    suscipit lacus maecenas tortor.
                  </p>
                </li>
                <li className="column column-1-3">
                  <ul className="post-details">
                    <li className="date template-calendar">
                      Apr<h2>17</h2>2015
                    </li>
                    <li className="template-eye">2 125</li>
                    <li className="template-bubble">
                      <a href="post.html#comments-list" title="5 comments">
                        5
                      </a>
                    </li>
                  </ul>
                  <h4>
                    <a href="post.html">HOW TO CHOOSE A RELIABLE COMPANY</a>
                  </h4>
                  <p className="description t1">
                    Paetos dignissim at cursus elefeind norma arcu. Pellentesque
                    mode accumsan est in tempus, etos at ullamcorper quam
                    suscipit lacus maecenas tortor.
                  </p>
                </li>
                <li className="column column-1-3">
                  <a
                    href="post.html"
                    title="Installation Of Click Laminate Flooring"
                    className="post-image"
                  >
                    <img src="images/samples/750x500/image_01.jpg" alt="" />
                  </a>
                  <ul className="post-details">
                    <li className="date template-calendar">
                      Apr<h2>17</h2>2015
                    </li>
                    <li className="template-eye">2 125</li>
                    <li className="template-bubble">
                      <a href="post.html#comments-list" title="5 comments">
                        5
                      </a>
                    </li>
                  </ul>
                  <h4>
                    <a href="post.html">
                      INSTALLATION OF CLICK LAMINATE FLOORING
                    </a>
                  </h4>
                  <p className="description t1">
                    Paetos dignissim at cursus elefeind norma arcu. Pellentesque
                    mode accumsan est in tempus, etos at ullamcorper quam
                    suscipit lacus maecenas tortor.
                  </p>
                </li>
                <li className="column column-1-3">
                  <a
                    href="post.html"
                    title="What a Difference a Few Months Make"
                    className="post-image"
                  >
                    <img src="images/samples/750x500/image_06.jpg" alt="" />
                  </a>
                  <ul className="post-details">
                    <li className="date template-calendar">
                      Apr<h2>10</h2>2015
                    </li>
                    <li className="template-eye">2 325</li>
                    <li className="template-bubble">
                      <a href="post.html#comments-list" title="5 comments">
                        5
                      </a>
                    </li>
                  </ul>
                  <h4>
                    <a href="post.html">WHAT A DIFFERENCE A FEW MONTHS MAKE</a>
                  </h4>
                  <p className="description t1">
                    Paetos dignissim at cursus elefeind norma arcu. Pellentesque
                    mode accumsan est in tempus, etos at ullamcorper quam
                    suscipit lacus maecenas tortor.
                  </p>
                </li>
                <li className="column column-1-3">
                  <a
                    href="post.html"
                    title="Kitchen And Living Room Renovation"
                    className="post-image"
                  >
                    <img src="images/samples/750x500/image_03.jpg" alt="" />
                  </a>
                  <ul className="post-details">
                    <li className="date template-calendar">
                      Apr<h2>10</h2>2015
                    </li>
                    <li className="template-eye">2 125</li>
                    <li className="template-bubble">
                      <a href="post.html#comments-list" title="5 comments">
                        5
                      </a>
                    </li>
                  </ul>
                  <h4>
                    <a href="post.html">KITCHEN AND LIVING ROOM RENOVATION</a>
                  </h4>
                  <p className="description t1">
                    Paetos dignissim at cursus elefeind norma arcu. Pellentesque
                    mode accumsan est in tempus, etos at ullamcorper quam
                    suscipit lacus maecenas tortor.
                  </p>
                </li>
                <li className="column column-1-3">
                  <a
                    href="post.html"
                    title="Signs You Need Drain Repair Services"
                    className="post-image"
                  >
                    <img src="images/samples/750x500/image_08.jpg" alt="" />
                  </a>
                  <ul className="post-details">
                    <li className="date template-calendar">
                      Apr<h2>10</h2>2015
                    </li>
                    <li className="template-eye">2 125</li>
                    <li className="template-bubble">
                      <a href="post.html#comments-list" title="5 comments">
                        5
                      </a>
                    </li>
                  </ul>
                  <h4>
                    <a href="post.html">SIGNS YOU NEED DRAIN REPAIR SERVICES</a>
                  </h4>
                  <p className="description t1">
                    Paetos dignissim at cursus elefeind norma arcu. Pellentesque
                    mode accumsan est in tempus, etos at ullamcorper quam
                    suscipit lacus maecenas tortor.
                  </p>
                </li>
              </ul>
              <div className="re-carousel-pagination" />
            </div>
            <div className="align-center padding-top-54 padding-bottom-17">
              <a
                className="more"
                href="blog_3_columns.html"
                title="VIEW ALL POSTS"
              >
                VIEW ALL POSTS
              </a>
            </div>
          </div>
          <div className="row full-width gray page-padding-top-section page-margin-top-section">
            <div className="row">
              <h2 className="box-header">OUR SERVICES</h2>
              <p className="description align-center">
                With over 15 years experience and real focus on customer
                satisfaction, you can rely on us for your next renovation,
                <br />
                driveway sett or home repair. We provide a professional service
                for private and commercial customers.
              </p>
              <ul className="services-list services-icons row clearfix page-margin-top">
                <li>
                  <a href="service_design_build.html" title="Design and Build">
                    <span className="service-icon sl-small-house-2" />
                  </a>
                  <div className="service-content">
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
                  </div>
                </li>
                <li>
                  <a
                    href="service_household_repairs.html"
                    title="Household Repairs"
                  >
                    <span className="service-icon sl-small-wrench" />
                  </a>
                  <div className="service-content">
                    <h4 className="box-header">
                      <a
                        href="service_household_repairs.html"
                        title="Household Repairs"
                      >
                        HOUSEHOLD REPAIRS
                      </a>
                    </h4>
                    <p>
                      We offer affordable and reliable repairs and improvements
                      to the home.
                    </p>
                  </div>
                </li>
              </ul>
              <ul className="services-list services-icons row clearfix margin-top-30">
                <li>
                  <a href="service_paver_walkways.html" title="Paver Walkways">
                    <span className="service-icon sl-small-bricks" />
                  </a>
                  <div className="service-content">
                    <h4 className="box-header">
                      <a
                        href="service_paver_walkways.html"
                        title="Paver Walkways"
                      >
                        PAVER WALKWAYS
                      </a>
                    </h4>
                    <p>
                      Brick pavers define beauty, elegance and durability for
                      driveways, patios and walkways.
                    </p>
                  </div>
                </li>
                <li>
                  <a
                    href="service_tiling_painting.html"
                    title="Tiling and Painting"
                  >
                    <span className="service-icon sl-small-bucket" />
                  </a>
                  <div className="service-content">
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
                  </div>
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
          <div className="row page-margin-top-section">
            <div className="column column-1-2">
              <h3 className="box-header">TESTIMONIALS</h3>
              <div className="row testimonials-container type-small margin-top-40">
                <div className="re-carousel-pagination" />
                <ul className="testimonials-list autoplay-1 pause_on_hover-1">
                  <li>
                    <p>
                      "We would like to thank Renovate Company for an
                      outstanding effort on this recently completed project
                      located in the Moscow. The project involved a very
                      aggressive schedule and it was completed on time. We would
                      certainly like to use their professional services again."
                    </p>
                    <div className="ornament sl-small-chat" />
                    <div className="author-details-box">
                      <div className="author">MITCHEL SMITH</div>
                      <div className="author-details">INTERIOR RENOVATION</div>
                    </div>
                  </li>
                  <li>
                    <p>
                      "We would like to thank Renovate Company for an
                      outstanding effort on this recently completed project
                      located in the Moscow. The project involved a very
                      aggressive schedule and it was completed on time. We would
                      certainly like to use their professional services again."
                    </p>
                    <div className="ornament sl-small-conversation" />
                    <div className="author-details-box">
                      <div className="author">DEBORA HILTON</div>
                      <div className="author-details">PAVER WALKWAYS</div>
                    </div>
                  </li>
                  <li>
                    <p>
                      "We would like to thank Renovate Company for an
                      outstanding effort on this recently completed project
                      located in the Moscow. The project involved a very
                      aggressive schedule and it was completed on time. We would
                      certainly like to use their professional services again."
                    </p>
                    <div className="ornament sl-small-person" />
                    <div className="author-details-box">
                      <div className="author">LIAN HOLDEN</div>
                      <div className="author-details">SOLAR SYSTEMS</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="column column-1-2">
              <h3 className="box-header">WE WORK WITH</h3>
              <div className="our-clients-list-container margin-top-40 type-list">
                <ul className="our-clients-list type-list">
                  <li className="vertical-align">
                    <div className="our-clients-item-container">
                      <div className="vertical-align-cell">
                        <a target="_blank" href="https://quanticalabs.com">
                          <img src="images/logos/logo_01.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="vertical-align">
                    <div className="our-clients-item-container">
                      <div className="vertical-align-cell">
                        <a target="_blank" href="https://quanticalabs.com">
                          <img src="images/logos/logo_02.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="vertical-align">
                    <div className="our-clients-item-container">
                      <div className="vertical-align-cell">
                        <a target="_blank" href="https://quanticalabs.com">
                          <img src="images/logos/logo_04.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="vertical-align">
                    <div className="our-clients-item-container">
                      <div className="vertical-align-cell">
                        <a target="_blank" href="https://quanticalabs.com">
                          <img src="images/logos/logo_03.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="vertical-align">
                    <div className="our-clients-item-container">
                      <div className="vertical-align-cell">
                        <a target="_blank" href="https://quanticalabs.com">
                          <img src="images/logos/logo_05.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="vertical-align">
                    <div className="our-clients-item-container">
                      <div className="vertical-align-cell">
                        <a target="_blank" href="https://quanticalabs.com">
                          <img src="images/logos/logo_06.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="re-carousel-pagination" />
              </div>
            </div>
          </div>
          <div className="row full-width gray page-padding-top-section page-margin-top-section padding-bottom-70">
            <div className="row">
              <h2 className="box-header">MEET OUR TEAM</h2>
              <p className="description align-center">
                We provide a professional renovation and installation services
                with a real focus on customer satisfaction.
                <br /> Our installations are carried out by fully trained staff
                to the highest professional standards.
              </p>
              <ul className="team-list page-margin-top clearfix">
                <li className="team-box">
                  <a href="team_mark_whilberg.html" title="Mark Whilberg">
                    <img
                      alt="Mark Whilberg"
                      src="images/samples/390x260/team_01.png"
                    />
                  </a>
                  <div className="team-content">
                    <h4 className="box-header">
                      <a href="team_mark_whilberg.html" title="Mark Whilberg">
                        MARK WHILBERG
                      </a>
                      <span>CO-FOUNDER</span>
                    </h4>
                    <p>
                      Primus elite lectus tical at node. Porta commodo terminal
                      forks sande. Nulla novum at novelle.
                    </p>
                  </div>
                  <ul className="social-icons">
                    <li>
                      <a
                        title
                        target="_blank"
                        href="https://facebook.com/QuanticaLabs"
                        className="social-facebook"
                      >
                        &nbsp;
                      </a>
                    </li>
                    <li>
                      <a
                        title
                        target="_blank"
                        href="https://twitter.com/quanticalabs"
                        className="social-twitter"
                      >
                        &nbsp;
                      </a>
                    </li>
                    <li>
                      <a
                        title
                        target="_blank"
                        href="https://1.envato.market/quanticalabs-portfolio"
                        className="social-linkedin"
                      >
                        &nbsp;
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="team-box">
                  <a href="team_philip_brower.html" title="Philip Brower">
                    <img
                      alt="Philip Brower"
                      src="images/samples/390x260/team_02.png"
                    />
                  </a>
                  <div className="team-content">
                    <h4 className="box-header">
                      <a href="team_philip_brower.html" title="Philip Brower">
                        PHILIP BROWER
                      </a>
                      <span>CO-FOUNDER</span>
                    </h4>
                    <p>
                      Primus elite lectus tical at node. Porta commodo terminal
                      forks sande. Nulla novum at novelle.
                    </p>
                  </div>
                  <ul className="social-icons">
                    <li>
                      <a
                        title
                        target="_blank"
                        href="https://facebook.com/QuanticaLabs"
                        className="social-facebook"
                      >
                        &nbsp;
                      </a>
                    </li>
                    <li>
                      <a
                        title
                        target="_blank"
                        href="https://www.pinterest.com/quanticalabs/"
                        className="social-pinterest"
                      >
                        &nbsp;
                      </a>
                    </li>
                    <li>
                      <a
                        title
                        target="_blank"
                        href="https://dribbble.com/QuanticaLabs"
                        className="social-dribble"
                      >
                        &nbsp;
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="team-box">
                  <a href="team_curtis_greene.html" title="Curtis Greene">
                    <img
                      alt="Curtis Greene"
                      src="images/samples/390x260/team_03.png"
                    />
                  </a>
                  <div className="team-content">
                    <h4 className="box-header">
                      <a href="team_curtis_greene.html" title="Curtis Greene">
                        CURTIS GREENE
                      </a>
                      <span>CT-OFFICER</span>
                    </h4>
                    <p>
                      Primus elite lectus tical at node. Porta commodo terminal
                      forks sande. Nulla novum at novelle.
                    </p>
                  </div>
                  <ul className="social-icons">
                    <li>
                      <a
                        title
                        target="_blank"
                        href="https://www.youtube.com/user/quanticalabs"
                        className="social-youtube"
                      >
                        &nbsp;
                      </a>
                    </li>
                    <li>
                      <a
                        title
                        target="_blank"
                        href="https://www.behance.net/quanticalabs"
                        className="social-behance"
                      >
                        &nbsp;
                      </a>
                    </li>
                    <li>
                      <a
                        title
                        target="_blank"
                        href="https://facebook.com/QuanticaLabs"
                        className="social-facebook"
                      >
                        &nbsp;
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
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
                  <a href="mailto:kevin.smith@connect.com">renovate@mail.com</a>
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
  );
}
