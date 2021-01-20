/**
 * @param {number} n
 * @return {number}
 */
const fib = function (n) {
  if (n < 1) {return 0}
  if (n === 1 || n === 2) {return 1}
  let prev = 1, curr = 1
  for (let i = 3; i <= n; i++) {
    const sum = prev + curr
    prev = curr
    curr = sum
    if(i === n){
      return curr
    }
  }
}

