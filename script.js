function MyArrayProto() {
  this.push = function push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
    }
    return this.length;
  };
  this.pop = function pop() {
    if (this.length === 0) return;
    const lastValue = this[this.length - 1];
    delete this[--this.length];
    return lastValue;
  };
  this.forEach = function forEach(fn) {
    for (let i = 0; i < this.length; i++) {
      fn(this[i], i, this);
    }
  };
  this.unshift = function() {
    for (let i = this.length-1; i >= 0; i--) {
      this[i + arguments.length] = this[i];
    }
    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
    }
    return this.length += arguments.length;
  }
  this.shift = function() {
    if (this.length === 0) return;
    const firstElement = this[0];
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i+1];
    }
    delete this[--this.length];
    return firstElement;
  }
  this.concat = function concat() {
    const newArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      newArray.push(this[i]);
    }
    for (let i = 0; i < arguments.length; i++) {
      if (Array.isArray(arguments[i])) {
        for (let j = 0; j < arguments[i].length; j++){
          newArray.push(arguments[i][j]);
        }
      } else {
        newArray.push(arguments[i]);
      }
    }
    return newArray;
  }
  this.reverse = function reverse() {
    for (let i = 0; i < (this.length / 2); i++) {
      const temp = this[i];
      this[i] = this[this.length - 1 - i];
      this[this.length - 1 - i] = temp;
    }
    return this;
  }
  this.map = function map(callback) {
    newArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      newArray.push(callback(this[i], i, this));
    }
    return newArray;
  }
  this.some = function map(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return true;
      }
    }
    return false;
  }
  this.every = function every(callback) {
    for (let i = 0; i < this.length; i++) {
      if (!callback(this[i], i, this)) {
        return false;
      }
    }
    return true;
  }
  this.filter = function filter(callback) {
    const newArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        newArray.push(this[i]);
      }
    }
    return newArray;
  }
  this.isMyArray = function isMyArray() {
    return (this instanceof MyArray);
  }
}

function MyArray() {
  this.length = 0;
  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
}

MyArray.prototype = new MyArrayProto();

test = new MyArray();
test.push(1,2,3,4,5);
