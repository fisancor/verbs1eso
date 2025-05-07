//=========================================
// File name: page_NNNNN.js
//-----------------------------------------
// Project : QuizFaber 4.0.20
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Script for NNNNN-th question
//=========================================

var allInitQuestionFunctions = new Array (
    InitQuestion1,
    InitQuestion2,
    InitQuestion3,
    InitQuestion4,
    InitQuestion5,
    InitQuestion6,
    InitQuestion7,
    InitQuestion8,
    InitQuestion9,
    InitQuestion10,
    InitQuestion11,
    InitQuestion12,
    InitQuestion13,
    InitQuestion14,
    InitQuestion15,
    InitQuestion16,
    InitQuestion17,
    InitQuestion18,
    InitQuestion19,
    InitQuestion20,
    InitQuestion21,
    InitQuestion22,
    InitQuestion23,
    InitQuestion24,
    InitQuestion25,
    InitQuestion26,
    InitQuestion27,
    InitQuestion28,
    InitQuestion29,
    InitQuestion30,
    InitQuestion31,
    InitQuestion32,
    InitQuestion33,
    InitQuestion34,
    InitQuestion35,
    InitQuestion36,
    InitQuestion37,
    InitQuestion38,
    InitQuestion39,
    InitQuestion40,
);



$(document).ready(function ()
{
	const questionIndex = 0;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	
});

$(window).on("beforeunload", function ()
{
	PageUnload();
});

$(window).on("scroll", function ()
{
	PageOnScroll();
});


