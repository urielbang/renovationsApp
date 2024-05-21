import React, { useContext } from "react";
import { FaUserCheck } from "react-icons/fa";
import { IoLogInSharp } from "react-icons/io5";

import { Link } from "react-router-dom";
import { UserContext } from "../context/User";

export default function NavBar() {
  const { logedUser, setLogedUser, setToken } = useContext(UserContext);

  const handlClick = () => {
    localStorage.removeItem("token");
    setToken({});
    setLogedUser({});
  };
  console.log(logedUser);

  return (
    <>
      <div className="header-top-bar-container clearfix">
        <div className="header-top-bar">
          <ul className="contact-details clearfix">
            <li className="template-phone">
              <a href="tel:+149752322235">+149 75 23 222 35</a>
            </li>
            <li className="template-mail">
              <a href="mailto:adiSambata@gmail.com">adiSambata@gmail.com</a>
            </li>
            <li className="template-clock">Mon - Fri: 08.00 - 17.00</li>
          </ul>
          <div className="search-container">
            <a className="template-search" href="#" title="Search" />
            <form className="search" action="search.html">
              <input
                type="text"
                name="s"
                placeholder="Search..."
                defaultValue="Search..."
                className="search-input hint"
              />
              <fieldset className="search-submit-container">
                <span className="template-search" />
                <input type="submit" className="search-submit" defaultValue />
              </fieldset>
            </form>
          </div>
          <ul className="social-icons">
            <li>
              <a href="#" className="social-facebook" title="facebook" />
            </li>
            <li>
              <a href="#" className="social-twitter" title="twitter" />
            </li>

            <li>
              <a href="#" className="social-pinterest" title="pinterest" />
            </li>
          </ul>
        </div>
        <a href="#" className="header-toggle template-arrow-up" />
      </div>
      <div className="header-container">
        <div className="vertical-align-table column-1-1">
          <div className="header clearfix">
            <div className="logo vertical-align-cell">
              <h1>
                <Link to="/">RENOVATE</Link>
              </h1>
            </div>
            <a href="#" className="mobile-menu-switch vertical-align-cell">
              <span className="line" />
              <span className="line" />
              <span className="line" />
            </a>
            <div className="menu-container clearfix vertical-align-cell">
              <nav>
                <ul className="sf-menu">
                  <li className="selected">
                    <Link to="/">HOME</Link>
                  </li>
                  <li>
                    <Link to="/services">SERVICES</Link>
                    <ul>
                      <li>
                        <Link to="/serviceInterior">Interior Renovation</Link>
                      </li>
                      <li>
                        <Link
                          to="/serviceDesign"
                          href="service_design_build.html"
                          title="Design and Build"
                        >
                          Design and Build
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/projects">PROJECTS</Link>

                    <ul>
                      <li>
                        <Link to="/newProject">new project</Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link to="about">ABOUT</Link>
                  </li>

                  <li>
                    <Link to="/calculator"> COST CALCULATOR</Link>
                  </li>
                  <li className="left-flyout">
                    <Link to="/contact"> CONTACT</Link>
                  </li>
                  {logedUser?.data?.role == "admin" ? (
                    <li className="left-flyout">
                      <Link to="/adminPage"> ADMIN</Link>
                    </li>
                  ) : (
                    ""
                  )}
                  <li className="logdUser">
                    <a>
                      <FaUserCheck />
                      {logedUser?.data?.email}
                    </a>

                    <ul>
                      <li>
                        <a onClick={handlClick}> log Out {<IoLogInSharp />}</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              <div className="mobile-menu-container">
                <div className="mobile-menu-divider" />
                <nav>
                  <ul className="mobile-menu collapsible-mobile-submenus">
                    <li className="selected">
                      <a href="index.html" title="Home">
                        HOME
                      </a>
                      <a href="#" className="template-arrow-menu" />
                      <ul>
                        <li className="selected">
                          <a href="index.html" title="Home Style 1">
                            Home Style 1
                          </a>
                        </li>
                        <li>
                          <a href="home2.html" title="Home Style 2">
                            Home Style 2
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="services.html" title="Services">
                        SERVICES
                      </a>
                      <a href="#" className="template-arrow-menu" />
                      <ul>
                        <li>
                          <a
                            href="service_interior_renovation.html"
                            title="Interior Renovation"
                          >
                            Interior Renovation
                          </a>
                        </li>
                        <li>
                          <a
                            href="service_design_build.html"
                            title="Design and Build"
                          >
                            Design and Build
                          </a>
                        </li>
                        <li>
                          <a
                            href="service_tiling_painting.html"
                            title="Design and Build"
                          >
                            Tiling and Painting
                          </a>
                        </li>
                        <li>
                          <a
                            href="service_paver_walkways.html"
                            title="Paver Walkways"
                          >
                            Paver Walkways
                          </a>
                        </li>
                        <li>
                          <a
                            href="service_household_repairs.html"
                            title="Household Repairs"
                          >
                            Household Repairs
                          </a>
                        </li>
                        <li>
                          <a
                            href="service_solar_systems.html"
                            title="Solar Systems"
                          >
                            Solar Systems
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/projects">Projects</Link>

                      <a href="#" className="template-arrow-menu" />
                      <ul>
                        <li>
                          <a
                            href="project_interior_renovation.html"
                            title="Interior Renovation"
                          >
                            Interior Renovation
                          </a>
                        </li>
                        <li>
                          <a
                            href="project_garden_renovation.html"
                            title="Garden Renovation"
                          >
                            Garden Renovation
                          </a>
                        </li>
                        <li>
                          <a href="project_painting.html" title="Painting">
                            Painting
                          </a>
                        </li>
                        <li>
                          <a
                            href="project_design_build.html"
                            title="Design and Build"
                          >
                            Design and Build
                          </a>
                        </li>
                        <li>
                          <a
                            href="project_solar_systems.html"
                            title="Solar Systems"
                          >
                            Solar Systems
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="team.html" title="Our Team">
                        OUR TEAM
                      </a>
                    </li>
                    <li>
                      <a href="about.html" title="Pages">
                        PAGES
                      </a>
                      <a href="#" className="template-arrow-menu" />
                      <ul>
                        <li>
                          <a href="about.html" title="About">
                            About
                          </a>
                        </li>
                        <li>
                          <a href="404.html" title="404 Not Found">
                            404 Not Found
                          </a>
                        </li>
                        <li>
                          <a href="services.html" title="Services Style 1">
                            Services Style 1
                          </a>
                        </li>
                        <li>
                          <a href="services2.html" title="Services Style 2">
                            Services Style 2
                          </a>
                        </li>
                        <li>
                          <a
                            href="service_interior_renovation.html"
                            title="Single Service"
                          >
                            Single Service
                          </a>
                        </li>
                        <li>
                          <a href="projects.html" title="Projects">
                            Projects
                          </a>
                        </li>
                        <li>
                          <a
                            href="project_interior_renovation.html"
                            title="Single Project"
                          >
                            Single Project
                          </a>
                        </li>
                        <li>
                          <a href="team.html" title="Team">
                            Team
                          </a>
                        </li>
                        <li>
                          <a href="team_mark_whilberg.html" title="Single Team">
                            Single Team
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog.html" title="Blog">
                        BLOG
                      </a>
                      <a href="#" className="template-arrow-menu" />
                      <ul>
                        <li>
                          <a href="blog.html" title="Blog">
                            Blog
                          </a>
                        </li>
                        <li>
                          <a href="blog_left_sidebar.html" title="Blog">
                            Blog Left Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog_2_columns.html" title="Blog 2 Columns">
                            Blog 2 Columns
                          </a>
                        </li>
                        <li>
                          <a href="blog_3_columns.html" title="Blog 3 Columns">
                            Blog 3 Columns
                          </a>
                        </li>
                        <li>
                          <a href="post.html" title="Single Post">
                            Single Post
                          </a>
                        </li>
                        <li>
                          <a href="search.html?s=ipsum" title="Search Template">
                            Search Template
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="cost_calculator.html" title="Authors">
                        COST CALCULATOR
                      </a>
                    </li>
                    <li className="left-flyout">
                      <a href="contact.html" title="Contact">
                        CONTACT
                      </a>
                      <a href="#" className="template-arrow-menu" />
                      <ul>
                        <li>
                          <a href="contact.html" title="Contact Style 1">
                            Contact Style 1
                          </a>
                        </li>
                        <li>
                          <a href="contact_2.html" title="Contact Style 2">
                            Contact Style 2
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
