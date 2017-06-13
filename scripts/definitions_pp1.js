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
  ["Electron Volt", "the kinetic energy carried by an electron after it has been accelerated from rest through a potential difference of 1 volt."],
  ["The stopping potential Vs", "is the p.d. needed to stop the fastest moving electrons travelling with kinetic energy Ek (max)."],
  ["Work Function", "the energy required for an electron to break the bond with the metal ions."],
  ["Threshold frequency", "if the frequency of the radiation is below this value no photoelectrons are emitted."],
  ["The absolute refractive index of a material", "is the ratio between the speed of light in a vacuum and the speed of light in that material."],
  ["Refractive index of a boundary", "relative refractive index between two materials."],
  ["Stationary Waves", "superposition of two progressive waves with same frequency/wavelength and amplitude, moving in opposite direction."],
  ["Polarised Wave", "a wave that oscillates in one direction."],
  ["Transverse waves", "the displacement of the particles or fields is at right angles to the direction of energy propagation."],
  ["Longitudinal waves", "the displacement of particles or fields is along the direction of energy propagation."],
  ["Progressive waves", "causes energy from one place to another without transferring any material."],
  ["Yield point", "the material suddenly starts to stretch without extra load."],
  ["Ultimate Tensile Stress (UTS)", "max stress that a material can withstand."],
  ["Hook’s Law", "the extension of a stretched object is proportional to the load or force applied to it. This applies upto the limit of proportionality."],
  ["Kirchhoff's first law", "the total current entering a junction = the total current leaving it."],
  ["Kirchhoff's second law", "the total EMF around a series circuit = the sum of the p.d.s across each component."],
  ["Potential difference", "is the energy transferred when 1 column of charge flows through the load resistance."],
  ["Resistivity", "how much a particular material resists current flow."],
  ["Ohm's law", "the current through a conductor between two points is directly proportional to the voltage across the two points. I α V"],
  ["Current", "rate of flow of charge."],
  ["Coulomb", "1C is the amount of charge that passes in 1 second when the current is 1 amp."],
  ["Potential difference", "the work done in moving a unit of charge between the points."],
  ["Simple harmonic motion (SHM)", "the oscillation of an object’s acceleration is directly proportional to its displacement from its equilibrium position and is always directed towards the equilibrium."],
  ["Centripetal force", "the force on an object moving with a circular motion is directed towards the centre of the circle."],
  ["Absorption (Fibre Optics)", "energy absorbed by material of fibre."],
  ["Pulse Broadening", "broadened pulse can overlap leading to information loss."],
  ["Modal Dispersion", "light rays entering optical fibres at different angles. Reduced by using single mode fiber."],
  ["Material Dispersion", "different amounts of refraction experience by different wavelengths. Use mono-chromatic light."],
  ["Newton's First Law", "the velocity of an object will not change unless a resultant force acts on it."],
  ["Newton's Second Law", "acceleration is proportional to the resultant force. F = ma"],
  ["Newton's Third Law", "if an object A exerts a force on object B then object B exerts an equal but opposite force on object A."],
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
  location.href='chemistry.html';
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
