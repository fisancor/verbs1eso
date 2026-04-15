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
    var weight = DecodeNumber('y8nUFRpSfvs=', 37, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap1_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('CBqS4mjpu4w='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap1_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('KONCGzYiUXc='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap1_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('O52xrq3NcWk='));
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
    var weight = DecodeNumber('NBFEhEwpJAI=', 405, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap2_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('os2VK2wCI0U='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap2_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('6YMKp6DUFIc='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap2_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('VjmK3PltcvA='));
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
    var weight = DecodeNumber('1tx0MSCWEvg=', 415, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap3_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('WZQYI+3LFJY='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap3_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('8YW0xVmJcq0='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap3_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('6oqixrJQCJI='));
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
    var weight = DecodeNumber('ehKlhoftmeg=', 262, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap4_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('InFoR6GplGY='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap4_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('+h10W7YR8/g='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap4_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('4fvdGyjllZA='));
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
    var weight = DecodeNumber('dQHPFWuRP2Y=', 272, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap5_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('HDgGGqLLsLw='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap5_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('J0bmxpUDr7A='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap5_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('e2O/jg02kxY='));
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
    var weight = DecodeNumber('ey2Zluz7Cig=', 282, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap6_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('shh5wh/XI3U='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap6_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('OMmeYaPea7k='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap6_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('5qH56CivbBE='));
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
    var weight = DecodeNumber('KUOKAgYzoi0=', 651, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap7_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('tb6xszfcK+8='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap7_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Kdeyw98TM8c='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap7_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('70YbYzhO/Ns='));
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
    var weight = DecodeNumber('HHQlgroWs9w=', 661, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap8_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('WiQI5FgrFZE='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap8_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('c9ybsja060g='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap8_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('c9ybsja060g='));
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
    var weight = DecodeNumber('X9os09Jczk8=', 671, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap9_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('MuDq9xdOQt4='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap9_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('URkV9HaPmjY='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap9_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('sz3tRZ/Xx+k='));
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
    var weight = DecodeNumber('RBTBjEgSTm0=', 681, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap10_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('I/rnHnp0rhs='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap10_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('ugOH7IVk7IM='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap10_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('qz9IF8VSuDk='));
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
    var weight = DecodeNumber('+9R9Oxk75OA=', 1049, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap11_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('ZKhqJ4VYuMU='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap11_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('5V5h2jnG7BI='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap11_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('J6anpMS52F4='));
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
    var weight = DecodeNumber('FZE8TfXWj1k=', 1059, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap12_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('vnYasP04Duk='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap12_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('+Lh+q+X4yxQ='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap12_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('TcU3fwwZ0CM='));
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
    var weight = DecodeNumber('D1TJH8o6yyA=', 1069, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap13_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('rHNPvJkqIjY='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap13_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('+iXhQ8ovY2o='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap13_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('+iXhQ8ovY2o='));
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
    var weight = DecodeNumber('TkYMAqW59yw=', 916, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap14_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('qFq9hZlVxlg='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap14_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('k7yDa4XhuFw='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap14_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('k7yDa4XhuFw='));
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
    var weight = DecodeNumber('icFlhhK+LZo=', 926, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap15_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('sj3pvlm3nmU='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap15_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Yv0CwLoyeq8='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap15_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('/TY8Y3ytrIc='));
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
    var weight = DecodeNumber('6ibD9XDWIiM=', 936, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap16_0').val();
    valuation = new Array(2);
    valuation[0] = unescape(DecodeString('riVAiRdoLn0='));
    valuation[1] = unescape(DecodeString('VeQyv3bv2tk='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap16_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('HSjfxeWwz6c='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap16_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('HSjfxeWwz6c='));
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
    var weight = DecodeNumber('J8FJHXLZ87M=', 946, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap17_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('UqLJm77DuK0='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap17_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('X7hE6VtWuSM='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap17_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('X7hE6VtWuSM='));
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
    var weight = DecodeNumber('ZeweS+YocOw=', 315, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap18_0').val();
    valuation = new Array(2);
    valuation[0] = unescape(DecodeString('iznhLYPCcXw='));
    valuation[1] = unescape(DecodeString('wepNNKAzltk='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap18_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('vsATS/DLEp4='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap18_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('GBwNTRUtV2M='));
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
    var weight = DecodeNumber('WMOisKMITJQ=', 325, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap19_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('oRKKnv0POzk='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap19_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('trGA/HOuy2c='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap19_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('QvhrmcTd37g='));
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
    var weight = DecodeNumber('Bzpj8uKDE/k=', 335, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap20_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('IVxrbh17Jr0='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap20_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('1hq02bZ9opc='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap20_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('1hq02bZ9opc='));
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
    var weight = DecodeNumber('k+j+JbvSf38=', 703, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap21_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('CV9Jj4YGuCI='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap21_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Uo3lEdGSgN0='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap21_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('bFsEwMq0IwY='));
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
    var weight = DecodeNumber('SIm60eBNK/8=', 713, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap22_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('FiWjHpDvq1I='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap22_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('yeRLJNj7qDo='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap22_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('mAiBG8bz28E='));
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
    var weight = DecodeNumber('Epr3zWE5dAY=', 723, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap23_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('kkXFsdSed1M='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap23_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('g3q9GIDIx3E='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap23_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('g3q9GIDIx3E='));
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
    var weight = DecodeNumber('g3hOPGyz5qg=', 570, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap24_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('7ojPYnYBwvw='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap24_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('xqap9k07psA='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap24_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('TsR91dj5Gys='));
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
    var weight = DecodeNumber('i5gQdXWgi2E=', 580, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap25_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('UTWIrRK6nhw='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap25_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('WnO+KRjMQ74='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap25_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('WnO+KRjMQ74='));
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
    var weight = DecodeNumber('6UzVujEPJcE=', 949, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap26_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('D+Zb84y03LA='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap26_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('vPrV7DwQH1w='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap26_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('NMq1xefq24o='));
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
    var weight = DecodeNumber('gvuucPVrEAA=', 959, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap27_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('oVzUvWgodKg='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap27_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('WueX1aVe2lo='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap27_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('hhBcyy8UA8o='));
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
    var weight = DecodeNumber('09RhwoE7RUM=', 969, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap28_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('/Ur9ieM2e40='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap28_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('/Ur9ieM2e40='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap28_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('/Ur9ieM2e40='));
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
    var weight = DecodeNumber('XKbW41yNMjw=', 815, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap29_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('cQmbIrpGcWs='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap29_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('LEnHa2TtaXA='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap29_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('FhKET477a3g='));
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
    var weight = DecodeNumber('/sjoDBomer0=', 825, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap30_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('7FR78VVtEa8='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap30_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Uw/x4ESHeDs='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap30_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Uw/x4ESHeDs='));
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
    var weight = DecodeNumber('zfLdh953EN0=', 835, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap31_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('7dw73i8LMBE='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap31_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('W5gA1txnoXo='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap31_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('e4wS7WX7r3k='));
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
    var weight = DecodeNumber('R+M93e8bFzU=', 845, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap32_0').val();
    valuation = new Array(2);
    valuation[0] = unescape(DecodeString('AXCyeO+FhVk='));
    valuation[1] = unescape(DecodeString('mDeHlGfrnyE='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap32_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('HmHhLX7Xs+I='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap32_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('HmHhLX7Xs+I='));
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
    var weight = DecodeNumber('iQcJfxSJ/L0=', 1214, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap33_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('0thW9XIXLqg='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap33_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('hUSJJqkda+c='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap33_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('hUSJJqkda+c='));
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
    var weight = DecodeNumber('Yzfol6Y3gDY=', 1224, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap34_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('DHmCdVjNc7A='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap34_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('sf7qcPjxrpo='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap34_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('sf7qcPjxrpo='));
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
    var weight = DecodeNumber('KfrRR+tj/PY=', 1234, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap35_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('4HdzlByhobc='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap35_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('U/yyPCGJmkQ='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap35_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('60Ha5J5EULM='));
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
    var weight = DecodeNumber('HASg1gI4J9A=', 603, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap36_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('XWjZRVWo01o='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap36_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('0YMKV8mGB+E='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap36_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('0YMKV8mGB+E='));
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
    var weight = DecodeNumber('lKIPS6ViNPs=', 613, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap37_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('1TyVew2rnNU='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap37_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('ZfOSj43h0bc='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap37_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('ZfOSj43h0bc='));
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
    var weight = DecodeNumber('Oma+EhfKYGE=', 623, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap38_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('ygRQsaxUMz8='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap38_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('o59OSaxGU9o='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap38_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('6gQ5+ZBmCOU='));
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
    var weight = DecodeNumber('ZCutqsxv8+Q=', 633, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap39_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('6hO6Y/jJCwI='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap39_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('QxAY4tIgPh8='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap39_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('QxAY4tIgPh8='));
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
    var weight = DecodeNumber('ccO1S/kre/U=', 479, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap40_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('pFGDtoTNEdQ='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap40_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('P48IXNXGMQc='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    choice = $('#idGap40_2').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('QmE8hdyASfo='));
    var answer2 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer2);
    return question;

}






