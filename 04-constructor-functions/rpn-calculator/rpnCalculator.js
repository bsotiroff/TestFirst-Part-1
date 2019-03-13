/* eslint-disable no-unused-vars, no-throw-literal*/

function RPNCalculator() {
  //This is a "constructor function"
  this.stack = [];
  // does not have access to push the array method
  // will have to use 'throw' for the informative error function.
}

RPNCalculator.prototype.value = function() {
  return this.stack[0];
};
RPNCalculator.prototype.push = function(num) {
  this.stack.push(num);
};
RPNCalculator.prototype.plus = function() {
  if (this.stack.length < 2) {
    throw 'rpnCalculatorInstance is empty';
  } else {
    //assign a var to first operand
    let firstOperand = this.stack.pop();
    //pop first operand off the stack

    //assign a var to 2nd operand
    let secondOperand = this.stack.pop();
    //pop 2nd operand off the stack

    // add the two operands and put back in the stack;
    this.stack.push(secondOperand + firstOperand);
  }
};
RPNCalculator.prototype.minus = function() {
  if (this.stack.length < 2) {
    throw 'rpnCalculatorInstance is empty';
  } else {
    //assign a var to first operand
    let firstOperand = this.stack.pop();
    //pop first operand off the stack

    //assign a var to 2nd operand
    let secondOperand = this.stack.pop();
    //pop 2nd operand off the stack

    // subtract the first operand from the 2nd and put back in the stack
    this.stack.push(secondOperand - firstOperand);
  }
};
RPNCalculator.prototype.times = function() {
  if (this.stack.length < 2) {
    throw 'rpnCalculatorInstance is empty';
  } else {
    //assign a var to first operand
    let firstOperand = this.stack.pop();
    //pop first operand off the stack

    //assign a var to 2nd operand
    let secondOperand = this.stack.pop();
    //pop 2nd operand off the stack
    // multiply the two operands and put back in the stack;
    this.stack.push(secondOperand * firstOperand);
  }
};
RPNCalculator.prototype.divide = function() {
  if (this.stack.length < 2) {
    throw 'rpnCalculatorInstance is empty';
  } else {
    //assign a var to first operand
    let firstOperand = this.stack.pop();
    //pop first operand off the stack

    //assign a var to 2nd operand
    let secondOperand = this.stack.pop();
    //pop 2nd operand off the stack

    // add the two operands and put back in the stack;
    this.stack.push(secondOperand / firstOperand);
  }
};
RPNCalculator.prototype.clear = function() {
  this.stack = [];
};

rpnCalculatorInstance = new RPNCalculator();
