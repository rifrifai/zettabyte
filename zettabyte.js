const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function result(number) {
  const odd = number.filter((i) => i % 2 !== 0);
  const even = number.filter((i) => i % 2 === 0);
  return console.log(odd, even);
}

result(number);
