// Rezolvări punct cu punct pentru Readme.md.
export const tip = valoare => typeof valoare;
export const esteNedefinitSauNull = valoare => valoare === null || valoare === undefined;
export var variabilaVar = 10;
export let variabilaLet = 'JavaScript';
export const variabilaConst = true;
export const conversieStringNumber = Number('123');
export const conversieNumberString = String(456);
export const salutTemplate = (nume, varsta) => `Salut, ${nume}! Ai ${varsta} ani.`;
export const schimbaValori = (a, b) => { const temporar = a; return [b, temporar]; };
export const patratAnonim = function (numar) { return numar * numar; };
export const adunareArrow = (a, b) => a + b;
export const tipuriValoriDiferite = valori => valori.map(valoare => typeof valoare);
export const suma = (a, b) => a + b;
export const ariaDreptunghi = (lungime, inaltime = 1) => lungime * inaltime;
export const patrat = numar => numar * numar;
export const majusculeSiLungime = text => ({ text: text.toUpperCase(), lungime: text.length });
export const dubleaza = numar => numar * 2;
export const calculeaza = numar => ({ dublu: dubleaza(numar), patrat: patrat(numar) });
export const aplica = (array, functie) => array.map(functie);

export const dateVariabile = { numar: 42, text: 'JavaScript', activ: true };
dateVariabile.temporar = 'proprietate adăugată';
delete dateVariabile.temporar;
export const valoriDiferite = [42, 'text', true, null, undefined, { curs: 'JS' }];

export const masina = {
  marca: 'Dacia', model: 'Spring', an: 2024,
  descriere() { return `${this.marca} ${this.model ?? '(model șters)'} din ${this.an}, culoare ${this.culoare}`; },
};
masina.culoare = 'albastru';
masina.an = 2025;
delete masina.model;
export const mesajPersoana = persoana => `Persoana ${persoana.nume} are ${persoana.varsta} ani.`;
export const casa = { adresa: { strada: 'Strada Florilor 10', oras: 'Chișinău' } };
export const creeazaStudent = (nume, varsta, nota) => ({ nume, varsta, nota });
export const masinaClonataAssign = Object.assign({}, masina);
export const masinaClonataSpread = { ...masina };
export const calculator = {
  adunare: suma, scadere: (a, b) => a - b,
  inmultire: (a, b) => a * b, impartire: (a, b) => a / b,
};
const { marca, an } = masina;
export const afiseazaProprietatiMasina = obiect => { const rezultat = []; for (const cheie in obiect) rezultat.push([cheie, obiect[cheie]]); return rezultat; };
export const proprietatiMasina = Object.entries(masina);
export const masinaAreCuloare = 'culoare' in masina;

export const orase = ['Chișinău', 'Iași', 'Cluj'];
export const primulSiUltimulOras = [orase[0], orase[orase.length - 1]];
export const modificaOrase = lista => { lista.push('Brașov'); lista.unshift('Bălți'); lista.pop(); return lista; };
export const numere = [4, 11, 8, 15, 3];
export const parcurgeCulori = (culori, callback = console.log) => { for (let index = 0; index < culori.length; index += 1) callback(culori[index]); };
export const parcurgeAnimale = (animale, callback = console.log) => animale.forEach(animal => callback(`Animal: ${animal}`));
export const pesteZece = numere.filter(numar => numar > 10);
export const numereSortate = [...numere].sort((a, b) => a - b);
export const patrate = numere.map(patrat);
export const sumaArray = numere.reduce((total, numar) => total + numar, 0);
export const existaUnsprezece = numere.includes(11);
export const pozitieUnsprezece = numere.indexOf(11);
export const cuvinteCombinate = ['JavaScript', 'React'].concat(['Vite', 'DOM']);
export const matrice = [[1, 2], [3, 4]];
export const valoareMatrice = matrice[0][1];
export const faraDuplicate = array => [...new Set(array)];
export const subArray = numere.slice(1, 4);
export const faraIndexDoi = lista => { const rezultat = [...lista]; rezultat.splice(2, 1); return rezultat; };

