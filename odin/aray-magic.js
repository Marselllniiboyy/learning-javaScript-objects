// sum of tripeld Evens

function sumOfTripledEvens() {
  // sum of everi even number like 2+3 4+3
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let sumEvent = 0;
  for (num of numbers) {
    if (num % 2 === 0) {
      let tripelEvent = num * 3;
      sumEvent += tripelEvent;
    }
  }
  return sumEvent;
}

sumOfTripledEvens();
