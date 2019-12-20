const QuestionAnswerSchema = require('../models/question-answer.model');
const ScoreSchema = require('../models/total-score-weightage.model');
const wellnessTextConst = require('../../constants/main.constants');
const response = require('../../utilities/reponse.utils');
const recommendation = require('../../utilities/recommendations.utils');

exports.createQuestionAnswer = (req, res, next) => {

    if (req.body instanceof Array) {
        let physicalScore = 0;
        let emotionalScore = 0;
        let socialScore = 0;
        let mentalScore = 0;
        let totalScore = 0;
        const empId = req.body[0].empId;
        const totalAttempt = req.body[0].totalAttempt;
        req.body.map(async (element, index) => {
            try {
                const createNew = new QuestionAnswerSchema(element);

                switch (element.wellnessType) {
                    case 'mental':
                        mentalScore = mentalScore + element.answerWeightage;
                        break;
                    case 'physical':
                        physicalScore = physicalScore + element.answerWeightage;
                        break;
                    case 'social':
                        socialScore = socialScore + element.answerWeightage;
                        break;
                    case 'emotional':
                        emotionalScore = emotionalScore + element.answerWeightage;
                        break;
                    default:
                        break;
                }
                recommendation.recommendations(element);
                await createNew.save();

                if (index === req.body.length - 1) {
                    totalScore = await totalScoreWeightage(totalScore, physicalScore, mentalScore, emotionalScore, socialScore, empId, totalAttempt);
                    const data = await QuestionAnswerSchema.find({ empId: empId });
                    response.GETSUCCESS(res, data);
                }
            } catch (error) {
                next(error);
            }
        });
    } else {
        throw Error('Array not found');
    }
}



exports.getAllQuestionAnswer = async (req, res, next) => {
    try {
        const getAllQA = await QuestionAnswerSchema.find();
        if (getAllQA.length > 0)
            response.GETSUCCESS(res, getAllQA);
        else
            throw Error('no record found');

    } catch (error) {
        next(error);
    }
}

exports.scoreWeightage = async (req, res, next) => {
    try {
        const data = await QuestionAnswerSchema.find({
            wellnessType: req.body.wellnessType,
            empId: req.body.empId
        }).select('wellnessType empId answerWeightage');

        if (data.length > 0)
            response.GETSUCCESS(res, data);
        else
            throw Error('no record found')

    } catch (error) {
        next(error);
    }
}

exports.scoreWeightageByEmpId = async (req, res, next) => {
    try {
        const data = await QuestionAnswerSchema.find({
            empId: req.params.id
        });

        if (data.length > 0)
            response.SUCCESS(res, data);
        else
            throw Error('no record found');

    } catch (error) {
        next(error);
    }
}

async function totalScoreWeightage(totalScore, physicalScore, mentalScore, emotionalScore, socialScore, empId, totalAttempt) {
    let totalWellnessText = '';
    let physicalWellnessText = '';
    let emotionalWellnessText = '';
    let socialWellnessText = '';
    let mentalWellnessText = '';

    physicalScore = physicalScore / 5;
    mentalScore = mentalScore / 5;
    emotionalScore = emotionalScore / 5;
    socialScore = socialScore / 5;

    totalScore = physicalScore + mentalScore + emotionalScore + socialScore;

    totalScore = totalScore / 4;

    if (totalScore > 0 && totalScore <= 25)
        totalWellnessText = wellnessTextConst.totalWellness.Fourth;
    if (totalScore > 25 && totalScore <= 50)
        totalWellnessText = wellnessTextConst.totalWellness.Third;
    if (totalScore > 50 && totalScore <= 75)
        totalWellnessText = wellnessTextConst.totalWellness.Second;
    if (totalScore > 75 && totalScore <= 100)
        totalWellnessText = wellnessTextConst.totalWellness.First;

    if (physicalScore > 0 && physicalScore <= 25)
        physicalWellnessText = wellnessTextConst.physicalWellness.Fourth;
    if (physicalScore > 25 && physicalScore <= 50)
        physicalWellnessText = wellnessTextConst.physicalWellness.Third;
    if (physicalScore > 50 && physicalScore <= 75)
        physicalWellnessText = wellnessTextConst.physicalWellness.Second;
    if (physicalScore > 75 && physicalScore <= 100)
        physicalWellnessText = wellnessTextConst.physicalWellness.First;

    if (emotionalScore > 0 && emotionalScore <= 25)
        emotionalWellnessText = wellnessTextConst.emotionalWellness.Fourth;
    if (emotionalScore > 25 && emotionalScore <= 50)
        emotionalWellnessText = wellnessTextConst.emotionalWellness.Third;
    if (emotionalScore > 50 && emotionalScore <= 75)
        emotionalWellnessText = wellnessTextConst.emotionalWellness.Second;
    if (emotionalScore > 75 && emotionalScore <= 100)
        emotionalWellnessText = wellnessTextConst.emotionalWellness.First;

    if (socialScore > 0 && socialScore <= 25)
        socialWellnessText = wellnessTextConst.socialWellness.Fourth;
    if (socialScore > 25 && socialScore <= 50)
        socialWellnessText = wellnessTextConst.socialWellness.Third;
    if (socialScore > 50 && socialScore <= 75)
        socialWellnessText = wellnessTextConst.socialWellness.Second;
    if (socialScore > 75 && socialScore <= 100)
        socialWellnessText = wellnessTextConst.socialWellness.First;

    if (mentalScore > 0 && mentalScore <= 25)
        mentalWellnessText = wellnessTextConst.mentalWellness.Fourth;
    if (mentalScore > 25 && mentalScore <= 50)
        mentalWellnessText = wellnessTextConst.mentalWellness.Third;
    if (mentalScore > 50 && mentalScore <= 75)
        mentalWellnessText = wellnessTextConst.mentalWellness.Second;
    if (mentalScore > 75 && mentalScore <= 100)
        mentalWellnessText = wellnessTextConst.mentalWellness.First;


    const addScore = new ScoreSchema({
        empId: empId,
        physicalScore: physicalScore,
        emotionalScore: emotionalScore,
        mentalScore: mentalScore,
        socialScore: socialScore,
        totalScore: totalScore,
        totalAttempt: totalAttempt,
        totalWellnessText: totalWellnessText,
        mentalWellnessText: mentalWellnessText,
        emotionalWellnessText: emotionalWellnessText,
        physicalWellnessText: physicalWellnessText,
        socialWellnessText: socialWellnessText
    });
    console.log('saving total-score-weightage...');
    await addScore.save();
    console.log('done');
    return totalScore;
}
