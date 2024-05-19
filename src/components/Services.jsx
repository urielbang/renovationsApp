import React from "react";
import img from "../assets/images/samples/390x260/image_01.jpg";
import img1 from "../assets/images/samples/390x260/image_02.jpg";
import img2 from "../assets/images/samples/390x260/image_03.jpg";
import img3 from "../assets/images/samples/390x260/image_04.jpg";
import img4 from "../assets/images/samples/390x260/image_05.jpg";
import img5 from "../assets/images/samples/390x260/image_06.jpg";
import img6 from "../assets/images/samples/90x90/image_10.jpg";
import img7 from "../assets/images/samples/90x90/image_07.jpg";

`   






`;

export default function Services() {
  return (
    <div className="site-container">
      <div className="theme-page padding-bottom-70">
        <div className="row gray full-width page-header vertical-align-table">
          <div className="row full-width padding-top-bottom-50 vertical-align-cell">
            <div className="row">
              <div className="page-header-left">
                <h1>OUR SERVICES</h1>
              </div>
              <div className="page-header-right">
                <div className="bread-crumb-container">
                  <label>You Are Here:</label>
                  <ul className="bread-crumb">
                    <li>
                      <a title="Home" href="#">
                        HOME
                      </a>
                    </li>
                    <li className="separator">/</li>
                    <li>OUR SERVICES</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix">
          <div className="row">
            <ul className="services-list clearfix padding-top-70">
              <li>
                <a href="#" title="Interior Renovation">
                  <img src={img} alt="" />
                </a>
                <h4 className="box-header">
                  <a href="#" title="Interior Renovation">
                    INTERIOR RENOVATION
                  </a>
                </h4>
                <p>
                  We can help you bring new life to existing rooms and develop
                  unused spaces.
                </p>
              </li>
              <li>
                <a href="#" title="Design and Build">
                  <img src={img1} alt="" />
                </a>
                <h4 className="box-header">
                  <a href="#" title="Design and Build">
                    DESIGN AND BUILD
                  </a>
                </h4>
                <p>
                  From initial design and project specification to archieving a
                  high end finish.
                </p>
              </li>
              <li>
                <a href="#" title="Tiling and Painting">
                  <img src={img3} alt="" />
                </a>
                <h4 className="box-header">
                  <a href="#" title="Tiling and Painting">
                    TILING AND PAINTING
                  </a>
                </h4>
                <p>
                  We offer quality tiling and painting solutions for interior
                  and exterior.
                </p>
              </li>
              <li>
                <a href="#" title="Paver Walkways">
                  <img src={img4} alt="" />
                </a>
                <h4 className="box-header">
                  <a href="#" title="PAVER WALKWAYS">
                    PAVER WALKWAYS
                  </a>
                </h4>
                <p>
                  Brick pavers define beauty, elegance and durability for
                  driveways, patios and walkways.
                </p>
              </li>
              <li>
                <a href="#" title="Household Repairs">
                  <img src={img5} alt="" />
                </a>
                <h4 className="box-header">
                  <a href="#" title="Household Repairs">
                    HOUSEHOLD REPAIRS
                  </a>
                </h4>
                <p>
                  We offer affordable and reliable repairs and improvements to
                  the home.
                </p>
              </li>
              <li>
                <a href="#" title="Solar Systems">
                  <img src={img} alt="" />
                </a>
                <h4 className="box-header">
                  <a href="#" title="Solar Systems">
                    SOLAR SYSTEMS
                  </a>
                </h4>
                <p>
                  Generate cheap, green electricity from sunlight using
                  photovoltaic cells.
                </p>
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
                  <a href="mailto:adiSambta@gmail.com">adiSambata@gmail.com</a>
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
                <a href="#" className="social-facebook" title="facebook" />
              </li>
              <li>
                <a href="#" className="social-twitter" title="twitter" />
              </li>
              <li>
                <a href="#" className="social-linkedin" title="linkedin" />
              </li>
              <li>
                <a href="#" className="social-pinterest" title="pinterest" />
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
                <a href="#" title="BUILD">
                  BUILD
                </a>
              </li>
              <li>
                <a href="#" title="DESIGN">
                  DESIGN
                </a>
              </li>
              <li>
                <a href="#" title="FLOORING">
                  FLOORING
                </a>
              </li>
              <li>
                <a href="#" title="PAINTING">
                  PAINTING
                </a>
              </li>
              <li>
                <a href="#" title="PAVERS">
                  PAVERS
                </a>
              </li>
              <li>
                <a href="#" title="PLUMBING">
                  PLUMBING
                </a>
              </li>
              <li>
                <a href="#" title="RENOVATION">
                  RENOVATION
                </a>
              </li>

              <li>
                <a href="#" title="REPAIRS">
                  REPAIRS
                </a>
              </li>
              <li>
                <a href="#" title="SOLAR SYSTEMS">
                  SOLAR SYSTEMS
                </a>
              </li>
              <li>
                <a href="#" title="TILING">
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
                  href="#"
                  title="What a Difference a Few Months Make"
                  className="post-image"
                >
                  <img src={img6} alt="" />
                </a>
                <div className="post-content">
                  <a href="#" title="What a Difference a Few Months Make">
                    What a Difference a Few Months Make
                  </a>
                  <ul className="post-details">
                    <li className="date">April 25, 2015</li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  title="Kitchen and Living Room Renovation"
                  className="post-image"
                >
                  <img src={img7} alt="" />
                </a>
                <div className="post-content">
                  <a href="#" title="Kitchen and Living Room Renovation">
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
