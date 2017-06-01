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

var correct_p = document.getElementById('correct');
var question = document.getElementById('question');
var button_sub = document.getElementById('bs');
var button_next = document.getElementById('bn');
var button_rest = document.getElementById('br');
var button_back = document.getElementById('bb');
var image = document.getElementById('r1c2');
var input_r1c1 = document.getElementById('r1c1');
var input_r1c3 = document.getElementById('r1c3');
var input_r2c1 = document.getElementById('r2c1');
var input_r2c3 = document.getElementById('r2c3');
var input_r3c1 = document.getElementById('r3c1');
var input_r3c3 = document.getElementById('r3c3');
var beta_image = "images/particle_interactions_images/beta.png";
var electron_image = "images/particle_interactions_images/electron.png";
var number_correct = 0;
var number = 0;
var type = "";
var array_questions = [
  [beta_image, "Beta-minus Decay", "p", "e-", "W- >", "anti Ve", "n", ""], //Beta-minus Decay
  [beta_image, "Beta-plus Decay", "n", "e+", "W+ >", "Ve", "p", ""],
  [electron_image, "Electron Proton Collisions", "n", "Ve", "W+ >", "", "p", "e-"],
  [electron_image, "Electron Capture", "n", "Ve", "W+ <", "", "p", "e-"]
];
var array_wrong = [];

function clear () {
  input_r1c1.value = "";
  input_r1c3.value = "";
  input_r2c1.value = "";
  input_r2c3.value = "";
  input_r3c1.value = "";
  input_r3c3.value = "";
}

function beta(){
  input_r1c1.style.display = "block";
  input_r1c3.style.display = "block";
  input_r2c1.style.display = "block";
  input_r2c3.style.display = "block";
  input_r3c1.style.display = "block";
  input_r3c3.style.display = "none";
}

function electron(){
  input_r1c1.style.display = "block";
  input_r1c3.style.display = "block";
  input_r2c1.style.display = "block";
  input_r2c3.style.display = "none";
  input_r3c1.style.display = "block";
  input_r3c3.style.display = "block";
}

function selector(type){
  if (type === beta_image){
    beta();
  }else{
    electron();
  }
}

function check(){
  array_wrong = []
  if (input_r1c1.value != array_questions[number][2]){
    array_wrong.push(array_questions[number][2])
  }else{
    array_wrong.push('')
  }
  if (input_r1c3.value != array_questions[number][3]){
    array_wrong.push(array_questions[number][3])
  }else{
    array_wrong.push('')
  }
  if (input_r2c1.value != array_questions[number][4]){
    array_wrong.push(array_questions[number][4])
  }else{
    array_wrong.push('')
  }
  if (input_r2c3.value != array_questions[number][5]){
    array_wrong.push(array_questions[number][5])
  }else{
    array_wrong.push('')
  }
  if (input_r3c1.value != array_questions[number][6]){
    array_wrong.push(array_questions[number][6])
  }else{
    array_wrong.push('')
  }
  if (input_r3c3.value != array_questions[number][7]){
    array_wrong.push(array_questions[number][7])
  }else{
    array_wrong.push('')
  }
  var i;
  var n = 0;
  var text_cp = "";
  console.log(array_wrong)
  for (i=0; i < array_wrong.length; i++){
    if (array_wrong[i] != ""){
      n = i + 1;
      text_cp += "<b>" + n + "</b>: " + array_wrong[i] + "&nbsp;&nbsp;&nbsp;";
    }
  }
  correct_p.style.color = "red";
  if (n ===0){
    number_correct += 1;
    text_cp = "Correct"
    correct_p.style.color = "green";
  }
  correct_p.innerHTML = text_cp;
  correct_p.style.display = "block";
}

function end(){
  button_sub.style.display = "none";
  button_next.style.display = "none";
  input_r1c1.style.display = "none";
  input_r1c3.style.display = "none";
  input_r2c1.style.display = "none";
  input_r2c3.style.display = "none";
  input_r3c1.style.display = "none";
  input_r3c3.style.display = "none";
  correct_p.style.display = "none";
  image.style.display = "none";
  question.style.display = "none";
  correct_p.style.display = "block";
  button_rest.style.display = "block";
  button_back.style.display = "block";
  correct_p.style.color = "black";
  correct_p.innerHTML = "Well done you have finished you achieved " + number_correct + "/" + array_questions.length;
}

function submit(){
  button_sub.style.display = "none";
  button_next.style.display = "block";
  check();
  number += 1
}

function next(){
  clear()
  correct_p.innerHTML = "";
  if (number === array_questions.length){
    end()
  }else{
    question.innerHTML = array_questions[number][1];
    image.src=array_questions[number][0];
    selector(array_questions[number][0]);
    button_sub.style.display = "block";
    button_next.style.display = "none";
  }
}

function restart(){
  array_questions = shuffle(array_questions);
  button_next.style.display = "none";
  button_back.style.display = "none";
  button_rest.style.display = "none";
  image.style.display = "block";
  button_sub.style.display = "block";
  question.style.display = "block";
  correct_p.innerHTML = "";
  question.innerHTML = array_questions[0][1];
  image.src=array_questions[0][0];
  selector(array_questions[0][0]);
  number_correct = 0
  number = 0
}

function back(){
  location.href='physics.html';
}

array_questions = shuffle(array_questions);
button_next.style.display = "none";
button_back.style.display = "none";
button_rest.style.display = "none";
clear();
question.innerHTML = array_questions[0][1];
image.src=array_questions[0][0];
selector(array_questions[0][0]);
