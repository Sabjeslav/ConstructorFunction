'use strict';

function AccumulatorProto() {
  this.read = function read() {
    const number = +prompt('Enter number to add: ');
    if (isNaN(number)) return;
    return this.value+=number;
  }
}

function Accumulator(startingValue) {
  if (!new.target) {
    return new Accumulator(startingValue);
  }
  if (isNaN(startingValue)) {
    this.value = 0;
    return;
  }
  this.value = +startingValue;
}

Accumulator.prototype = new AccumulatorProto();
