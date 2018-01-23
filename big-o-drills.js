'use strict';

//==== EVEN OR ODD ====/
function isEven(value){
  if (value % 2 === 0){
    return true;
  }
  else
    return false;
}
// O(1) because it's performing a check (basic math operation) and returning
//a boolean; the input is just one value with one operation being performed on it

//=== ARE YOU HERE? ==//

function areYouHere(arr1, arr2) {
  let eyeTicks = 1;
  let jayTicks = 1;
  for (let i=0; i<arr1.length; i++) {
    eyeTicks++;
    console.log('ticks for EYE', eyeTicks);
    const el1 = arr1[i];
    for (let j=0; j<arr2.length; j++) {
      jayTicks++;
      console.log('ticks for JAY', jayTicks);
      const el2 = arr2[j];
      if (el1 === el2) return true ;
    }
  }
  return false;
}
//compares every el in arr 1 with every el in arr 2
//six checks for every one check in i (the first loop)
//always corresponds to the array length of arr 2
//only has to loop first arr once
// console.log(areYouHere([2, 3, 4, 4, 2, 1], [1, 1, 6, 7, 1, 20]));
// console.log(areYouHere([1,3], [1,2,4,5]));

//O(n^2) because it's a nested loop 


//=== DOUBLER ===//

function doubleArrayValues(array) {
  for (let i=0; i<array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

// function takes an array, multiplies every element of array by 2, then returns array with doubled values.
// Amount of operations directly equivalent to array length. If array contains two elements, it will perform doubling operation twice (once per element).
// If array contains 100 elements, function will perform doubling operation 100 times (once per every array element).
// Therefore, this is a linear algorithm. O(n).

// === NAIVE SEARCH ===//

function naiveSearch(array, item) {
  for (let i=0; i<array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}

// function takes an array and an item to look for.
// worst case is that item to look for does not exist in the array passed.
// In which case, algorithm will search through every element of the given array.
// This is a linear algorithm. Worst case will always be that the amount of operations
// is the number of elements in the given array. O(n).
