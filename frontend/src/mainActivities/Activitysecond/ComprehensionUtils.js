const ComprehensionPlaceHolder={
    id:'',
    Activityquestion:'',
    correctedAns:'',
    distractor:[],
    trailCount:0,
    selectedWord:'',
    correctIcon:false,



}

export const ComprehensionUtils={

    initialize: (wrapperData)=>{
        const sentence=  wrapperData.map((mockData)=>{
            const {id,question,corrected,distractor}= mockData;
            let word=[...distractor,corrected]

            let sentence={
                id:id,
                Activityquestion:question,
                correctedAns:corrected,
                distractor:word

            }
            return {...ComprehensionPlaceHolder,...sentence}

        })
        return {sentence}

    }

}