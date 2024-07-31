import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/samples/480x320/image_01.jpg";
import img1 from "../assets/images/samples/480x320/image_07.jpg";

export default function ServiceDesign() {
  return (
    <div className="site-container">
      <div className="theme-page">
        <div className="row gray full-width page-header vertical-align-table">
          <div className="row full-width padding-top-bottom-50 vertical-align-cell">
            <div className="row">
              <div className="page-header-left">
                <h1>תכנון ובנייה</h1>
              </div>
              <div className="page-header-right">
                <div className="bread-crumb-container">
                  <label>אתה נמצא כאן:</label>
                  <ul className="bread-crumb">
                    <li>
                      <a title="השירותים שלנו" href="#">
                        השירותים שלנו
                      </a>
                    </li>
                    <li className="separator">/</li>
                    <li>תכנון ובנייה</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix">
          <div className="row margin-top-70">
            <div className="column column-1-4">
              <ul className="vertical-menu">
                <li>
                  <Link to="/serviceInterior" title="שיפוץ פנים">
                    שיפוץ פנים
                    <span className="template-arrow-menu" />
                  </Link>
                </li>
                <li className="selected">
                  <Link to="/serviceDesign" title="תכנון ובנייה">
                    תכנון ובנייה
                    <span className="template-arrow-menu" />
                  </Link>
                </li>
              </ul>
              <div className="call-to-action sl-small-wallet page-margin-top">
                <h4>מחשבון עלויות</h4>
                <p className="description t1">
                  השתמש בטופס שלנו כדי להעריך את העלות הראשונית של שיפוץ או
                  התקנה.
                </p>
                <Link className="more" to="/calculator">
                  בקש הצעת מחיר
                </Link>
              </div>
              <h6 className="box-header page-margin-top">הורדת חוברות</h6>
              <ul className="buttons margin-top-30">
                <li className="template-arrow-circle-down">
                  <a href="#" title="הורדת חוברת">
                    הורדת חוברת
                  </a>
                </li>
                <li className="template-arrow-circle-down">
                  <a href="#" title="הורדת סיכום">
                    הורדת סיכום
                  </a>
                </li>
              </ul>
            </div>
            <div className="column column-3-4">
              <div className="row">
                <div className="column column-1-2">
                  <a
                    href="#"
                    className="prettyPhoto re-preload"
                    title="שיפוץ פנים"
                  >
                    <img src={img} alt="img" />
                  </a>
                </div>
                <div className="column column-1-2">
                  <a
                    href="#"
                    className="prettyPhoto re-preload"
                    title="שיפוץ פנים"
                  >
                    <img src={img1} alt="img" />
                  </a>
                </div>
              </div>
              <div className="row page-margin-top">
                <div className="column-1-1">
                  <h3 className="box-header">סקירת שירות</h3>
                  <p className="description t1">
                    כאשר מדובר בבחירת משפץ לשיפור פנים הבית שלך, האיכות והאמון
                    לעולם לא צריכים להתפשר. עבודה עם מקצוען היא חובה מוחלטת. עם
                    למעלה מ-15 שנות ניסיון ומיקוד אמיתי על שביעות רצון הלקוחות,
                    תוכל לסמוך עלינו בפרויקט השיפוץ הבא שלך, התקנת מדרכה או
                    תיקון ביתי. ההתקנות שלנו מבוצעות על ידי צוותים מאומנים
                    במקצועיות הגבוהה ביותר. תמיד בזמן ובתקציב.
                  </p>
                  <p className="description t1">
                    Renovate השיגה תוצאות מוכחות בהצבת סטנדרטים יוצאי דופן בבקרת
                    עלויות, תכנון, תזמון ובטיחות פרויקט. יש לנו ניסיון שנותן לנו
                    יתרון תחרותי על פני אחרים בתחום שלנו.
                  </p>
                  <h3 className="box-header page-margin-top">תוכנית ופרטים</h3>
                  <table className="margin-top-40">
                    <tbody>
                      <tr>
                        <td>הכנת רעיונות לשיפוץ הבית</td>
                        <td>600$ - 1150$</td>
                      </tr>
                      <tr>
                        <td>ציון חומרים</td>
                        <td>250$ - 350$</td>
                      </tr>
                      <tr>
                        <td>צביעת חדרים</td>
                        <td>2.50$ - 3.50$ למ"ר</td>
                      </tr>
                      <tr>
                        <td>התקנת דלת פנים</td>
                        <td>150$ - 350$ לדלת</td>
                      </tr>
                      <tr>
                        <td>התקנת מפסק תאורה</td>
                        <td>100$</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row page-margin-top padding-bottom-70">
                <div className="column column-1-2">
                  <h4 className="box-header">למה לבחור בנו</h4>
                  <p className="description t1 margin-top-34">
                    עם למעלה מ-15 שנות ניסיון ומיקוד אמיתי על שביעות רצון
                    הלקוחות, תוכל לסמוך עלינו בפרויקט הבא שלך. אנו מספקים שירותי
                    שיפוץ והתקנה מקצועיים עם מיקוד אמיתי על שביעות רצון הלקוחות.
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
                    <li className="template-bullet">בזמן ובתקציב</li>
                    <li className="template-bullet">
                      מיקוד אמיתי בשביעות רצון הלקוחות
                    </li>
                  </ul>
                </div>
                <div className="column column-1-2">
                  <h4 className="box-header">שאלות נפוצות</h4>
                  <ul className="accordion margin-top-40 clearfix">
                    <li>
                      <div id="accordion-renovation-cost">
                        <h5>למה פרויקט שיפוץ עולה כל כך הרבה?</h5>
                      </div>
                      <p className="description t1">
                        מורבי נולה טורטור, דיגניסים אסט נודה קורסוס איזמוד אסט
                        ארקו. נומד טרבינה אוטר ויהיקולה יוסטו מגנה פאטוס באקומסן
                        טמפס, טרמינל אולמקורפר א קואם סוסיפיט.
                      </p>
                    </li>
                    <li>
                      <div id="accordion-project-timeline">
                        <h5>מהו ציר הזמן של הפרויקט?</h5>
                      </div>
                      <p className="description t1">
                        מורבי נולה טורטור, דיגניסים אסט נודה קורסוס איזמוד אסט
                        ארקו. נומד טרבינה אוטר ויהיקולה יוסטו מגנה פאטוס באקומסן
                        טמפס, טרמינל אולמקורפר א קואם סוסיפיט.
                      </p>
                    </li>
                    <li>
                      <div id="accordion-construction-budget">
                        <h5>מהו התקציב הכולל לבנייה?</h5>
                      </div>
                      <p className="description t1">
                        מורבי נולה טורטור, דיגניסים אסט נודה קורסוס איזמוד אסט
                        ארקו. נומד טרבינה אוטר ויהיקולה יוסטו מגנה פאטוס באקומסן
                        טמפס, טרמינל אולמקורפר א קואם סוסיפיט.
                      </p>
                    </li>
                    <li>
                      <div id="accordion-project-initiation">
                        <h5>איך מתחילים פרויקט שיפוץ?</h5>
                      </div>
                      <p className="description t1">
                        מורבי נולה טורטור, דיגניסים אסט נודה קורסוס איזמוד אסט
                        ארקו. נומד טרבינה אוטר ויהיקולה יוסטו מגנה פאטוס באקומסן
                        טמפס, טרמינל אולמקורפר א קואם סוסיפיט.
                      </p>
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
