import React, { useEffect } from "react";
import js from "./jquery.costCalculator";
import $ from "jquery";

export default function Calculator() {
  useEffect(() => {
    js;
  });
  return (
    <div>
      <div className="row gray full-width page-header vertical-align-table">
        <div className="row full-width padding-top-bottom-50 vertical-align-cell">
          <div className="row">
            <div className="page-header-left">
              <h1>COST CALCULATOR</h1>
            </div>
            <div className="page-header-right">
              <div className="bread-crumb-container">
                <label>You Are Here:</label>
                <ul className="bread-crumb">
                  <li>
                    <a title="HOME" href="index.html">
                      HOME
                    </a>
                  </li>
                  <li className="separator">/</li>
                  <li>COST CALCULATOR</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row margin-top-70">
        <div className="column column-2-3">
          <p className="description t1 margin-top-0">
            Need to know how much your remodel will cost? Our easy to use
            renovation cost tool will help you to get project cost estimates
            online. Simply enter your data and the calculator will produce an
            approximate quote. Please provide your details and submit the form
            to make an appointment with us and obtain a more accurate quote.
          </p>
          <div className="tabs small no-scroll align-left clearfix margin-top-40">
            <div id="interior-renovation" className="margin-top-30">
              <form
                className="contact-form cost-calculator-container"
                method="post"
                action="contact_form/contact_form.php"
              >
                <div className="cost-calculator-box clearfix">
                  <label>Area to be Renovated in Square Feet:</label>
                  <div className="cost-slider-container">
                    <input
                      id="ir-square-feet"
                      className="cost-slider-input"
                      name="square-feet"
                      type="number"
                      defaultValue={300}
                    />
                    <div
                      className="cost-slider"
                      data-value={300}
                      data-step={10}
                      data-min={10}
                      data-max={3000}
                      data-input="ir-square-feet"
                    />
                  </div>
                </div>
                <div className="cost-calculator-box clearfix">
                  <label>Walls &amp; Ceilings:</label>
                  <select name="walls" id="ir-walls" className="cost-dropdown">
                    <option value selected="selected">
                      Choose...
                    </option>
                    <option value={2}>Painting</option>
                    <option value="2.3">Painting + Minor Repairs</option>
                    <option value="2.5">Painting + Decorative Stone</option>
                    <option value={3}>Tiling</option>
                    <option value={5}>Painting + Tiling</option>
                    <option value={2}>Hanging Lining Paper</option>
                  </select>
                  <input
                    type="hidden"
                    className="ir-walls"
                    name="walls-name"
                    defaultValue
                  />
                </div>
                <div className="cost-calculator-box clearfix">
                  <label>Floors:</label>
                  <select
                    name="floors"
                    id="ir-floors"
                    className="cost-dropdown"
                  >
                    <option value selected="selected">
                      Choose...
                    </option>
                    <option value="1.5">Hardwood Flooring</option>
                    <option value="2.5">Bamboo Flooring</option>
                    <option value="2.6">Vinyl Tile Flooring</option>
                    <option value="3.25">Parquet Flooring</option>
                    <option value="3.5">Wall-to-wall Carpet</option>
                    <option value={12}>Ceramic Tile Flooring</option>
                  </select>
                  <input
                    type="hidden"
                    className="ir-floors"
                    name="floors-name"
                    defaultValue
                  />
                </div>
                <div className="cost-calculator-box clearfix">
                  <label>Interior Doors to Replace:</label>
                  <div className="cost-slider-container">
                    <input
                      id="ir-doors"
                      className="cost-slider-input"
                      name="doors"
                      type="number"
                      defaultValue={6}
                    />
                    <input
                      id="ir-doors-value"
                      type="hidden"
                      defaultValue={1500}
                      data-default={1500}
                    />
                    <div
                      className="cost-slider"
                      data-value={6}
                      data-step={1}
                      data-min={0}
                      data-max={10}
                      data-input="ir-doors"
                      data-value-input="ir-doors-value"
                      data-price={250}
                    />
                  </div>
                </div>
                <div className="cost-calculator-box clearfix">
                  <label>Windows to Replace:</label>
                  <div className="cost-slider-container">
                    <input
                      id="ir-windows"
                      className="cost-slider-input"
                      name="windows"
                      type="number"
                      defaultValue={4}
                    />
                    <input
                      id="ir-windows-value"
                      type="hidden"
                      defaultValue={800}
                      data-default={800}
                    />
                    <div
                      className="cost-slider"
                      data-value={4}
                      data-step={1}
                      data-min={0}
                      data-max={10}
                      data-input="ir-windows"
                      data-value-input="ir-windows-value"
                      data-price={200}
                    />
                  </div>
                </div>
                <div className="cost-calculator-box cost-calculator-sum sl-small-wallet clearfix">
                  <span
                    className="cost-calculator-price"
                    id="interior-renovation-cost"
                  >
                    $2,300.00
                  </span>
                  <p className="description t1">Approximate Project Cost</p>
                </div>
                <div className="cost-calculator-box cost-calculator-contact clearfix margin-top-10">
                  <div className="row">
                    <label>Contact Details</label>
                  </div>
                  <div className="row margin-top-20">
                    <fieldset className="column column-1-2">
                      <input
                        className="text-input"
                        name="name"
                        type="text"
                        defaultValue="Your Name *"
                        placeholder="Your Name *"
                      />
                      <input
                        className="text-input"
                        name="email"
                        type="text"
                        defaultValue="Your Email *"
                        placeholder="Your Email *"
                      />
                      <input
                        className="text-input"
                        name="phone"
                        type="text"
                        defaultValue="Your Phone"
                        placeholder="Your Phone"
                      />
                    </fieldset>
                    <fieldset className="column column-1-2">
                      <textarea
                        name="message"
                        placeholder="Message *"
                        defaultValue={"Message *"}
                      />
                    </fieldset>
                  </div>
                  <div className="row margin-top-30">
                    <div className="column column-1-2">
                      <p className="description t1">
                        We will contact you within one business day.
                      </p>
                    </div>
                    <div className="column column-1-2 align-right">
                      <input
                        type="hidden"
                        name="action"
                        defaultValue="contact_form"
                      />
                      <input
                        type="hidden"
                        name="type"
                        defaultValue="Interior Renovation"
                      />
                      <input
                        type="hidden"
                        name="total-cost"
                        id="ir-total-cost"
                        defaultValue="$2,300.00"
                      />
                      <input
                        type="submit"
                        name="submit"
                        defaultValue="SUBMIT NOW"
                        className="more active"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div id="fence" className="margin-top-30">
              <form
                className="contact-form cost-calculator-container"
                method="post"
                action="contact_form/contact_form.php"
              >
                <div className="cost-calculator-box clearfix">
                  <label>Length of your Fence in feet:</label>
                  <input
                    id="fe-length"
                    className="cost-slider-input big"
                    name="length"
                    type="number"
                    defaultValue
                    placeholder="Fence Length"
                  />
                </div>
                <div className="cost-calculator-box clearfix">
                  <label>Height of Your Fence in Feet:</label>
                  <div className="cost-slider-container">
                    <input
                      id="fe-height"
                      className="cost-slider-input"
                      name="height"
                      type="number"
                      defaultValue={5}
                    />
                    <div
                      className="cost-slider"
                      data-value={5}
                      data-step={1}
                      data-min={4}
                      data-max={8}
                      data-input="fe-height"
                    />
                  </div>
                </div>
                <div className="cost-calculator-box clearfix">
                  <label>Choose Panel Style:</label>
                  <select name="panel" id="fe-panel" className="cost-dropdown">
                    <option value selected="selected">
                      Choose...
                    </option>
                    <option value="1.4">Rounded Pale</option>
                    <option value="1.8">Dip Treated</option>
                    <option value={2}>Pressure Treated</option>
                    <option value="2.2">Closeboard</option>
                    <option value={3}>Closeboard Wave</option>
                    <option value="5.9">Monte Carlo</option>
                    <option value="6.4">Paloma Wave</option>
                  </select>
                  <input
                    type="hidden"
                    className="fe-panel"
                    name="panel-name"
                    defaultValue
                  />
                </div>
                <div className="cost-calculator-box clearfix">
                  <label>Choose Gate Type:</label>
                  <select name="gate" id="fe-gate" className="cost-dropdown">
                    <option value selected="selected">
                      Choose...
                    </option>
                    <option value={210}>Single Gate</option>
                    <option value={1450}>
                      Single Gate + Single Driveway Gate
                    </option>
                    <option value={2539}>
                      Single Gate + Double Driveway Gate
                    </option>
                    <option value={3500}>
                      Single Gate + Sliding Driveway Gate
                    </option>
                    <option value={5900}>
                      Single Gate + Double Sliding Gate
                    </option>
                  </select>
                  <input
                    type="hidden"
                    className="fe-gate"
                    name="gate-name"
                    defaultValue
                  />
                </div>
                <div className="cost-calculator-box clearfix">
                  <label>Additional Extras:</label>
                  <select
                    name="extras"
                    id="fe-extras"
                    className="cost-dropdown"
                  >
                    <option value selected="selected">
                      Choose...
                    </option>
                    <option value={4}>Fence on Stone Wall</option>
                    <option value={12}>
                      Fence on Stone Wall + Stone Posts
                    </option>
                  </select>
                  <input
                    type="hidden"
                    className="fe-extras"
                    name="extras-name"
                    defaultValue
                  />
                </div>
                <div className="cost-calculator-box cost-calculator-sum sl-small-wallet clearfix">
                  <span className="cost-calculator-price" id="fence-cost">
                    $0.00
                  </span>
                  <p className="description t1">Approximate Project Cost</p>
                </div>
                <div className="cost-calculator-box cost-calculator-contact clearfix margin-top-10">
                  <div className="row">
                    <label>Contact Details</label>
                  </div>
                  <div className="row margin-top-20">
                    <fieldset className="column column-1-2">
                      <input
                        className="text-input"
                        name="name"
                        type="text"
                        defaultValue="Your Name *"
                        placeholder="Your Name *"
                      />
                      <input
                        className="text-input"
                        name="email"
                        type="text"
                        defaultValue="Your Email *"
                        placeholder="Your Email *"
                      />
                      <input
                        className="text-input"
                        name="phone"
                        type="text"
                        defaultValue="Your Phone"
                        placeholder="Your Phone"
                      />
                    </fieldset>
                    <fieldset className="column column-1-2">
                      <textarea
                        name="message"
                        placeholder="Message *"
                        defaultValue={"Message *"}
                      />
                    </fieldset>
                  </div>
                  <div className="row margin-top-30">
                    <div className="column column-1-2">
                      <p className="description t1">
                        We will contact you within one business day.
                      </p>
                    </div>
                    <div className="column column-1-2 align-right">
                      <input
                        type="hidden"
                        name="action"
                        defaultValue="contact_form"
                      />
                      <input type="hidden" name="type" defaultValue="Fence" />
                      <input
                        type="hidden"
                        name="total-cost"
                        id="fe-total-cost"
                        defaultValue="$0.00"
                      />
                      <input
                        type="submit"
                        name="submit"
                        defaultValue="SUBMIT NOW"
                        className="more active"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div id="paver-walkway" className="margin-top-30">
              <form
                className="contact-form cost-calculator-container"
                method="post"
                action="contact_form/contact_form.php"
              >
                <div className="cost-calculator-box clearfix">
                  <label>Approximate Area Width in Meters:</label>
                  <div className="cost-slider-container">
                    <input
                      id="pw-area-width"
                      className="cost-slider-input"
                      name="area-width"
                      type="number"
                      defaultValue={25}
                    />
                    <div
                      className="cost-slider"
                      data-value={25}
                      data-step={1}
                      data-min={1}
                      data-max={100}
                      data-input="pw-area-width"
                    />
                  </div>
                </div>
                <div className="cost-calculator-box clearfix">
                  <label>Approximate Area Length in Meters:</label>
                  <div className="cost-slider-container">
                    <input
                      id="pw-area-length"
                      className="cost-slider-input"
                      name="area-length"
                      type="number"
                      defaultValue={20}
                    />
                    <div
                      className="cost-slider"
                      data-value={20}
                      data-step={1}
                      data-min={1}
                      data-max={100}
                      data-input="pw-area-length"
                    />
                  </div>
                </div>
                <div className="cost-calculator-box clearfix">
                  <label>Choose Block Paving:</label>
                  <select
                    name="block-paving"
                    id="pw-block-paving"
                    className="cost-dropdown"
                  >
                    <option value selected="selected">
                      Choose...
                    </option>
                    <option value={45}>Lugano</option>
                    <option value={48}>Antique</option>
                    <option value={55}>Classico</option>
                    <option value={59}>Regatta</option>
                    <option value={65}>Omega</option>
                    <option value={80}>Natural Stone</option>
                  </select>
                  <input
                    type="hidden"
                    className="pw-block-paving"
                    name="block-paving-name"
                    defaultValue
                  />
                </div>
                <div className="cost-calculator-box clearfix">
                  <label>Surface Preparation:</label>
                  <select
                    name="surface"
                    id="pw-surface"
                    className="cost-dropdown"
                  >
                    <option value selected="selected">
                      Choose...
                    </option>
                    <option value={10}>Granular Sub-Base</option>
                    <option value={20}>Prepared Sub-Grade + Sub-Base</option>
                  </select>
                  <input
                    type="hidden"
                    className="pw-surface"
                    name="pw-surface-name"
                    defaultValue
                  />
                </div>
                <div className="cost-calculator-box clearfix">
                  <label>Stone Walling in Meters:</label>
                  <div className="cost-slider-container">
                    <input
                      id="pw-stone-walling"
                      className="cost-slider-input"
                      name="stone-walling"
                      type="number"
                      defaultValue={0}
                    />
                    <input
                      id="pw-stone-walling-value"
                      type="hidden"
                      defaultValue={0}
                      data-default={0}
                    />
                    <div
                      className="cost-slider"
                      data-value={0}
                      data-step={1}
                      data-min={0}
                      data-max={100}
                      data-input="pw-stone-walling"
                      data-value-input="pw-stone-walling-value"
                      data-price={30}
                    />
                  </div>
                </div>
                <div className="cost-calculator-box cost-calculator-sum sl-small-wallet clearfix">
                  <span
                    className="cost-calculator-price"
                    id="paver-walkway-cost"
                  >
                    $0.00
                  </span>
                  <p className="description t1">Approximate Project Cost</p>
                </div>
                <div className="cost-calculator-box cost-calculator-contact clearfix margin-top-10">
                  <div className="row">
                    <label>Contact Details</label>
                  </div>
                  <div className="row margin-top-20">
                    <fieldset className="column column-1-2">
                      <input
                        className="text-input"
                        name="name"
                        type="text"
                        defaultValue="Your Name *"
                        placeholder="Your Name *"
                      />
                      <input
                        className="text-input"
                        name="email"
                        type="text"
                        defaultValue="Your Email *"
                        placeholder="Your Email *"
                      />
                      <input
                        className="text-input"
                        name="phone"
                        type="text"
                        defaultValue="Your Phone"
                        placeholder="Your Phone"
                      />
                    </fieldset>
                    <fieldset className="column column-1-2">
                      <textarea
                        name="message"
                        placeholder="Message *"
                        defaultValue={"Message *"}
                      />
                    </fieldset>
                  </div>
                  <div className="row margin-top-30">
                    <div className="column column-1-2">
                      <p className="description t1">
                        We will contact you within one business day.
                      </p>
                    </div>
                    <div className="column column-1-2 align-right">
                      <input
                        type="hidden"
                        name="action"
                        defaultValue="contact_form"
                      />
                      <input
                        type="hidden"
                        name="type"
                        defaultValue="Paver Walkway"
                      />
                      <input
                        type="hidden"
                        name="total-cost"
                        id="pw-total-cost"
                        defaultValue="$0.00"
                      />
                      <input
                        type="submit"
                        name="submit"
                        defaultValue="SUBMIT NOW"
                        className="more active"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="column column-1-3">
          <div className="row">
            <a
              href="images/samples/750x500/image_03.jpg"
              className="prettyPhoto re-preload"
              title="Interior Renovation"
            >
              <img src="images/samples/480x320/image_03.jpg" alt="img" />
            </a>
          </div>
          <div className="row margin-top-30">
            <a
              href="images/samples/750x500/image_01.jpg"
              className="prettyPhoto re-preload"
              title="Interior Renovation"
            >
              <img src="images/samples/480x320/image_01.jpg" alt="img" />
            </a>
          </div>
          <div className="row margin-top-30">
            <a
              href="images/samples/750x500/image_05.jpg"
              className="prettyPhoto re-preload"
              title="Interior Renovation"
            >
              <img src="images/samples/480x320/image_05.jpg" alt="img" />
            </a>
          </div>
          <div className="row page-margin-top">
            <h4 className="box-header">WHAT YOU GET</h4>
            <p className="description t1 margin-top-34">
              Renovate has proven results for setting exceptional standards in
              cost control, planning and scheduling and project safety. Our
              experience gives us a competitive advantage over others in our
              field.
            </p>
            <ul className="list margin-top-20">
              <li className="template-bullet">
                Financial Responsibility to Our Clients
              </li>
              <li className="template-bullet">
                Superior Quality and Craftsmanship
              </li>
              <li className="template-bullet">
                Quality and Value to the{" "}
                <a href="projects.html">Projects We Deliver</a>
              </li>
              <li className="template-bullet">
                Highest Standards in{" "}
                <a href="cost_calculator.html">Cost Control</a>
              </li>
              <li className="template-bullet">On Time and on Budget</li>
              <li className="template-bullet">
                Real Focus on Customer Satisfaction
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
                  Phone:
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
                  272 Linden Avenue
                  <br />
                  Winter Park, FL 32789
                </p>
              </li>
            </ul>
          </div>
          <div className="column column-1-3">
            <ul className="contact-details-list">
              <li className="sl-small-mail">
                <p>
                  E-mail:
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
            <h6 className="box-header">About Us</h6>
            <p className="description t1">
              Founded by Kevin Smith back in 2000. Renovate has estabilished
              itself as one of the greatest and prestigious providers of
              construction focused interior renovation services and building.
            </p>
            <ul className="social-icons yellow margin-top-26">
              <li>
                <a
                  target="_blank"
                  href="https://facebook.com/QuanticaLabs"
                  className="social-facebook"
                  title="facebook"
                />
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://twitter.com/QuanticaLabs"
                  className="social-twitter"
                  title="twitter"
                />
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://1.envato.market/quanticalabs-portfolio"
                  className="social-linkedin"
                  title="linkedin"
                />
              </li>
              <li>
                <a
                  href="https://pinterest.com/quanticalabs/"
                  className="social-pinterest"
                  title="pinterest"
                />
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
