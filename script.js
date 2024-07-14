/*
1. Explain what is prototype and what is prototype chain in your own words.

Ans: A prototype in JavaScript is an object that is associated with every function and object by default. 
When you create a function, JavaScript automatically creates a prototype property for that function,
which is an object that contains properties and methods. All instances created by that function will inherit 
properties and methods from its prototype.

The prototype chain is a mechanism by which JavaScript objects inherit properties and methods from other objects. 
When you access a property or method on an object, JavaScript first looks for that property or method on the 
object itself. If it doesn't find it, it then looks at the object's prototype, and so on, up the chain until it 
either finds the property/method or reaches the end of the chain (which is typically null).



2. Implement your versions of the following Array methods (choose 6).
map, filter, reduce, every, find, includes, join, pop, push, reverse, slice, sort

*/

// 1) map:
Array.prototype.myMapMethod = function(cb) {
    // Create a new array 
    const array_result = [];
  
    // Use the forEach method to iterate over each element in the array
    this.forEach((ele, i, arr) => {
      // Call the callback function on the current element and push the result into the new array
      array_result.push(cb(ele, i, arr));
    });
    array_result.filter
    // Return the new array results
    return array_result;
  };
  

  //2) filter:
  
  Array.prototype.myFilterMethod = function(predicate, thisArg) {
    // Create a new array
    const array_result = [];
    for (let i = 0; i < this.length; i++) {
      // Call the predicate function on the current element with the provided thisArg
      if (predicate.call(thisArg, this[i], i, this)) {
        array_result.push(this[i]);
      }
    }
  
    // Return the new array with the filtered results
    return resultArray;
  };


  // 3) every:

  Array.prototype.myEveryMethod = function(predicate, thisArg) {
    for (let i = 0; i < this.length; i++) {
      // Call the predicate function on the current element with the provided thisArg
      if (!predicate.call(thisArg, this[i], i, this)) {
       
        return false;
      }
    }
    return true;
  };


  // 4) find:

  Array.prototype.myFindMethod = function(predicate, thisArg) {
    for (let i = 0; i < this.length; i++) {
      if (predicate.call(thisArg, this[i], i, this)) {

        return this[i];
      }
    }
    // If no elements pass the test, return undefined
    return undefined;
  };

  // 5) sort:

  Array.prototype.mySortMethod = function() {
    // Bubble sort implementation
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        //This ensures that both numbers and strings can be sorted correctly based on their string representations.
        if (String(this[j]) > String(this[j + 1])) {
          // Swap elements if they are in the wrong order
          const temp = this[j];
          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }
  
    // Return the sorted array
    return this;
  };
  
// 6) Join:

Array.prototype.myJoinMethod = function(separator = ',') {
    // Initialize an empty string 
    let result_string = '';
      for (let i = 0; i < this.length; i++) {
      // Append each element to the result string, separated by separator(Default is ',')
      result_string += this[i];
  
      // Append separator if it's not the last element
      if (i !== this.length - 1) {
        result_string += separator;
      }
    }
      return result_string;
  };
