import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img11 from "../assets/images/samples/270x180/image_01.jpg";
import img from "../assets/images/samples/270x180/image_04.jpg";
import img1 from "../assets/images/samples/270x180/image_07.jpg";
import img2 from "../assets/images/samples/270x180/image_10.jpg";
import img3 from "../assets/images/samples/270x180/image_08.jpg";
import img4 from "../assets/images/samples/270x180/image_05.jpg";
import img5 from "../assets/images/samples/270x180/image_09.jpg";
import img6 from "../assets/images/samples/270x180/image_06.jpg";
import img7 from "../assets/images/samples/90x90/image_10.jpg";
import img8 from "../assets/images/samples/90x90/image_07.jpg";
import ProjectCard from "../components/ProjectCard";
import { UserContext } from "../context/User";
import axios from "axios";
import { apiUrl } from "../config/apiConfig";

export default function MyProjects() {
  const { logedUser } = useContext(UserContext);

  const [projects, setProjects] = useState([]);

  const getAllProjects = async (id) => {
    const res = await axios.get(`${apiUrl}/users/${id}`);
    const data = await res.data;

    setProjects(data.data.projects);
  };
  useEffect(() => {
    getAllProjects(logedUser?.data._id);
  }, [logedUser]);
  return (
    <div>
      <div className="theme-page padding-bottom-70">
        <div className="row gray full-width page-header vertical-align-table">
          <div className="row full-width padding-top-bottom-50 vertical-align-cell">
            <div className="row">
              <div className="page-header-left">
                <h1>MY PROJECTS</h1>
              </div>
              <div className="page-header-right">
                <div className="bread-crumb-container">
                  <label>You Are Here:</label>
                  <ul className="bread-crumb">
                    <li>
                      <Link title="Home">MY PROJECTS</Link>
                    </li>
                    <li className="separator">/</li>
                    <li>MY PROJECTS</li>
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
                <Link to="/projects" title="All Projects">
                  All Projects
                </Link>
              </li>
              <li>
                <Link
                  className="selected"
                  title="All Projects"
                  to="/myProjects"
                >
                  My Projects
                </Link>
              </li>
            </ul>
            <ul className="projects-list isotope">
              {projects?.map((project) => {
                return <ProjectCard key={project._id} project={project} />;
              })}
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
                  <a href="mailto:adiSmbata@gmail.com">adiSmabta@gmail.com</a>
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
                <Link className="social-facebook" title="facebook" />
              </li>
              <li>
                <Link className="social-twitter" title="twitter" />
              </li>
              <li>
                <Link className="social-linkedin" title="linkedin" />
              </li>
              <li>
                <Link className="social-pinterest" title="pinterest" />
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
                <Link className="post-image">
                  <img src={img7} alt="" />
                </Link>
                <div className="post-content">
                  <Link title="What a Difference a Few Months Make">
                    What a Difference a Few Months Make
                  </Link>
                  <ul className="post-details">
                    <li className="date">April 25, 2015</li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  title="Kitchen and Living Room Renovation"
                  className="post-image"
                >
                  <img src={img8} alt="" />
                </Link>
                <div className="post-content">
                  <Link title="Kitchen and Living Room Renovation">
                    Kitchen and Living Room Renovation
                  </Link>
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
