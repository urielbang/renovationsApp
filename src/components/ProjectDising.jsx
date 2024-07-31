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
                <h1>כרטיס פרויקט</h1>
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
                title="תכנון ובנייה"
              >
                <img src={img} alt="img" />
              </a>
              <div className="row margin-top-30">
                <div className="column column-1-2">
                  <a
                    href="images/samples/750x500/image_02.jpg"
                    className="prettyPhoto re-preload"
                    title="תכנון ובנייה"
                  >
                    <img src={img1} alt="img" />
                  </a>
                </div>
                <div className="column column-1-2">
                  <a
                    href="images/samples/750x500/image_08.jpg"
                    className="prettyPhoto re-preload"
                    title="תכנון ובנייה"
                  >
                    <img src={img2} alt="img" />
                  </a>
                </div>
              </div>
              <div className="row margin-top-30">
                <a
                  href="images/samples/750x500/image_01.jpg"
                  className="prettyPhoto re-preload"
                  title="תכנון ובנייה"
                >
                  <img src={img3} alt="img" />
                </a>
              </div>
            </div>
            <div className="column column-1-2">
              <h3 className="box-header">תיאור קצר</h3>
              <p className="description t1">
                הבית כולל ארבעה חדרי שינה מרווחים, כל אחד עם ארונות מובנים
                וחלונות גדולים. הסוויטה הראשית היא מקום מפלט פרטי, עם ארון הליכה
                וחדר אמבטיה צמוד הכולל אמבטיה מפנקת ומקלחת הליכה.
              </p>
              <h4 className="box-header page-margin-top">במבט מהיר</h4>
              <table className="margin-top-40">
                <tbody>
                  <tr>
                    <td>סוג הפרויקט</td>
                    <td>{projectData?.projectType}</td>
                  </tr>
                  <tr>
                    <td>לקוח</td>
                    <td>{projectData?.client}</td>
                  </tr>
                  <tr>
                    <td>תאריך סיום</td>
                    <td>{projectData?.completionDate}</td>
                  </tr>
                  <tr>
                    <td>גודל הפרויקט</td>
                    <td>{projectData?.projectSize}</td>
                  </tr>
                  <tr>
                    <td>ערך החוזה</td>
                    <td>{projectData?.contractValue}</td>
                  </tr>
                </tbody>
              </table>
              <h4 className="box-header page-margin-top">היקף העבודה</h4>
              <div className="tabs small no-scroll align-left clearfix margin-top-40">
                <ul className="tabs-navigation small gray clearfix">
                  <li>
                    <Link title="מידע על הלקוח">מידע על הלקוח</Link>
                  </li>
                  <li>
                    <Link title="היקף העבודה">היקף העבודה</Link>
                  </li>
                </ul>
                <div id="client-info">
                  <p>
                    מורבי נולה טורטור, דיגניסים אסט נודה קורסוס איזמוד אסט ארקו.
                    נומד אט ויהיקולה נובום יוסטו מגנה.
                  </p>
                  <ul className="list margin-top-20">
                    <li className="template-bullet">
                      אחריות פיננסית ללקוחות שלנו
                    </li>
                    <li className="template-bullet">איכות ומקצועיות מעולים</li>
                    <li className="template-bullet">
                      איכות וערך ל
                      <a href="projects.html">פרויקטים שאנחנו מספקים</a>
                    </li>
                    <li className="template-bullet">
                      הסטנדרטים הגבוהים ביותר ב
                      <a href="cost_calculator.html">בקרת עלויות</a>
                    </li>
                  </ul>
                </div>
                <div id="scope-of-work">
                  <p>
                    מורבי נולה טורטור, דיגניסים אסט נודה קורסוס איזמוד אסט ארקו.
                    נומד אט ויהיקולה נובום יוסטו מגנה.
                  </p>
                  <ul className="list margin-top-20">
                    <li className="template-bullet">
                      אחריות פיננסית ללקוחות שלנו
                    </li>
                    <li className="template-bullet">איכות ומקצועיות מעולים</li>
                    <li className="template-bullet">בזמן ובתקציב</li>
                    <li className="template-bullet">
                      מיקוד אמיתי בשביעות רצון הלקוחות
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
            <h6 className="box-header">אודותינו</h6>
            <p className="description t1">
              נוסד על ידי קווין סמית בשנת 2000. Renovate יצרה את עצמה כאחת
              מהספקים הגדולים והיוקרתיים ביותר של שירותי שיפוץ פנים ממוקדי
              בנייה.
            </p>
            <ul className="social-icons yellow margin-top-26">
              <li>
                <a
                  target="_blank"
                  href="https://facebook.com/QuanticaLabs"
                  className="social-facebook"
                  title="פייסבוק"
                />
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://twitter.com/QuanticaLabs"
                  className="social-twitter"
                  title="טוויטר"
                />
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://1.envato.market/quanticalabs-portfolio"
                  className="social-linkedin"
                  title="לינקדאין"
                />
              </li>
              <li>
                <a
                  href="https://pinterest.com/quanticalabs/"
                  className="social-pinterest"
                  title="פינטרסט"
                />
              </li>
            </ul>
          </div>
          <div className="column column-1-4">
            <h6 className="box-header">השירותים שלנו</h6>
            <ul className="list margin-top-20">
              <li className="template-bullet">שיפוץ פנים</li>
              <li className="template-bullet">תכנון ובנייה</li>
              <li className="template-bullet">ריצוף וצביעה</li>
              <li className="template-bullet">שבילי ריצוף</li>
              <li className="template-bullet">תיקונים ביתיים</li>
              <li className="template-bullet">מערכות סולאריות</li>
            </ul>
          </div>
          <div className="column column-1-4">
            <h6 className="box-header">קטגוריות</h6>
            <ul className="taxonomies margin-top-30">
              <li>
                <a href="category.html" title="בנייה">
                  בנייה
                </a>
              </li>
              <li>
                <a href="category.html" title="עיצוב">
                  עיצוב
                </a>
              </li>
              <li>
                <a href="category.html" title="ריצוף">
                  ריצוף
                </a>
              </li>
              <li>
                <a href="category.html" title="צביעה">
                  צביעה
                </a>
              </li>
              <li>
                <a href="category.html" title="שבילי ריצוף">
                  שבילי ריצוף
                </a>
              </li>
              <li>
                <a href="category.html" title="אינסטלציה">
                  אינסטלציה
                </a>
              </li>
              <li>
                <a href="category.html" title="שיפוץ">
                  שיפוץ
                </a>
              </li>
              <li>
                <a href="category.html" title="תיקונים">
                  תיקונים
                </a>
              </li>
              <li>
                <a href="category.html" title="מערכות סולאריות">
                  מערכות סולאריות
                </a>
              </li>
              <li>
                <a href="category.html" title="ריצוף">
                  ריצוף
                </a>
              </li>
            </ul>
          </div>
          <div className="column column-1-4">
            <h6 className="box-header">פוסטים אחרונים</h6>
            <ul className="blog small margin-top-30">
              <li>
                <a
                  href="post.html"
                  title="איזה שינוי יכולים לעשות כמה חודשים"
                  className="post-image"
                >
                  <img src="images/samples/90x90/image_10.jpg" alt="" />
                </a>
                <div className="post-content">
                  <a
                    href="post.html"
                    title="איזה שינוי יכולים לעשות כמה חודשים"
                  >
                    איזה שינוי יכולים לעשות כמה חודשים
                  </a>
                  <ul className="post-details">
                    <li className="date">25 אפריל, 2015</li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="post.html"
                  title="שיפוץ מטבח וסלון"
                  className="post-image"
                >
                  <img src="images/samples/90x90/image_07.jpg" alt="" />
                </a>
                <div className="post-content">
                  <a href="post.html" title="שיפוץ מטבח וסלון">
                    שיפוץ מטבח וסלון
                  </a>
                  <ul className="post-details">
                    <li className="date">17 אפריל, 2015</li>
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
