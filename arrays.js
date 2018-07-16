var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  // No altering
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  // Alters
  return array.unshift(element)
}

function addElementToEndOfArray(array, element) {
  // No altering
  return [..array, element]
}

function addElementToEndOfArray(array, element) {
  // Alters
  return 
}