/* eslint-disable no-unused-vars */

function createCalculator() {
  calculator = {
    total: 0,
    value() {
      return this.total;
    },
    add(num) {
      this.total += num;
    },
    subtract(num) {
      this.total -= num;
    },
    clear() {
      this.total = 0;
    },
  };
  return calculator;
}

let instance = createCalculator();
//addSquareMethod
//adds the square method to an array of Calculator instances

const addSquareMethod = arr => {
  let updatedArray = [];
  for (let i = 0; i < arr.length; i++) {
    let updatedInstance = arr[i];

    updatedInstance.square = function() {
      return Math.pow(this.total, 2);
    };
    updatedArray.push(updatedInstance);
  }
  return updatedArray;
};

// const addSquareMethod = arr => {
//   return arr.map(inst => {
//     inst.square = function() {
//       return Math.pow(this.total, 2);
//     };
//     return inst;
//   });
// };

// humanCalculator
let humanCalcProto = {
  add(num) {
    this.total = this.total + num;
  },
  subtract(num) {
    this.total = this.total - num;
  },
  value() {
    return this.total;
  },
  clear() {
    this.total = -10;
  },
};

const createHumanCalculator = () => {
  let humanCalculatorObj = Object.create(humanCalcProto);
  humanCalculatorObj.total = -10;
  return humanCalculatorObj;
};

let humanCalculator = createHumanCalculator();
