import React from "react";
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

export default function Projects() {
  return (
    <div>
      <div className="theme-page padding-bottom-70">
        <div className="row gray full-width page-header vertical-align-table">
          <div className="row full-width padding-top-bottom-50 vertical-align-cell">
            <div className="row">
              <div className="page-header-left">
                <h1>כל הפרויקטים</h1>
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
                <Link className="selected" to="/projects" title="All Projects">
                  כל הפרויקטים
                </Link>
              </li>
              <li>
                <Link title="My Projects" to="/myProjects">
                  הפרויקטים שלי
                </Link>
              </li>
            </ul>
            <ul className="projects-list isotope">
              <li className="renovation">
                <Link to="/projectDesign" title="שיפוץ פנים">
                  <img src={img11} alt="" />
                </Link>
                <div className="view align-center">
                  <div className="vertical-align-table">
                    <div className="vertical-align-cell">
                      <p className="description">שיפוץ פנים</p>
                      <Link
                        className="more simple"
                        to="/projectDesign"
                        title="צפה בפרויקט"
                      >
                        צפה בפרויקט
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="pavers">
                <Link to="/projectGarden" title="שיפוץ גינה">
                  <img src={img} alt="" />
                </Link>
                <div className="view align-center">
                  <div className="vertical-align-table">
                    <div className="vertical-align-cell">
                      <p className="description">שיפוץ גינה</p>
                      <Link
                        className="more simple"
                        to="/projectGarden"
                        title="צפה בפרויקט"
                      >
                        צפה בפרויקט
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="design-and-build painting">
                <Link to="/projectPainting" title="צביעה">
                  <img src={img1} alt="" />
                </Link>
                <div className="view align-center">
                  <div className="vertical-align-table">
                    <div className="vertical-align-cell">
                      <p className="description">צביעה</p>
                      <Link
                        className="more simple"
                        to="/projectPainting"
                        title="צפה בפרויקט"
                      >
                        צפה בפרויקט
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="renovation design-and-build">
                <Link to="/projectDesignBuild" title="עיצוב ובנייה">
                  <img src={img2} alt="" />
                </Link>
                <div className="view align-center">
                  <div className="vertical-align-table">
                    <div className="vertical-align-cell">
                      <p className="description">עיצוב ובנייה</p>
                      <Link
                        className="more simple"
                        to="/projectDesignBuild"
                        title="צפה בפרויקט"
                      >
                        צפה בפרויקט
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="design-and-build solar-systems">
                <Link to="/projectSolarSystems" title="מערכות סולאריות">
                  <img src={img3} alt="" />
                </Link>
                <div className="view align-center">
                  <div className="vertical-align-table">
                    <div className="vertical-align-cell">
                      <p className="description">מערכות סולאריות</p>
                      <Link
                        className="more simple"
                        to="/projectSolarSystems"
                        title="צפה בפרויקט"
                      >
                        צפה בפרויקט
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="renovation">
                <Link to="/projectInteriorRenovation" title="שיפוץ פנים">
                  <img src={img4} alt="" />
                </Link>
                <div className="view align-center">
                  <div className="vertical-align-table">
                    <div className="vertical-align-cell">
                      <p className="description">שיפוץ פנים</p>
                      <Link
                        className="more simple"
                        to="/projectInteriorRenovation"
                        title="צפה בפרויקט"
                      >
                        צפה בפרויקט
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="renovation painting">
                <Link to="/projectPainting2" title="צביעה">
                  <img src={img5} alt="" />
                </Link>
                <div className="view align-center">
                  <div className="vertical-align-table">
                    <div className="vertical-align-cell">
                      <p className="description">צביעה</p>
                      <Link
                        className="more simple"
                        to="/projectPainting2"
                        title="צפה בפרויקט"
                      >
                        צפה בפרויקט
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="solar-systems">
                <Link to="/projectSolarSystems2" title="מערכות סולאריות">
                  <img src={img6} alt="" />
                </Link>
                <div className="view align-center">
                  <div className="vertical-align-table">
                    <div className="vertical-align-cell">
                      <p className="description">מערכות סולאריות</p>
                      <Link
                        className="more simple"
                        to="/projectSolarSystems2"
                        title="צפה בפרויקט"
                      >
                        צפה בפרויקט
                      </Link>
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
              <li className="template-bullet">מעברי ריצוף</li>
              <li className="template-bullet">תיקונים לבית</li>
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
                  מרצפות
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
                  <Link title="What a Difference a Few Months Make">
                    כמה הבדל כמה חודשים עושים
                  </Link>
                  <ul className="post-details">
                    <li className="date">25 באפריל 2015</li>
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
                    שיפוץ מטבח וחדר מגורים
                  </Link>
                  <ul className="post-details">
                    <li className="date">17 באפריל 2015</li>
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
