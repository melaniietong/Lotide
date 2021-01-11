const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(head([1, 2, 3]), head([1, 4, 6]), 1);