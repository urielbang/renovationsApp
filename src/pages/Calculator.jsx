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

  const calculatorsNames = [
    "מחשבון שיפוץ פנים",
    "מחשבון גדר",
    "מחשבון שביל מרוצף",
  ];

  const [messageReceive, setMessageReceive] = useState(false);
  const [messageReceiveFe, setMessageReceiveFe] = useState(false);
  const [isPnimClick, setISPnimClick] = useState(false);
  const [isGaderClick, setIsGaderClick] = useState(false);
  const [isMeruzafClicked, setISMeruzafClicked] = useState(false);
  const [messageReceiveWalkway, setMessageReceiveWalkway] = useState(false);
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
    e.target.reset();
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
    setMessageReceive(true);
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
    setMessageReceiveFe(true);
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
    setPriceQuoteWalkway({
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
    setMessageReceiveWalkway(true);
  };

  const handleClickButton = (calculatorName) => {
    switch (calculatorName) {
      case "מחשבון שיפוץ פנים":
        setISPnimClick(true);
        setIsGaderClick(false);
        setISMeruzafClicked(false);

        break;

      case "מחשבון גדר":
        setIsGaderClick(true);
        setISMeruzafClicked(false);
        setISPnimClick(false);
        break;

      case "מחשבון שביל מרוצף":
        setISMeruzafClicked(true);
        setIsGaderClick(false);
        setISPnimClick(false);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <div className="row gray full-width page-header vertical-align-table">
        <div className="row full-width padding-top-bottom-50 vertical-align-cell">
          <div className="row">
            <div className="page-header-left">
              <h1>מחשבון עלויות</h1>
            </div>
            <div className="calculatorButtons">
              {calculatorsNames.map((calculator, index) => {
                return (
                  <span
                    onClick={() => handleClickButton(calculator)}
                    key={index}
                  >
                    {calculator}
                  </span>
                );
              })}
            </div>
            <div className="page-header-right">
              <div className="bread-crumb-container">
                <label>אתה נמצא כאן:</label>
                <ul className="bread-crumb">
                  <li>
                    <Link title="דף הבית">דף הבית</Link>
                  </li>
                  <li className="separator">/</li>
                  <li>מחשבון עלויות</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row margin-top-70">
        <div className="column column-2-3">
          <p className="description t1 margin-top-0">
            צריך לדעת כמה תעלה השיפוץ שלך? הכלי הקל לשימוש שלנו לחישוב עלויות
            שיפוץ יעזור לך לקבל הערכת עלויות לפרויקט שלך באינטרנט. פשוט הזן את
            הנתונים שלך והחשבונית תפיק ציטוט מקורב. אנא ספק את הפרטים שלך והגש
            את הטופס לקביעת פגישה איתנו וקבלת הצעת מחיר מדויקת יותר.
          </p>
          <div className="tabs small no-scroll align-left clearfix margin-top-40">
            {isPnimClick && (
              <div id="interior-renovation" className="margin-top-30">
                <h2>מחשבון שיפוץ פנים</h2>
                <form
                  onSubmit={handleSubmit}
                  className="contact-form cost-calculator-container"
                >
                  <div className="cost-calculator-box clearfix">
                    <label>שטח לשיפוץ ברגל מרובע:</label>
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
                      />
                    </div>
                  </div>
                  <div className="cost-calculator-box clearfix">
                    <label>קירות ותקרות:</label>
                    <select
                      name="walls"
                      id="ir-walls"
                      className="cost-dropdown"
                      value={interiorRenovationValues.walls}
                      onChange={handleInteriorRenovationChange}
                    >
                      <option value selected="selected">
                        בחר...
                      </option>
                      <option value={2}>צביעה</option>
                      <option value="2.3">צביעה + תיקונים קלים</option>
                      <option value="2.5">צביעה + אבן דקורטיבית</option>
                      <option value={3}>ריצוף</option>
                      <option value={5}>צביעה + ריצוף</option>
                      <option value={2}>תליית נייר קיר</option>
                    </select>
                    <input
                      type="hidden"
                      className="ir-walls"
                      name="walls-name"
                      defaultValue
                    />
                  </div>
                  <div className="cost-calculator-box clearfix">
                    <label>רצפות:</label>
                    <select
                      name="floors"
                      id="ir-floors"
                      className="cost-dropdown"
                      value={interiorRenovationValues.floors}
                      onChange={handleInteriorRenovationChange}
                    >
                      <option value selected="selected">
                        בחר...
                      </option>
                      <option value="1.5">ריצוף עץ</option>
                      <option value="2.5">ריצוף במבוק</option>
                      <option value="2.6">ריצוף ויניל</option>
                      <option value="3.25">ריצוף פרקט</option>
                      <option value="3.5">שטיח מקיר לקיר</option>
                      <option value={12}>ריצוף קרמיקה</option>
                    </select>
                    <input
                      type="hidden"
                      className="ir-floors"
                      name="floors-name"
                      defaultValue
                    />
                  </div>
                  <div className="cost-calculator-box clearfix">
                    <label>דלתות פנים להחלפה:</label>
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
                        data-price={250}
                      />
                    </div>
                  </div>
                  <div className="cost-calculator-box clearfix">
                    <label>חלונות להחלפה:</label>
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
                        data-price={200}
                      />
                    </div>
                  </div>
                  <div className="cost-calculator-box cost-calculator-sum sl-small-wallet clearfix">
                    <CostCalculator
                      formula={`ir-square-feet*${interiorRenovationValues.squareFeet}+ir-walls*${interiorRenovationValues.walls}+ir-floors*${interiorRenovationValues.floors}+ir-doors*${interiorRenovationValues.doors}*250+ir-windows*${interiorRenovationValues.windows}*200`}
                      updateHidden={irTotalCostRef.current}
                    />
                    <p className="description t1">עלות פרויקט משוערת</p>
                  </div>
                  <div className="cost-calculator-box cost-calculator-contact clearfix margin-top-10">
                    <div className="row">
                      <label>פרטי התקשרות</label>
                    </div>
                    <div className="row margin-top-20">
                      <fieldset className="column column-1-2">
                        <input
                          className="text-input"
                          name="name"
                          onChange={handleChange}
                          type="text"
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
                          type="text"
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
                        {messageReceive == true ? (
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
                          defaultValue="שלח עכשיו"
                          className="more active"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            )}
            {isGaderClick && (
              <div id="fence" className="margin-top-30">
                <h2>מחשבון גדר</h2>
                <form
                  onSubmit={handleSubmitFence}
                  className="contact-form cost-calculator-container"
                >
                  <div className="cost-calculator-box clearfix">
                    <label>אורך הגדר שלך ברגליים:</label>
                    <input
                      id="fe-length"
                      className="cost-slider-input big"
                      name="length"
                      type="number"
                      value={fenceValues.length}
                      onChange={handleFenceChange}
                      placeholder="אורך הגדר"
                    />
                  </div>
                  <div className="cost-calculator-box clearfix">
                    <label>גובה הגדר שלך ברגליים:</label>
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
                      />
                    </div>
                  </div>
                  <div className="cost-calculator-box clearfix">
                    <label>בחר סגנון פאנל:</label>
                    <select
                      name="panel"
                      id="fe-panel"
                      className="cost-dropdown"
                      value={fenceValues.panel}
                      onChange={handleFenceChange}
                    >
                      <option value selected="selected">
                        בחר...
                      </option>
                      <option value="1.4">פאל מעוגל</option>
                      <option value="1.8">מטופל טבילה</option>
                      <option value={2}>מטופל לחץ</option>
                      <option value="2.2">לוח סגור</option>
                      <option value={3}>לוח סגור גל</option>
                      <option value="5.9">מונטה קרלו</option>
                      <option value="6.4">פאלומה גל</option>
                    </select>
                    <input
                      type="hidden"
                      className="fe-panel"
                      name="panel-name"
                      defaultValue
                    />
                  </div>
                  <div className="cost-calculator-box clearfix">
                    <label>בחר סוג שער:</label>
                    <select
                      name="gate"
                      id="fe-gate"
                      className="cost-dropdown"
                      value={fenceValues.gate}
                      onChange={handleFenceChange}
                    >
                      <option value selected="selected">
                        בחר...
                      </option>
                      <option value={210}>שער יחיד</option>
                      <option value={1450}>שער יחיד + שער כניסה יחיד</option>
                      <option value={2539}>שער יחיד + שער כניסה כפול</option>
                      <option value={3500}>שער יחיד + שער כניסה נגרר</option>
                      <option value={5900}>
                        שער יחיד + שער כניסה נגרר כפול
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
                    <label>תוספות נוספות:</label>
                    <select
                      name="extras"
                      id="fe-extras"
                      className="cost-dropdown"
                      value={fenceValues.extras}
                      onChange={handleFenceChange}
                    >
                      <option value selected="selected">
                        בחר...
                      </option>
                      <option value={4}>גדר על קיר אבן</option>
                      <option value={12}>גדר על קיר אבן + עמודי אבן</option>
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
                    <p className="description t1">עלות פרויקט משוערת</p>
                  </div>
                  <div className="cost-calculator-box cost-calculator-contact clearfix margin-top-10">
                    <div className="row">
                      <label>פרטי התקשרות</label>
                    </div>
                    <div className="row margin-top-20">
                      <fieldset className="column column-1-2">
                        <input
                          className="text-input"
                          name="name"
                          type="text"
                          onChange={handleChangeFence}
                          placeholder="שמך *"
                        />
                        <input
                          className="text-input"
                          name="email"
                          type="text"
                          onChange={handleChangeFence}
                          placeholder="האימייל שלך *"
                        />
                        <input
                          className="text-input"
                          name="phone"
                          type="text"
                          onChange={handleChangeFence}
                          placeholder="טלפון"
                        />
                      </fieldset>
                      <fieldset className="column column-1-2">
                        <textarea
                          name="message"
                          placeholder="הודעה *"
                          onChange={handleChangeFence}
                        />
                      </fieldset>
                    </div>
                    <div className="row margin-top-30">
                      <div className="column column-1-2">
                        {messageReceiveFe == true ? (
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
                          defaultValue="שלח עכשיו"
                          className="more active"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            )}
            {isMeruzafClicked && (
              <div id="paver-walkway" className="margin-top-30">
                <h1>מחשבון שביל מרוצף</h1>
                <form
                  onSubmit={handleSubmitWalkWay}
                  className="contact-form cost-calculator-container"
                >
                  <div className="cost-calculator-box clearfix">
                    <label>רוחב משוער של השביל במטרים:</label>
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
                      />
                    </div>
                  </div>
                  <div className="cost-calculator-box clearfix">
                    <label>אורך משוער של השביל במטרים:</label>
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
                      />
                    </div>
                  </div>
                  <div className="cost-calculator-box clearfix">
                    <label>בחר ריצוף בלוקים:</label>
                    <select
                      name="blockPaving"
                      id="pw-block-paving"
                      className="cost-dropdown"
                      value={paverWalkwayValues.blockPaving}
                      onChange={handlePaverWalkwayChange}
                    >
                      <option value selected="selected">
                        בחר...
                      </option>
                      <option value={45}>לוגאנו</option>
                      <option value={48}>עתיק</option>
                      <option value={55}>קלאסיקו</option>
                      <option value={59}>רגטה</option>
                      <option value={65}>אומגה</option>
                      <option value={80}>אבן טבעית</option>
                    </select>
                    <input
                      type="hidden"
                      className="pw-block-paving"
                      name="block-paving-name"
                      defaultValue
                    />
                  </div>
                  <div className="cost-calculator-box clearfix">
                    <label>הכנת שטח:</label>
                    <select
                      name="surface"
                      id="pw-surface"
                      className="cost-dropdown"
                      value={paverWalkwayValues.surface}
                      onChange={handlePaverWalkwayChange}
                    >
                      <option value selected="selected">
                        בחר...
                      </option>
                      <option value={10}>תת-בסיס גרנולרי</option>
                      <option value={20}>תת-קרקע מוכן + תת-בסיס</option>
                    </select>
                    <input
                      type="hidden"
                      className="pw-surface"
                      name="pw-surface-name"
                      defaultValue
                    />
                  </div>
                  <div className="cost-calculator-box clearfix">
                    <label>אבן לחומת במטרים:</label>
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
                      />
                      <div
                        className="cost-slider"
                        data-value={0}
                        data-step={1}
                        data-min={0}
                        data-max={100}
                        data-price={30}
                      />
                    </div>
                  </div>
                  <div className="cost-calculator-box cost-calculator-sum sl-small-wallet clearfix">
                    <CostCalculator
                      formula={`pw-area-width*${paverWalkwayValues.areaWidth}*${paverWalkwayValues.areaLength}*${paverWalkwayValues.blockPaving}+pw-surface*${paverWalkwayValues.surface}+pw-stone-walling*${paverWalkwayValues.stoneWalling}*30`}
                      updateHidden={pwTotalCostRef.current}
                    />
                    <p className="description t1">עלות פרויקט משוערת</p>
                  </div>
                  <div className="cost-calculator-box cost-calculator-contact clearfix margin-top-10">
                    <div className="row">
                      <label>פרטי התקשרות</label>
                    </div>
                    <div className="row margin-top-20">
                      <fieldset className="column column-1-2">
                        <input
                          className="text-input"
                          name="name"
                          type="text"
                          onChange={handleChangeWalkway}
                          placeholder="שמך *"
                        />
                        <input
                          className="text-input"
                          name="email"
                          type="text"
                          onChange={handleChangeWalkway}
                          placeholder="האימייל שלך *"
                        />
                        <input
                          className="text-input"
                          name="phone"
                          type="text"
                          onChange={handleChangeWalkway}
                          placeholder="טלפון"
                        />
                      </fieldset>
                      <fieldset className="column column-1-2">
                        <textarea
                          name="message"
                          placeholder="הודעה *"
                          onChange={handleChangeWalkway}
                        />
                      </fieldset>
                    </div>
                    <div className="row margin-top-30">
                      <div className="column column-1-2">
                        {messageReceiveWalkway ? (
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
                          defaultValue="שלח עכשיו"
                          className="more active"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
        <div className="column column-1-3">
          <div className="row">
            <Link className="prettyPhoto re-preload" title="שיפוץ פנים">
              <img src={img} alt="img" />
            </Link>
          </div>
          <div className="row margin-top-30">
            <Link className="prettyPhoto re-preload" title="שיפוץ פנים">
              <img src={img1} alt="img" />
            </Link>
          </div>
          <div className="row margin-top-30">
            <Link className="prettyPhoto re-preload" title="שיפוץ פנים">
              <img src={img3} alt="img" />
            </Link>
          </div>
          <div className="row page-margin-top">
            <h4 className="box-header">מה תקבל</h4>
            <p className="description t1 margin-top-34">
              רנובייט הוכיחה תוצאות בהגדרת סטנדרטים יוצאי דופן בבקרת עלויות,
              תכנון ולוח זמנים ובטיחות הפרויקט. הניסיון שלנו נותן לנו יתרון
              תחרותי על פני אחרים בתחום שלנו.
            </p>
            <ul className="list margin-top-20">
              <li className="template-bullet">אחריות כלכלית ללקוחות שלנו</li>
              <li className="template-bullet">איכות גבוהה ומלאכה מעולה</li>
              <li className="template-bullet">
                איכות וערך לפרויקטים שאנו מספקים
              </li>
              <li className="template-bullet">
                סטנדרטים הגבוהים ביותר בבקרת עלויות
              </li>
              <li className="template-bullet">בזמן ובתקציב</li>
              <li className="template-bullet">
                דגש אמיתי על שביעות רצון הלקוחות
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
                  שדרות לינדן 272
                  <br />
                  וינטר פארק, FL 32789
                </p>
              </li>
            </ul>
          </div>
          <div className="column column-1-3">
            <ul className="contact-details-list">
              <li className="sl-small-mail">
                <p>
                  אימייל:
                  <br />
                  <a href="mailto:adiSambata@gmail.com">adiSmbata@gmail.com</a>
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
              נוסדה על ידי קווין סמית בשנת 2000. רנובייט הוקמה כספקית הגדולה
              והמכובדת של שירותי שיפוץ פנים המתמקדים בבניין ובבנייה.
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
                <Link title="בניין">בניין</Link>
              </li>
              <li>
                <Link title="עיצוב">עיצוב</Link>
              </li>
              <li>
                <Link title="ריצוף">ריצוף</Link>
              </li>
              <li>
                <Link title="צביעה">צביעה</Link>
              </li>
              <li>
                <a href="category.html" title="אבנים">
                  אבנים
                </a>
              </li>
              <li>
                <Link title="אינסטלציה">אינסטלציה</Link>
              </li>
              <li>
                <Link title="שיפוץ">שיפוץ</Link>
              </li>
              <li>
                <Link title="תיקונים">תיקונים</Link>
              </li>
              <li>
                <Link title="מערכות סולאריות">מערכות סולאריות</Link>
              </li>
              <li>
                <Link title="אריחים">אריחים</Link>
              </li>
            </ul>
          </div>
          <div className="column column-1-4">
            <h6 className="box-header">פוסטים אחרונים</h6>
            <ul className="blog small margin-top-30">
              <li>
                <Link title="מה ההבדל שמעט חודשים עושים" className="post-image">
                  <img src={img4} alt="" />
                </Link>
                <div className="post-content">
                  <Link title="מה ההבדל שמעט חודשים עושים">
                    מה ההבדל שמעט חודשים עושים
                  </Link>
                  <ul className="post-details">
                    <li className="date">25 באפריל 2015</li>
                  </ul>
                </div>
              </li>
              <li>
                <Link title="שיפוץ מטבח וסלון" className="post-image">
                  <img src="" alt="" />
                </Link>
                <div className="post-content">
                  <Link title="שיפוץ מטבח וסלון">שיפוץ מטבח וסלון</Link>
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
