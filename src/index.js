// import React from "react";

import choice from "./helpers";
import remove from './helpers';

import fruits from './food';

let c = choice(fruits);  // this returns random fruit
console.log(`I would like one ${c} please`);
console.log(`Here you go: ${c}`);
console.log("Delicious! May I have another?");

// remove the fruit from an array
let leftFruits = remove(fruits, c)

console.log(`I'm sorry, we're all out. We have ${leftFruits.length} left.`);

