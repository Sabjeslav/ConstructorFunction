'use strict';

function AccumulatorProto() {
  this.read = function read() {
    const number = +prompt('Enter number to add: ');
    if (isNaN(number)) return;
    return this.value+=number;
  }
}

function Accumulator(startingValue) {
  this.value = startingValue;
  return this.value;
}

Accumulator.prototype = new AccumulatorProto();
