function smarterFac(n) {
  var upperLimit, lowerLimit, fFactors, factors, pFac;
  upperLimit = Math.floor(n/2);
  fFactors = fermFac(n);
  lowerLimit = fFactors[1];
  if (upperLimit % 2 === 0) {
    fFactors.push(upperLimit);
    pFac = upperLimit - 1;
  } else {pFac = upperLimit - 2;}
  factors = trialDiv(n, pFac, lowerLimit, fFactors);
  factors = buildFactors(n, factors);
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
  while (pFac >= lowerLimit) {
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

/*
486847,1234169,8462696833,716151937,408464633,87625999,10086647,5753023,1234169,1234169,486847,71,839,1471,6857,59569,104441,486847
*/