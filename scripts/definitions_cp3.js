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
  ["Water of crystallisation", "water in a lattice"],
  ["Ionic bond", "is an electrostatic attraction between two oppositely charge ions"],
  ["Covalent bond", "is the strong electrostatic attraction between a shared pair of electrons and nuclei of the bonded atoms"],
  ["First ionisation energy", "is the energy needed to remove 1 mole of electrons from 1 mole of gaseous atoms"],
  ["Disproportionation", "is when a single element is simultaneously oxidised and reduced"],
  ["Average bond enthalpy", "the energy needed to break one mole of a bond in the gas phase, averaged over different compounds that the bond is in"],
  ["Hess’s law", "the total enthalpy change of a reaction is always the same, no matter which route is taken"],
  ["Le Chatelier’s principle", "if there is a change in conc, pressure or temp the equilibrium will move to help counteract the change"],
  ["Transitional metal", "is a d-block element that can form at least one stable ion with a partially filled d-subshel"],
  ["Buffers", "minimises changes in pH when a small amount of acid or base is added"],
  ["Complex ion", "is a metal ion surrounded by coordinately bonded ligands"],
  ["Coordinate bond", "covalent bond which both electrons in the shared pair come from the same atom, ion or molecule"],
  ["Ligand", "is an atom, ion or molecule that donates a pair of electrons to a central metal ion"],
  ["Entropy", "a measure of the dispersal of energy in a system"],
  ["Acids", "proton donors"],
  ["Bases", "proton acceptors"],
  ["Partial pressures", "each individual gas exerts its own pressure"],
  ["Mole fraction", "proportion of gas mixture that is made up of a particular gas"],
  ["Reaction rate", "is the change in the amount of reactants or products per unit time"],
  ["Relative atomic mass", "is the weighted mean mass of an atom of an element, compared to 1/12 of the mass of carbon-12"],
  ["Relative isotopic mass", "is the mass of an atom of an isotope of an element compared to 1/12 of the mass of an atom of carbon-12"],
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
  ["Water of crystallisation", "water in a lattice"],
  ["Ionic bond", "is an electrostatic attraction between two oppositely charge ions"],
  ["Covalent bond", "is the strong electrostatic attraction between a shared pair of electrons and nuclei of the bonded atoms"],
  ["First ionisation energy", "is the energy needed to remove 1 mole of electrons from 1 mole of gaseous atoms"],
  ["Disproportionation", "is when a single element is simultaneously oxidised and reduced"],
  ["Relative atomic mass", "is the weighted mean mass of an atom of an element, compared to 1/12 of the mass of carbon-12"],
  ["Relative isotopic mass", "is the mass of an atom of an isotope of an element compared to 1/12 of the mass of an atom of carbon-12"],
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