/* Code generated function */
function InitQuestion1()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 0;
    var weight = DecodeNumber('/2jC3/z2+sU=', 67, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap1_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('wwoNgHf9ibY='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap1_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('SRO+jWwwBco='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap1_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('M1I4vgYPwxc='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion2()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 1;
    var weight = DecodeNumber('brjrKncBlDY=', 718, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap2_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('vsqDEZiWTjM='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap2_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('7cpj7B5GBqc='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap2_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('GLfYbK00PMo='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion3()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 2;
    var weight = DecodeNumber('NYUGYF9QYyI=', 728, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap3_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('sfjzBUs+B1U='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap3_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('XP1tFxM2fxc='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap3_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('tkiPXyhw7iw='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion4()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 3;
    var weight = DecodeNumber('WKYX7uMeV9k=', 738, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap4_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('j6+sDkE3qBo='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap4_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('6LARoJJCF9o='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap4_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('BTP56SQ6ymc='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion5()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 4;
    var weight = DecodeNumber('ARhbcny7COI=', 912, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap5_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('lTb38loAy5Q='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap5_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('bQWFBpbbIKs='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap5_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('kfuqqmL8MaQ='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion6()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 5;
    var weight = DecodeNumber('SrH+/nCjJfg=', 922, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap6_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Dg6X6WvSHm4='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap6_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('6rTruKnNg64='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap6_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('AsrF6rJyrrE='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion7()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 6;
    var weight = DecodeNumber('DFg1jTvWZ8A=', 932, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap7_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('eEy7vsZVMkQ='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap7_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('87MzLcP4O88='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap7_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('i1OfRLblRso='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion8()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 7;
    var weight = DecodeNumber('AZRcuJAA/6s=', 583, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap8_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('yJlZJM59lZ4='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap8_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('UkTTIOAW/G4='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap8_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('UkTTIOAW/G4='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion9()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 8;
    var weight = DecodeNumber('X8uO/4owr9o=', 593, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap9_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('S9x+LSnxjJU='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap9_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('RxOKG3HBpmY='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap9_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('nniTbpzyrIk='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion10()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 9;
    var weight = DecodeNumber('v34dMKJOnFU=', 603, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap10_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('eP5OoYgMMLA='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap10_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('ikORi6FB29I='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap10_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('qeDkuXztjMo='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion11()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 10;
    var weight = DecodeNumber('Dh9Bb1QdbY0=', 255, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap11_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('xLBtxzpr7B8='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap11_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('tAsNlQGn0qw='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap11_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('twcpa46BOro='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion12()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 11;
    var weight = DecodeNumber('ok6eOtS0ny0=', 265, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap12_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('KAz86ctg8Pg='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap12_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('DWhZMdyQ9Vk='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap12_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('sXHUlgmZDvU='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion13()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 12;
    var weight = DecodeNumber('i43WUlr+qKw=', 275, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap13_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('QyDIbVC2H30='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap13_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('OzQFnvbH0y8='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap13_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('OzQFnvbH0y8='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion14()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 13;
    var weight = DecodeNumber('MRP4BoaEJsk=', 285, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap14_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('sOasK59EhZk='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap14_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('60fttxVNT9o='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap14_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('60fttxVNT9o='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion15()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 14;
    var weight = DecodeNumber('56FpGs/K+YI=', 458, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap15_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('CLY+sIPe6Po='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap15_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('GRuFv/YJHeI='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap15_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('hAB1B5oT+Bc='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion16()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 15;
    var weight = DecodeNumber('lpxXRy6dRRY=', 468, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap16_0').val();
    valuation = new Array(2);
    valuation[0] = unescape(DecodeString('/CRmreofdPg='));
    valuation[1] = unescape(DecodeString('KhiLnJ/J6cQ='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap16_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('ONTE7VO6/tI='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap16_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('ONTE7VO6/tI='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion17()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 16;
    var weight = DecodeNumber('4nqNUQOd2VY=', 478, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap17_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('b57omMx8Htc='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap17_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('sehCCVXUHXw='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap17_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('sehCCVXUHXw='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion18()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 17;
    var weight = DecodeNumber('shZWtbUMNq0=', 1129, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap18_0').val();
    valuation = new Array(2);
    valuation[0] = unescape(DecodeString('XyoZ3mqy8o4='));
    valuation[1] = unescape(DecodeString('FWbHstWEusQ='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap18_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('+BiVuh0aZto='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap18_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('LxsQgo9ct1k='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion19()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 18;
    var weight = DecodeNumber('1eAHEdKQGJ8=', 1139, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap19_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('KA/4YztF4QI='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap19_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('ypUTpxYFK9A='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap19_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('rIs9+0JbChE='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion20()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 19;
    var weight = DecodeNumber('wTwpLeNS0g0=', 1149, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap20_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('QFn0cJaHbL4='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap20_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('M4dE7NbLFv4='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap20_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('M4dE7NbLFv4='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion21()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 20;
    var weight = DecodeNumber('SqxFlB3P13c=', 323, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap21_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('FGnziXBWcSo='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap21_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('hHMrHM6QD1U='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap21_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('u6HT16YCYmg='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion22()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 21;
    var weight = DecodeNumber('PT6qF9M0TT0=', 333, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap22_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('+ETuI/07e9k='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap22_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('cibAidVg9KA='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap22_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('LvZG81JFDK0='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion23()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 22;
    var weight = DecodeNumber('iqhKDe1FZ3E=', 343, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap23_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('qzWU3lUBeM8='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap23_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('LnaA0DBgA+Y='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap23_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('LnaA0DBgA+Y='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion24()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 23;
    var weight = DecodeNumber('OijAzZ171U8=', 994, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap24_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Z5O6OBx/c24='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap24_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('w45c+yV2S5s='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap24_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('PlApkHJMeFA='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion25()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 24;
    var weight = DecodeNumber('oy0EM1x0ry0=', 1004, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap25_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('g+1w9PgbueE='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap25_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('+AheB1nir4s='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap25_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('+AheB1nir4s='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion26()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 25;
    var weight = DecodeNumber('IhLg8Zo2z18=', 1014, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap26_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('pwyYilHaY3Q='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap26_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('HQMYF8yxDqk='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap26_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('3XVNEIPQMmo='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion27()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 26;
    var weight = DecodeNumber('u7IRaCF1sPQ=', 665, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap27_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Fcj3Sshk0d4='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap27_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('dqMToPD87U8='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap27_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('WELA8ufaX6Y='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion28()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 27;
    var weight = DecodeNumber('UDon9ysgQ6o=', 675, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap28_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('vM4NV44BH90='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap28_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('vM4NV44BH90='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap28_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('vM4NV44BH90='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion29()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 28;
    var weight = DecodeNumber('a5g0Ps6FmMY=', 685, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap29_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('C/2ImEaZD6o='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap29_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('WBhBeWh/b+E='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap29_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('wgoEyfU1uHg='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion30()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 29;
    var weight = DecodeNumber('tH0Tam2Kmmc=', 859, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap30_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('9iDaHjA8fAs='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap30_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('1D2rmAqoQuQ='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap30_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('1D2rmAqoQuQ='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion31()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 30;
    var weight = DecodeNumber('VOW1H5OmweY=', 869, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap31_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('6piSW7U/EBQ='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap31_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('BWr37zW45Ek='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap31_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Tq4n6d3Y1io='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion32()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 31;
    var weight = DecodeNumber('Tuh2cLAi8gs=', 879, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap32_0').val();
    valuation = new Array(2);
    valuation[0] = unescape(DecodeString('dsEX6A0hnhc='));
    valuation[1] = unescape(DecodeString('+bWdF9cFO3k='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap32_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('dQGvOUeFL/c='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap32_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('dQGvOUeFL/c='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion33()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 32;
    var weight = DecodeNumber('wRGaBQUkiT0=', 530, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap33_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('a+1TghKolcg='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap33_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('yo2L6Lb9MXo='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap33_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('yo2L6Lb9MXo='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion34()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 33;
    var weight = DecodeNumber('LBbjxVBISfY=', 540, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap34_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('DrXWdHKvMT4='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap34_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('SZt8oMghLSE='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap34_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('SZt8oMghLSE='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion35()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 34;
    var weight = DecodeNumber('z8Ox8fMWfKc=', 550, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap35_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('yTnLkr9wD20='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap35_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('08FiH6FsUhs='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap35_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('WpHtRu9pq7w='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion36()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 35;
    var weight = DecodeNumber('xFIRbmr9QZs=', 1201, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap36_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('H068rjZ970c='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap36_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('ed14eCVfQRs='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap36_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('ed14eCVfQRs='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion37()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 36;
    var weight = DecodeNumber('auUR/ULfGT0=', 1211, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap37_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('t2iQsTE5Vnc='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap37_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('FMU8FCjdPA4='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap37_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('FMU8FCjdPA4='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion38()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 37;
    var weight = DecodeNumber('KwcQV4PFl48=', 1221, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap38_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('ibMkWEQKN8I='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap38_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('qO1ZLUGIGu4='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap38_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('T7+WLBSiQQ4='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion39()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 38;
    var weight = DecodeNumber('KcKF7QIHI1o=', 395, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap39_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('99NKmOuz/nQ='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap39_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('22VkILQnAYo='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap39_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('22VkILQnAYo='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}
/* Code generated function */
function InitQuestion40()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 39;
    var weight = DecodeNumber('CgH8JjRjgPk=', 405, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap40_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('q/+LUGyKnKQ='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap40_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('vUSOCFjbWCs='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap40_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Az12jteGHPo='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}






