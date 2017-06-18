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
  ["Acylation", "When an acyl group (-COR) is added to a molecule."],
  ["Alkylation", "When an alkyl group is added to a molecule."],
  ["Brady’s Reagent", "DNPH dissolved in methanol and conc sulfuric acid. Positive results for aldehydes and ketones which is a bright orange ppt forming."],
  ["Tollen’s Reagent", "Aldehydes can be oxidised which produces electrons which forms a silver mirror. Ketones can’t be oxidised."],
  ["Electron Withdrawing Groups", "NO<sub>2</sub>  5, 3"],
  ["Electron Donating Groups", "OH, NH<sub>2</sub> 2, 4, 6"],
  ["Hydrolysis", "Is when a substance is split up by water."],
  ["Condensation Polymers", "Each time a link is formed a small molecule is lost (often water)."],
  ["Addition", "Two molecules join together to form a single product. Involves breaking a double bond."],
  ["Elimination/Dehydration", "Involves removing a functional group which is released as part of a small molecule. Often, a double bond is formed. In dehydration, water is lost."],
  ["Substitution", "A Functional group is swapped for a new one."],
  ["Condensation", "Two molecules are joined together with the loss of a small molecule."],
  ["Hydrolysis", "Water is used to split apart a molecule, creating two smaller ones."],
  ["Oxidation", "Oxidation is the loss of electrons. In organic chemistry, it usually means gaining an oxygen atom or losing a hydrogen atom."],
  ["Reduction", "Reduction is the gain of electrons. In organic chemistry, it usually means gaining a hydrogen atom or losing an oxygen atom."],
  ["Electrophilic Addition", "Attacked by electrophiles (electron pair acceptors)."],
  ["Markownikoff's Rule", "The amount of each product formed depends on how stable the carbocation formed in the middle of the reaction."],
  ["E/Z Isomerism", "Same structural formula but different arrangement in space."],
  ["Heterolytic Fission", "The bond breaks unevenly with one of the bonded atoms receiving both electrons from the bonded pair."],
  ["Homolytic Fission", "The bond breaks evenly and each bonding atom receives one electron from the bonded pair."],
  ["Radicals", "Are particles that have an unpaired electron."],
  ["Aromatic Compounds", "Contains a benzene ring."],
  ["Aliphatic Compounds", "Doesn't contain a benzene ring."],
  ["Alicyclic Compounds", " Contains a non-aromatic ring."],
  ["Alkyl Groups", "A branched hydrocarbon chain."],
  ["Homologous Series", "A family of organic compounds that have the same general formula and similar chemical properties."],
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
