import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/samples/480x480/image_10.jpg";
import img1 from "../assets/images/samples/90x90/image_10.jpg";
import img2 from "../assets/images/samples/90x90/image_07.jpg";

export default function PagesPage() {
  return (
    <div>
      <div className="theme-page padding-bottom-66">
        <div className="row gray full-width page-header vertical-align-table">
          <div className="row full-width padding-top-bottom-50 vertical-align-cell">
            <div className="row">
              <div className="page-header-left">
                <h1>אודותינו</h1>
              </div>
              <div className="page-header-right">
                <div className="bread-crumb-container">
                  <label>אתה נמצא כאן:</label>
                  <ul className="bread-crumb">
                    <li>
                      <Link title="בית">בית</Link>
                    </li>
                    <li className="separator">/</li>
                    <li>אודותינו</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix">
          <div className="row margin-top-70">
            <div className="column column-1-2 align-center re-preload">
              <div className="image-wrapper">
                <img src={img} alt="" className="radius" />
              </div>
            </div>
            <div className="column column-1-2">
              <h2 className="box-header align-left">אנחנו Renovate</h2>
              <p className="description t1">
                נוסדה על ידי קווין סמית בשנת 2000, Renovate יצרה את עצמה כאחת
                מהספקיות הגדולות והיוקרתיות ביותר של שירותי שיפוץ פנים ממוקדי
                בנייה. אנו מספקים שירותי שיפוץ והתקנה מקצועיים עם דגש אמיתי על
                שביעות רצון הלקוחות. שירותי הבנייה שלנו הם חברה רב תחומית המתמחה
                בתחומים הבאים:
              </p>
              <ul className="list margin-top-20">
                <li className="template-bullet">
                  אנו משלבים עבודה באיכות גבוהה, ידע מעולה ומחירים נמוכים
                </li>
                <li className="template-bullet">
                  אנו יכולים להבטיח עבודה שנעשית בזמן ובתקציב
                </li>
                <li className="template-bullet">
                  תוצאות מוכחות בהצבת סטנדרטים יוצאי דופן ב
                  <a href="cost_calculator.html">בקרת עלויות</a>
                </li>
                <li className="template-bullet">
                  שירות מקצועי ללקוחות פרטיים ו<a href="#">עסקיים</a>
                </li>
                <li className="template-bullet">
                  15 שנות ניסיון ודגש אמיתי על שביעות רצון הלקוחות
                </li>
              </ul>
              <div className="page-margin-top">
                <Link to="/services" className="more" title="השירותים שלנו">
                  השירותים שלנו
                </Link>
              </div>
            </div>
          </div>
          <div className="row gray full-width page-margin-top-section padding-top-70 padding-bottom-66">
            <div className="row">
              <div className="column column-1-3">
                <ul className="features-list">
                  <li className="sl-small-wrench">
                    <h4>הערך הטוב ביותר</h4>
                    <p>
                      אנו משלבים עבודה באיכות גבוהה, ידע מעולה ומחירים נמוכים
                      כדי לספק לך שירות שלא ניתן להשוות למתחרים שלנו.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="column column-1-3">
                <ul className="features-list">
                  <li className="sl-small-measure">
                    <h4>חיסכון בזמן</h4>
                    <p>
                      יש לנו את הניסיון, האנשים והמשאבים כדי לגרום לפרויקט
                      להתנהל בצורה חלקה. אנו יכולים להבטיח עבודה שנעשית בזמן.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="column column-1-3">
                <ul className="features-list">
                  <li className="sl-small-bucket">
                    <h4>בתוך התקציב</h4>
                    <p>
                      עבודה איתנו כוללת סדרת שלבים מתוכננת בקפידה, שמתמקדת סביב
                      לוח זמנים שאנו מקפידים עליו ותקשורת יומית.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row page-margin-top-section">
            <div className="column column-1-2">
              <h3 className="box-header">המשימה שלנו</h3>
              <p className="description t1">
                המשימה שלנו היא לספק שירותי בנייה ושיפוץ באיכות הגבוהה ביותר, עם
                דגש על שביעות רצון הלקוחות. אנו שואפים לחדש ולשפר את איכות
                הבנייה והשיפוץ שלנו תוך שמירה על תקני הבטיחות והאיכות הגבוהים
                ביותר.
              </p>
              <p className="description t1">
                אנו מבינים את החשיבות של זמן וכסף עבור לקוחותינו, ולכן אנו
                מתחייבים לעבוד בצורה מקצועית ואמינה, עם תכנון מוקפד ותקשורת
                שוטפת לאורך כל הפרויקט.
              </p>
              <div className="page-margin-top">
                <Link className="more" to="/projects">
                  הפרויקטים שלנו
                </Link>
              </div>
            </div>
            <div className="column column-1-2">
              <h3 className="box-header">שאלות נפוצות</h3>
              <ul className="accordion margin-top-40 clearfix">
                <li>
                  <div id="accordion-renovation-cost">
                    <h5>למה פרויקט שיפוץ עולה כל כך הרבה?</h5>
                  </div>
                  <p className="description t1">
                    עלות פרויקט שיפוץ יכולה להיות גבוהה בשל מורכבות העבודה,
                    איכות החומרים והזמן הנדרש לביצוע הפרויקט. אנו תמיד ממליצים
                    להשתמש בחומרים איכותיים ולהשקיע בתכנון נכון כדי למנוע עלויות
                    נוספות בהמשך.
                  </p>
                </li>
                <li>
                  <div id="accordion-project-timeline">
                    <h5>מהו ציר הזמן של הפרויקט?</h5>
                  </div>
                  <p className="description t1">
                    ציר הזמן של פרויקט שיפוץ תלוי במורכבות העבודה ובזמינות
                    החומרים. אנו מתחייבים לעבוד לפי לוח זמנים קפדני ולהשלים את
                    העבודה בזמן המוסכם עם הלקוח.
                  </p>
                </li>
                <li>
                  <div id="accordion-construction-budget">
                    <h5>מהו התקציב הכולל לבנייה?</h5>
                  </div>
                  <p className="description t1">
                    התקציב הכולל לבנייה כולל את עלויות החומרים, העבודה, והתכנון.
                    אנו תמיד שואפים לספק ללקוחותינו את העלות המיטבית עם שמירה על
                    איכות גבוהה.
                  </p>
                </li>
                <li>
                  <div id="accordion-project-initiation">
                    <h5>איך מתחילים פרויקט שיפוץ?</h5>
                  </div>
                  <p className="description t1">
                    תחילת פרויקט שיפוץ מתחילה בפגישה עם הלקוח להבנת צרכיו
                    ודרישותיו, ולאחר מכן אנו מבצעים תכנון מפורט ומציאת חומרים
                    מתאימים לפני התחלת העבודה בפועל.
                  </p>
                </li>
              </ul>
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
            <ul classה="contact-details-list">
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
              נוסדה על ידי קווין סמית בשנת 2000. Renovate יצרה את עצמה כאחת
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
                  <img src={img1} alt="" />
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
                  <img src={img2} alt="" />
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
