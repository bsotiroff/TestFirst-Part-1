/* eslint-disable no-unused-vars */

function repeat(str, num) {
  //takes two arguments, a string and a number and returns the string repeated num times
  let outputStr = '';

  for (let i = 0; i < num; i++) {
    outputStr += str;
  }

  return outputStr;
}

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    total += element;
  }
  return total;
}

const join = (arr, separator = '') => {
  let outputStr = '';

  for (var i = 0; i < arr.length; i++) {
    let element = arr[i];

    if (i === arr.length - 1) {
      outputStr += `${element}`;
    } else {
      outputStr += `${element}${separator}`;
    }
  }

  return outputStr;
};

function gridGenerator(num) {
  let grid = '';

  for (let i = 0; i < num * num; i++) {
    //if i is even, print #
    if (i % 2 === 0) {
      grid += '#';
    } else {
      //if i is odd, print ' '
      grid += ' ';
    }
    if ((i + 1) % num === 0) {
      //create a space every 'num' characters
      grid += '\n';
    }
  }
  return grid;
}

function paramify(obj) {
  let outputStr = '';
  let keys = [];

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  keys.sort();
  for (let i = 0; i < keys.length; i++) {
    let elem = keys[i];
    outputStr += `&${elem}=${obj[elem]}`;
  }

  return outputStr.slice(1);
}

function paramifyObjectKeys(obj) {
  var keyArr = Object.keys(obj).sort();
  var outputStr = '';

  for (var i = 0; i < keyArr.length; i++) {
    var keyElem = keyArr[i];
    var valElem = obj[keyElem];

    outputStr += `&${keyElem}=${valElem}`;
  }
  return outputStr.slice(1);
}

const sort = arr => {
  let unsortedArr = arr;
  let sortedArr = [];

  // let min = Math.min(...arr);
  while (unsortedArr.length > 0) {
    let min = Math.min(...unsortedArr);
    // console.log(min);
    let j = unsortedArr.indexOf(min);
    // console.log(j);
    let nextMin = unsortedArr.splice(j, 1)[0];
    sortedArr.push(nextMin);
    // console.log(sortedArr);
  }

  return sortedArr;
};
