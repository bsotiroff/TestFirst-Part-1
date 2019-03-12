/* eslint-disable no-unused-vars, no-throw-literal*/

function RPNCalculator() {
  //This is a "constructor function"
  // does not have access to push the array method
  this.stack = [];
  // will have to use 'throw' for the informative error function.
}

RPNCalculator.prototype.value = function() {
  return this.stack;
};
RPNCalculator.prototype.push = function(num) {
  this.stack.push(num);
};
RPNCalculator.prototype.plus = function() {
  if (this.stack.length < 2) {
    throw 'rpnCalculatorInstance is empty';
  } else {
    //assign a var to first operand
    var firstOperand = this.stack[this.stack.length - 1];
    //pop first operand off the stack
    this.stack.pop();
    //assign a var to 2nd operand
    var secondOperand = this.stack[this.stack.length - 1];
    //pop 2nd operand off the stack
    this.stack.pop();
    // add the two operands and put back in the stack;
    this.stack.push(secondOperand + firstOperand);
  }
};
RPNCalculator.prototype.minus = function() {
  if (this.stack.length < 2) {
    throw 'rpnCalculatorInstance is empty';
  } else {
    //assign a var to first operand
    var firstOperand = this.stack[this.stack.length - 1];
    //pop first operand off the stack
    this.stack.pop();
    //assign a var to 2nd operand
    var secondOperand = this.stack[this.stack.length - 1];
    //pop 2nd operand off the stack
    this.stack.pop();
    // add the two operands and put back in the stack
    this.stack.push(secondOperand - firstOperand);
  }
};
RPNCalculator.prototype.times = function() {
  if (this.stack.length < 2) {
    throw 'rpnCalculatorInstance is empty';
  } else {
    //assign a var to first operand
    var firstOperand = this.stack[this.stack.length - 1];
    //pop first operand off the stack
    this.stack.pop();
    //assign a var to 2nd operand
    var secondOperand = this.stack[this.stack.length - 1];
    //pop 2nd operand off the stack
    this.stack.pop();
    // add the two operands and put back in the stack;
    this.stack.push(secondOperand * firstOperand);
  }
};
RPNCalculator.prototype.divide = function() {
  if (this.stack.length < 2) {
    throw 'rpnCalculatorInstance is empty';
  } else {
    //assign a var to first operand
    var firstOperand = this.stack[this.stack.length - 1];
    //pop first operand off the stack
    this.stack.pop();
    //assign a var to 2nd operand
    var secondOperand = this.stack[this.stack.length - 1];
    //pop 2nd operand off the stack
    this.stack.pop();
    // add the two operands and put back in the stack;
    this.stack.push(secondOperand / firstOperand);
  }
};
RPNCalculator.prototype.clear = function() {
  this.stack = [];
};
