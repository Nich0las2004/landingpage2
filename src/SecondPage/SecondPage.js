import { Fragment } from "react";
import classes from "./SecondPage.module.css";

import Row from "../FirstPage/Row/Row";
import Prize from "../FirstPage/Prize/Prize";
import Question from "../FirstPage/Question/Question";
import SmallImage from "./SmallImage/SmallImage";

const SecondPage = () => {
  return (
    <Fragment>
      <div className={classes.part1}>
        <h3 style={{ color: "white", fontWeight: "600" }}>
          ტურნირები და სატელიტები
        </h3>
        <div className={classes.backgroundBanner}>
          <img src="./images/promo-left-img.png" />
          <div className={classes.part1Content}>
            <h3 style={{ color: "white" }}>
              სერიის ფარგლებში, ყოველდღიურად გაიმართება 3 ივენთი:
            </h3>
            <div className={classes.eventDate}>
              <p>19:00 / 19:30 / 20:00</p>
            </div>
            <p>*ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან.</p>
            <p>ტურნირების სრული განრიგის სანახავად გადადი პოკერის ლობიში</p>
            <button>პოკერის ლობი</button>
          </div>
        </div>
      </div>
      <div className={classes.part2}>
        <h2 style={{ color: "white", textAlign: "center" }}>
          მოხვდი TOP20 ლიდერბორდში ტურნირებზე დაგროვებული ქულებით
        </h2>
        <div className={classes.backgroundOfPart2}>
          <div className={classes.pointsExplanation}>
            <p>ქულების დაგროვების მექანიკა</p>
            <button>\/</button>
          </div>
          {/* table */}
          <div className={classes.table1}>
            <div className={classes.colNames}>
              <span>პოზიცია</span>
              <span>ვაუჩერი</span>
              <span style={{ marginRight: "10%" }}>პრიზი</span>
            </div>
            <div className={classes.colContent}>
              <Row
                position="1"
                voucher="-"
                prize="A კატეგორიის საგზური"
                image="./images/travel-icon-sm.png"
              />
              <Row
                position="2"
                voucher="-"
                prize="B კატეგორიის საგზური"
                image="./images/ticket-icon-sm.png"
              />
              <Row
                position="3"
                voucher="1 500 ₾"
                prize="სპეც. ტურნირის ბილეთი"
                image=""
              />
              <Row
                position="4"
                voucher="1 200 ₾"
                prize="სპეც. ტურნირის ბილეთი"
                image=""
              />
              <Row
                position="5"
                voucher="1 000 ₾"
                prize="სპეც. ტურნირის ბილეთი"
                image=""
              />
              <Row
                position="6"
                voucher="800 ₾"
                prize="სპეც. ტურნირის ბილეთი"
                image=""
              />
            </div>
          </div>
          <div className={classes.prizes}>
            <Prize
              image="./images/travel-icon-sm.png"
              text="The Festival In Malta-ს საგზური"
            />
            <Prize
              image="./images/ticket-icon-sm.png"
              text="სპეციალური ტურნირის 'Cashgame Sharks' ბილეთი, სადაც გათამაშდება The Festival In Malta-ს საგზური"
            />
            <Prize
              image="./images/final-item-ticket-icon.png"
              text="ტექნიკის მაღაზიის ვაუჩერი"
            />
          </div>
          <p style={{ color: "lightgrey", textAlign: "center" }}>
            *ლიდერბორდის შედეგები განახლდება{" "}
            <u style={{ color: "rgb(255, 105, 31)" }}>პოკერის ლობიში</u>
          </p>
          <p style={{ color: "lightgrey", textAlign: "center" }}>
            *სატურნირო ლიდერბორდის ქულების დათვლაში არ მონაწილეობს ფრიროლები და
            სატელიტები
          </p>
        </div>
      </div>
      <div className={classes.part3}>
        <h2 style={{ color: "white", fontWeight: "500" }}>
          ყოველდღიური ტურნირები და სატელიტები
        </h2>
        <div className={classes.images}>
          <div className={classes.smallImages}>
            {/* <SmallImage text="Holdem Highrollers" prize="50 000 ₾" buyIn="ბაი-ინი - 550₾" date="27 აპრილი" imageSrc="./images/tournament-bg.png" />
            <SmallImage text="Holdem Highrollers" prize="50 000 ₾" buyIn="ბაი-ინი - 550₾" date="28 აპრილი" imageSrc="./images/tournament-bg2.png" /> */}
            <div className={classes.imgCont1}>
              <img src="./images/tournament-bg.png"></img>
              <p className={classes.card1Name}>Holdem Highrollers</p>
              <p className={classes.card1Prize}>50 000 ₾</p>
              <p className={classes.card1BuyIn}>ბაი-ინი - 550₾</p>
              <p className={classes.card1Date}>27 აპრილი</p>
            </div>
            <div className={classes.imgCont2}>
              <img src="./images/tournament-bg2.png"></img>
              <p className={classes.card2Name}>Holdem Highrollers</p>
              <p className={classes.card2Prize}>50 000 ₾</p>
              <p className={classes.card2BuyIn}>ბაი-ინი - 550₾</p>
              <p className={classes.card2Date}>28 აპრილი</p>
            </div>
          </div>
          <img src="./images/main-bg.png"></img>
        </div>
        <p style={{ wordBreak: "break-word", textAlign: "center" }}>
          *სამივე ტურნირის გამარჯვებულები მიიღებენ ბეჭდებს და ფინალურ ეტაპზე,
          The Lord of the Rings ტურნირზე, იბრძოლებენ The Festival in Malta-ს
          საგზურის მისაღებად.
        </p>
      </div>
      <div className={classes.part4}>
        <div className={classes.light2}></div>
        <h3 className={classes.part4Header}>
          დამატებით შედგება, ქეშგეიმინგის, ტურნირების და სპინ პოკერის 12 SIDE
          ლიდერბორდი
        </h3>
        <p className={classes.part4Text}>
          *Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის ლობიში
        </p>
      </div>
      <div className={classes.part5}>
        <h3 style={{ color: "white", fontWeight: "300" }}>
          წესები და პირობები
        </h3>
        <Question text="როდის იწყება და რა ფორმატით გაიმართება აქცია" />
        <Question text="როგორ მივიღო აქციაში მონაწილეობა?" />
        <Question text="სხვადასხვა" />
      </div>
      <h3 style={{ color: "white", fontWeight: "300" }}>მსგავსი აქციები</h3>
    </Fragment>
  );
};

export default SecondPage;
