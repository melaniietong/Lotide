const tail = require('../tail');
const assertEqual = require('../assertEqual');

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); 
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const words = tail(["Yo Yo", "Lighthouse", "Labs"]);
assertEqual(words.length, 2);