import { listing } from '../json/vocabulary.js';

let liste = document.getElementById("liste");

afficherListe();

function afficherListe() {
  console.log('exécution de la fonction')
  for (let i = 0 ; i < listing.length ; i++) {
    liste.innerHTML += `
    <tr>
      <td>
        <span class="frenchWord">
          ${listing[i].french}
        </span>
      </td>
      <td>
        <span class=englishWord">
          ${listing[i].english}
        </span>
      </td>
    </tr>`
  }
  console.log('fin de la fonction')
}
