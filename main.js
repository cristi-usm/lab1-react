import salut from './salutari.js'
import {adunare, scadere} from './mathUtils.js'
import * as dateUtilizator from './dateUtilizator.js'

console.log(adunare(5, 9))
console.log(scadere(5, 9))

salut('Cristi')

console.log(`Numele meu este ${dateUtilizator.nume}, am ${dateUtilizator.age} și sunt din ${dateUtilizator.adresa.sat}.`)