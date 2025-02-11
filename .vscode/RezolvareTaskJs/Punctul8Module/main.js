import hello from "./salutari.js"
import { helloUser } from "./salutari.js";
import * as data from "./dateUtilizator.js"
import {adunare,scadere} from './mathUtils.js'


hello();
helloUser("Cristi");

console.log(data.nume())
console.log(data.idnp())
console.log(data.soarta())
console.log(data.stare())

const exA= adunare(3,5);
console.log(exA);

const exB=scadere(5,6)
console.log(exB);
