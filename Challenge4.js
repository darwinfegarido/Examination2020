function calculateValidationNumber(input) {
   if(input.toString().length == 1) return input
   const newInput = input.toString()
                          .split('')
                          .map(e => Number(e))
                          .reduce((total, num) => {
                            return total + num
                          })
    return calculateValidationNumber(newInput)
}

console.log(calculateValidationNumber(444444)); // Output: 6
