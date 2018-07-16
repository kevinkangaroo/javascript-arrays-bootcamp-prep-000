var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(myArray, element) {
  // No altering
  return [element, ...myArray]
}

function destructivelyAddElementToBeginningOfArray(myArray, element) {
  // Alters
  return myArray.unshift(element)
}

function addElementToEndOfArray(myArray, element) {
  // No altering
  return [...myArray, element]
}

function addElementToEndOfArray(myArray, element) {
  // Alters
  return myArray.push(element)
}