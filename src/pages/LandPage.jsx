import React from "react";
import "./style/reset.css";
import "./style/superfish.css";
import "./style/prettyPhoto.css";
import "./style/jquery.qtip.css";
import "./style/style.css";
import "./style/animations.css";
import "./style/responsive.css";
import "./style/odometer-theme-default.css";
import "./fonts/streamline-small/styles.css";
import "./fonts/streamline-large/styles.css";
import "./fonts/template/styles.css";
import "./fonts/social/styles.css";
import img from "../assets/images/samples/390x260/image_01.jpg";
import img2 from "../assets/images/samples/390x260/image_02.jpg";
import img3 from "../assets/images/samples/390x260/image_03.jpg";
import projectImg from "../assets/images/samples/480x320/image_04.jpg";
import projectImg1 from "../assets/images/samples/480x320/image_05.jpg";
import projectImg2 from "../assets/images/samples/480x320/image_06.jpg";
import projectImg3 from "../assets/images/samples/480x320/image_07.jpg";
import warper from "../assets/images/samples/480x480/image_10.jpg";
import logo from "../assets/images/logos/logo_01.png";
import logo1 from "../assets/images/logos/logo_02.png";
import logo2 from "../assets/images/logos/logo_03.png";
import logo3 from "../assets/images/logos/logo_04.png";
import logo4 from "../assets/images/logos/logo_05.png";
import logo5 from "../assets/images/logos/logo_06.png";
import logo6 from "../assets/images/logos/logo_06.png";
import logo7 from "../assets/images/logos/logo_04.png";
import logo8 from "../assets/images/logos/logo_03.png";
import logo9 from "../assets/images/logos/logo_02.png";
import logo10 from "../assets/images/logos/logo_01.png";
import Sliderr from "../components/Slider";

import { Link } from "react-router-dom";

