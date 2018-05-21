function smarterFac(n) {
  var upperLimit, fFactors, lowerLimit, pFac, bigFactors, factors;
  upperLimit = Math.floor(n/2);
  fFactors = fermFac(n);
  lowerLimit = fFactors[1];
  if (upperLimit % 2 === 0) {
    fFactors.push(upperLimit);
    pFac = upperLimit - 1;
  } else {pFac = upperLimit - 2;}
  bigFactors = trialDiv(n, pFac, lowerLimit, fFactors);
  factors = buildFactors(n, bigFactors);
  return factors;
} 

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

function trialDiv(n, pFac, lowerLimit, factors = []) {
  while (pFac > lowerLimit) {
    if (n % pFac === 0) {
      factors.push(pFac);
  } pFac -= 2;   
  } 
  return factors; 
}

function buildFactors(n, factors) {
  factors.forEach(function(factor){factors.push(n/factor)});
  return factors;
}
