function findDuplicated(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) !== i && !result.includes(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(findDuplicated(["a", "b", "c", "a", "b"]));
