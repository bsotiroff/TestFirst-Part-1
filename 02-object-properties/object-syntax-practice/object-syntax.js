/* eslint-disable no-unused-vars */

var name = 'Cody';
var loud = function loudbark() {
  console.log('RUFF RUFF!');
};

var dog = {
  name,
  loud,
  bark() {
    console.log('ruff ruff!');
  },
};