export const dupaTreiSecunde = callback => setTimeout(callback, 3000);
export const cronometruUnLaCinci = (callback, setIntervalFn = setInterval) => {
  let numar = 0;
  const id = setIntervalFn(() => { callback(++numar); if (numar === 5) clearInterval(id); }, 1000);
  return id;
};
export const salut = callback => { console.log('Salut!'); callback(); };
export const promiseDupaDouaSecunde = () => new Promise(resolve => setTimeout(() => resolve('Rezolvat'), 2000));
export const promiseConditionat = valoare => new Promise((resolve, reject) => valoare ? resolve('Valoare acceptată') : reject(new Error('Valoare respinsă')));
export const exempluAsync = async () => await promiseDupaDouaSecunde();
export const promisiuneUnu = () => Promise.resolve(1);
export const promisiuneDoi = valoare => Promise.resolve(valoare + 1);
export const promisiuneTrei = valoare => Promise.resolve(valoare * 2);
export const lantPromisiuni = () => promisiuneUnu().then(promisiuneDoi).then(promisiuneTrei).then(String);
export const preiaPosturi = async () => { const raspuns = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3'); return raspuns.json(); };
export const asteaptaToate = () => Promise.all([Promise.resolve('A'), Promise.resolve('B')]);
export const asteaptaToateRezultatele = () => Promise.allSettled([Promise.resolve('OK'), Promise.reject(new Error('Eroare'))]);

export const schimbaTitlu = (id, text) => { const element = document.getElementById(id); if (element) element.textContent = text; };
export const coloreazaElementeLista = culoare => document.querySelectorAll('li').forEach(element => { element.style.color = culoare; });
export const adaugaParagraf = (id, text) => { const paragraf = document.createElement('p'); paragraf.textContent = text; document.getElementById(id)?.append(paragraf); return paragraf; };
export const schimbaImagine = src => { const imagine = document.querySelector('img'); if (imagine) imagine.src = src; };
export const adaugaClasa = (id, clasa) => document.getElementById(id)?.classList.add(clasa);
export const eliminaParagraf = paragraf => paragraf?.remove();
export const adaugaEvenimentH2 = (buton, titlu, text) => buton.addEventListener('click', () => { titlu.textContent = text; });
export const monitorizeazaCamp = (input, rezultat) => input.addEventListener('input', event => { rezultat.textContent = event.target.value; });
export const afiseazaPrimulSiUltimulCopil = ul => [ul.firstElementChild?.textContent, ul.lastElementChild?.textContent];
export const alterneazaActive = (buton, element) => buton.addEventListener('click', () => element.classList.toggle('active'));
export const creeazaTabel = container => { const tabel = document.createElement('table'); for (let rand = 0; rand < 3; rand += 1) { const row = tabel.insertRow(); row.insertCell(); row.insertCell(); } container.append(tabel); return tabel; };
export const adaugaElementLaLista = (buton, lista, text = 'Nou') => buton.addEventListener('click', () => { const element = document.createElement('li'); element.textContent = text; lista.append(element); });
export const domSolutions = [
  ['5.1', 'schimbaTitlu("titlu", "Titlu schimbat");'], ['5.2', 'coloreazaElementeLista("tomato");'],
  ['5.3', 'adaugaParagraf("container", "Text nou");'], ['5.4', 'schimbaImagine("imagine-noua.jpg");'],
  ['5.5', 'adaugaClasa("box", "noua-clasa");'], ['5.6', 'eliminaParagraf(document.querySelector("p"));'],
  ['5.7', 'adaugaEvenimentH2(buton, titluH2, "Buton apăsat");'], ['5.8', 'monitorizeazaCamp(input, rezultat);'],
  ['5.9', 'afiseazaPrimulSiUltimulCopil(ul);'], ['5.10', 'alterneazaActive(buton, element);'],
  ['5.11', 'creeazaTabel(container);'], ['5.12', 'adaugaElementLaLista(buton, lista);'],
];

export const solutions = [
  { category: '1 · Variabile și tipuri', items: [
    ['1.1', 'Declarare var, let, const', 'var numar = 10; let text = "JS"; const activ = true;', 'number · string · boolean'],
    ['1.2', 'Tipul unei variabile', 'tip("laborator")', 'string'],
    ['1.3', 'Conversii string / number', 'Number("123"); String(456);', '123 · "456"'],
    ['1.4', 'Template literal', 'const nume = "Ana", varsta = 20; `Salut, ${nume}! Ai ${varsta} ani.`', 'Salut, Ana! Ai 20 ani.'],
    ['1.5', 'Schimb cu variabilă temporară', 'let a = 1, b = 2, temporar = a; a = b; b = temporar;', 'a = 2 · b = 1'],
    ['1.6', 'null sau undefined', 'esteNedefinitSauNull(null)', 'true'],
    ['1.7', 'Proprietate adăugată și eliminată', 'dateVariabile.temporar = "nou"; delete dateVariabile.temporar;', 'operație finalizată'],
    ['1.8', 'Tipurile elementelor din array', 'valoriDiferite.map(tip)', '[number, string, boolean, object, undefined, object]'],
  ]},
  { category: '2 · Funcții', items: [
    ['2.1', 'Suma a două numere', 'suma(5, 7)', '12'], ['2.2', 'Aria cu parametru implicit', 'ariaDreptunghi(5)', '5'],
    ['2.3', 'Funcție anonimă / pătrat', 'const patratAnonim = function (n) { return n * n; }; patratAnonim(6)', '36'],
    ['2.4', 'Majuscule și număr de caractere', 'majusculeSiLungime("react")', '{ text: "REACT", lungime: 5 }'],
    ['2.5', 'Funcție principală cu dublu și pătrat', 'calculeaza(4)', '{ dublu: 8, patrat: 16 }'],
    ['2.6', 'Suma ca arrow function', 'const adunareArrow = (a, b) => a + b;', 'funcție definită'], ['2.7', 'Aplică o funcție array-ului', 'aplica([1, 2, 3], patrat)', '[1, 4, 9]'],
  ]},
  { category: '3 · Obiecte', items: [
    ['3.1', 'Obiectul masina', 'const masina = { marca: "Dacia", model: "Spring", an: 2024 };', 'creat'], ['3.2', 'Notare punct și paranteze', 'masina.marca; masina["marca"];', 'Dacia · Dacia'],
    ['3.3', 'Adaugă culoare și actualizează anul', 'masina.culoare = "albastru"; masina.an = 2025;', 'actualizat'], ['3.4', 'Șterge model', 'delete masina.model;', 'model eliminat'],
    ['3.5', 'Iterare for...in', 'for (const cheie in masina) console.log(cheie, masina[cheie]);', 'chei și valori afișate'], ['3.6', 'Metoda descriere', 'masina.descriere()', 'Dacia (model șters) din 2024, culoare albastru'],
    ['3.7', 'Mesaj pentru persoană', 'mesajPersoana({ nume: "Ion", varsta: 22 })', 'Persoana Ion are 22 ani.'], ['3.8', 'Operatorul in', '"culoare" in masina', 'true'],
    ['3.9', 'Obiect imbricat casa/adresa', 'casa.adresa.oras', 'Chișinău'], ['3.10', 'Factory pentru student', 'creeazaStudent("Ana", 20, 9.5)', '{ nume: "Ana", varsta: 20, nota: 9.5 }'],
    ['3.11', 'Object.assign și spread', 'Object.assign({}, masina); { ...masina };', 'două clone create'], ['3.12', 'Metode calculator', 'calculator.inmultire(6, 7)', '42'], ['3.13', 'Destructurare', 'const { marca, an } = masina;', 'Dacia · 2024'],
  ]},
  { category: '4 · Array-uri', items: [
    ['4.1', 'Primul și ultimul oraș', 'orase[0]; orase[orase.length - 1];', 'Chișinău · Cluj'], ['4.2', 'push, unshift, pop', 'orase.push("Brașov"); orase.unshift("Bălți"); orase.pop();', 'operații finalizate'],
    ['4.3', 'Iterare cu for', 'for (let i = 0; i < culori.length; i++) console.log(culori[i]);', 'elemente afișate'], ['4.4', 'Iterare cu forEach', 'animale.forEach(animal => console.log(`Animal: ${animal}`));', 'mesaje afișate'],
    ['4.5', 'Numere mai mari de 10', 'pesteZece', '[11, 15]'], ['4.6', 'Sortare crescătoare', 'numereSortate', '[3, 4, 8, 11, 15]'], ['4.7', 'Pătratul fiecărui număr', 'patrate', '[16, 121, 64, 225, 9]'],
    ['4.8', 'Suma cu reduce', 'sumaArray', '41'], ['4.9', 'includes și indexOf', 'existaUnsprezece; pozitieUnsprezece', 'true · 1'], ['4.10', 'Combinare array-uri', 'cuvinteCombinate', '[JavaScript, React, Vite, DOM]'],
    ['4.11', 'Matrice 2x2', 'matrice[0][1]', '2'], ['4.12', 'Eliminare duplicate', 'faraDuplicate([1, 1, 2, 3, 3])', '[1, 2, 3]'], ['4.13', 'slice și splice index 2', 'numere.slice(1, 4); numere.splice(2, 1);', '[11, 8, 15] · element șters'],
  ]},
  { category: '5 · Manipulări DOM', items: domSolutions.map(([id, code]) => [id, 'Manipulare DOM', code, 'cod DOM implementat']) },
  { category: '6 · Programare asincronă', items: [
    ['6.1', 'Mesaj după 3 secunde', 'dupaTreiSecunde(() => console.log("Gata!"));', 'timer setat'], ['6.2', 'Cronometru 1–5', 'cronometruUnLaCinci(numar => console.log(numar));', 'interval cu oprire la 5'], ['6.3', 'Callback salut', 'salut(() => console.log("Callback executat"));', 'callback executat'],
    ['6.4', 'Promise după 2 secunde', 'promiseDupaDouaSecunde().then(console.log);', 'Promise rezolvat'], ['6.5', 'Promise condiționat', 'promiseConditionat(true)', 'Valoare acceptată'], ['6.6', 'Funcție async', 'exempluAsync()', 'returnează Promise'], ['6.7', 'Lanț de trei Promise', 'lantPromisiuni()', '"4"'],
    ['6.8', 'Fetch JSONPlaceholder', 'preiaPosturi()', 'fetch implementat'], ['6.9', 'Promise.all / allSettled', 'asteaptaToate(); asteaptaToateRezultatele();', 'ambele implementate'],
  ]},
  { category: '7 · Module ES', items: [
    ['7.1', 'Export adunare și scădere', 'export { adunare, scadere } from "./mathUtils.js";', 'implementat'], ['7.2', 'Import funcții matematice', 'import { adunare, scadere } from "./mathUtils.js";', '19 · 5'], ['7.3', 'Export default salutare', 'export default function salutare() { /* ... */ }', 'implementat'], ['7.4', 'Import și folosire salutare', 'import salutare from "./salutari.js";', 'salutare importată'], ['7.5', 'Export valori utilizator', 'export const utilizator = { nume, varsta };', 'implementat'], ['7.6', 'Import întreg modul', 'import * as dateUtilizator from "./dateUtilizator.js";', 'valori accesate'],
  ]},
];

export { marca, an };
