import React, { useEffect, useState } from "react";
import img from "../assets/images/samples/570x380/image_01.jpg";
import img1 from "../assets/images/samples/570x380/image_08.jpg";
import img2 from "../assets/images/samples/570x380/image_02.jpg";
import img3 from "../assets/images/samples/570x380/image_10.jpg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../config/apiConfig";

export default function ProjectDising() {
  const [projectData, setProjectData] = useState({});
  const { id } = useParams();

  const fetchProject = async () => {
    const res = await axios.get(`${apiUrl}/projects/${id}`);
    const data = await res.data;

    setProjectData(data.data);
  };

  useEffect(() => {
    fetchProject();
  }, []);

  return (
    <div>
      <div className="theme-page padding-bottom-66">
        <div className="row gray full-width page-header vertical-align-table">
          <div className="row full-width padding-top-bottom-50 vertical-align-cell">
            <div className="row">
              <div className="page-header-left">
                <h1>Project card</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix">
          <div className="row margin-top-70">
            <div className="column column-1-2">
              <a
                href="images/samples/750x500/image_10.jpg"
                className="prettyPhoto re-preload"
                title="Design and Build"
              >
                <img src={img} alt="img" />
              </a>
              <div className="row margin-top-30">
                <div className="column column-1-2">
                  <a
                    href="images/samples/750x500/image_02.jpg"
                    className="prettyPhoto re-preload"
                    title="Design and Build"
                  >
                    <img src={img1} alt="img" />
                  </a>
                </div>
                <div className="column column-1-2">
                  <a
                    href="images/samples/750x500/image_08.jpg"
                    className="prettyPhoto re-preload"
                    title="Design and Build"
                  >
                    <img src={img2} alt="img" />
                  </a>
                </div>
              </div>
              <div className="row margin-top-30">
                <a
                  href="images/samples/750x500/image_01.jpg"
                  className="prettyPhoto re-preload"
                  title="Design and Build"
                >
                  <img src={img3} alt="img" />
                </a>
              </div>
            </div>
            <div className="column column-1-2">
              <h3 className="box-header">BRIEF DESCRIPTION</h3>
              <p className="description t1">
                The house includes four spacious bedrooms, each with built-in
                closets and large windows. The master suite is a private oasis,
                complete with a walk-in closet and an en-suite bathroom
                featuring a luxurious soaking tub and a walk-in shower.
              </p>
              <h4 className="box-header page-margin-top">AT A GLANCE</h4>
              <table className="margin-top-40">
                <tbody>
                  <tr>
                    <td>Project Type</td>
                    <td>{projectData?.projectType}</td>
                  </tr>
                  <tr>
                    <td>Client</td>
                    <td>{projectData?.client}</td>
                  </tr>
                  <tr>
                    <td>Completion Date</td>
                    <td>{projectData?.completionDate}</td>
                  </tr>
                  <tr>
                    <td>Project Size</td>
                    <td>{projectData?.projectSize}</td>
                  </tr>
                  <tr>
                    <td>Contract Value</td>
                    <td>{projectData?.contractValue}</td>
                  </tr>
                </tbody>
              </table>
              <h4 className="box-header page-margin-top">SCOPE OF WORK</h4>
              <div className="tabs small no-scroll align-left clearfix margin-top-40">
                <ul className="tabs-navigation small gray clearfix">
                  <li>
                    <Link title="Client Info"> Client Info </Link>
                  </li>
                  <li>
                    <Link title="Scope Of Work">Scope Of Work</Link>
                  </li>
                </ul>
                <div id="client-info">
                  <p>
                    Morbi nulla tortor, dignissim est node cursus euismod est
                    arcu. Nomad at vehicula novum justo magna.
                  </p>
                  <ul className="list margin-top-20">
                    <li className="template-bullet">
                      Financial Responsibility to Our Clients
                    </li>
                    <li className="template-bullet">
                      Superior Quality and Craftsmanship
                    </li>
                    <li className="template-bullet">
                      Quality and Value to the
                      <a href="projects.html">Projects We Deliver</a>
                    </li>
                    <li className="template-bullet">
                      Highest Standards in
                      <a href="cost_calculator.html">Cost Control</a>
                    </li>
                  </ul>
                </div>
                <div id="scope-of-work">
                  <p>
                    Morbi nulla tortor, dignissim est node cursus euismod est
                    arcu. Nomad at vehicula novum justo magna.
                  </p>
                  <ul className="list margin-top-20">
                    <li className="template-bullet">
                      Financial Responsibility to Our Clients
                    </li>
                    <li className="template-bullet">
                      Superior Quality and Craftsmanship
                    </li>
                    <li className="template-bullet">On Time and on Budget</li>
                    <li className="template-bullet">
                      Real Focus on Customer Satisfaction
                    </li>
                  </ul>
                </div>
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
                  <a href="mailto:adiSambata@gmail.com">adiSambata@gmail.com</a>
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
