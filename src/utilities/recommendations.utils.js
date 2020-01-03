const RecommendationsModel = require('../app/models/recommendation.model');
const physicalRecommendationsConst = require('../constants/main.constants').physicalRecommendations;
const mentalRecommendationsConst = require('../constants/main.constants').mentalRecommendations;
const socialRecommendationsConst = require('../constants/main.constants').socialRecommendations;
const emotionalRecommendationsConst = require('../constants/main.constants').emotionalRecommendations;

exports.recommendations = (element) => {
    if (element.wellnessType === 'physical')
        physicalRecommendations(element);
    if (element.wellnessType === 'mental')
        mentalRecommendations(element);
    if (element.wellnessType === 'social')
        socialRecommendations(element);
    if (element.wellnessType === 'emotional')
        emotionalRecommendations(element);
}

function physicalRecommendations(physicalElement) {

    if (physicalElement.questionText === physicalRecommendationsConst.QuestionOne.questionTitle) {
        if (physicalElement.answerText === 'Never' || physicalElement.answerText === 'Sometimes')
            createObj(physicalRecommendationsConst.QuestionOne.recommendationTitle, physicalRecommendationsConst.QuestionOne.recommendationArr, physicalElement, physicalRecommendationsConst.color);
        else
            correctAnswerObj(physicalElement, physicalRecommendationsConst.QuestionOne.recommendationForCorrectAnswerArr, physicalRecommendationsConst.color);
    }

    if (physicalElement.questionText === physicalRecommendationsConst.QuestionTwo.questionTitle) {
        if (physicalElement.answerText === 'Never' || physicalElement.answerText === 'Sometimes')
            createObj(physicalRecommendationsConst.QuestionTwo.recommendationTitle, physicalRecommendationsConst.QuestionTwo.recommendationArr, physicalElement, physicalRecommendationsConst.color);
        else
            correctAnswerObj(physicalElement, physicalRecommendationsConst.QuestionTwo.recommendationForCorrectAnswerArr, physicalRecommendationsConst.color);
    }

    if (physicalElement.questionText === physicalRecommendationsConst.QuestionThree.questionTitle) {
        if (physicalElement.answerText === 'No')
            createObj(physicalRecommendationsConst.QuestionThree.recommendationTitle, physicalRecommendationsConst.QuestionThree.recommendationArr, physicalElement, physicalRecommendationsConst.color);
        else
            correctAnswerObj(physicalElement, physicalRecommendationsConst.QuestionThree.recommendationForCorrectAnswerArr, physicalRecommendationsConst.color);
    }

    if (physicalElement.questionText === physicalRecommendationsConst.QuestionFour.questionTitle) {
        if (physicalElement.answerText === 'Never' || physicalElement.answerText === 'Sometimes')
            createObj(physicalRecommendationsConst.QuestionFour.recommendationTitle, physicalRecommendationsConst.QuestionFour.recommendationArr, physicalElement, physicalRecommendationsConst.color);
        else
            correctAnswerObj(physicalElement, physicalRecommendationsConst.QuestionFour.recommendationForCorrectAnswerArr, physicalRecommendationsConst.color);
    }

    if (physicalElement.questionText === physicalRecommendationsConst.QuestionFive.questionTitle) {
        if (physicalElement.answerText === 'Yes')
            createObj(physicalRecommendationsConst.QuestionFive.recommendationTitle, physicalRecommendationsConst.QuestionFive.recommendationArr, physicalElement, physicalRecommendationsConst.color);
        else
            correctAnswerObj(physicalElement, physicalRecommendationsConst.QuestionFive.recommendationForCorrectAnswerArr, physicalRecommendationsConst.color);
    }

}

