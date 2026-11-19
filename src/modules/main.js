import { adunare, scadere } from './mathUtils.js';
import salutare from './salutari.js';
import * as dateUtilizator from './dateUtilizator.js';

export const rezultatMatematic = { suma: adunare(12, 7), diferenta: scadere(12, 7) };
export const mesajSalut = salutare(dateUtilizator.utilizator.nume);
export { adunare, scadere, salutare, dateUtilizator };
