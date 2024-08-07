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
                <h1>הפרויקטים שלי</h1>
              </div>
              <div className="page-header-right">
                <div className="bread-crumb-container">
                  <label>אתה נמצא כאן:</label>
                  <ul className="bread-crumb">
                    <li>
                      <Link title="Home">הפרויקטים שלי</Link>
                    </li>
                    <li className="separator">/</li>
                    <li>הפרויקטים שלי</li>
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
                <Link to="/projects" title="כל הפרויקטים">
                  כל הפרויקטים
                </Link>
              </li>
              <li>
                <Link
                  className="selected"
                  title="כל הפרויקטים"
                  to="/myProjects"
                >
                  הפרויקטים שלי
                </Link>
              </li>
            </ul>
            <ul className="projects-list isotope">
              {projects?.map((project) => {
                return (
                  <ProjectCard
                    key={project._id}
                    project={project}
                    setProjects={setProjects}
                    projects={projects}
                  />
                );
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
                  טלפון:
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
                  רחוב לינדן 272
                  <br />
                  ווינטר פארק, FL 32789
                </p>
              </li>
            </ul>
          </div>
          <div className="column column-1-3">
            <ul className="contact-details-list">
              <li className="sl-small-mail">
                <p>
                  דוא"ל:
                  <br />
                  <a href="mailto:adiSmbata@gmail.com">adiSmbata@gmail.com</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row gray full-width page-padding-top padding-bottom-50">
        <div className="row row-4-4">
          <div className="column column-1-4">
            <h6 className="box-header">אודותינו</h6>
            <p className="description t1">
              נוסדה על ידי קווין סמית בשנת 2000. רנובייט הוקמה כאחת מהספקיות
              הגדולות והמכובדות של שירותי שיפוץ פנים המתמקדים בבנייה ובבנייה.
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
            <h6 className="box-header">השירותים שלנו</h6>
            <ul className="list margin-top-20">
              <li className="template-bullet">שיפוץ פנים</li>
              <li className="template-bullet">עיצוב ובנייה</li>
              <li className="template-bullet">ריצוף וצביעה</li>
              <li className="template-bullet">שבילי אבנים</li>
              <li className="template-bullet">תיקוני בית</li>
              <li className="template-bullet">מערכות סולאריות</li>
            </ul>
          </div>
          <div className="column column-1-4">
            <h6 className="box-header">קטגוריות</h6>
            <ul className="taxonomies margin-top-30">
              <li>
                <a href="#" title="BUILD">
                  בנייה
                </a>
              </li>
              <li>
                <a href="#" title="DESIGN">
                  עיצוב
                </a>
              </li>
              <li>
                <a href="#" title="FLOORING">
                  ריצוף
                </a>
              </li>
              <li>
                <a href="#" title="PAINTING">
                  צביעה
                </a>
              </li>
              <li>
                <a href="#" title="PAVERS">
                  אבנים
                </a>
              </li>
              <li>
                <a href="#" title="PLUMBING">
                  אינסטלציה
                </a>
              </li>
              <li>
                <a href="#" title="RENOVATION">
                  שיפוץ
                </a>
              </li>
              <li>
                <a href="#" title="REPAIRS">
                  תיקונים
                </a>
              </li>
              <li>
                <a href="#" title="SOLAR SYSTEMS">
                  מערכות סולאריות
                </a>
              </li>
              <li>
                <a href="#" title="TILING">
                  ריצוף
                </a>
              </li>
            </ul>
          </div>
          <div className="column column-1-4">
            <h6 className="box-header">פוסטים אחרונים</h6>
            <ul className="blog small margin-top-30">
              <li>
                <Link className="post-image">
                  <img src={img7} alt="" />
                </Link>
                <div className="post-content">
                  <Link title="מה ששינוי כמה חודשים עושה">
                    מה ששינוי כמה חודשים עושה
                  </Link>
                  <ul className="post-details">
                    <li className="date">25 באפריל, 2015</li>
                  </ul>
                </div>
              </li>
              <li>
                <Link title="שיפוץ מטבח וסלון" className="post-image">
                  <img src={img8} alt="" />
                </Link>
                <div className="post-content">
                  <Link title="שיפוץ מטבח וסלון">שיפוץ מטבח וסלון</Link>
                  <ul className="post-details">
                    <li className="date">17 באפריל, 2015</li>
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