function mentalRecommendations(mentalElement) {

    if (mentalElement.questionText === mentalRecommendationsConst.Questionone.questionTitle) {
        if (mentalElement.answerText === 'Always' || mentalElement.answerText === 'Often')
            createObj(mentalRecommendationsConst.Questionone.recommendationTitle, mentalRecommendationsConst.Questionone.recommendationArr, mentalElement, mentalRecommendationsConst.color);
        else
            correctAnswerObj(mentalElement, mentalRecommendationsConst.Questionone.recommendationForCorrectAnswerArr, mentalRecommendationsConst.color);
    }

    if (mentalElement.questionText === mentalRecommendationsConst.Questiontwo.questionTitle) {
        if (mentalElement.answerText === 'No')
            createObj(mentalRecommendationsConst.Questiontwo.recommendationTitle, mentalRecommendationsConst.Questiontwo.recommendationArr, mentalElement, mentalRecommendationsConst.color);
        else
            correctAnswerObj(mentalElement, mentalRecommendationsConst.Questiontwo.recommendationForCorrectAnswerArr, mentalRecommendationsConst.color);
    }

    if (mentalElement.questionText === mentalRecommendationsConst.Questionthree.questionTitle) {
        if (mentalElement.answerText === 'Never' || mentalElement.answerText === 'Sometimes')
            createObj(mentalRecommendationsConst.Questionthree.recommendationTitle, mentalRecommendationsConst.Questionthree.recommendationArr, mentalElement, mentalRecommendationsConst.color);
        else
            correctAnswerObj(mentalElement, mentalRecommendationsConst.Questionthree.recommendationForCorrectAnswerArr, mentalRecommendationsConst.color);
    }

    if (mentalElement.questionText === mentalRecommendationsConst.Questiontfour.questionTitle) {
        if (mentalElement.answerText === 'No')
            createObj(mentalRecommendationsConst.Questiontfour.recommendationTitle, mentalRecommendationsConst.Questiontfour.recommendationArr, mentalElement, mentalRecommendationsConst.color);
        else
            correctAnswerObj(mentalElement, mentalRecommendationsConst.Questiontfour.recommendationForCorrectAnswerArr, mentalRecommendationsConst.color);
    }

    if (mentalElement.questionText === mentalRecommendationsConst.Questiontfive.questionTitle) {
        if (mentalElement.answerText === 'Never' || mentalElement.answerText === 'Sometimes')
            createObj(mentalRecommendationsConst.Questiontfive.recommendationTitle, mentalRecommendationsConst.Questiontfive.recommendationArr, mentalElement, mentalRecommendationsConst.color);
        else
            correctAnswerObj(mentalElement, mentalRecommendationsConst.Questiontfive.recommendationForCorrectAnswerArr, mentalRecommendationsConst.color);
    }

}

function socialRecommendations(socialElement) {
    if (socialElement.questionText === socialRecommendationsConst.QuestionOne.questionTitle) {
        if (socialElement.answerText === 'Never' || socialElement.answerText === 'Sometimes')
            createObj(socialRecommendationsConst.QuestionOne.recommendationTitle, socialRecommendationsConst.QuestionOne.recommendationArr, socialElement, socialRecommendationsConst.color);
        else
            correctAnswerObj(socialElement, socialRecommendationsConst.QuestionOne.recommendationForCorrectAnswerArr, socialRecommendationsConst.color);
    }

    if (socialElement.questionText === socialRecommendationsConst.Questiontwo.questionTitle) {
        if (socialElement.answerText === 'No')
            createObj(socialRecommendationsConst.Questiontwo.recommendationTitle, socialRecommendationsConst.Questiontwo.recommendationArr, socialElement, socialRecommendationsConst.color);
        else
            correctAnswerObj(socialElement, socialRecommendationsConst.Questiontwo.recommendationForCorrectAnswerArr, socialRecommendationsConst.color);
    }

    if (socialElement.questionText === socialRecommendationsConst.Questionthree.questionTitle) {
        if (socialElement.answerText === 'Never' || socialElement.answerText === 'Sometimes')
            createObj(socialRecommendationsConst.Questionthree.recommendationTitle, socialRecommendationsConst.Questionthree.recommendationArr, socialElement, socialRecommendationsConst.color);
        else
            correctAnswerObj(socialElement, socialRecommendationsConst.Questionthree.recommendationForCorrectAnswerArr, socialRecommendationsConst.color);
    }

    if (socialElement.questionText === socialRecommendationsConst.Questiontfour.questionTitle) {
        if (socialElement.answerText === 'Never' || socialElement.answerText === 'Sometimes')
            createObj(socialRecommendationsConst.Questiontfour.recommendationTitle, socialRecommendationsConst.Questiontfour.recommendationArr, socialElement, socialRecommendationsConst.color);
        else
            correctAnswerObj(socialElement, socialRecommendationsConst.Questiontfour.recommendationForCorrectAnswerArr, socialRecommendationsConst.color);
    }

    if (socialElement.questionText === socialRecommendationsConst.Questiontfive.questionTitle) {
        if (socialElement.answerText === 'Often' || socialElement.answerText === 'Always')
            createObj(socialRecommendationsConst.Questiontfive.recommendationTitle, socialRecommendationsConst.Questiontfive.recommendationArr, socialElement, socialRecommendationsConst.color);
        else
            correctAnswerObj(socialElement, socialRecommendationsConst.Questiontfive.recommendationForCorrectAnswerArr, socialRecommendationsConst.color);
    }
}

