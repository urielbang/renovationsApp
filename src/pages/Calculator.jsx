import React, { useState, useRef } from "react";
import CostCalculator from "../components/CostCalculator";
import { Link } from "react-router-dom";
import { apiUrl } from "../config/apiConfig";
import img from "../assets/images/samples/480x320/image_05.jpg";
import img1 from "../assets/images/samples/480x320/image_03.jpg";
import img2 from "../assets/images/samples/480x320/image_01.jpg";
import img3 from "../assets/images/samples/90x90/image_10.jpg";
import img4 from "../assets/images/samples/90x90/image_07.jpg";
import axios from "axios";

export default function Calculator() {
  const irTotalCostRef = useRef(null);
  const feTotalCostRef = useRef(null);
  const pwTotalCostRef = useRef(null);

  const [messageReceive, setmessageReceive] = useState(false);
  const [messageReceiveFe, setmessageReceiveFe] = useState(false);
  const [messageReceiveWalkway, setmessageReceivWalkway] = useState(false);
  const [interiorRenovationValues, setInteriorRenovationValues] = useState({
    squareFeet: 300,
    walls: 0,
    floors: 0,
    doors: 6,
    windows: 4,
  });

  const [fenceValues, setFenceValues] = useState({
    length: 0,
    height: 5,
    panel: 0,
    gate: 0,
    extras: 0,
  });

  const [paverWalkwayValues, setPaverWalkwayValues] = useState({
    areaWidth: 25,
    areaLength: 20,
    blockPaving: 0,
    surface: 0,
    stoneWalling: 0,
  });
  const handleInteriorRenovationChange = (e) => {
    const { name, value } = e.target;

    setInteriorRenovationValues({ ...interiorRenovationValues, [name]: value });
    setPriceQuoteData({ ...priceQuoteData, [name]: value });
  };

  const handleFenceChange = (e) => {
    const { name, value } = e.target;
    setFenceValues({ ...fenceValues, [name]: value });
    setPriceQuoteDatafe({ ...priceQuoteDataFe, [name]: value });
  };
  const [priceQuoteData, setPriceQuoteData] = useState({
    doors: interiorRenovationValues.doors,
    email: "",
    floors: interiorRenovationValues.floors,
    message: "",
    name: "",
    phone: "",
    squareFeet: interiorRenovationValues.squareFeet,
    windows: interiorRenovationValues.windows,
  });
  const [priceQuoteDataFe, setPriceQuoteDatafe] = useState({
    email: "",
    extras: fenceValues.extras,
    gate: fenceValues.gate,
    height: fenceValues.height,
    length: fenceValues.length,
    message: "",
    name: "",
    panel: fenceValues.panel,
    phone: "",
  });
  const [priceQuoteWalkway, setPriceQuoteWalkway] = useState({
    areaLength: paverWalkwayValues.areaLength,
    areaWidth: paverWalkwayValues.areaWidth,
    blockPaving: paverWalkwayValues.blockPaving,
    email: "",
    message: "",
    name: "",
    phone: "",
    stoneWalling: paverWalkwayValues.stoneWalling,
    surface: paverWalkwayValues.surface,
  });

  const handlePaverWalkwayChange = (e) => {
    const { name, value } = e.target;

    setPaverWalkwayValues({ ...paverWalkwayValues, [name]: value });
    setPriceQuoteWalkway({
      ...priceQuoteWalkway,
      [name]: value,
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const total = irTotalCostRef.current.value?.replace("$", "");

    setPriceQuoteData({
      ...priceQuoteData,
      [name]: value,
      totalPrice: total,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const priceQuote = await axios.post(`${apiUrl}/priceQuote`, priceQuoteData);
    console.log(priceQuote);
    e.target[0].value = 0;
    e.target[5].value = 0;
    e.target[7].value = 0;
    e.target[10].value = "";
    e.target[11].value = "";
    e.target[12].value = "";
    e.target[13].value = "";
    setPriceQuoteData({
      doors: "",
      email: "",
      floors: "",
      message: "",
      name: "",
      phone: "",
      squareFeet: "",
      windows: "",
      totalPrice: "",
    });
    setmessageReceive(true);
  };
  const handleChangeFence = (e) => {
    const { name, value } = e.target;
    const total = feTotalCostRef.current.value?.replace("$", "");

    setPriceQuoteDatafe({
      ...priceQuoteDataFe,
      [name]: value,
      totalPrice: total,
    });
  };
  const handleSubmitFence = async (e) => {
    e.preventDefault();
    const priceQuote = await axios.post(
      `${apiUrl}/priceQuote`,
      priceQuoteDataFe
    );
    console.log(priceQuote);
    setPriceQuoteDatafe({
      email: "",
      extras: "",
      gate: "",
      height: "",
      length: "",
      message: "",
      name: "",
      panel: "",
      phone: "",
    });
    setmessageReceiveFe(true);
  };
  const handleChangeWalkway = (e) => {
    const { name, value } = e.target;
    const total = pwTotalCostRef.current.value?.replace("$", "");

    setPriceQuoteWalkway({
      ...priceQuoteWalkway,
      [name]: value,
      totalPrice: total,
    });
  };
  const handleSubmitWalkWay = async (e) => {
    e.preventDefault();

    const priceQuote = await axios.post(
      `${apiUrl}/priceQuote`,
      priceQuoteWalkway
    );
    console.log(priceQuote);
    setPriceQuoteDatafe({
      areaLength: "",
      areaWidth: "",
      blockPaving: "",
      stoneWalling: "",
      surface: "",
      message: "",
      name: "",
      panel: "",
      phone: "",
    });

    setmessageReceivWalkway(true);
  };

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
                    <Link title="HOME">HOME</Link>
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
              <h2>interior Calculator</h2>
              <form
                onSubmit={handleSubmit}
                className="contact-form cost-calculator-container"
              >
                <div className="cost-calculator-box clearfix">
                  <label>Area to be Renovated in Square Feet:</label>
                  <div className="cost-slider-container">
                    <input
                      id="ir-square-feet"
                      className="cost-slider-input"
                      name="squareFeet"
                      type="number"
                      value={interiorRenovationValues.squareFeet}
                      onChange={handleInteriorRenovationChange}
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
                  <select
                    name="walls"
                    id="ir-walls"
                    className="cost-dropdown"
                    value={interiorRenovationValues.walls}
                    onChange={handleInteriorRenovationChange}
                  >
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
                    value={interiorRenovationValues.floors}
                    onChange={handleInteriorRenovationChange}
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
                      value={interiorRenovationValues.doors}
                      onChange={handleInteriorRenovationChange}
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
                      value={interiorRenovationValues.windows}
                      onChange={handleInteriorRenovationChange}
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
                  <CostCalculator
                    formula={`ir-square-feet*${interiorRenovationValues.squareFeet}+ir-walls*${interiorRenovationValues.walls}+ir-floors*${interiorRenovationValues.floors}+ir-doors*${interiorRenovationValues.doors}*250+ir-windows*${interiorRenovationValues.windows}*200`}
                    updateHidden={irTotalCostRef.current}
                  />
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
                        onChange={handleChange}
                        type="text"
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
                        type="text"
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
                      {messageReceive == true ? (
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
                        type="hidden"
                        name="type"
                        defaultValue="Interior Renovation"
                      />
                      <input
                        type="hidden"
                        name="total-cost"
                        id="ir-total-cost"
                        ref={irTotalCostRef}
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
              <h2>fence calculator</h2>
              <form
                onSubmit={handleSubmitFence}
                className="contact-form cost-calculator-container"
              >
                <div className="cost-calculator-box clearfix">
                  <label>Length of your Fence in feet:</label>
                  <input
                    id="fe-length"
                    className="cost-slider-input big"
                    name="length"
                    type="number"
                    value={fenceValues.length}
                    onChange={handleFenceChange}
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
                      value={fenceValues.height}
                      onChange={handleFenceChange}
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
                  <select
                    name="panel"
                    id="fe-panel"
                    className="cost-dropdown"
                    value={fenceValues.panel}
                    onChange={handleFenceChange}
                  >
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
                  <select
                    name="gate"
                    id="fe-gate"
                    className="cost-dropdown"
                    value={fenceValues.gate}
                    onChange={handleFenceChange}
                  >
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
                    value={fenceValues.extras}
                    onChange={handleFenceChange}
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
                  <CostCalculator
                    formula={`fe-length*${fenceValues.length}*${fenceValues.height}+fe-panel*${fenceValues.panel}+fe-gate*${fenceValues.gate}+fe-extras*${fenceValues.extras}`}
                    updateHidden={feTotalCostRef.current}
                  />
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
                        onChange={handleChangeFence}
                        placeholder="Your Name *"
                      />
                      <input
                        className="text-input"
                        name="email"
                        type="text"
                        onChange={handleChangeFence}
                        placeholder="Your Email *"
                      />
                      <input
                        className="text-input"
                        name="phone"
                        type="text"
                        onChange={handleChangeFence}
                        placeholder="Your Phone"
                      />
                    </fieldset>
                    <fieldset className="column column-1-2">
                      <textarea
                        name="message"
                        placeholder="Message *"
                        onChange={handleChangeFence}
                      />
                    </fieldset>
                  </div>
                  <div className="row margin-top-30">
                    <div className="column column-1-2">
                      {messageReceiveFe == true ? (
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
                      <input type="hidden" name="type" defaultValue="Fence" />
                      <input
                        type="hidden"
                        name="total-cost"
                        id="fe-total-cost"
                        ref={feTotalCostRef}
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
              <h1>paver walkway Calculator</h1>
              <form
                onSubmit={handleSubmitWalkWay}
                className="contact-form cost-calculator-container"
              >
                <div className="cost-calculator-box clearfix">
                  <label>Approximate Area Width in Meters:</label>
                  <div className="cost-slider-container">
                    <input
                      id="pw-area-width"
                      className="cost-slider-input"
                      name="areaWidth"
                      type="number"
                      value={paverWalkwayValues.areaWidth}
                      onChange={handlePaverWalkwayChange}
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
                      name="areaLength"
                      type="number"
                      value={paverWalkwayValues.areaLength}
                      onChange={handlePaverWalkwayChange}
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
                    name="blockPaving"
                    id="pw-block-paving"
                    className="cost-dropdown"
                    value={paverWalkwayValues.blockPaving}
                    onChange={handlePaverWalkwayChange}
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
                    value={paverWalkwayValues.surface}
                    onChange={handlePaverWalkwayChange}
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
                      name="stoneWalling"
                      type="number"
                      value={paverWalkwayValues.stoneWalling}
                      onChange={handlePaverWalkwayChange}
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
                  <CostCalculator
                    formula={`pw-area-width*${paverWalkwayValues.areaWidth}*${paverWalkwayValues.areaLength}*${paverWalkwayValues.blockPaving}+pw-surface*${paverWalkwayValues.surface}+pw-stone-walling*${paverWalkwayValues.stoneWalling}*30`}
                    updateHidden={pwTotalCostRef.current}
                  />
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
                        onChange={handleChangeWalkway}
                        placeholder="Your Name *"
                      />
                      <input
                        className="text-input"
                        name="email"
                        type="text"
                        onChange={handleChangeWalkway}
                        placeholder="Your Email *"
                      />
                      <input
                        className="text-input"
                        name="phone"
                        type="text"
                        onChange={handleChangeWalkway}
                        placeholder="Your Phone"
                      />
                    </fieldset>
                    <fieldset className="column column-1-2">
                      <textarea
                        name="message"
                        placeholder="Message *"
                        onChange={handleChangeWalkway}
                      />
                    </fieldset>
                  </div>
                  <div className="row margin-top-30">
                    <div className="column column-1-2">
                      {messageReceiveWalkway ? (
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
                        type="hidden"
                        name="type"
                        defaultValue="Paver Walkway"
                      />
                      <input
                        type="hidden"
                        name="total-cost"
                        id="pw-total-cost"
                        ref={pwTotalCostRef}
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
            <Link
              className="prettyPhoto re-preload"
              title="Interior Renovation"
            >
              <img src={img} alt="img" />
            </Link>
          </div>
          <div className="row margin-top-30">
            <Link
              className="prettyPhoto re-preload"
              title="Interior Renovation"
            >
              <img src={img1} alt="img" />
            </Link>
          </div>
          <div className="row margin-top-30">
            <Link
              className="prettyPhoto re-preload"
              title="Interior Renovation"
            >
              <img src={img3} alt="img" />
            </Link>
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
                Quality and Value to the <Link>Projects We Deliver</Link>
              </li>
              <li className="template-bullet">
                Highest Standards in <Link>Cost Control</Link>
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
                  <a href="mailto:adiSambata@gmail.com">adiSmbata@gmil.com</a>
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
                <Link className="social-facebook" title="facebook" />
              </li>
              <li>
                <Link className="social-twitter" title="twitter" />
              </li>
              <li>
                <Link className="social-linkedin" title="linkedin" />
              </li>
              <li>
                <Link className="social-pinterest" title="pinterest" />
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
                <Link title="BUILD">BUILD</Link>
              </li>
              <li>
                <Link title="DESIGN">DESIGN</Link>
              </li>
              <li>
                <Link title="FLOORING">FLOORING</Link>
              </li>
              <li>
                <Link title="PAINTING">PAINTING</Link>
              </li>
              <li>
                <a href="category.html" title="PAVERS">
                  PAVERS
                </a>
              </li>
              <li>
                <Link title="PLUMBING">PLUMBING</Link>
              </li>
              <li>
                <Link title="RENOVATION">RENOVATION</Link>
              </li>
              <li>
                <Link title="REPAIRS">REPAIRS</Link>
              </li>
              <li>
                <Link title="SOLAR SYSTEMS">SOLAR SYSTEMS</Link>
              </li>
              <li>
                <Link title="TILING">TILING</Link>
              </li>
            </ul>
          </div>
          <div className="column column-1-4">
            <h6 className="box-header">Latest Posts</h6>
            <ul className="blog small margin-top-30">
              <li>
                <Link
                  title="What a Difference a Few Months Make"
                  className="post-image"
                >
                  <img src={img4} alt="" />
                </Link>
                <div className="post-content">
                  <Link title="What a Difference a Few Months Make">
                    What a Difference a Few Months Make
                  </Link>
                  <ul className="post-details">
                    <li className="date">April 25, 2015</li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  title="Kitchen and Living Room Renovation"
                  className="post-image"
                >
                  <img src="" alt="" />
                </Link>
                <div className="post-content">
                  <Link title="Kitchen and Living Room Renovation">
                    Kitchen and Living Room Renovation
                  </Link>
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
