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
  ["Ideal Gas", "A theoretical gas that obeys the three gas laws."],
  ["Pressure Law", "At a constant volume, the pressure p of an ideal gas is directly proportional to its absolute temperature T."],
  ["Charles’ Laws", "At a constant pressure, the volume V of a gas is directly proportional to its absolute temperature T."],
  ["Boyle’s Law", "At a constant temperature the pressure p and the volume V of a gas are inversely proportional."],
  ["Inertial Energy", "Is the sum of the randomly distributed kinetic and potentials energies of all its particles."],
  ["Specific Heat Capacity", "Is the amount of energy needed to raise the temperature of 1 kg of the substances by 1K."],
  ["Specific Latent Heat", "Is the quantity of thermal energy needed to be gained or lost to change the state of 1 kg of a substance."],
  ["Electric Potential", "Energy per unit charge."],
  ["Electric Potential Difference", "Energy need to move a unit charge between two points."],
  ["Electric Field Strength", "Force per unit charge."],
  ["Escape Velocity", "Minimum speed needed to leave the gravitational field and not fall back towards the object due to gravitational attraction."],
  ["Synchronous Orbit", "Orbital period equal to the rotational period of the object it is orbiting e.g. geostationary satellites."],
  ["Gravitational Potential", "Work done per kg."],
  ["Equipotentials", "Lines where there is the same gravitational potential energy."],
  ["Gravitational Field Strength", "Force per kg."],
  [" A Field", "Is a region in which a body experiences a non-contact force."],
  ["Permittivity", "Is a measure of how difficult it is to generated an electric field in a medium."],
  ["Relative Permittivity", "Is the ratio of the permittivity of a material to the permittivity of free space"],
  ["Capacitance", "Is the amount of charge it is able to store per unit potential difference across it."],
  ["Eddy currents", "Are lopping currents induced by the charging magnetic flux in the core."],
  ["Lenz’s Law", "The induced emf is always in such a direction as to oppose the charge that caused it."],
  ["Faraday’s Law", "Induced emf is directly proportional to the rate of change of flux linkage."],
  ["Magnetic Flux Density", "The force on one meter of wire carrying a current of one amp at right angles to the magnetic field."],
  ["Magnetic Fields", "A region which a force acts."],
  ["Critical Mass", "Size of fuel needed to slow down the neutrons before they leave."],
  ["Mass Defect", "Difference between the mass of a nucleus, and the sum of the individual masses of the nucleons. Equivalent to the binding energy of the nucleus."],
  ["Binding Energy", "The energy released when a nucleus forms, or the energy required to separate all the nucleons in that nucleus. Equivalent to the mass defect of the nucleus."],
  ["Activity", "Is the number of nuclei that decay each second."],
  ["Decay Constant", "Is the probability of a specific nucleus decaying per unit time."],
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
  location.href='definitions_physics.html';
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
