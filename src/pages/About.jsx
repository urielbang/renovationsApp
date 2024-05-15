import React from "react";

export default function PagesPage() {
  return (
    <div>
      <div className="theme-page padding-bottom-66">
        <div className="row gray full-width page-header vertical-align-table">
          <div className="row full-width padding-top-bottom-50 vertical-align-cell">
            <div className="row">
              <div className="page-header-left">
                <h1>ABOUT US</h1>
              </div>
              <div className="page-header-right">
                <div className="bread-crumb-container">
                  <label>You Are Here:</label>
                  <ul className="bread-crumb">
                    <li>
                      <a title="HOME" href="index.html">
                        HOME
                      </a>
                    </li>
                    <li className="separator">/</li>
                    <li>ABOUT US</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix">
          <div className="row margin-top-70">
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
              <h2 className="box-header align-left">WE ARE RENOVATE</h2>
              <p className="description t1">
                Founded by Kevin Smith back in 2000, Renovate has established
                itself as one of the greatest and prestigious providers of
                construction focused interior renovation services and building.
                We provide a professional renovation and installation services
                with a real focus on customer satisfaction. Our construction
                Services is a multi-task company specializing in the following
                core areas:
              </p>
              <ul className="list margin-top-20">
                <li className="template-bullet">
                  We combine Quality Workmanship, Superior Knowledge and Low
                  Prices
                </li>
                <li className="template-bullet">
                  We Can Ensure a Job is Done on Time and on Budget
                </li>
                <li className="template-bullet">
                  Proven Results for Setting Exceptional Standards in{" "}
                  <a href="cost_calculator.html">Cost Control</a>
                </li>
                <li className="template-bullet">
                  Proffesional Service for Private and{" "}
                  <a href="#">Commercial Customers</a>
                </li>
                <li className="template-bullet">
                  15 Years Experience and a Real Focus on Customer Satisfaction
                </li>
              </ul>
              <div className="page-margin-top">
                <a className="more" href="services.html" title="OUR SERVICES">
                  OUR SERVICES
                </a>
              </div>
            </div>
          </div>
          <div className="row gray full-width page-margin-top-section padding-top-70 padding-bottom-66">
            <div className="row">
              <div className="column column-1-3">
                <ul className="features-list">
                  <li className="sl-small-wrench">
                    <h4>BEST VALUE</h4>
                    <p>
                      We combine quality workmanship, superior knowledge and low
                      prices to provide you with service unmatched by our
                      competitors.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="column column-1-3">
                <ul className="features-list">
                  <li className="sl-small-measure">
                    <h4>SAVING TIME</h4>
                    <p>
                      We have the experience, personel and resources to make the
                      project run smoothly. We can ensure a job is done on time.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="column column-1-3">
                <ul className="features-list">
                  <li className="sl-small-bucket">
                    <h4>WITHIN BUDGET</h4>
                    <p>
                      Work with us involve a carefully planned series of steps,
                      centered around a schedule we stick to and daily
                      communication.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row full-width padding-top-70 padding-bottom-66 parallax parallax-2">
            <div className="row">
              <h2 className="box-header">WHY CHOOSE US</h2>
            </div>
            <div className="row page-margin-top">
              <div className="column column-1-3">
                <ul className="features-list big">
                  <li className="sl-large-globe">
                    <div className="ornament" />
                    <span className="number animated-element" data-value={15} />
                    <p>Years on the International Market.</p>
                  </li>
                </ul>
              </div>
              <div className="column column-1-3">
                <ul className="features-list big">
                  <li className="sl-large-house-2">
                    <div className="ornament" />
                    <span
                      className="number animated-element"
                      data-value={135}
                    />
                    <p>Completed Projects and Investments.</p>
                  </li>
                </ul>
              </div>
              <div className="column column-1-3">
                <ul className="features-list big">
                  <li className="sl-large-briefcase">
                    <div className="ornament" />
                    <span className="number animated-element" data-value={12} />
                    <p>Skilled Professionals.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row page-margin-top-section">
            <div className="column column-1-2">
              <h3 className="box-header">OUR MISSION</h3>
              <p className="description t1">
                Paetos dignissim at cursus elefeind norma arcu. Pellentesque
                accumsan est in tempus etos ullamcorper, sem quam suscipit lacus
                maecenas tortor. Erates vitae node metus. Suspendisse gravida
                ornare non mattis velit rutrum modest. Morbi suspendisse a
                tortor velim pellentesque uter justo magna gravida. Pellentesque
                accumsan, ex in tempus ullamcorper terminal. Setis lacus
                suscipit tortor erat vitae metus.
              </p>
              <p className="description t1">
                Morbi nulla tortor, dignissim at node cursus euismod est arcu.
                Nomad turbina uter vehicula justo magna paetos in terminal.
                Pellentesque in accumsan tempus, terminal ullamcorper a quam
                suscipit lacus <a href="#">modest elementum</a>.
              </p>
              <div className="page-margin-top">
                <a className="more" href="projects.html" title="OUR PROJECTS">
                  OUR PROJECTS
                </a>
              </div>
            </div>
            <div className="column column-1-2">
              <h3 className="box-header">POPULAR QUESTIONS</h3>
              <ul className="accordion margin-top-40 clearfix">
                <li>
                  <div id="accordion-renovation-cost">
                    <h5>Why does a renovation project cost so much?</h5>
                  </div>
                  <p className="description t1">
                    Paetos dignissim at cursus elefeind norma arcu. Pellentesque
                    accumsan est in tempus etos ullamcorper, sem quam suscipit
                    lacus maecenas tortor. Erates vitae node metus. Suspendisse
                    gravida ornare non mattis velit rutrum modest. Morbi
                    suspendisse a tortor velim pellentesque uter justo magna
                    gravida et maecenas.
                  </p>
                </li>
                <li>
                  <div id="accordion-project-timeline">
                    <h5>What is the timeline for the project?</h5>
                  </div>
                  <p className="description t1">
                    Paetos dignissim at cursus elefeind norma arcu. Pellentesque
                    accumsan est in tempus etos ullamcorper, sem quam suscipit
                    lacus maecenas tortor. Erates vitae node metus. Suspendisse
                    gravida ornare non mattis velit rutrum modest. Morbi
                    suspendisse a tortor velim pellentesque uter justo magna
                    gravida et maecenas.
                  </p>
                </li>
                <li>
                  <div id="accordion-construction-budget">
                    <h5>What is the total budget for construction?</h5>
                  </div>
                  <p className="description t1">
                    Paetos dignissim at cursus elefeind norma arcu. Pellentesque
                    accumsan est in tempus etos ullamcorper, sem quam suscipit
                    lacus maecenas tortor. Erates vitae node metus. Suspendisse
                    gravida ornare non mattis velit rutrum modest. Morbi
                    suspendisse a tortor velim pellentesque uter justo magna
                    gravida et maecenas.
                  </p>
                </li>
                <li>
                  <div id="accordion-project-initiation">
                    <h5>How is renovation project initiated?</h5>
                  </div>
                  <p className="description t1">
                    Paetos dignissim at cursus elefeind norma arcu. Pellentesque
                    accumsan est in tempus etos ullamcorper, sem quam suscipit
                    lacus maecenas tortor. Erates vitae node metus. Suspendisse
                    gravida ornare non mattis velit rutrum modest. Morbi
                    suspendisse a tortor velim pellentesque uter justo magna
                    gravida et maecenas.
                  </p>
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
    </div>
  );
}
