
const sentencePlaceHolder={
    id:'',
    leftText:'',
    rightText:'',
    isDisable:true,
    trailCount:0,
    correctedWord:'',
    isCorrect:false,
    submit:{},
    shows:false,
    iconShow:false,
    selectedWord:'',
    distractor:[],
    replicate:false
}

const distractor=[];
export const SpellingUtils ={
    initialize:(mockData)=>{
        const sentence= mockData.map((mockData,index)=>{
            const {id,question,answer,distractor}=mockData;
            const splittedSentence= question.split('<>');
            let word= [...distractor,answer];

           let sentence={
                leftText:splittedSentence[0].trim(),
                rightText:splittedSentence[1].trim(),
                correctedWord:answer,
                id,
                distractor:word,
                submit:{show:false,disabled:true}
    
            }

            return {...sentencePlaceHolder,...sentence};
        })
        return {sentence}
       

    }
}