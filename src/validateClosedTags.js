function validateTags(input) {
  const tags = [];
  const pairs = {
    "}": "{",
    ")": "(",
    "]": "[",
  };

  for (const tag of input) {
    if (["{", "(", "["].includes(tag)) {
      tags.push(tag);
    }
    if (["}", ")", "]"].includes(tag) && tags.pop() !== pairs[tag]) {
      return false;
    }
  }

  return tags.length === 0;
}

console.log(validateTags("([])({})"));
console.log(validateTags("([(]))({})"));
