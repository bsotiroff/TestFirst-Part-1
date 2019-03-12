/* eslint-disable no-unused-vars */

function setPropsOnObj(anObj) {
  //creates a property x, with value 7
  anObj.x = 7;
  anObj.y = 8;

  anObj.onePlus = function(num) {
    return num + 1;
  };
}

const setPropsOnArr = arr => {
  arr.hello = function() {
    return 'Hello!';
  };

  arr.full = 'stack';

  arr[0] = 5;

  arr.twoTimes = function(num) {
    return num * 2;
  };
};

const setPropsOnFunc = func => {
  func.year = '20??';
  func.divideByTwo = function(num) {
    return num / 2;
  };
  func.helloWorld = function() {
    return 'Hello World';
  };

  return 'I am a function object, all functions are objects! Function can have their own properties too!';
};

const shallowCopy = (...objs) => {};

let returnObj = objs[0];
returnObj + objs[1];

var dog = {
  bark: function() {},
};
console.log(shallowCopy(hockeyTeam, baseballTeam));
