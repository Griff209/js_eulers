function fermFac(n) {  
  var a, b, factors; 
  a = Math.ceil(Math.sqrt(n));
  b = (a*a) - n
  while (!Number.isInteger(Math.sqrt(b))) {
    a +=1;
    b = (a*a) - n;
  }
  factors = [a - Math.sqrt(b), a + Math.sqrt(b)]
  return factors;
} 