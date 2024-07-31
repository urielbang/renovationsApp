import React, { useState } from "react";
import Map from "../components/Map";
import { apiUrl } from "../config/apiConfig";
import axios from "axios";

export default function Contact() {
  const [inputsData, setInputsData] = useState({});
  const [toglleText, setToglleText] = useState(false);

  const handleChange = (e) => {
    setInputsData({ ...inputsData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(`${apiUrl}/contact`, inputsData);
    console.log(res.data);
    setToglleText(true);
  };

  return (
    <div>
      <div className="theme-page padding-bottom-66">
        <div className="clearfix">
          <Map />
          <div className="row page-margin-top">
            <div className="column column-1-3">
              <ul className="features-list">
                <li className="sl-small-location">
                  <p>
                    שדרות לינדן 272
                    <br />
                    וינטר פארק, FL 32789
                  </p>
                </li>
              </ul>
            </div>
            <div className="column column-1-3">
              <ul className="features-list">
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
              <ul className="features-list">
                <li className="sl-small-clock">
                  <p>
                    שני - שישי: 08.00 - 17.00
                    <br />
                    שבת: 09.00 - 12.00
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="row page-margin-top">
            <form
              className="contact-form"
              id="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="row">
                <fieldset className="column column-1-2">
                  <input
                    className="text-input"
                    name="name"
                    type="text"
                    onChange={handleChange}
                    placeholder="שמך *"
                  />
                  <input
                    className="text-input"
                    name="email"
                    type="text"
                    onChange={handleChange}
                    placeholder="האימייל שלך *"
                  />
                  <input
                    className="text-input"
                    name="phone"
                    type="number"
                    onChange={handleChange}
                    placeholder="טלפון"
                  />
                </fieldset>
                <fieldset className="column column-1-2">
                  <textarea
                    name="message"
                    onChange={handleChange}
                    placeholder="הודעה *"
                  />
                </fieldset>
              </div>
              <div className="row margin-top-30">
                <div className="column column-1-2">
                  {toglleText ? (
                    <p className="description t1">
                      ניצור איתך קשר תוך יום עסקים אחד.
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="column column-1-2 align-right">
                  <input
                    type="hidden"
                    name="action"
                    defaultValue="contact_form"
                  />
                  <input
                    type="submit"
                    name="submit"
                    defaultValue="שלח הודעה"
                    className="more active"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="row gray full-width page-padding-top padding-bottom-50">
        <div className="row row-4-4">
          <div className="column column-1-4">
            <h6 className="box-header">אודותינו</h6>
            <p className="description t1">
              נוסדה על ידי קווין סמית בשנת 2000. רנובייט הוקמה כספקית הגדולה
              והמכובדת של שירותי שיפוץ פנים המתמקדים בבניין ובבנייה.
            </p>
            <ul className="social-icons yellow margin-top-26">
              <li>
                <a href="#" className="social-facebook" />
              </li>
              <li>
                <a href="#" className="social-twitter" title="twitter" />
              </li>
              <li>
                <a href="#" className="social-linkedin" title="linkedin" />
              </li>
              <li>
                <a href="#" className="social-pinterest" title="pinterest" />
              </li>
            </ul>
          </div>
          <div className="column column-1-4">
            <h6 className="box-header">השירותים שלנו</h6>
            <ul className="list margin-top-20">
              <li className="template-bullet">שיפוץ פנים</li>
              <li className="template-bullet">עיצוב ובנייה</li>
              <li className="template-bullet">אריחים וצביעה</li>
              <li className="template-bullet">שבילי אבנים</li>
              <li className="template-bullet">תיקונים בבית</li>
              <li className="template-bullet">מערכות סולאריות</li>
            </ul>
          </div>
          <div className="column column-1-4">
            <h6 className="box-header">קטגוריות</h6>
            <ul className="taxonomies margin-top-30">
              <li>
                <a href="category.html" title="בניין">
                  בניין
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
                <a href="category.html" title="אבנים">
                  אבנים
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
                  title="מה ההבדל שמעט חודשים עושים"
                  className="post-image"
                >
                  <img src="images/samples/90x90/image_10.jpg" alt="" />
                </a>
                <div className="post-content">
                  <a href="post.html" title="מה ההבדל שמעט חודשים עושים">
                    מה ההבדל שמעט חודשים עושים
                  </a>
                  <ul className="post-details">
                    <li className="date">25 באפריל 2015</li>
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
