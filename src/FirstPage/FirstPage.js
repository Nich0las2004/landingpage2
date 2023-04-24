import classes from "./FirstPage.module.css";
import { Fragment } from "react";
import Row from "./Row/Row";
import Prize from "./Prize/Prize";
import Question from "./Question/Question";

const FirstPage = () => {
  return (
    <Fragment>
      <div className={classes.contentInfo1}>
        <div className={classes.value}>1₾ რეიქი = 1 ქულას</div>
        <div className={classes.secondPart}>
          <span className={classes.subHeader1}>
            ჰოლდემის TOP20 ლიდერბორდი
            <img
              style={{ paddingLeft: "1vw"}}
              src="./images/example-icon.png"
            />
          </span>
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
          {/* end of secondPart */}
          <span className={classes.subHeader1}>
            TOP20 ლიდერბორდი ჰოლდემში
            <img
              style={{ paddingLeft: "1vw" }}
              src="./images/example-icon.png"
            />
          </span>
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
          <p style={{color:'white'}}>*ლიდერბორდის შედეგები განახლდება <u style={{color: 'rgb(255, 105, 31)'}}>პოკერის ლობიში</u></p>
        {/* end of contentInfo1 */}
        
      </div>
      <div className={classes.contentInfo2}>
        <div className={classes.light2}>
        <h3 className={classes.contentInfo2Header}>დამატებით შედგება, ქეშგეიმინგის, ტურნირების და სპინ პოკერის</h3>
        <h3 className={classes.contentInfo2Header}>12 SIDE ლიდერბორდი</h3>
        <p className={classes.contentInfo2Text}>*Side ლიდერბორდების შესახებ დეტალური ინფორმაცია იხილეთ პოკერის ლობიში</p>
        </div>
      </div>

      <div className={classes.columnInfo3}>
        <h3 style={{color:'white', fontWeight:'300'}}>წესები და პირობები</h3>
         <Question text="როდის იწყება და რა ფორმატით გაიმართება აქცია"/>
         <Question text="როგორ მივიღო აქციაში მონაწილეობა?"/>
         <Question text="სხვადასხვა"/>
      </div>
      <div className={classes.columnInfo4}>
      <h3 style={{color:'white', fontWeight:'300'}}>მსგავსი აქციები</h3>
      </div>
    </Fragment>
  );
};

export default FirstPage;
