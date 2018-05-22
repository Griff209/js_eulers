function fibonacci(count, terms=[1], limit = 4000000) {
  if (terms[terms.length - 1] > limit) {
    terms.pop();
    return terms;
  } else if (count === 1) {
    return terms; 
  } else {
    var lTerms, latter, former, next;
    lTerms = terms.slice();
    latter = lTerms.pop() || 0;
    former = lTerms.pop() || 0;
    next = latter + former;
    terms.push(next);
    return fibonacci(count - 1, terms, limit);
  }
}
fibonacci(33).filter(term => term % 2 === 0).reduce((fib1, fib2) => fib1 + fib2);
