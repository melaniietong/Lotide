# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @melaniietong/lotide`

**Require it:**

`const _ = require('@melaniietong/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: asserts if two arrays are equal.
* `assertEqual(...)`: asserts if two things (minus arrays and objects) are equal.
* `assertObjectsEqual(...)`: asserts if two objects are equal.
* `countLetters(...)`: returns a count of how many times each letter appears in a string.
* `countOnly(...)`: returns an object with the count of each given input.
* `eqArrays(...)`: returns true/false if two arrays are equal or not.
* `eqObjects(...)`: returns true/false if two objects are equal or not.
* `findKey(...)`: returns the key whose value matches the callback function.
* `findKeyByValue(...)`: returns a key by its value.
* `flatten(...)`: returns single array from a nested array.
* `head(...)`: returns the first item in an array. 
* `letterPositions(...)`: returns an object with each letter's position(s) in a string.
* `map(...)`: returns an object with each word's first letter.
* `middle(...)`: returns an array of the middle two values of an array.
* `tail(...)`: returns an array without the first ("head") item of the array.
* `takeUntil(...)`: returns from the start of the array until a specified item.
* `without(...)`: returns an array without the specified item(s).