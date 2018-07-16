var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(myArray, element) {
  // No altering
  return [element, ...myArray]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  // Alters
  return array.unshift(element)
}

function addElementToEndOfArray(myArray, element) {
  // No altering
  return [...myArray, element]
}

function addElementToEndOfArray(myArray, element) {
  // Alters
  return myArray.push(element)
}

function accessElementInArray(myArray, index) {
  return myArray[index]
}

function destructivelyRemoveElementFromBeginningOfArray(myArray) {
  return myArray.shift()
}

function removeElementFromBeginningOfArray(myArray) {
  return myArray.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(myArray) {
  myArray.pop()
}

function removeElementFromEndOfArray(myArray) {
  return myArray.slice(0, myArray.length - 1)
}