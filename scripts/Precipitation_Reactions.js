function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

var array_questions = [
  ["Copper (II) pale blue solution", "[Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup><sub>(aq)</sub> + 2OH<sup>-</sup><sub>(aq)</sub> → BLANK + 2H<sub>2</sub>O<sub>(l)</sub>", "Cu(OH)2(H2O)4(s) blue ppt"],
  ["Copper (II) pale blue solution", "[Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup><sub>(aq)</sub> + 2NH<sub>3(aq)</sub> → BLANK + 2NH<sub>4</sub><sup>+</sup><sub>(aq)</sub>", "Cu(OH)2(H2O)4(s) blue ppt"],
  ["Manganese (II) pale pink solution", "[Mn(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup><sub>(aq)</sub> + 2OH<sup>-</sup><sub>(aq)</sub> → BLANK + 2H<sub>2</sub>O<sub>(l)</sub>", "Mn(OH)2(H2O)4(s) pink ppt"],
  ["Manganese (II) pale pink solution", "[Mn(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup><sub>(aq)</sub> + 2NH<sub>3(aq)</sub> → BLANK + 2NH<sub>4</sub><sup>+</sup><sub>(aq)</sub>", "Mn(OH)2(H2O)4(s) pink ppt"],
  ["Iron (III) yellow solution", "[Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup><sub>(aq)</sub> + 3OH<sup>-</sup><sub>(aq)</sub> → BLANK + 3H<sub>2</sub>O<sub>(l)</sub>", "Fe(OH)3(H2O)3(s) orange ppt"],
  ["Iron (III) yellow solution", "[Fe(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup><sub>(aq)</sub> + 3NH<sub>3(aq)</sub> → BLANK + 3NH<sub>4</sub><sup>+</sup><sub>(aq)</sub>", "Fe(OH)3(H2O)3(s) orange ppt"],
  ["Chromium (III) green solution", "[Cr(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + 3OH<sup>-</sup><sub>(aq)</sub> → BLANK + 3H<sub>2</sub>O<sub>(l)</sub>", "Cr(OH)3(H2O)3(s) grey-green ppt"],
  ["Chromium (III) green solution", "[Cr(H<sub>2</sub>O)<sub>6</sub>]<sup>3+</sup> + 3NH<sub>3(aq)</sub> → BLANK + 3NH<sub>4</sub><sup>+</sup><sub>(aq)</sub>", "Cr(OH)3(H2O)3(s) grey-green ppt"],
];

var question = document.getElementById('question');
var textbox = document.getElementById('answer');
var submit = document.getElementById('submit');
var next = document.getElementById('next');
var correct = document.getElementById('correct');
var back = document.getElementById('back');
var restart = document.getElementById('restart');
var title = document.getElementById('title');
var entercheck = 0;
var colour = "";
var wrong = [];
var wrong_p = "";
var right = 0;
var number = 0;

function check(){
  if (array_questions[number][2].toLowerCase() === textbox.value.toLowerCase()){
    correct.innerHTML = "Correct";
    correct.style.color = "green";
    right = right + 1;
  }else{
    correct.innerHTML = "Incorrect. The answer is " + array_questions[number][2];
    correct.style.color = "red";
    wrong.push(number);
  }
}

function end(){
  var i = 0;
  var wrong_answers_text = "";
  var wrong_length = wrong.length;
  if (wrong_length === 0) {
    wrong_p = "You got no questions wrong!";
  } else{
    for (i = 0; i < wrong_length; i++) {
      wrong_answers_text += array_questions[wrong[i]][1] + ": &nbsp;&nbsp;&nbsp;&nbsp;" + array_questions[wrong[i]][2] + "<br>";
    }
    wrong_p = "The questions you got wrong:";
  }
  results = "Well done you have finished.<br>You achieved " + right + "/" + length + ".<br>" + wrong_p;
  textbox.style.display = "none";
  submit.style.display = "none";
  next.style.display = "none";
  correct.style.color = "black";
  correct.style.setProperty('--element-size', "30px");
  question.innerHTML = results;
  correct.innerHTML = wrong_answers_text;
  back.style.display = "block";
  restart.style.display = "block";
  title.innerHTML = "";
}

function submitFunction(){
  entercheck = 1;
  check();
  submit.style.display = "none";
  next.style.display = "block";
  number = number + 1;
}

function nextFunction(){
  entercheck = 0;
  if (array_questions.length === number){
    end()
  }else{
    question.innerHTML = array_questions[number][1];
    title.innerHTML = array_questions[number][0];
    textbox.value = "";
    correct.innerHTML = "";
    submit.style.display = "block";
    next.style.display = "none";
  }
}

function backFunction(){
  location.href='chemistry.html';
}
function restartFunction(){
  number = 0;
  right = 0;
  array_questions = shuffle(array_questions);
  wrong = [];
  textbox.value = "";
  correct.style.setProperty('--element-size', "40px");
  next.style.display = "none";
  back.style.display = "none";
  restart.style.display = "none";
  textbox.style.display = "block";
  submit.style.display = "block";
  correct.innerHTML = "";
  question.style.display = "block";
  question.innerHTML = array_questions[number][1];
  title.innerHTML = array_questions[number][0];
}

textbox.addEventListener("keyup", function(event) {
   event.preventDefault();
   if (event.keyCode == 13 && entercheck === 0) {
     submitFunction();
   } else if (event.keyCode == 13 && entercheck === 1) {
     nextFunction();
   }
});

array_questions = shuffle(array_questions);
next.style.display = "none";
back.style.display = "none";
restart.style.display = "none";
question.innerHTML = array_questions[number][1];
title.innerHTML = array_questions[number][0];
