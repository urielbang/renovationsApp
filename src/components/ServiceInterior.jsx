import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/samples/480x320/image_01.jpg";
import img1 from "../assets/images/samples/480x320/image_07.jpg";

export default function ServiceInterior() {
  return (
    <div className="theme-page">
      <div className="row gray full-width page-header vertical-align-table">
        <div className="row full-width padding-top-bottom-50 vertical-align-cell">
          <div className="row">
            <div className="page-header-left">
              <h1>שיפוץ פנים</h1>
            </div>
            <div className="page-header-right">
              <div className="bread-crumb-container">
                <label>אתה נמצא כאן:</label>
                <ul className="bread-crumb">
                  <li>
                    <a title="השירותים שלנו" href="services.html">
                      השירותים שלנו
                    </a>
                  </li>
                  <li className="separator">/</li>
                  <li>שיפוץ פנים</li>
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
                השתמש בטופס שלנו כדי להעריך את העלות הראשונית של שיפוץ או התקנה.
              </p>
              <Link className="more" to="/calculator" title="בקש הצעת מחיר">
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
                  תוכל לסמוך עלינו בפרויקט השיפוץ הבא שלך, התקנת מדרכה או תיקון
                  ביתי. ההתקנות שלנו מבוצעות על ידי צוותים מאומנים במקצועיות
                  הגבוהה ביותר. תמיד בזמן ובתקציב.
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
                  עם למעלה מ-15 שנות ניסיון ומיקוד אמיתי על שביעות רצון הלקוחות,
                  תוכל לסמוך עלינו בפרויקט הבא שלך. אנו מספקים שירותי שיפוץ
                  והתקנה מקצועיים עם מיקוד אמיתי על שביעות רצון הלקוחות.
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
                      עלויות של פרויקט שיפוץ יכולות להשתנות בהתאם למורכבות
                      העבודה, איכות החומרים והגודל הכולל של השיפוץ. אנו תמיד
                      ממליצים להשתמש בחומרים איכותיים ולהשקיע בתכנון נכון כדי
                      למנוע עלויות נוספות בהמשך.
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
                      התקציב הכולל לבנייה כולל את עלויות החומרים, העבודה,
                      והתכנון. אנו תמיד שואפים לספק ללקוחותינו את העלות המיטבית
                      עם שמירה על איכות גבוהה.
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
      </div>
    </div>
  );
}
