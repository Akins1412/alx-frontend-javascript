/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function appendToEachArrayValue(array, appendString) {
  let newArray = [];
  for (let idx of array) {
    newArray.push(appendString + idx);
  }

  return array;
}
