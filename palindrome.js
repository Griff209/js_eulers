function isPalindrome(number) {
  let digitArray = Array.isArray(number) ? number.slice() : String(number).split("")
  ;if (digitArray.length === 1 || digitArray.length === 0) 
    return true
  if (digitArray.pop() === digitArray.shift()) 
    return isPalindrome(digitArray)
  return false
}
