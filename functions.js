'use strict';

const users = [{},{},{},{},{}];
const myArrUsers = new MyArray({},{},{},{},{});


const subscribe = function (elem) {
  elem.isSubscibed = true;
}

users.forEach(subscribe);

myArrUsers.forEach(function(elem){
  elem.isSubscibed = true;
});

const numArray = new MyArray(1,2,3,4,5);

const square = function (number) {
  return number**2;
}

const increment = function (number) {
  return ++number;
};

numArray.forEach((currentNum, index, array) => {
  array[index] = square(currentNum);
}); 

const testArray = [1,2,3,4,5];
testArray.forEach((item, index, array) => {
  array[index] = square(item);
});

