import React from "react";
import img from "../assets/images/samples/390x260/image_01.jpg";
import img1 from "../assets/images/samples/390x260/image_02.jpg";
import img2 from "../assets/images/samples/390x260/image_03.jpg";
import img3 from "../assets/images/samples/390x260/image_04.jpg";
import img4 from "../assets/images/samples/390x260/image_05.jpg";
import img5 from "../assets/images/samples/390x260/image_06.jpg";
import img6 from "../assets/images/samples/90x90/image_10.jpg";
import img7 from "../assets/images/samples/90x90/image_07.jpg";

export default function Services() {
  return (
    <div className="site-container">
      <div className="theme-page padding-bottom-70">
        <div className="row gray full-width page-header vertical-align-table">
          <div className="row full-width padding-top-bottom-50 vertical-align-cell">
            <div className="row">
              <div className="page-header-left">
                <h1>השירותים שלנו</h1>
              </div>
              <div className="page-header-right">
                <div className="bread-crumb-container">
                  <label>אתה נמצא כאן:</label>
                  <ul className="bread-crumb">
                    <li>
                      <a title="בית" href="#">
                        בית
                      </a>
                    </li>
                    <li className="separator">/</li>
                    <li>השירותים שלנו</li>
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
                <a href="#" title="שיפוץ פנים">
                  <img src={img} alt="" />
                </a>
                <h4 className="box-header">
                  <a href="#" title="שיפוץ פנים">
                    שיפוץ פנים
                  </a>
                </h4>
                <p>
                  אנו יכולים לעזור לך להחיות מחדש חדרים קיימים ולפתח חללים שאינם
                  בשימוש.
                </p>
              </li>
              <li>
                <a href="#" title="תכנון ובנייה">
                  <img src={img1} alt="" />
                </a>
                <h4 className="box-header">
                  <a href="#" title="תכנון ובנייה">
                    תכנון ובנייה
                  </a>
                </h4>
                <p>מהתכנון הראשוני ומפרטי הפרויקט ועד להשגת גימור גבוה.</p>
              </li>
              <li>
                <a href="#" title="ריצוף וצביעה">
                  <img src={img2} alt="" />
                </a>
                <h4 className="box-header">
                  <a href="#" title="ריצוף וצביעה">
                    ריצוף וצביעה
                  </a>
                </h4>
                <p>אנו מציעים פתרונות איכותיים לריצוף וצביעה לפנים ולחוץ.</p>
              </li>
              <li>
                <a href="#" title="שבילי ריצוף">
                  <img src={img3} alt="" />
                </a>
                <h4 className="box-header">
                  <a href="#" title="שבילי ריצוף">
                    שבילי ריצוף
                  </a>
                </h4>
                <p>
                  שבילי ריצוף מגדירים יופי, אלגנטיות ועמידות לדרכים, פטיו ושבילי
                  הליכה.
                </p>
              </li>
              <li>
                <a href="#" title="תיקונים ביתיים">
                  <img src={img4} alt="" />
                </a>
                <h4 className="box-header">
                  <a href="#" title="תיקונים ביתיים">
                    תיקונים ביתיים
                  </a>
                </h4>
                <p>אנו מציעים תיקונים ושיפורים אמינים ובמחירים נוחים לבית.</p>
              </li>
              <li>
                <a href="#" title="מערכות סולאריות">
                  <img src={img5} alt="" />
                </a>
                <h4 className="box-header">
                  <a href="#" title="מערכות סולאריות">
                    מערכות סולאריות
                  </a>
                </h4>
                <p>ייצר חשמל ירוק וזול מאור השמש באמצעות תאים פוטו-וולטאיים.</p>
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
            <h6 className="box-header">אודותינו</h6>
            <p className="description t1">
              נוסד על ידי קווין סמית בשנת 2000. Renovate יצרה את עצמה כאחת
              מהספקים הגדולים והיוקרתיים ביותר של שירותי שיפוץ פנים ממוקדי
              בנייה.
            </p>
            <ul className="social-icons yellow margin-top-26">
              <li>
                <a href="#" className="social-facebook" title="פייסבוק" />
              </li>
              <li>
                <a href="#" className="social-twitter" title="טוויטר" />
              </li>
              <li>
                <a href="#" className="social-linkedin" title="לינקדאין" />
              </li>
              <li>
                <a href="#" className="social-pinterest" title="פינטרסט" />
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
                <a href="#" title="בנייה">
                  בנייה
                </a>
              </li>
              <li>
                <a href="#" title="עיצוב">
                  עיצוב
                </a>
              </li>
              <li>
                <a href="#" title="ריצוף">
                  ריצוף
                </a>
              </li>
              <li>
                <a href="#" title="צביעה">
                  צביעה
                </a>
              </li>
              <li>
                <a href="#" title="שבילי ריצוף">
                  שבילי ריצוף
                </a>
              </li>
              <li>
                <a href="#" title="אינסטלציה">
                  אינסטלציה
                </a>
              </li>
              <li>
                <a href="#" title="שיפוץ">
                  שיפוץ
                </a>
              </li>

              <li>
                <a href="#" title="תיקונים">
                  תיקונים
                </a>
              </li>
              <li>
                <a href="#" title="מערכות סולאריות">
                  מערכות סולאריות
                </a>
              </li>
              <li>
                <a href="#" title="ריצוף">
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
                  href="#"
                  title="איזה שינוי יכולים לעשות כמה חודשים"
                  className="post-image"
                >
                  <img src={img6} alt="" />
                </a>
                <div className="post-content">
                  <a href="#" title="איזה שינוי יכולים לעשות כמה חודשים">
                    איזה שינוי יכולים לעשות כמה חודשים
                  </a>
                  <ul className="post-details">
                    <li className="date">25 אפריל, 2015</li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#" title="שיפוץ מטבח וסלון" className="post-image">
                  <img src={img7} alt="" />
                </a>
                <div className="post-content">
                  <a href="#" title="שיפוץ מטבח וסלון">
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
