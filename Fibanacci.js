function generateFibonacci(n) {
  const fib = [0, 1]; 

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib.slice(0, n);
}

const n = 10;
const sequence = generateFibonacci(n);
console.log(`Fibonacci sequence of ${n} terms:`, sequence);
