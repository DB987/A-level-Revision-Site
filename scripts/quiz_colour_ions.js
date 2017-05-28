var questions = [
  ["Ti<sup>2+</sup>", "violet"],
  ["Ti<sup>3+</sup>", "purple"],
  ["V<sup>2+</sup>", "violet"],
  ["V<sup>3+</sup>", "green"],
  ["VO<sup>2+</sup>", "blue"],
  ["VO<sub>2</sub><sup>+</sup>", "yellow"],
  ["Cr<sup>3+</sup>", "green"],
  ["Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup>", "orange"],
  ["Mn<sup>2+</sup", "very pale pink"],
  ["MnO<sub>4</sub><sup>2-</sup>", "green"],
  ["MnO<sub>4</sub><sup>-</sup>", "purple"],
  ["Fe<sup>2+</sup>", "pale green"],
  ["Fe<sup>3+</sup>", "yellow"],
  ["Co<sup>2+</sup>", "pink"],
  ["Ni<sup>2+</sup>", "green"],
  ["Cu<sup>2+</sup>", "pale blue"],
];
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
  }
  submit.style.display = 'none';
  next.style.display = "block";
  number = number + 1;
}
function nextFunction() {
  entercheck = 0
  if (length === number) {
    results = "Well done you have finished. You achieved " + right + "/" + length + ".";
    question.style.display = "none";
    textbox.style.display = "none";
    submit.style.display = "none";
    next.style.display = "none";
    correct.style.color = "black";
    correct.innerHTML = results;
    back.style.display = "block";
    restart.style.display = "block";
  } else {
    question.innerHTML = questions[number][0];
    textbox.value = "";
    correct.innerHTML = "";
    submit.style.display = "block";
    next.style.display = "none";
  }
}
function backFunction() {
  location.href='ox_states_and_coloured_ions.html';
}
function restartFunction() {
  number = 0;
  right = 0;
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
