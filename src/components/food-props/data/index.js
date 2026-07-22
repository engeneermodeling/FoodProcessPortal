/**
 * Registry of food property groups.
 * To add a new substance group: create data/<id>.js and import it here.
 */
import { milk } from "./milk.js";
import { juices } from "./juices.js";
import { sugar } from "./sugar.js";
import { flour } from "./flour.js";
import { meat } from "./meat.js";
import { confectionery } from "./confectionery.js";
import { fats } from "./fats.js";
import { brewery } from "./brewery.js";
import { oils } from "./oils.js";
import { vegetables } from "./vegetables.js";
import { fish } from "./fish.js";
import { icecream } from "./icecream.js";
import { cocoa_fillings } from "./cocoa_fillings.js";
import { wine } from "./wine.js";
import { brines } from "./brines.js";
import { bread } from "./bread.js";
import { veg_oils_full } from "./veg_oils_full.js";
import { honey_eggs } from "./honey_eggs.js";
import { fillings_syrups } from "./fillings_syrups.js";

export const FOOD_GROUPS = {
  milk,
  juices,
  sugar,
  flour,
  meat,
  confectionery,
  fats,
  brewery,
  oils,
  vegetables,
  fish,
  icecream,
  cocoa_fillings,
  wine,
  brines,
  bread,
  veg_oils_full,
  honey_eggs,
  fillings_syrups,
};

export const FOOD_GROUP_LIST = Object.values(FOOD_GROUPS);
