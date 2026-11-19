import {
  adaugaElementLaLista,
  adaugaEvenimentH2,
  adaugaParagraf,
  adaugaClasa,
  alterneazaActive,
  creeazaTabel,
  monitorizeazaCamp,
  schimbaTitlu,
} from './labSolutions.js';

const titlu = document.getElementById('titlu');
const butonTitlu = document.getElementById('schimba-titlu');
const butonActive = document.getElementById('activeaza');
const lista = document.getElementById('lista');

adaugaEvenimentH2(butonTitlu, titlu, 'Titlu schimbat');
alterneazaActive(butonActive, titlu);
monitorizeazaCamp(document.getElementById('camp'), document.getElementById('rezultat'));
adaugaElementLaLista(document.getElementById('adauga'), lista, 'Element nou');
document.getElementById('tabel').addEventListener('click', () => creeazaTabel(document.getElementById('container')));
adaugaParagraf('container', 'DOM funcționează.');
adaugaClasa('container', 'demo-container');

document.getElementById('status').textContent = 'Demonstrațiile DOM sunt active.';
