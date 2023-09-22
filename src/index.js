module.exports = function check(str, bracketsConfig) {
 const stack = [];
  const openingBrackets = new Set();
  const closingBrackets = new Set();
  const matchingBrackets = {};

  for (const [open, close] of bracketsConfig) {
    openingBrackets.add(open);
    closingBrackets.add(close);
    matchingBrackets[close] = open;
  }

  for (const char of str) {
    if (openingBrackets.has(char)) {
      if (
        stack.length > 0 &&
        stack[stack.length - 1] === char &&
        closingBrackets.has(char)
      ) {
       
        stack.pop();
      } else {
        stack.push(char);
      }
    } else if (closingBrackets.has(char)) {
      if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
