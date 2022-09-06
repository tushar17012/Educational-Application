import React, { useState, useEffect } from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import { Activityframe } from "../../Components/Activityframe/Activityframe";
import Footer from "../../Components/Footer/Footer";
import Passage from "../../Components/Passage/Passage";
import { PauseButton } from "../../Components/Pausebutton/Pausebutton";
import { PlayButton } from "../../Components/Playbutton/PlayButton";
import { ComprehensionUtils } from "./ComprehensionUtils";
import InstructionButton from "../../Components/InstructionButton/InstructionButton";
import ComprehensionActivity from './ComprehensionActivity'
import "./Comprehension.css";
// const wrapperData = [
//   {
//     id: 1,
//     question: "what are they doing in these ?",
//     corrected: "they are Playing",
//     distractor: [
//       "they are sleeping",
//       "they are eating",
//       "they are looking somewhere",
//     ],
//   },

//   {
//     id: 2,
//     question: "what are they doing in thesebvkytfcgjfcfgcytc",
//     corrected: "they are Playibuluyvguyling",
//     distractor: [
//       "they are sleeluygvuyping",
//       "they are eathgcykgtcing",
//       "they are  hjvytkvuvkuhv somewhere",
//     ],
//   },

//   {
//     id: 3,
//     question: "what are they doing in these",
//     corrected: "they are Playing",
//     distractor: [
//       "they are sleeping",
//       "they are eating",
//       "they are looking somewhere",
//     ],
//   },

//   {
//     id: 4,
//     question: "what are they doing in these",
//     corrected: "they are Playing",
//     distractor: [
//       "they are sleeping",
//       "they are eating",
//       "they are looking somewhere",
//     ],
//   },
// ];
const PassageData =
  "Bears are found in Europe, Asia, Africa and America. They are massively built, with short tails and thick legs. Bears are not really carnivores.They eat almost anything, the chief exception in the polar bear, which in its natural state lives on fish and seals.However, in captivity, they seem to enjoy meat, vegetables, fruits, milk, rice and porridge.Bears are not quite as dangerous as people imagine them it be like most animals they will dotheir best to avoid human beings. They have a special sense that is eyesight to see things.";

function Comprehension() {
  const title = "Comprehension";
  const isActivity = true;
  const [comprehensionData, setComprehensionData] = useState([]);
  const[currentIndex,setCurrentIndex]=useState(0);
  const[isPaused,setIsPaused]=useState(false);
  const[wrapperData,setwrapperData]=useState([]);


  useEffect(async()=>{
    await fetch(`http://localhost:9999/comprehension`).then((res)=> res.json()).then((data)=> setwrapperData(data.actualDataComprehension))
  },[])

  useEffect(() => {
    const handleData = () => {
      const comprehension = ComprehensionUtils.initialize(wrapperData);
      setComprehensionData(comprehension.sentence);
    };

    if (isActivity) {
      handleData();
    }
  }, [wrapperData]);


  const handleRadioChanges =(event)=>{
    const cloneSentence= [...comprehensionData];
    const newCloneobj= cloneSentence[currentIndex];
    newCloneobj.selectedWord=event.target.value;
    cloneSentence[currentIndex]= newCloneobj;
    setComprehensionData(cloneSentence);
  }

  const handleSubmit=()=>{
    const comprehensionObj=[...comprehensionData];
    let comprehensionObjectclone =  comprehensionObj[currentIndex]
    handletrials(comprehensionObjectclone);
    comprehensionObj=comprehensionObjectclone[currentIndex]

    setComprehensionData(comprehensionObj);
  }

  const handletrials =(cloneComprehension)=>{
    if(cloneComprehension.trailCount===0 && cloneComprehension.selectedWord=== cloneComprehension.correctedAns){
      handleCorrectatfirst(cloneComprehension)
    }
    else if(cloneComprehension.trailCount===0 && cloneComprehension.selectedWord !== cloneComprehension.correctedAns){
      handleIncorrectatfirst(cloneComprehension)
    }
    else if(cloneComprehension.trailCount===1 && cloneComprehension.selectedWord === cloneComprehension.correctedAns){
      handleCorrectatsecond(cloneComprehension)
    }
    else if(cloneComprehension.trailCount===1 && cloneComprehension.selectedWord !== cloneComprehension.correctedAns){
      handleIncorrectatsecond(cloneComprehension);
    }
  }

  const handleCorrectatfirst=(cloneComprehension)=>{
    cloneComprehension.trailCount++;
    cloneComprehension.correctIcon= true;
    setCurrentIndex(currentIndex+1);
    return  cloneComprehension;
  }
  const handleIncorrectatfirst=(cloneComprehension)=>{
    cloneComprehension.trailCount++;
    cloneComprehension.correctIcon= false;
    //setCurrentIndex(currentIndex+1);
    return  cloneComprehension;
  }
  const handleCorrectatsecond=(cloneComprehension)=>{
    cloneComprehension.trailCount++;
    cloneComprehension.correctIcon= true;
    setCurrentIndex(currentIndex+1);
    return  cloneComprehension;
  }
  const handleIncorrectatsecond=(cloneComprehension)=>{
    cloneComprehension.trailCount++;
    cloneComprehension.correctIcon= false;
    setCurrentIndex(currentIndex+1);
    return  cloneComprehension;
  }


  const handlePause = () => {
    setIsPaused(!isPaused);
  };




  

  return (
    <div class="wrapp">
      <NavBar title={title} />
      <Activityframe>
        <>
          <InstructionButton />
          {isPaused ? ( <span class="pausedClass"> Paused </span>) : (<ComprehensionActivity
            comprehensionData={comprehensionData[currentIndex]}
              handleRadioChanges={handleRadioChanges}  
          />
  )}
         
         
        </>
      </Activityframe>
      <div className="activityFooter">
          <div className="activityFooterFrame">
            {isPaused ? (
              <PlayButton handlePause={handlePause} />
            ) : (
              <PauseButton handlePause={handlePause} />
            )}
            <Footer handleSubmit={handleSubmit} />
          </div>
        </div>
    </div>
  );
}

export default Comprehension;
