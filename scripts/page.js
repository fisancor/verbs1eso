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
    var weight = DecodeNumber('VK+ITrFKYoQ=', 575, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap1_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('5KjCa3PeuU4='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap1_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('C7NZK+zeMBQ='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap1_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('iXfoJQlY2Ak='));
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
    var weight = DecodeNumber('RVMf5QaGJzI=', 226, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap2_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('UVRFCmDQmRI='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap2_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('EfMuyQzSD/8='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap2_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Ng6ZQ+poejc='));
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
    var weight = DecodeNumber('a6huKMJEq9o=', 236, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap3_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('pvzIq6mdGJ8='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap3_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('FCH7qywLmpg='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap3_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('wfzZ47T7w4s='));
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
    var weight = DecodeNumber('RKR8Lyv7GKA=', 246, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap4_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('26KaKT2dEJU='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap4_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('1yY3xG0AyPY='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap4_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('TNVH7BYi5+s='));
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
    var weight = DecodeNumber('yEWVEkin2qA=', 420, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap5_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('urzuEIwnwfo='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap5_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('2uNmZCS54X8='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap5_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('MMyFkp4hiME='));
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
    var weight = DecodeNumber('CAzmWKsLgJw=', 430, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap6_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('h5Yxo+HKjGU='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap6_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('wkBe/4bwDm0='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap6_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('sb+9wrg/vQ0='));
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
    var weight = DecodeNumber('EHRbJUpj/oM=', 440, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap7_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('ap/uVyaeuvs='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap7_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('7goZlVDy/qA='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap7_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('xmveD7bRVYU='));
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
    var weight = DecodeNumber('srNe0hnjqHY=', 91, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap8_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('HFmgLIoht60='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap8_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('hskKUeimLvk='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap8_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('hskKUeimLvk='));
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
    var weight = DecodeNumber('SLQgYA18RBk=', 101, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap9_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('yVzZEWHq6Zs='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap9_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('PIoMV1/TYNo='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap9_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('6iApOeQbH74='));
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
    var weight = DecodeNumber('TJUkYfQvOCM=', 111, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap10_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('6uu/WjbS+uQ='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap10_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('/jt8znpK5b4='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap10_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('2cG1lJdrpUU='));
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
    var weight = DecodeNumber('nukAghDmR3Q=', 762, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap11_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('WpsUL63r9As='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap11_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('KM3wM9/K9JY='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap11_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('W9reDWXKeRo='));
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
    var weight = DecodeNumber('ErH7odly1rY=', 772, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap12_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('hTnm9+IAf5A='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap12_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('L5Aw7IDzLUE='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap12_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('H+bDpLB2Yac='));
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
    var weight = DecodeNumber('MDdO6M4kyiA=', 782, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap13_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('v4Pad6I0DBw='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap13_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('SkIr5DFhiRE='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap13_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('SkIr5DFhiRE='));
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
    var weight = DecodeNumber('ejV5sAZvS/0=', 956, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap14_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('CIx7ZP8LxGU='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap14_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('XX+WkLCxHck='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap14_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('XX+WkLCxHck='));
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
    var weight = DecodeNumber('X2Iel1xVYms=', 966, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap15_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('30qqj+BYSyk='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap15_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('XFgRnKgTEQI='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap15_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Vob5HfLHc5g='));
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
    var weight = DecodeNumber('2pCRH7aNW0k=', 976, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap16_0').val();
    valuation = new Array(2);
    valuation[0] = unescape(DecodeString('UIUZFE/x87w='));
    valuation[1] = unescape(DecodeString('tRKpL+TM3SE='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap16_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('X7zRatsZvzA='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap16_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('X7zRatsZvzA='));
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
    var weight = DecodeNumber('6QMToydpQ+I=', 627, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap17_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('CVezB7aw9BU='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap17_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('G6UtXX1if7o='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap17_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('G6UtXX1if7o='));
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
    var weight = DecodeNumber('FjlxC1paiSI=', 637, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap18_0').val();
    valuation = new Array(2);
    valuation[0] = unescape(DecodeString('GOqQrnqgjO8='));
    valuation[1] = unescape(DecodeString('/7ShvDhV7aE='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap18_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('0x/b0fZlegQ='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap18_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('qSvKNYNq874='));
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
    var weight = DecodeNumber('LUCLgu6k1FE=', 647, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap19_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('prpM0M3eLd0='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap19_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('+g7qmHLlTWU='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap19_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('AihP/dGOCfY='));
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
    var weight = DecodeNumber('z0QEfa4fEPM=', 657, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap20_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('0DMs89j6nfQ='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap20_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('+y8n2arYAus='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap20_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('+y8n2arYAus='));
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
    var weight = DecodeNumber('5Yu7ZnIKwLA=', 831, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap21_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('bZn6HWYsVUs='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap21_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('9JRsrEwN5Js='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap21_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('oHJaCtI5tvM='));
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
    var weight = DecodeNumber('PXdBrFi+SIc=', 841, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap22_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('7SM/FBbj7xw='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap22_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('MbDK4WJzb04='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap22_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('tvHsLJ3vppo='));
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
    var weight = DecodeNumber('XkQfvBX65XQ=', 851, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap23_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('5sYbr/I+mt4='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap23_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('xX05lx+4DzE='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap23_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('xX05lx+4DzE='));
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
    var weight = DecodeNumber('qFFPdzAbo9I=', 502, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap24_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('JUSJDnz1T20='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap24_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('y07vQUyuqLU='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap24_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('HVd+1lZj2mg='));
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
    var weight = DecodeNumber('rdRvnw81pkI=', 512, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap25_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('INGBMKczvHY='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap25_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('7xds7x+NtxM='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap25_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('7xds7x+NtxM='));
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
    var weight = DecodeNumber('flQXfw3s/HE=', 522, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap26_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('f0nrdR3492Q='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap26_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('9a8z1dKiKKY='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap26_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('GQCDynFbnkM='));
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
    var weight = DecodeNumber('rM7DoRNyQms=', 1173, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap27_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('r3G/vG/m2uA='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap27_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('p0/LVCFaoWg='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap27_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('iGJ9OD4+CBg='));
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
    var weight = DecodeNumber('vTrtK+JDEWE=', 1183, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap28_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('mu6nV0Pfil4='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap28_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('mu6nV0Pfil4='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap28_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('mu6nV0Pfil4='));
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
    var weight = DecodeNumber('Jy40ihLdlsA=', 1193, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap29_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('D7p3380P7U0='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap29_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Qk2R22551zQ='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap29_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('C+hO8XATTvg='));
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
    var weight = DecodeNumber('w3DdVz+tloA=', 367, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap30_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('OrH6AAxOSxU='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap30_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('3yVuljE/KEg='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap30_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('3yVuljE/KEg='));
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
    var weight = DecodeNumber('crOgBfaiFOQ=', 377, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap31_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('kB+wzITgEfk='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap31_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Ul6cwXoBQ4U='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap31_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('tY4iwRr+ZUQ='));
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
    var weight = DecodeNumber('D8bs51hTAAk=', 387, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap32_0').val();
    valuation = new Array(2);
    valuation[0] = unescape(DecodeString('12d69O50rmE='));
    valuation[1] = unescape(DecodeString('/Rq8p8neCY8='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap32_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('AtHePKbGRoA='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap32_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('AtHePKbGRoA='));
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
    var weight = DecodeNumber('8N0EX/x/Sb4=', 1038, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap33_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('5MV+uqdfZN8='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap33_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('4Oqk8RlriOA='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap33_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('4Oqk8RlriOA='));
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
    var weight = DecodeNumber('jAFTIWi9wBY=', 1048, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap34_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('yQFFPhwuVRQ='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap34_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('+eGd2ZcDA/o='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap34_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('+eGd2ZcDA/o='));
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
    var weight = DecodeNumber('tb1u07bkfkw=', 1058, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap35_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('db9OQnEZlP0='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap35_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('RLjt3qa/1O4='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap35_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('DqpeE4nyRsA='));
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
    var weight = DecodeNumber('oxiggkhRuOc=', 709, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap36_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('idbZG0B/HZQ='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap36_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('B2lDGj/9Zrs='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap36_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('B2lDGj/9Zrs='));
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
    var weight = DecodeNumber('Ru7XDaQZSq8=', 719, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap37_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('DbPrH2DV+j8='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap37_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('nE2RiUhVr+E='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap37_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('nE2RiUhVr+E='));
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
    var weight = DecodeNumber('hM/O0E2fwfo=', 729, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap38_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('zgsZwlOif5k='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap38_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('klYsAxk4qh8='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap38_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('6WQxfjGkOx8='));
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
    var weight = DecodeNumber('XwI0Kz+/Cvw=', 903, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap39_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('0B9xhwY6U2E='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap39_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('riyKCdd3R58='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap39_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('riyKCdd3R58='));
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
    var weight = DecodeNumber('xOXAxYoRPyg=', 913, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap40_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('ZYNHk6vpb98='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap40_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('ckgE2727n40='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap40_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('1CkrJRGjs60='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}






