/* eslint-disable no-unused-vars */

function createCalculator() {
  calculator = {
    total: 0,
    value: function() {
      return this.total;
    },
    add: function(num) {
      this.total += num;
    },
    subtract: function(num) {
      this.total -= num;
    },
    clear: function() {
      this.total = 0;
    },
  };
  return calculator;
}

createCalculator.prototype.square = function() {
  this.total ** 2;
};

const createHumanCalculator = () => {
  this.total = -10;
};

createHumanCalculator.prototype.add = function(num) {
  this.total + num;
};

createHumanCalculator.prototype.subtract = function(num) {
  this.total - num;
};

createHumanCalculator.prototype.value = function() {
  return this.total;
};

createHumanCalculator.prototype.clear = function() {
  this.total = -10;
};
