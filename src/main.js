import assert from 'node:assert/strict';
import {
  tip,
  esteNedefinitSauNull,
  conversieStringNumber,
  conversieNumberString,
  salutTemplate,
  schimbaValori,
  patratAnonim,
  adunareArrow,
  valoriDiferite,
  tipuriValoriDiferite,
  ariaDreptunghi,
  suma,
  calculeaza,
  masina,
  masinaAreCuloare,
  casa,
  creeazaStudent,
  calculator,
  primulSiUltimulOras,
  modificaOrase,
  pesteZece,
  numereSortate,
  patrate,
  sumaArray,
  valoareMatrice,
  faraDuplicate,
  faraIndexDoi,
  promiseConditionat,
  lantPromisiuni,
} from './labSolutions.js';

const verificari = [
  ['typeof', () => assert.equal(tip('JS'), 'string')],
  ['null/undefined', () => {
    assert.equal(esteNedefinitSauNull(null), true);
    assert.equal(esteNedefinitSauNull(undefined), true);
    assert.equal(esteNedefinitSauNull(0), false);
  }],
  ['conversii', () => {
    assert.equal(conversieStringNumber, 123);
    assert.equal(conversieNumberString, '456');
  }],
  ['template literals și schimb de valori', () => {
    assert.equal(salutTemplate('Ana', 20), 'Salut, Ana! Ai 20 ani.');
    assert.deepEqual(schimbaValori(1, 2), [2, 1]);
  }],
  ['funcții', () => {
    assert.equal(patratAnonim(6), 36);
    assert.equal(adunareArrow(5, 7), 12);
    assert.equal(ariaDreptunghi(5), 5);
    assert.deepEqual(calculeaza(4), { dublu: 8, patrat: 16 });
    assert.equal(suma(5, 7), 12);
  }],
  ['tipuri array', () => assert.deepEqual(tipuriValoriDiferite(valoriDiferite), ['number', 'string', 'boolean', 'object', 'undefined', 'object'])],
  ['obiecte', () => {
    assert.equal(masina.marca, 'Dacia');
    assert.equal(masina.an, 2025);
    assert.equal(masinaAreCuloare, true);
    assert.equal(casa.adresa.oras, 'Chișinău');
    assert.deepEqual(creeazaStudent('Ana', 20, 9.5), { nume: 'Ana', varsta: 20, nota: 9.5 });
    assert.equal(calculator.inmultire(6, 7), 42);
  }],
  ['array-uri', () => {
    assert.deepEqual(primulSiUltimulOras, ['Chișinău', 'Cluj']);
    assert.deepEqual(modificaOrase(['Iași', 'Cluj']), ['Bălți', 'Iași', 'Cluj']);
    assert.deepEqual(pesteZece, [11, 15]);
    assert.deepEqual(numereSortate, [3, 4, 8, 11, 15]);
    assert.deepEqual(patrate, [16, 121, 64, 225, 9]);
    assert.equal(sumaArray, 41);
    assert.equal(valoareMatrice, 2);
    assert.deepEqual(faraDuplicate([1, 1, 2, 3, 3]), [1, 2, 3]);
    assert.deepEqual(faraIndexDoi([4, 11, 8, 15, 3]), [4, 11, 15, 3]);
  }],
  ['Promise condiționat', async () => assert.equal(await promiseConditionat(true), 'Valoare acceptată')],
  ['lanț de Promise-uri', async () => assert.equal(await lantPromisiuni(), '4')],
];

let reușite = 0;
for (const [nume, verificare] of verificari) {
  await verificare();
  reușite += 1;
  console.log(`✓ ${nume}`);
}

console.log(`\n${reușite}/${verificari.length} verificări au trecut.`);
console.log('Cerințele DOM 5.1–5.12 se testează în browser, prin src/browserDemo.js.');
