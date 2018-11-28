var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var appendedElement = "mars";
var indexNum;

function addElementToBeginningOfArray(chocolateBars, appendedElement) {
  var plusChocolateBars = [appendedElement, ...chocolateBars];
  return plusChocolateBars;
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, appendedElement) {
  chocolateBars.unshift(appendedElement);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, appendedElement) {
  var plusChocolateBars = [...chocolateBars, appendedElement];
  return plusChocolateBars;
}

function destructivelyAddElementToEndOfArray(chocolateBars, appendedElement) {
  chocolateBars.push(appendedElement);
  return chocolateBars;
}

function accessElementInArray(chocolateBars, indexNum) {
  indexNum = 1;
  return chocolateBars[indexNum];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars) {
  return chocolateBars.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars) {
  return chocolateBars.slice(0, chocolateBars.length - 1);
}