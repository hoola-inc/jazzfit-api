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
            createObj(physicalRecommendationsConst.QuestionOne.recommendationTitle, physicalRecommendationsConst.QuestionOne.recommendationArr, physicalElement);
        else
            defaultObj(physicalElement);
    }

    if (physicalElement.questionText === physicalRecommendationsConst.QuestionTwo.questionTitle) {
        if (physicalElement.answerText === 'Never' || physicalElement.answerText === 'Sometimes')
            createObj(physicalRecommendationsConst.QuestionTwo.recommendationTitle, physicalRecommendationsConst.QuestionTwo.recommendationArr, physicalElement);
        else
            defaultObj(physicalElement);
    }

    if (physicalElement.questionText === physicalRecommendationsConst.QuestionThree.questionTitle) {
        if (physicalElement.answerText === 'No')
            createObj(physicalRecommendationsConst.QuestionThree.recommendationTitle, physicalRecommendationsConst.QuestionThree.recommendationArr, physicalElement);
        else
            defaultObj(physicalElement);
    }

    if (physicalElement.questionText === physicalRecommendationsConst.QuestionFour.questionTitle) {
        if (physicalElement.answerText === 'Never' || physicalElement.answerText === 'Sometimes')
            createObj(physicalRecommendationsConst.QuestionFour.recommendationTitle, physicalRecommendationsConst.QuestionFour.recommendationArr, physicalElement);
        else
            defaultObj(physicalElement);
    }

    if (physicalElement.questionText === physicalRecommendationsConst.QuestionFive.questionTitle) {
        if (physicalElement.answerText === 'Yes')
            createObj(physicalRecommendationsConst.QuestionFive.recommendationTitle, physicalRecommendationsConst.QuestionFive.recommendationArr, physicalElement);
        else
            defaultObj(physicalElement);
    }

}

function mentalRecommendations(mentalElement) {

    if (mentalElement.questionText === mentalRecommendationsConst.Questionone.questionTitle) {
        if (mentalElement.answerText === 'Often' || mentalElement.answerText === 'Always')
            createObj(mentalRecommendationsConst.Questionone.recommendationTitle, mentalRecommendationsConst.Questionone.recommendationArr, mentalElement);
        else
            defaultObj(mentalElement);
    }

    if (mentalElement.questionText === mentalRecommendationsConst.Questiontwo.questionTitle) {
        if (mentalElement.answerText === 'No')
            createObj(mentalRecommendationsConst.Questiontwo.recommendationTitle, mentalRecommendationsConst.Questiontwo.recommendationArr, mentalElement);
        else
            defaultObj(mentalElement);
    }

    if (mentalElement.questionText === mentalRecommendationsConst.Questionthree.questionTitle) {
        if (mentalElement.answerText === 'Never' || mentalElement.answerText === 'Sometimes')
            createObj(mentalRecommendationsConst.Questionthree.recommendationTitle, mentalRecommendationsConst.Questionthree.recommendationArr, mentalElement);
        else
            defaultObj(mentalElement);
    }

    if (mentalElement.questionText === mentalRecommendationsConst.Questiontfour.questionTitle) {
        if (mentalElement.answerText === 'No')
            createObj(mentalRecommendationsConst.Questiontfour.recommendationTitle, mentalRecommendationsConst.Questiontfour.recommendationArr, mentalElement);
        else
            defaultObj();
    }

    if (mentalElement.questionText === mentalRecommendationsConst.Questiontfive.questionTitle) {
        if (mentalElement.answerText === 'Never' || mentalElement.answerText === 'Sometimes')
            createObj(mentalRecommendationsConst.Questiontfive.recommendationTitle, mentalRecommendationsConst.Questiontfive.recommendationArr, mentalElement);
        else
            defaultObj();
    }

}

