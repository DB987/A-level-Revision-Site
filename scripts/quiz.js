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
  ["What do you add to test for transition metals?", "NaOH"],
  ["What colour ppt will Cu<sup>2+</sup> form?", "blue"],
  ["What colour ppt will Fe<sup>3+</sup> form?", "orange"],
  ["What colour ppt will Fe<sup>2+</sup> form?", "green"],
  ["What colour ppt will Cr<sup>3+</sup> form?", "grey-green"],
  ["What colour ppt will Mn<sup>2+</sup> form?", "pink"],
  ["What do you add to test for halides?", "nitric acid then silver nitrate"],
  ["What do you add to test for carbonates?", "dilute acid"],
  ["What is a postive result for carbonates?", "effervescence and limewater turning cloudy"],
  ["What do you add to test for sulfates?", "dilute strong acid then a few drops of barium nitrate solution"],
  ["What is a postive result for sulfates?", "white ppt"],
  ["What do you add to test for ammonium?", "add a few drops of sodium hydroxide and warm"],
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
    correct.style.setProperty('--element-size', "30px");
    question.innerHTML = results;
    correct.innerHTML = wrong_answers_text;
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
  location.href='chemistry.html';
}
function restartFunction() {
  number = 0;
  right = 0;
  questions = shuffle(questions);
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