function LandPage() {
  return (
    <div>
      <div className="site-container">
        {/* Slider Revolution */}
        <Sliderr />
        <div className="theme-page">
          <div className="clearfix">
            <div className="row full-width">
              <div className="announcement clearfix">
                <ul className="columns no-width">
                  <li className="column column-3-4">
                    <div className="vertical-align">
                      <div className="vertical-align-cell sl-small-wallet">
                        <h3>עלות השיפוץ</h3>
                        <p className="description">
                          השתמשו בטופס שלנו להערכת העלות ההתחלתית של השיפוץ או
                          ההתקנה.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="column-right column-1-4">
                    <div className="vertical-align">
                      <div className="vertical-align-cell">
                        <Link to="/calculator" className="more">
                          בקשת הצעת מחיר
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row full-width gray page-padding-top-section">
              <div className="row">
                <h2 className="box-header">השירותים שלנו</h2>
                <p className="description align-center">
                  עם יותר מ-15 שנות ניסיון ומיקוד אמיתי בשביעות רצון הלקוחות,
                  אתם יכולים לסמוך עלינו בשיפוץ הבא שלכם,
                  <br />
                  התקנת שבילים או תיקונים בבית. אנו מספקים שירות מקצועי ללקוחות
                  פרטיים ומסחריים.
                </p>
                <ul className="services-list clearfix page-margin-top">
                  <li>
                    <Link to="/serviceInterior" title="שיפוץ פנים">
                      <img src={img} alt="" />
                    </Link>
                    <h4 className="box-header">
                      <Link to="/serviceInterior" title="שיפוץ פנים">
                        שיפוץ פנים
                      </Link>
                    </h4>
                    <p>
                      אנו יכולים לעזור לכם להכניס חיים חדשים לחדרים קיימים ולפתח
                      חללים בלתי מנוצלים.
                    </p>
                  </li>
                  <li>
                    <Link to="/serviceDesign">
                      <img src={img3} alt="" />
                    </Link>
                    <h4 className="box-header">
                      <Link to="/serviceDesign" title="עיצוב ובנייה">
                        עיצוב ובנייה
                      </Link>
                    </h4>
                    <p>מהעיצוב הראשוני והמפרט הפרויקט ועד לסיום איכותי גבוה.</p>
                  </li>
                  <li>
                    <Link to="/serviceDesign">
                      <img src={img2} alt="" />
                    </Link>
                    <h4 className="box-header">
                      <Link to="/serviceDesign" title="אריחים וצביעה">
                        אריחים וצביעה
                      </Link>
                    </h4>
                    <p>
                      אנו מציעים פתרונות איכותיים של אריחים וצביעה לפנים וחוץ.
                    </p>
                  </li>
                </ul>
                <div className="align-center margin-top-67 padding-bottom-87">
                  <Link to="/services" className="more">
                    הצג את כל השירותים
                  </Link>
                </div>
              </div>
            </div>
            <div className="row full-width page-margin-top-section">
              <div className="row">
                <h2 className="box-header">פרויקטים אחרונים</h2>
                <p className="description align-center">
                  הנה כמה פרויקטים רבים שהשלמנו ללקוחות שלנו. אנו מספקים שירות
                  מקצועי
                  <br />
                  הכולל ייעוץ, הערכה חינמית, עיצוב, אספקת חומרים והתקנה.
                </p>
              </div>
              <ul className="projects-list clearfix page-margin-top">
                <li>
                  <Link>
                    <img src={projectImg3} alt="" />
                  </Link>
                  <div className="view align-center">
                    <div className="vertical-align-table">
                      <div className="vertical-align-cell">
                        <p className="description">עיצוב ובנייה</p>
                        <Link to="/projectDesign" className="more simple">
                          הצג פרויקט
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link>
                    <img src={projectImg} alt="" />
                  </Link>
                  <div className="view align-center">
                    <div className="vertical-align-table">
                      <div className="vertical-align-cell">
                        <p className="description">שיפוץ גינה</p>
                        <Link className="more simple">הצג פרויקט</Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link>
                    <img src={projectImg1} alt="" />
                  </Link>
                  <div className="view align-center">
                    <div className="vertical-align-table">
                      <div className="vertical-align-cell">
                        <p className="description">שיפוץ פנים</p>
                        <Link className="more simple">הצג פרויקט</Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link>
                    <img src={projectImg2} alt="" />
                  </Link>
                  <div className="view align-center">
                    <div className="vertical-align-table">
                      <div className="vertical-align-cell">
                        <p className="description">מערכות סולאריות</p>
                        <Link className="more simple">הצג פרויקט</Link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="row gray full-width padding-top-54 padding-bottom-61 align-center">
              <h3>
                <span className="button-label">חקרו את הפרויקטים שלנו</span>{" "}
                <Link to="/projects" className="more">
                  הצג את כל הפרויקטים
                </Link>
              </h3>
            </div>
            <div className="row page-margin-top-section">
              <div className="row">
                <h2 className="box-header">אודותינו</h2>
                <p className="description align-center">
                  אנו מספקים שירותי שיפוץ והתקנה מקצועיים עם מיקוד אמיתי בשביעות
                  רצון הלקוחות.
                  <br />
                  ההתקנות שלנו מבוצעות על ידי צוותים מאומנים לחלוטין ברמה
                  המקצועית הגבוהה ביותר.
                </p>
              </div>
              <div className="row page-margin-top">
                <div className="column column-1-2 align-center re-preload">
                  <div className="image-wrapper">
                    <img src={warper} alt="" className="radius" />
                  </div>
                </div>
                <div className="column column-1-2">
                  <ul className="features-list">
                    <li className="sl-small-helmet margin-top-40">
                      <h4>מעל 15 שנות ניסיון</h4>
                      <p>
                        אנו משלבים עבודת איכות, ידע עליון ומחירים נמוכים כדי
                        לספק לכם שירות שאין כמותו למתחרים שלנו.
                      </p>
                    </li>
                    <li className="sl-small-roller">
                      <h4>החומרים הטובים ביותר</h4>
                      <p>
                        יש לנו את הניסיון, הצוות והמשאבים כדי לגרום לפרויקט
                        להתנהל בצורה חלקה. אנו יכולים להבטיח שעבודה תבוצע בזמן.
                      </p>
                    </li>
                    <li className="sl-small-driller">
                      <h4>סטנדרטים מקצועיים</h4>
                      <p>
                        עבודה איתנו כוללת סדרה שלבים מתוכננת בקפידה, מרוכזת סביב
                        לוח זמנים שאנו דבקים בו ותקשורת יומית.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row gray full-width page-margin-top-section page-padding-top-section padding-bottom-66">
              <div className="row">
                <div className="tabs no-scroll clearfix">
                  <ul className="tabs-navigation clearfix">
                    <li>
                      <Link className="sl-small-bubble-check">אנו מציעים</Link>
                      <span />
                    </li>
                    <li>
                      <Link className="sl-small-shield">אנו מבטיחים</Link>
                      <span />
                    </li>
                    <li>
                      <Link className="sl-small-truck">אנו מספקים</Link>
                      <span />
                    </li>
                  </ul>
                  <div id="we-offer">
                    <h4 className="box-header">ההצעה שלנו</h4>
                    <p>
                      אנו מציעים מגוון רחב של שירותי שיפוץ ובנייה באיכות הגבוהה
                      ביותר. צוות המומחים שלנו משתמש בחומרים הטובים ביותר
                      ובטכנולוגיות המתקדמות ביותר כדי להבטיח תוצאות מרשימות
                      ושביעות רצון מלאה של לקוחותינו. אנו מתחייבים להעניק לכם
                      שירות מקצועי ואמין בכל שלב של הפרויקט.
                    </p>
                  </div>
                  <div id="we-guarantee">
                    <h4 className="box-header">הערבות שלנו</h4>
                    <p>
                      אנו מעניקים אחריות מלאה על כל עבודות השיפוץ והבנייה שלנו.
                      כל פרויקט מתבצע על ידי צוות מיומן ומנוסה, תוך שימוש
                      בחומרים האיכותיים ביותר ובשיטות עבודה מתקדמות. אנחנו
                      דואגים להקפיד על עמידה בלוחות זמנים ובתקציב שנקבע מראש,
                      ומבטיחים לשמור על תקשורת פתוחה ושוטפת עם הלקוחות שלנו
                      לאורך כל התהליך.
                    </p>
                  </div>
                  <div id="we-provide">
                    <h4 className="box-header">השירותים שלנו</h4>
                    <p>
                      השירותים שלנו כוללים שיפוץ פנים וחוץ, בניית מבנים חדשים,
                      עבודות גמר, עיצוב פנים, התקנת מערכות סולאריות, ועוד. אנו
                      מספקים פתרונות מותאמים אישית לכל לקוח, תוך דגש על איכות,
                      מקצועיות וחדשנות. כל פרויקט מלווה בייעוץ מקצועי והכוונה
                      לאורך כל הדרך, מהתכנון ועד לסיום העבודה.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row page-margin-top-section padding-bottom-66">
              <h2 className="box-header">למה לבחור ברנובייט</h2>
              <p className="description align-center">
                נוסדה על ידי קווין סמית בשנת 2000, רנובייט הוקמה כאחת מהספקיות
                הגדולות והמכובדות
                <br />
                של שירותי שיפוץ פנים המתמקדים בבנייה ובבנייה.
              </p>
              <div className="row page-margin-top">
                <div className="column column-1-3">
                  <ul className="features-list big">
                    <li className="sl-large-house-1">
                      <div className="ornament" />
                      <h4 className="box-header page-margin-top">
                        מעל 15 שנות ניסיון
                      </h4>
                      <p>
                        עם ניסיון עשיר של מעל 15 שנים בתחום השיפוץ והבנייה, אנו
                        מספקים שירותים מקצועיים ברמה הגבוהה ביותר. הצוות שלנו
                        כולל אנשי מקצוע מיומנים ובעלי ניסיון רב, המבטיחים תוצאות
                        מרשימות בכל פרויקט.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="column column-1-3">
                  <ul className="features-list big">
                    <li className="sl-large-eco">
                      <div className="ornament" />
                      <h4 className="box-header page-margin-top">
                        החומרים הטובים ביותר
                      </h4>
                      <p>
                        אנו משתמשים רק בחומרים האיכותיים ביותר ובטכנולוגיות
                        המתקדמות ביותר בשוק. כל פרויקט מתבצע עם דגש על איכות
                        וגימור מושלם, תוך שמירה על התקנים המחמירים ביותר בתחום
                        הבנייה והשיפוץ.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="column column-1-3">
                  <ul className="features-list big">
                    <li className="sl-large-garage">
                      <div className="ornament" />
                      <h4 className="box-header page-margin-top">
                        סטנדרטים מקצועיים
                      </h4>
                      <p>
                        העבודה שלנו מבוצעת לפי הסטנדרטים הגבוהים ביותר, תוך
                        שמירה על דיוק, יעילות ואיכות. אנו מקפידים על עמידה
                        בלוחות זמנים ובתקציב שנקבע מראש, ומתחייבים לשירות אישי
                        ומקצועי לכל לקוח.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row gray full-width page-padding-top-section padding-bottom-66">
              <div className="row">
                <h2 className="box-header">אנו עובדים עם</h2>
                <div className="our-clients-list-container page-margin-top">
                  <ul className="our-clients-list">
                    <li>
                      <img src={logo} alt="" />
                    </li>
                    <li>
                      <img src={logo1} alt="" />
                    </li>
                    <li>
                      <img src={logo2} alt="" />{" "}
                    </li>
                    <li>
                      <img src={logo3} alt="" />{" "}
                    </li>
                    <li>
                      <img src={logo4} alt="" />{" "}
                    </li>
                    <li>
                      <img src={logo5} alt="" />{" "}
                    </li>
                    <li>
                      <img src={logo6} alt="" />{" "}
                    </li>
                    <li>
                      <img src={logo7} alt="" />{" "}
                    </li>
                    <li>
                      <img src={logo8} alt="" />{" "}
                    </li>
                    <li>
                      <img src={logo9} alt="" />{" "}
                    </li>
                    <li>
                      <img src={logo10} alt="" />{" "}
                    </li>
                    <li>
                      <img src={logo} alt="" />{" "}
                    </li>
                  </ul>
                  <div className="re-carousel-pagination" />
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
                    +972 75 23 2222
                  </p>
                </li>
              </ul>
            </div>
            <div className="column column-1-3">
              <ul className="contact-details-list">
                <li className="sl-small-location">
                  <p>
                    רחוב הרצל 272
                    <br />
                    ראשון לציון, IL 32789
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
                    <a href="mailto:adiSambata@gmail.com">
                      adiSambata@gmail.com
                    </a>
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
                  <Link className="social-facebook" />
                </li>
                <li>
                  <Link className="social-twitter" />
                </li>
                <li>
                  <Link className="social-linkedin" />
                </li>
                <li>
                  <Link className="social-pinterest" />
                </li>
              </ul>
            </div>
            <div className="column column-1-4">
              <h6 className="box-header">השירותים שלנו</h6>
              <ul className="list margin-top-20">
                <li className="template-bullet">שיפוץ פנים</li>
                <li className="template-bullet">עיצוב ובנייה</li>
                <li className="template-bullet">אריחים וצביעה</li>
                <li className="template-bullet">שבילים מרוצפים</li>
                <li className="template-bullet">תיקונים בבית</li>
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
                  <a href="category.html" title="שבילים מרוצפים">
                    שבילים מרוצפים
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
                  <a href="category.html" title="אריחים">
                    אריחים
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
                    title="מה ההבדל שעושים כמה חודשים"
                    className="post-image"
                  >
                    <img src="images/samples/90x90/image_10.jpg" alt="" />
                  </a>
                  <div className="post-content">
                    <a href="post.html" title="מה ההבדל שעושים כמה חודשים">
                      מה ההבדל שעושים כמה חודשים
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
      <a
        href="#top"
        className="scroll-top animated-element template-arrow-up"
        title="גלול לראש"
      />
    </div>
  );
}

export default LandPage;