function emotionalRecommendations(emotionalElement) {

    if (emotionalElement.questionText === emotionalRecommendationsConst.QuestionOne.questionTitle) {
        if (emotionalElement.answerText === 'Yes')
            createObj(emotionalRecommendationsConst.QuestionOne.recommendationTitle, emotionalRecommendationsConst.QuestionOne.recommendationArr, emotionalElement, emotionalRecommendationsConst.color);
        else
            correctAnswerObj(emotionalElement, emotionalRecommendationsConst.QuestionOne.recommendationForCorrectAnswerArr, emotionalRecommendationsConst.color);
    }

    if (emotionalElement.questionText === emotionalRecommendationsConst.QuestionTwo.questionTitle) {
        if (emotionalElement.answerText === 'No')
            createObj(emotionalRecommendationsConst.QuestionTwo.recommendationTitle, emotionalRecommendationsConst.QuestionTwo.recommendationArr, emotionalElement, emotionalRecommendationsConst.color);
        else
            correctAnswerObj(emotionalElement, emotionalRecommendationsConst.QuestionTwo.recommendationForCorrectAnswerArr, emotionalRecommendationsConst.color);
    }

    if (emotionalElement.questionText === emotionalRecommendationsConst.QuestionThree.questionTitle) {
        if (emotionalElement.answerText === 'Yes')
            createObj(emotionalRecommendationsConst.QuestionThree.recommendationTitle, emotionalRecommendationsConst.QuestionThree.recommendationArr, emotionalElement, emotionalRecommendationsConst.color);
        else
            correctAnswerObj(emotionalElement, emotionalRecommendationsConst.QuestionThree.recommendationForCorrectAnswerArr, emotionalRecommendationsConst.color);
    }

    if (emotionalElement.questionText === emotionalRecommendationsConst.Questionfour.questionTitle) {
        if (emotionalElement.answerText === 'No')
            createObj(emotionalRecommendationsConst.Questionfour.recommendationTitle, emotionalRecommendationsConst.Questionfour.recommendationArr, emotionalElement, emotionalRecommendationsConst.color);
        else
            correctAnswerObj(emotionalElement, emotionalRecommendationsConst.Questionfour.recommendationForCorrectAnswerArr, emotionalRecommendationsConst.color);
    }

    if (emotionalElement.questionText === emotionalRecommendationsConst.Questionfive.questionTitle) {
        if (emotionalElement.answerText === 'Often' || emotionalElement.answerText === 'Always')
            createObj(emotionalRecommendationsConst.Questionfive.recommendationTitle, emotionalRecommendationsConst.Questionfive.recommendationArr, emotionalElement, emotionalRecommendationsConst.color);
        else
            correctAnswerObj(emotionalElement, emotionalRecommendationsConst.Questionfive.recommendationForCorrectAnswerArr, emotionalRecommendationsConst.color);
    }

}

function correctAnswerObj(element, arr, color) {
    let obj = {};
    obj = {
        recommendationTitle: 'Great Job',
        empId: element.empId,
        serialNumber: element.serialNumber,
        question: element.questionText,
        answer: element.answerText,
        recommendation: arr,
        wellnessType: element.wellnessType,
        totalAttempt: element.totalAttempt,
        color: color
    }
    saveRecommendation(obj);
}

function createObj(recommendationTitle, recommendationArr, element, color) {
    let obj = {};
    obj = {
        recommendationTitle: recommendationTitle,
        empId: element.empId,
        serialNumber: element.serialNumber,
        question: element.questionText,
        answer: element.answerText,
        recommendation: recommendationArr,
        wellnessType: element.wellnessType,
        totalAttempt: element.totalAttempt,
        color: color
    }
    saveRecommendation(obj);
}
let i = 0;
async function saveRecommendation(data) {
    try {
        const createDoc = new RecommendationsModel(data);
        console.log('saving recommendations...', i++);
        await createDoc.save();
    } catch (error) {
        throw Error(error);
    }
}