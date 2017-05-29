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
var questions = [
  ["Ti<sup>2+</sup>", "violet", "#EE82EE"],
  ["Ti<sup>3+</sup>", "purple", "#800080"],
  ["V<sup>2+</sup>", "violet", "#EE82EE"],
  ["V<sup>3+</sup>", "green","#008000"],
  ["VO<sup>2+</sup>", "blue", "#0000ff"],
  ["VO<sub>2</sub><sup>+</sup>", "yellow", "#ffff00"],
  ["Cr<sup>3+</sup>", "green", "#008000"],
  ["Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup>", "orange", "#FFA500"],
  ["Mn<sup>2+</sup>", "very pale pink", "#ffb6c1"],
  ["MnO<sub>4</sub><sup>2-</sup>", "green", "#008000"],
  ["MnO<sub>4</sub><sup>-</sup>", "purple", "#800080"],
  ["Fe<sup>2+</sup>", "pale green", "#98FB98"],
  ["Fe<sup>3+</sup>", "yellow", "#ffff00"],
  ["Co<sup>2+</sup>", "pink", "#FFC0CB"],
  ["Ni<sup>2+</sup>", "green", "#008000"],
  ["Cu<sup>2+</sup>", "pale blue", "#ADD8E6"],
];
questions = shuffle(questions);
var number = 0;
var question = document.getElementById('question');
var textbox = document.getElementById('answer');
var submit = document.getElementById('submit');
var next = document.getElementById('next');
var correct = document.getElementById('correct');
var back = document.getElementById('back');
var restart = document.getElementById('restart');
var colour = "";
var length = questions.length;
var right = 0;
var entercheck = 0;
var wrong = [];
var wrong_p = "";
next.style.display = "none";
back.style.display = "none";
restart.style.display = "none";
question.innerHTML = questions[number][0];
function submitFunction() {
  entercheck = 1;
  var x = textbox.value;
  if (x.toLowerCase() === questions[number][1].toLowerCase()) {
    correct.innerHTML = "Correct";
    correct.style.color = "green";
    right = right + 1;
  } else {
    correct.innerHTML = "Incorrect. The answer is " + questions[number][1];
    correct.style.color = "red";
    wrong.push(number);
  }
  question.style.setProperty('--element-color', questions[number][2]);
  submit.style.display = 'none';
  next.style.display = "block";
  number = number + 1;
}
function nextFunction() {
  entercheck = 0;
  if (length === number) {
    var i = 0;
    var wrong_answers_text = "";
    var wrong_length = wrong.length;
    if (wrong_length === 0) {
      wrong_p = "You got no questions wrong!";
    } else{
      for (i = 0; i < wrong_length; i++) {
        wrong_answers_text += questions[wrong[i]][0] + ": " + questions[wrong[i]][1] + "<br>";
      }
      wrong_p = "The questions you got wrong:";
    }
    results = "Well done you have finished. You achieved " + right + "/" + length + ".<br>" + wrong_p;
    textbox.style.display = "none";
    submit.style.display = "none";
    next.style.display = "none";
    correct.style.color = "black";
    question.style.setProperty('--element-color', "black");
    question.innerHTML = results;
    correct.style.setProperty('--element-size', "30px");
    correct.innerHTML = wrong_answers_text;
    back.style.display = "block";
    restart.style.display = "block";
  } else {
    question.innerHTML = questions[number][0];
    textbox.value = "";
    correct.innerHTML = "";
    submit.style.display = "block";
    next.style.display = "none";
    question.style.setProperty('--element-color', "black");
  }
}
function backFunction() {
  location.href='ox_states_and_coloured_ions.html';
}
function restartFunction() {
  number = 0;
  right = 0;
  questions = shuffle(questions);
  wrong = []
  correct.style.setProperty('--element-size', "40px");
  textbox.value = "";
  next.style.display = "none";
  back.style.display = "none";
  restart.style.display = "none";
  textbox.style.display = "block";
  submit.style.display = "block";
  correct.innerHTML = "";
  question.style.display = "block";
  question.innerHTML = questions[number][0];
}
textbox.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13 && entercheck === 0) {
      submitFunction();
    } else if (event.keyCode == 13 && entercheck === 1) {
      nextFunction();
    }
});
