function fib(n) {
  if (n <= 2) {
    return 1
  }

  return (fib(n - 1) + fib(n - 2))
}

console.log(fib(7))
console.log(fib(6))

// Note: time complexity can be improved with MEMOIZATION
