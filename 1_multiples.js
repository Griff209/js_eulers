var multiples = [];
var i = 999;
while (i > 0) {
  var isMultiple = (i % 3) === 0 || (i % 5) === 0;
  if (isMultiple) {
    multiples.push(i);
  } 
  i--;
}

multiples.reduce((acc, val) => acc + val);
