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
              <a href="tel:+149752322235">+972 52 696 9694</a>
            </li>
            <li className="template-mail">
              <a href="mailto:adiSambata@gmail.com">adiSambata@gmail.com</a>
            </li>
            <li className="template-clock">ב' - ו': 08.00 - 17.00</li>
          </ul>
          <div className="search-container">
            <a className="template-search" href="#" title="חיפוש" />
            <form className="search" action="search.html">
              <input
                type="text"
                name="s"
                placeholder="חיפוש..."
                defaultValue="חיפוש..."
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
              <a href="#" className="social-facebook" title="פייסבוק" />
            </li>
            <li>
              <a href="#" className="social-twitter" title="טוויטר" />
            </li>

            <li>
              <a href="#" className="social-pinterest" title="פינטרסט" />
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
                <Link to="/">שיפוצים</Link>
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
                    <Link to="/">דף הבית</Link>
                  </li>
                  <li>
                    <Link to="/services">שירותים</Link>
                    <ul>
                      <li>
                        <Link to="/serviceInterior">שיפוץ פנים</Link>
                      </li>
                      <li>
                        <Link
                          to="/serviceDesign"
                          href="service_design_build.html"
                          title="תכנון ובנייה"
                        >
                          תכנון ובנייה
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/projects">פרויקטים</Link>

                    <ul>
                      <li>
                        <Link to="/newProject">פרויקט חדש</Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link to="about">אודות</Link>
                  </li>

                  <li>
                    <Link to="/calculator"> מחשבון עלויות</Link>
                  </li>
                  <li className="left-flyout">
                    <Link to="/contact"> יצירת קשר</Link>
                  </li>
                  {logedUser?.data?.role == "admin" ? (
                    <li className="left-flyout">
                      <Link to="/adminPage"> מנהל</Link>
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
                        <a onClick={handlClick}> התנתק {<IoLogInSharp />}</a>
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
                      <a href="index.html" title="דף הבית">
                        דף הבית
                      </a>
                      <a href="#" className="template-arrow-menu" />
                      <ul>
                        <li className="selected">
                          <a href="index.html" title="סגנון בית 1">
                            סגנון בית 1
                          </a>
                        </li>
                        <li>
                          <a href="home2.html" title="סגנון בית 2">
                            סגנון בית 2
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="services.html" title="שירותים">
                        שירותים
                      </a>
                      <a href="#" className="template-arrow-menu" />
                      <ul>
                        <li>
                          <a
                            href="service_interior_renovation.html"
                            title="שיפוץ פנים"
                          >
                            שיפוץ פנים
                          </a>
                        </li>
                        <li>
                          <a
                            href="service_design_build.html"
                            title="תכנון ובנייה"
                          >
                            תכנון ובנייה
                          </a>
                        </li>
                        <li>
                          <a
                            href="service_tiling_painting.html"
                            title="ריצוף וצביעה"
                          >
                            ריצוף וצביעה
                          </a>
                        </li>
                        <li>
                          <a
                            href="service_paver_walkways.html"
                            title="שבילי ריצוף"
                          >
                            שבילי ריצוף
                          </a>
                        </li>
                        <li>
                          <a
                            href="service_household_repairs.html"
                            title="תיקונים ביתיים"
                          >
                            תיקונים ביתיים
                          </a>
                        </li>
                        <li>
                          <a
                            href="service_solar_systems.html"
                            title="מערכות סולאריות"
                          >
                            מערכות סולאריות
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/projects">פרויקטים</Link>

                      <a href="#" className="template-arrow-menu" />
                      <ul>
                        <li>
                          <a
                            href="project_interior_renovation.html"
                            title="שיפוץ פנים"
                          >
                            שיפוץ פנים
                          </a>
                        </li>
                        <li>
                          <a
                            href="project_garden_renovation.html"
                            title="שיפוץ גינה"
                          >
                            שיפוץ גינה
                          </a>
                        </li>
                        <li>
                          <a href="project_painting.html" title="צביעה">
                            צביעה
                          </a>
                        </li>
                        <li>
                          <a
                            href="project_design_build.html"
                            title="תכנון ובנייה"
                          >
                            תכנון ובנייה
                          </a>
                        </li>
                        <li>
                          <a
                            href="project_solar_systems.html"
                            title="מערכות סולאריות"
                          >
                            מערכות סולאריות
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="team.html" title="הצוות שלנו">
                        הצוות שלנו
                      </a>
                    </li>
                    <li>
                      <a href="about.html" title="עמודים">
                        עמודים
                      </a>
                      <a href="#" className="template-arrow-menu" />
                      <ul>
                        <li>
                          <a href="about.html" title="אודות">
                            אודות
                          </a>
                        </li>
                        <li>
                          <a href="404.html" title="404 לא נמצא">
                            404 לא נמצא
                          </a>
                        </li>
                        <li>
                          <a href="services.html" title="שירותים סגנון 1">
                            שירותים סגנון 1
                          </a>
                        </li>
                        <li>
                          <a href="services2.html" title="שירותים סגנון 2">
                            שירותים סגנון 2
                          </a>
                        </li>
                        <li>
                          <a
                            href="service_interior_renovation.html"
                            title="שירות יחיד"
                          >
                            שירות יחיד
                          </a>
                        </li>
                        <li>
                          <a href="projects.html" title="פרויקטים">
                            פרויקטים
                          </a>
                        </li>
                        <li>
                          <a
                            href="project_interior_renovation.html"
                            title="פרויקט יחיד"
                          >
                            פרויקט יחיד
                          </a>
                        </li>
                        <li>
                          <a href="team.html" title="צוות">
                            צוות
                          </a>
                        </li>
                        <li>
                          <a
                            href="team_mark_whilberg.html"
                            title="חבר צוות יחיד"
                          >
                            חבר צוות יחיד
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog.html" title="בלוג">
                        בלוג
                      </a>
                      <a href="#" className="template-arrow-menu" />
                      <ul>
                        <li>
                          <a href="blog.html" title="בלוג">
                            בלוג
                          </a>
                        </li>
                        <li>
                          <a href="blog_left_sidebar.html" title="בלוג">
                            בלוג צד שמאל
                          </a>
                        </li>
                        <li>
                          <a href="blog_2_columns.html" title="בלוג 2 עמודות">
                            בלוג 2 עמודות
                          </a>
                        </li>
                        <li>
                          <a href="blog_3_columns.html" title="בלוג 3 עמודות">
                            בלוג 3 עמודות
                          </a>
                        </li>
                        <li>
                          <a href="post.html" title="פוסט יחיד">
                            פוסט יחיד
                          </a>
                        </li>
                        <li>
                          <a href="search.html?s=ipsum" title="תבנית חיפוש">
                            תבנית חיפוש
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="cost_calculator.html" title="מחשבון עלויות">
                        מחשבון עלויות
                      </a>
                    </li>
                    <li className="left-flyout">
                      <a href="contact.html" title="יצירת קשר">
                        יצירת קשר
                      </a>
                      <a href="#" className="template-arrow-menu" />
                      <ul>
                        <li>
                          <a href="contact.html" title="סגנון קשר 1">
                            סגנון קשר 1
                          </a>
                        </li>
                        <li>
                          <a href="contact_2.html" title="סגנון קשר 2">
                            סגנון קשר 2
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
