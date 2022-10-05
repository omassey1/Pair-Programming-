
function splitOddAndEven(numbers) {
    let odd = [];
    let even = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
          
          even.push(numbers[i]);
        } else {
        
          odd.push(numbers[i]);
        }
      }
      const returnObject = {
        odd,
        even,
      };
    
      return returnObject;
    }

    console.log(splitOddAndEven([2, 4, 7, 11, 15, 16]));

console.log(splitOddAndEven([2, 4, 7, 11, 15, 16]));
