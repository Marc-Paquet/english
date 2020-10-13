import { listing } from '../json/vocabulary.js';

let choixAleat = 0;
const proposition = document.getElementById("proposition");
const test = document.getElementById("test");

proposition.onclick = function() {
  choixAleat = Math.floor(Math.random()*listing.length);

  test.innerHTML = `
    <div class="prop">
      <span class="frenchWord">
        ${listing[choixAleat].french}
      </span>
      <input type="texte" class="englishWord">
      <button id="soumettre" active="false">soumettre</button>
    </div>
  `
  let score = document.getElementById("score");
  let nbQuestion = document.getElementById("nbQuestion")
  let englishWord = document.querySelector(".englishWord")
  let soumettre = document.getElementById("soumettre");
  soumettre.onclick = () => {
    nbQuestion.innerText++;
    if ( englishWord.value === "") {
      console.log("il faut répondre")
    } else if ( englishWord.value.toLowerCase() === listing[choixAleat].english ){
      score.innerText++;
      test.innerHTML += `
      =>
      <div class="succes">
        Good answer
      </div>  
    `
    let parole = new SpeechSynthesisUtterance(listing[choixAleat].english);
    parole.lang = 'en-US';
    speechSynthesis.speak(parole);
    console.log('parole');
    console.log(parole);
    note();
    } else {
      test.innerHTML += `
      =>
      <div class="echec">
        Wrong answer : ${listing[choixAleat].english}
      </div>  
    `
    let parole = new SpeechSynthesisUtterance(listing[choixAleat].english);
    parole.lang = 'en-US';
    speechSynthesis.speak(parole);
    console.log('parole');
    console.log(parole);
    note();
    }
  }
};

function note() {
  if (score.innerText < nbQuestion.innerText/2) {
    score.classList.remove("succes");
    score.classList.add("echec");
    console.log('attention ECHEC');
   } else {
    score.classList.remove("echec");
    score.classList.add("succes");
    console.log('félicitations continue');
   }
   
}

