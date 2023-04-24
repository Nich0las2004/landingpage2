import "./App.css";
import { Fragment, useState } from "react";

import Button from "./Button/Button";
import FirstPage from "./FirstPage/FirstPage";
import SecondPage from "./SecondPage/SecondPage";
import ThirdPage from "./ThirdPage/ThirdPage";

const App = () => {
  const [btn1Clicked, setBtn1Clicked] = useState(true);
  const [btn2Clicked, setBtn2Clicked] = useState(false);
  const [btn3Clicked, setBtn3Clicked] = useState(false);

  const btn1WasClicked = () => {
    setBtn1Clicked(true);
    setBtn2Clicked(false);
    setBtn3Clicked(false);
  };

  const btn2WasClicked = () => {
    setBtn1Clicked(false);
    setBtn2Clicked(true);
    setBtn3Clicked(false);
  };

  const btn3WasClicked = () => {
    setBtn1Clicked(false);
    setBtn2Clicked(false);
    setBtn3Clicked(true);
  };

  return (
    <Fragment>
      <div className="signup">
        <span>
          <img className="logo" src="./images/logo.png" />
        </span>
        <div className="userBtns">
          <button className="signUpBtn">Sign up</button>
          <button className="signInBtn">Sign in</button>
        </div>
      </div>
      <div className="main">
        <img className="banner" src="./images/banner.jpg" />
        <div className="content">
          <h3 style={{ color: "white", fontWeight: "600" }}>
            მოიპოვე მრავალფეროვანი პრიზები და 10 საგზურიდან ერთ-ერთი
          </h3>
          <p style={{ color: "lightgrey" }}>
            მოხვდი პოკერის ფესტივალზე მალტაში
          </p>
          {/* page-buttons */}
          <div className="buttons">
            {/* <Button name="Cash Games" date="28 ოქტ. - 7 ნოემ." id="1" />
            <Button name="New Year Series" date="10 - 29 დეკ." id="2" />
            <Button name="Final Stage" date="28 ოქტ. - 7 ნოემ." id="3" /> */}
            <button
              type="button"
              className={btn1Clicked ? "clickedBtn" : "btn"}
              id="1"
              onClick={btn1WasClicked}
            >
              <p className="date">28 ოქტ. - 7 ნოემ.</p>
              <h4 className="name">Cash Games</h4>
            </button>
            <button
              type="button"
              className={btn2Clicked ? "clickedBtn" : "btn"}
              id="2"
              onClick={btn2WasClicked}
            >
              <p className="date">10 - 29 დეკ.</p>
              <h4 className="name">New Year Series</h4>
            </button>
            <button
              type="button"
              className={btn3Clicked ? "clickedBtn" : "btn"}
              id="3"
              onClick={btn3WasClicked}
            >
              <p className="date">28 ოქტ. - 7 ნოემ.</p>
              <h4 className="name">Final Stage</h4>
            </button>
          </div>
          {/* display pages according to button clicks */}
          {btn1Clicked && <FirstPage />}
          {btn2Clicked && <SecondPage />}
          {btn3Clicked && <ThirdPage />}
        </div>
      </div>
        <div className="lastLine"></div>
        <div className="lastButton">
          <button>ითამაშე</button>
        </div>
    </Fragment>
  );
};

export default App;
