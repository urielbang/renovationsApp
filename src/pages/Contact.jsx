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
                    272 Linden Avenue
                    <br />
                    Winter Park, FL 32789
                  </p>
                </li>
              </ul>
            </div>
            <div className="column column-1-3">
              <ul className="features-list">
                <li className="sl-small-phone">
                  <p>
                    Phone:
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
                    Monday - Friday: 08.00 - 17.00
                    <br />
                    Saturday: 09.00 - 12.00
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
                    placeholder="Your Name *"
                  />
                  <input
                    className="text-input"
                    name="email"
                    type="text"
                    onChange={handleChange}
                    placeholder="Your Email *"
                  />
                  <input
                    className="text-input"
                    name="phone"
                    type="number"
                    onChange={handleChange}
                    placeholder="Your Phone"
                  />
                </fieldset>
                <fieldset className="column column-1-2">
                  <textarea
                    name="message"
                    onChange={handleChange}
                    placeholder="Message *"
                  />
                </fieldset>
              </div>
              <div className="row margin-top-30">
                <div className="column column-1-2">
                  {toglleText ? (
                    <p className="description t1">
                      We will contact you within one business day.
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
                    defaultValue="SEND MESSAGE"
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
            <h6 className="box-header">About Us</h6>
            <p className="description t1">
              Founded by Kevin Smith back in 2000. Renovate has estabilished
              itself as one of the greatest and prestigious providers of
              construction focused interior renovation services and building.
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
            <h6 className="box-header">Our Services</h6>
            <ul className="list margin-top-20">
              <li className="template-bullet">Interior Renovation</li>
              <li className="template-bullet">Design and Build</li>
              <li className="template-bullet">Tiling and Painting</li>
              <li className="template-bullet">Paver Walkways</li>
              <li className="template-bullet">Household Repairs</li>
              <li className="template-bullet">Solar Systems</li>
            </ul>
          </div>
          <div className="column column-1-4">
            <h6 className="box-header">Categories</h6>
            <ul className="taxonomies margin-top-30">
              <li>
                <a href="category.html" title="BUILD">
                  BUILD
                </a>
              </li>
              <li>
                <a href="category.html" title="DESIGN">
                  DESIGN
                </a>
              </li>
              <li>
                <a href="category.html" title="FLOORING">
                  FLOORING
                </a>
              </li>
              <li>
                <a href="category.html" title="PAINTING">
                  PAINTING
                </a>
              </li>
              <li>
                <a href="category.html" title="PAVERS">
                  PAVERS
                </a>
              </li>
              <li>
                <a href="category.html" title="PLUMBING">
                  PLUMBING
                </a>
              </li>
              <li>
                <a href="category.html" title="RENOVATION">
                  RENOVATION
                </a>
              </li>
              <li>
                <a href="category.html" title="REPAIRS">
                  REPAIRS
                </a>
              </li>
              <li>
                <a href="category.html" title="SOLAR SYSTEMS">
                  SOLAR SYSTEMS
                </a>
              </li>
              <li>
                <a href="category.html" title="TILING">
                  TILING
                </a>
              </li>
            </ul>
          </div>
          <div className="column column-1-4">
            <h6 className="box-header">Latest Posts</h6>
            <ul className="blog small margin-top-30">
              <li>
                <a
                  href="post.html"
                  title="What a Difference a Few Months Make"
                  className="post-image"
                >
                  <img src="images/samples/90x90/image_10.jpg" alt="" />
                </a>
                <div className="post-content">
                  <a
                    href="post.html"
                    title="What a Difference a Few Months Make"
                  >
                    What a Difference a Few Months Make
                  </a>
                  <ul className="post-details">
                    <li className="date">April 25, 2015</li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="post.html"
                  title="Kitchen and Living Room Renovation"
                  className="post-image"
                >
                  <img src="images/samples/90x90/image_07.jpg" alt="" />
                </a>
                <div className="post-content">
                  <a
                    href="post.html"
                    title="Kitchen and Living Room Renovation"
                  >
                    Kitchen and Living Room Renovation
                  </a>
                  <ul className="post-details">
                    <li className="date">April 17, 2015</li>
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
