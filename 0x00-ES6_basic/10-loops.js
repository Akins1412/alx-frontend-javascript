/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function appendToEachArrayValue(array, appendString) {
  for (let idx of array) {
    var value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
