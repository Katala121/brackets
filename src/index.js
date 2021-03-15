module.exports = function check(str, bracketsConfig) {
  const stack = []
  let bool = true
  const strArr = str.split('')
  const openBrackets = bracketsConfig.map(item => item[0])
  const closeBrackets = bracketsConfig.map(item => item[1])
  const twinBrackets = bracketsConfig.map(item => item[0] == item[1]? item[0] : false).filter(item => item != false)
  strArr.map((item, i) => {
    if (twinBrackets.includes(strArr[i]) && stack[stack.length - 1] == strArr[i]) stack.pop()
    else if (openBrackets.includes(strArr[i])) stack.push(item)
    else if (closeBrackets.indexOf(strArr[i]) == openBrackets.indexOf(stack[stack.length - 1])) stack.pop()
    else bool = false
  })
  if (stack.length == 0 && bool) return true
  else return false
}
