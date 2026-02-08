import * as dateUtilizator from "./dateUtilizator.js";
const { persoane, varste } = dateUtilizator;
import { salutari } from "./salutari.js";
salutari("Cristian");

import { adunare } from "./mathUtils.js";
console.log(adunare(2, 3));
import { scadere } from "./mathUtils.js";
console.log(scadere(2, 3));

persoane.forEach((persoana, index) => {
  console.log(`${persoana} are ${varste[index]} ani.`);
});
