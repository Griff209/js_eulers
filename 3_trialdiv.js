function factor(n, pFac = 2, factors = []) {
  if (pFac >= n) {
    return factors;
  } 
  if (n % pFac === 0) {
    factors.push(pFac);
  } 
  return factor(n, pFac + 1, factors); 
}

factor(945);
/*
3,5,7,9,15,21,27,35,45,63,105,135,189,315
*/