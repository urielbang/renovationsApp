import React from "react";

export default function Projects() {
  return (
    <div>
      <div className="theme-page padding-bottom-70">
        <div className="row gray full-width page-header vertical-align-table">
          <div className="row full-width padding-top-bottom-50 vertical-align-cell">
            <div className="row">
              <div className="page-header-left">
                <h1>OUR PROJECTS</h1>
              </div>
              <div className="page-header-right">
                <div className="bread-crumb-container">
                  <label>You Are Here:</label>
                  <ul className="bread-crumb">
                    <li>
                      <a title="Home" href="index.html">
                        HOME
                      </a>
                    </li>
                    <li className="separator">/</li>
                    <li>OUR PROJECTS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix">
          <div className="row">
            <ul className="tabs-navigation small gray isotope-filters margin-top-70">
              <li>
                <a className="selected" href="#filter-*" title="All Projects">
                  All Projects
                </a>
              </li>
              <li>
                <a href="#filter-renovation" title="Renovation">
                  Renovation
                </a>
              </li>
              <li>
                <a href="#filter-design-and-build" title="Design and Build">
                  Design and Build
                </a>
              </li>
              <li>
                <a href="#filter-painting" title="Painting">
                  Painting
                </a>
              </li>
              <li>
                <a href="#filter-pavers" title="Pavers">
                  Pavers
                </a>
              </li>
              <li>
                <a href="#filter-solar-systems" title="Solar Systems">
                  Solar Systems
                </a>
              </li>
            </ul>
            <ul className="projects-list isotope">
              <li className="renovation">
                <a
                  href="project_interior_renovation.html"
                  title="Interior Renovation"
                >
                  <img src="images/samples/270x180/image_01.jpg" alt="" />
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
              <li className="pavers">
                <a
                  href="project_garden_renovation.html"
                  title="Garden Renovation"
                >
                  <img src="images/samples/270x180/image_04.jpg" alt="" />
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
              <li className="design-and-build painting">
                <a href="project_painting.html" title="Painting">
                  <img src="images/samples/270x180/image_07.jpg" alt="" />
                </a>
                <div className="view align-center">
                  <div className="vertical-align-table">
                    <div className="vertical-align-cell">
                      <p className="description">Painting</p>
                      <a
                        className="more simple"
                        href="project_painting.html"
                        title="VIEW PROJECT"
                      >
                        VIEW PROJECT
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="renovation design-and-build">
                <a href="project_design_build.html" title="Design and Build">
                  <img src="images/samples/270x180/image_10.jpg" alt="" />
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
              <li className="design-and-build solar-systems">
                <a href="project_design_build.html" title="Design and Build">
                  <img src="images/samples/270x180/image_08.jpg" alt="" />
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
              <li className="renovation">
                <a
                  href="project_interior_renovation.html"
                  title="Interior Renovation"
                >
                  <img src="images/samples/270x180/image_05.jpg" alt="" />
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
              <li className="renovation painting">
                <a href="project_painting.html" title="Painting">
                  <img src="images/samples/270x180/image_09.jpg" alt="" />
                </a>
                <div className="view align-center">
                  <div className="vertical-align-table">
                    <div className="vertical-align-cell">
                      <p className="description">Painting</p>
                      <a
                        className="more simple"
                        href="project_painting.html"
                        title="VIEW PROJECT"
                      >
                        VIEW PROJECT
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="solar-systems">
                <a href="project_solar_systems.html" title="Solar Systems">
                  <img src="images/samples/270x180/image_06.jpg" alt="" />
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
