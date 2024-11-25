// sum of tripeld Evens

function sumOfTripledEvens() {
  // sum of everi even number like 2+3 4+3
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let evenNumbersOnly = [];
  let sumEvent = 0;
  // for (num of numbers) {
  //   if (num % 2 === 0) {
  //     let tripelEvent = num * 3;
  //     sumEvent += tripelEvent;
  //   }
  // }
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      const tripelNumber = numbers[i] + 3;
      evenNumbersOnly.push(numbers[i]);
      sumEvent += tripelNumber;
    }
  }
  console.log(...evenNumbersOnly);
  console.log(sumEvent);
  return sumEvent;
}

sumOfTripledEvens();
