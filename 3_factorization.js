//smarterFac(600851475143).filter(factor => isPrime(factor));
function smarterFac(n) {
  var upperLimit, fFactors, lowerLimit, pFac, bigFactors, factors;
  upperLimit = Math.floor(n/2);
  fFactors = fermFac(n);
  lowerLimit = fFactors[1];
  if (upperLimit % 2 === 0) {
    if (upperLimit === (n/2)) {
        fFactors.push(upperLimit);
    }
    pFac = upperLimit - 1;
  } else {pFac = upperLimit - 2;}
  bigFactors = trialDiv(n, pFac, lowerLimit, fFactors);
  factors = buildFactors(n, bigFactors);
  return factors;
} 

function fermFac(n) {  
  var a, b, facs; 
  a = Math.ceil(Math.sqrt(n));
  b = (a*a) - n
  while (!Number.isInteger(Math.sqrt(b))) {
    a +=1;
    b = (a*a) - n;
  }
  facs = [a - Math.sqrt(b), a + Math.sqrt(b)]
  return facs;
} 

function trialDiv(n, pFact, lowerLimit, facts = []) {
  while (pFact > lowerLimit) {
    if (n % pFact === 0) {
      //if !factors.includes(pFac)
      facts.push(pFact);
  } pFact -= 2;   
  } 
  return facts; 
}

function buildFactors(n, facs) {
  facs.forEach(function(factor){
    //fac = n/factor;
    //if !factors.includes(fac)
    facs.push(n/factor)
  });
  return facs;
}

function isPrime(n) {
  var nums = smarterFac(n);
  function nonPrFac(factor) {
      return (factor != this) && (factor !== 1);
    }
  return nums.filter(nonPrFac, n).length > 0 ? false : true;
}
