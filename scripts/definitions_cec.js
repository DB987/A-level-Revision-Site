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

var array_definitions = [
  ["Standard enthalpy change of a reaction ΔH<sub>r</sub>", "is the enthalpy change when a reaction occurs in the molar quantity show in the equation."],
  ["Standard enthalpy change of formation ΔH<sub>f</sub>", "is the enthalpy change when 1 mole of a compound is formed from its elements in their standard states."],
  ["Standard enthalpy change of combustion ΔH<sub>c</sub>", "is the enthalpy change when 1 mole of a substance is completely burnt in oxygen with reactant and products in their standard states."],
  ["Standard enthalpy change of neutralisation ΔH<sub>neut</sub>", "is the enthalpy change when solutions of an acid and alkali react together to form 1 mole of water."],
  ["Enthalpy change of atomisation of a element ΔH<sub>at</sub>", "is the enthalpy change when 1 mole of gaseous atoms is formed from an element."],
  ["Enthalpy change of atomisation of a compound ΔH<sub>at</sub>", "is the enthalpy change when 1 mole of a compound is converted to gaseous atoms."],
  ["Enthalpy change of hydration ΔH<sub>hyd</sub>", "is the enthalpy change when 1 mole of gaseous ions dissolve in water."],
  ["Enthalpy change of solution ΔH<sub>sol</sub>", "is the enthalpy change when 1 mole of solute is dissolved in solvent."],
];

var word = document.getElementById('word');
var definition = document.getElementById('definition');
var next_button = document.getElementById('next');
var back_button = document.getElementById('back');
var restart_button = document.getElementById('restart');
var show_button = document.getElementById('show');
var hide_button = document.getElementById('hide');
var number = 0;

function endFunction(){
  word.innerHTML =  "Finished";
  definition.innerHTML = "";
  next_button.style.display = "none";
  back_button.style.display = "block";
  restart_button.style.display = "block";
  hide_button.style.display = "none";
}

function backFunction() {
  location.href='definitions_chemistry.html';
}

function showFunction(){
  definition.innerHTML = array_definitions[number][1];
  next_button.style.display = "block";
  hide_button.style.display = "block";
  show_button.style.display = "none";
}

function hideFunction(){
  definition.innerHTML = "";
  hide_button.style.display = "none";
  next_button.style.display = "none";
  show_button.style.display = "block";
}

function nextFunction() {
  number += 1;
  if (array_definitions.length === number){
    endFunction();
  }else{
    word.innerHTML = array_definitions[number][0];
    definition.innerHTML = array_definitions[number][1];
  }
}

function restartFunction() {
  number = 0;
  shuffle(array_definitions);
  back_button.style.display = "none";
  restart_button.style.display = "none";
  next_button.style.display = "block";
  word.innerHTML = array_definitions[number][0];
  definition.innerHTML = array_definitions[number][1];
  hide_button.style.display = "block";
}

shuffle(array_definitions);
word.innerHTML = array_definitions[number][0];
definition.innerHTML = array_definitions[number][1];
back_button.style.display = "none";
restart_button.style.display = "none";
show_button.style.display = "none";
