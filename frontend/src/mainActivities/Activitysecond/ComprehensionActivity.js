import React from "react";
import "./Comprehension.css";
import comprehension_1 from "../../images/comprehension_1.jpg"
import comprehension_2 from "../../images/comprehension_2.webp";
import comprehension_3 from "../../images/comprehension_3.gif";
import comprehension_4 from "../../images/comprehension_4.gif";

const imagesArr=[{id:1,image:comprehension_1}, {id:2,image:comprehension_2}, {id:3,image:comprehension_3}, {id:4,image:comprehension_4},
]
function ComprehensionActivity(props) {
  const { comprehensionData = {},handleRadioChanges } = props;

  const {
    Activityquestion,
    correctedAns,
    distractor = {},
    id,
  } = comprehensionData;
  return (
    <>
      <div className="compQuestion">
        <span>{Activityquestion}</span>
      </div>
      <div className="imgcheckbox">
      {imagesArr.map((item)=>{
        return (
          <>
          {item.id===id &&  <div className="imageDiv">
          <div className="imagePos">
            <img  style={{width:'100%',height:'100%'}} src={item.image}/>
          </div>
        </div>}
         

          </>
        )
      })}
     
       
        <div className="checkBoxdiv">
          <div className="checkBoxcontent">
            <div class="checktext">
              {Object.keys(distractor).map((item) => {
                return (
                  <div class="checkdivs">
                    <input id={item} value={distractor[item]} type="radio" name="quiz" onChange={(e)=>handleRadioChanges(e)} />
                    <span class="check_content"> {distractor[item]} </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComprehensionActivity;