function socialRecommendations(socialElement) {
    if (socialElement.questionText === socialRecommendationsConst.QuestionOne.questionTitle) {
        if (socialElement.answerText === 'Never' || socialElement.answerText === 'Sometimes')
            createObj(socialRecommendationsConst.QuestionOne.recommendationTitle, socialRecommendationsConst.QuestionOne.recommendationArr, socialElement);
        else
            defaultObj(socialElement);
    }

    if (socialElement.questionText === socialRecommendationsConst.Questiontwo.questionTitle) {
        if (socialElement.answerText === 'No')
            createObj(socialRecommendationsConst.Questiontwo.recommendationTitle, socialRecommendationsConst.Questiontwo.recommendationArr, socialElement);
        else
            defaultObj(socialElement);
    }

    if (socialElement.questionText === socialRecommendationsConst.Questionthree.questionTitle) {
        if (socialElement.answerText === 'Never' || socialElement.answerText === 'Sometimes')
            createObj(socialRecommendationsConst.Questionthree.recommendationTitle, socialRecommendationsConst.Questionthree.recommendationArr, socialElement);
        else
            defaultObj(socialElement);
    }

    if (socialElement.questionText === socialRecommendationsConst.Questiontfour.questionTitle) {
        if (socialElement.answerText === 'Never' || socialElement.answerText === 'Sometimes')
            createObj(socialRecommendationsConst.Questiontfour.recommendationTitle, socialRecommendationsConst.Questiontfour.recommendationArr, socialElement);
        else
            defaultObj(socialElement);
    }

    if (socialElement.questionText === socialRecommendationsConst.Questiontfive.questionTitle) {
        if (socialElement.answerText === 'Often' || socialElement.answerText === 'Always')
            createObj(socialRecommendationsConst.Questiontfive.recommendationTitle, socialRecommendationsConst.Questiontfive.recommendationArr, socialElement);
        else
            defaultObj(socialElement);
    }
}

function emotionalRecommendations(emotionalElement) {

    if (emotionalElement.questionText === emotionalRecommendationsConst.QuestionOne.questionTitle) {
        if (emotionalElement.answerText === 'Yes')
            createObj(emotionalRecommendationsConst.QuestionOne.recommendationTitle, emotionalRecommendationsConst.QuestionOne.recommendationArr, emotionalElement);
        else
            defaultObj(emotionalElement);
    }

    if (emotionalElement.questionText === emotionalRecommendationsConst.QuestionTwo.questionTitle) {
        if (emotionalElement.answerText === 'No')
            createObj(emotionalRecommendationsConst.QuestionTwo.recommendationTitle, emotionalRecommendationsConst.QuestionTwo.recommendationArr, emotionalElement);
        else
            defaultObj(emotionalElement);
    }

    if (emotionalElement.questionText === emotionalRecommendationsConst.QuestionThree.questionTitle) {
        if (emotionalElement.answerText === 'Yes')
            createObj(emotionalRecommendationsConst.QuestionThree.recommendationTitle, emotionalRecommendationsConst.QuestionThree.recommendationArr, emotionalElement);
        else
            defaultObj(emotionalElement);
    }

    if (emotionalElement.questionText === emotionalRecommendationsConst.Questionfour.questionTitle) {
        if (emotionalElement.answerText === 'No')
            createObj(emotionalRecommendationsConst.Questionfour.recommendationTitle, emotionalRecommendationsConst.Questionfour.recommendationArr, emotionalElement);
        else
            defaultObj(emotionalElement);
    }

    if (emotionalElement.questionText === emotionalRecommendationsConst.Questionfive.questionTitle) {
        if (emotionalElement.answerText === 'Often' || emotionalElement.answerText === 'Always')
            createObj(emotionalRecommendationsConst.Questionfive.recommendationTitle, emotionalRecommendationsConst.Questionfive.recommendationArr, emotionalElement);
        else
            defaultObj(emotionalElement);
    }

}

function defaultObj(element) {
    const obj = {};
    obj = {
        recommendationTitle: 'Great Job',
        empId: element.empId,
        question: element.questionText,
        answer: element.answerText,
        recommendation: []
    }
    saveRecommendation(obj);
}

function createObj(recommendationTitle, recommendationArr, element) {
    const obj = {};
    obj = {
        recommendationTitle: recommendationTitle,
        empId: element.empId,
        question: element.questionText,
        answer: element.answerText,
        recommendation: recommendationArr
    }
    saveRecommendation(obj);
}

async function saveRecommendation(data) {
    try {
        const createDoc = new RecommendationsModel(data);
        console.log('saving recommendations...');
        await createDoc.save();
    } catch (error) {
        throw Error(error);
    }
}