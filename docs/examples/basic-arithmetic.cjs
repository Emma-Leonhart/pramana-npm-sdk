const { Gint, Gauss, isPrime } = require('@pramana/sdk');

// ── Gaussian Integers ──────────────────────────────────────

const a = new Gint(3, 4);       // 3 + 4i
const b = new Gint(1, -2);      // 1 - 2i

console.log('a =', a.toString());           // 3 + 4i
console.log('b =', b.toString());           // 1 - 2i
console.log('a + b =', a.add(b).toString()); // 4 + 2i
console.log('a - b =', a.sub(b).toString()); // 2 + 6i
console.log('a * b =', a.mul(b).toString()); // 11 - 2i
console.log('a² =', a.pow(2).toString());    // -7 + 24i
console.log('|a|² =', a.norm);              // 25n
console.log('conj(a) =', a.conjugate.toString()); // 3 - 4i

// ── Number Theory ──────────────────────────────────────────

console.log('\n3 is Gaussian prime:', Gint.isGaussianPrime(new Gint(3, 0)));  // true
console.log('5 is Gaussian prime:', Gint.isGaussianPrime(new Gint(5, 0)));  // false
console.log('1+i is Gaussian prime:', Gint.isGaussianPrime(new Gint(1, 1))); // true

console.log('isPrime(7):', isPrime(7n));   // true
console.log('isPrime(10):', isPrime(10n)); // false

// ── Gaussian Rationals ─────────────────────────────────────

const half = new Gauss(1, 2, 0, 1);     // 1/2
const third = new Gauss(1, 3, 0, 1);    // 1/3

console.log('\n1/2 + 1/3 =', half.add(third).toString());   // 5/6
console.log('1/2 * 1/3 =', half.mul(third).toString());     // 1/6
console.log('1/2 / 1/3 =', half.div(third).toString());     // 3/2

// Complex rational
const z = new Gauss(3, 4, 5, 7);  // 3/4 + 5/7 i
console.log('z =', z.toString());
console.log('z.isReal =', z.isReal);           // false
console.log('z.isGaussianInteger =', z.isGaussianInteger); // false
