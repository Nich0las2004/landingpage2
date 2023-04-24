import { Fragment } from "react";
import classes from "./ThirdPage.module.css";

import ColRow from "./ColRow/ColRow";
import Card1 from "./Card1/Card1";
import Card2 from "./Card2/Card2";
import Question from "../FirstPage/Question/Question";
import ThirdPageRow from "./ThirdPageRow/ThirdPageRow";

const ThirdPage = () => {
  return (
    <Fragment>
      {/* first part of the page */}

      <div className={classes.part1}>
        <img src="./images/final-info-img.jpg" />
        <p>გაემგზავრე THE FESTIVAL IN MALTA-ზე</p>
        <p>
          სერიების ფარგლებში, ევროპაბეთი უკვე მეორედ აძლევს პოკერის მოთამაშეებს
          დაუვიწყარი მოგზაურობის შანსს
        </p>
        <div className={classes.eventDate}>
          <div className={classes.light}></div>
          <p>15-დან 21 მაისის ჩათვლით მალტა პოკერის ფესტივალს უმასპინძლებს</p>
        </div>
        <div className={classes.threeColumn}>
          <div className={classes.col1}>
            <div className={classes.light2}></div>
            <h4 style={{ color: "white", fontWeight: "400" }}>
              A კატეგორიის საგზურში შედის
            </h4>
            {/* row1 */}
            <div className={classes.row1}>
              <ColRow
                image="./images/final-item-ticket-icon.png"
                text="ორმხრივი ავიაბილეთი"
              />
              <ColRow
                image="./images/final-item-event-icon.png"
                text="The Festival In Malta-ს მეინ ივენთის ბაი-ინი"
              />
              <ColRow
                image="./images/final-item-event-icon.png"
                text="Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი"
              />
              <ColRow
                image="./images/final-item-hotel-icon.png"
                text="სასტუმრო Golden Tulip Vivaldi Hotel"
              />
              <ColRow
                image="./images/final-item-money-icon.png"
                text="€500 სახარჯი ფული"
              />
            </div>
          </div>
          <div className={classes.col2}>
            <div className={classes.light2}></div>
            <h4 style={{ color: "white", fontWeight: "400" }}>
              A კატეგორიის საგზურში შედის
            </h4>
            {/* row2 */}
            <div className={classes.row2}>
              <ColRow
                image="./images/final-item-ticket-icon.png"
                text="ორმხრივი ავიაბილეთი"
              />
              <ColRow
                image="./images/final-item-event-icon.png"
                text="The Festival In Malta-ს მეინ ივენთის ბაი-ინი"
              />
              <ColRow
                image="./images/final-item-event-icon.png"
                text="Holdem ან Omaha ჰაიროლერ ტურნირის ბაი-ინი"
              />
              <ColRow
                image="./images/final-item-hotel-icon.png"
                text="სასტუმრო Golden Tulip Vivaldi Hotel"
              />
              <ColRow
                image="./images/final-item-money-icon.png"
                text="€500 სახარჯი ფული"
              />
            </div>
          </div>
          <div className={classes.col3}>
            <div className={classes.light2}></div>
            <h4 style={{ color: "white", fontWeight: "400" }}>
              A კატეგორიის საგზურში შედის
            </h4>
            {/* row3 */}
            <div className={classes.row3}>
              <ColRow
                image="./images/final-item-ticket-icon.png"
                text="ორმხრივი ავიაბილეთი"
              />
              <ColRow
                image="./images/final-item-event-icon.png"
                text="The Festival In Malta-ს მეინ ივენთის ბაი-ინი"
              />
              <ColRow
                image="./images/final-item-hotel-icon.png"
                text="სასტუმრო"
              />
              <ColRow
                image="./images/final-item-money-icon.png"
                text="€500 სახარჯი ფული"
              />
            </div>
          </div>
        </div>
      </div>

      {/* second part of the page */}

      <div className={classes.part2}>
        <div className={classes.secondPartLight}></div>
        <h2 style={{ color: "white", fontWeight: "500" }}>
          მოიგე საგზური 30 აპრილის ფინალის ტურნირებზე
        </h2>
        <div className={classes.cardsBackground}>
          <div className={classes.cardsCol1}>
            <Card1
              name='"Cashgame Highrollers"-'
              prize="1 საგზური"
              image="./images/poker-item-1-ticket-icon.png"
            />
            <Card1
              name='"Cashgame Grinders"-'
              prize="1 საგზური"
              image="./images/poker-item-1-ticket-icon.png"
            />
            <Card1
              name='"Tournament Sharks"-'
              prize="1 საგზური"
              image="./images/poker-item-1-ticket-icon.png"
            />
          </div>
          <div className={classes.cardsCol2}>
            <Card2
              name="The Festival in Malta, GTD"
              prize="A კატეგორიის 1 საგზური"
              prize2="B კატეგორიის 1 საგზური"
              image="./images/poker-item-2-ticket-icon.png"
              text="ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165€ ბაი-ინის გადახდით."
            />
            <Card2
              name="The Lord of the Rings"
              prize="C კატეგორიის 1 საგზური"
              prize2=""
              image="./images/poker-item-1-ticket-icon.png"
              text="ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165€ ბაი-ინის გადახდით."
            />
          </div>
        </div>
        <div className={classes.part2Text}>
          <p>
            *თუ მოთამაშე მოიგებს ბეჭედს ორჯერ ან მეტჯერ, ის The Lord of the
            Rings ტურნირზე მოხვდება ბეჭდების შესაბამისი რაოდენობის სტეკით
          </p>
          <p>
            *ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾-იანი
            ბაი-ინის გადახდით.
          </p>
        </div>
      </div>

      {/* third part of the page */}

      <div className={classes.part3}>
        <div className={classes.secondPartLight}></div>
        <h1
          style={{ fontFamily: "cursive", color: "gold", letterSpacing: "1px" }}
        >
          მისტიური გასაღები
        </h1>
        <div className={classes.thirdPartBackground}>
          <p>
            მოთამაშეები გარკვეული საპრიზო ადგილების დაკავების შემთხვევაში
            მიიღებენ საიდუმლო გასაღებს
          </p>
          <div className={classes.table}>
            <ThirdPageRow
              position="1"
              text="სპეციალური ტურნირი Cashgame Sharks II ადგილი"
            />
            <ThirdPageRow
              position="2"
              text="სპეციალური ტურნირი Cashgame Sharks II ადგილი"
            />
            <ThirdPageRow
              position="3"
              text="სპეციალური ტურნირი Tournament Sharks II ადგილი"
            />
            <ThirdPageRow
              position="4"
              text="სპეც. ტურნირი Cashgame Sharks III ადგილი"
            />
            <ThirdPageRow
              position="5"
              text="Holdem Grinders ლიდერბორდის გამარჯვებული"
            />
            <ThirdPageRow
              position="6"
              text="ქეშგეიმ დაბალი ლიმიტების ლიდერბორდების გამარჯვებული"
            />
          </div>
        </div>
      </div>

      {/* fourth part of the page */}

      <div className={classes.part4}>
        <h3 style={{ color: "white", fontWeight: "300" }}>
          წესები და პირობები
        </h3>
        <Question text="როდის იწყება და რა ფორმატით გაიმართება აქცია" />
        <Question text="როგორ მივიღო აქციაში მონაწილეობა?" />
        <Question text="სხვადასხვა" />
      </div>

      {/* fifth part of the page */}

      <div className={classes.part5}>
        <h3 style={{ color: "white", fontWeight: "300" }}>მსგავსი აქციები</h3>
      </div>
    </Fragment>
  );
};

export default ThirdPage;
