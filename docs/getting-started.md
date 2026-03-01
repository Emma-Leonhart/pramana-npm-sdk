# Getting Started with Pramana SDK

This guide shows how to use the Pramana SDK in both TypeScript and JavaScript. The SDK ships dual ESM + CJS builds — pick whichever module system your project uses.

## Installation

```bash
npm install @pramana/sdk
```

Requires Node 18+.

## Importing

**TypeScript / ES Modules:**
```typescript
import { Gint, Gauss, isPrime } from '@pramana/sdk';
```

**JavaScript (ESM):**
```javascript
import { Gint, Gauss, isPrime } from '@pramana/sdk';
```

**JavaScript (CommonJS):**
```javascript
const { Gint, Gauss, isPrime } = require('@pramana/sdk');
```

---

## Gaussian Integers (Gint)

A Gaussian integer is a complex number `a + bi` where both `a` and `b` are integers. The `Gint` class provides exact arithmetic with arbitrary-precision BigInt.

### Construction

<table>
<tr><th>TypeScript</th><th>JavaScript</th></tr>
<tr><td>

```typescript
import { Gint } from '@pramana/sdk';

const a = new Gint(3, 4);       // 3 + 4i
const b = new Gint(1, -2);      // 1 - 2i
const zero = Gint.ZERO;         // 0
const i = Gint.I;               // i
const fromArr = Gint.fromArray([5, 7]); // 5 + 7i
```

</td><td>

```javascript
const { Gint } = require('@pramana/sdk');

const a = new Gint(3, 4);       // 3 + 4i
const b = new Gint(1, -2);      // 1 - 2i
const zero = Gint.ZERO;         // 0
const i = Gint.I;               // i
const fromArr = Gint.fromArray([5, 7]); // 5 + 7i
```

</td></tr>
</table>

### Arithmetic

<table>
<tr><th>TypeScript</th><th>JavaScript</th></tr>
<tr><td>

```typescript
const sum = a.add(b);        // 4 + 2i
const diff = a.sub(b);       // 2 + 6i
const product = a.mul(b);    // 11 - 2i
const power = a.pow(2);      // -7 + 24i
const neg = a.neg();         // -3 - 4i

// Division returns a Gauss (rational)
const quotient = a.div(b);
console.log(quotient.toString()); // "-1 + 2i"
```

</td><td>

```javascript
const sum = a.add(b);        // 4 + 2i
const diff = a.sub(b);       // 2 + 6i
const product = a.mul(b);    // 11 - 2i
const power = a.pow(2);      // -7 + 24i
const neg = a.neg();         // -3 - 4i

// Division returns a Gauss (rational)
const quotient = a.div(b);
console.log(quotient.toString()); // "-1 + 2i"
```

</td></tr>
</table>

### Number Theory

<table>
<tr><th>TypeScript</th><th>JavaScript</th></tr>
<tr><td>

```typescript
import { Gint, isPrime } from '@pramana/sdk';

// Gaussian primality
Gint.isGaussianPrime(new Gint(3, 0));  // true  (3 ≡ 3 mod 4)
Gint.isGaussianPrime(new Gint(2, 0));  // false (2 = -i(1+i)²)
Gint.isGaussianPrime(new Gint(1, 1));  // true  (norm 2 is prime)

// GCD and extended GCD
const g = Gint.gcd(new Gint(11, 3), new Gint(1, 8));
const [gcd, x, y] = Gint.xgcd(
  new Gint(11, 3),
  new Gint(1, 8)
);
// Bezout's identity: gcd = alpha*x + beta*y

// Regular prime check
isPrime(7n);   // true
isPrime(10n);  // false
```

</td><td>

```javascript
const { Gint, isPrime } = require('@pramana/sdk');

// Gaussian primality
Gint.isGaussianPrime(new Gint(3, 0));  // true  (3 ≡ 3 mod 4)
Gint.isGaussianPrime(new Gint(2, 0));  // false (2 = -i(1+i)²)
Gint.isGaussianPrime(new Gint(1, 1));  // true  (norm 2 is prime)

// GCD and extended GCD
const g = Gint.gcd(new Gint(11, 3), new Gint(1, 8));
const [gcd, x, y] = Gint.xgcd(
  new Gint(11, 3),
  new Gint(1, 8)
);
// Bezout's identity: gcd = alpha*x + beta*y

// Regular prime check
isPrime(7n);   // true
isPrime(10n);  // false
```

</td></tr>
</table>

---

## Gaussian Rationals (Gauss)

A Gaussian rational is `(a/b) + (c/d)i` where a, b, c, d are integers and b, d > 0. The `Gauss` class provides exact rational complex arithmetic.

### Construction

<table>
<tr><th>TypeScript</th><th>JavaScript</th></tr>
<tr><td>

```typescript
import { Gauss } from '@pramana/sdk';

const half = new Gauss(1, 2, 0, 1);     // 1/2
const complex = new Gauss(3, 4, 5, 7);  // 3/4 + 5/7 i
const five = Gauss.fromInt(5);           // 5
const gi = Gauss.fromComplex(3, 4);     // 3 + 4i
const parsed = Gauss.parse("3,4,5,7");  // 3/4 + 5/7 i
```

</td><td>

```javascript
const { Gauss } = require('@pramana/sdk');

const half = new Gauss(1, 2, 0, 1);     // 1/2
const complex = new Gauss(3, 4, 5, 7);  // 3/4 + 5/7 i
const five = Gauss.fromInt(5);           // 5
const gi = Gauss.fromComplex(3, 4);     // 3 + 4i
const parsed = Gauss.parse("3,4,5,7");  // 3/4 + 5/7 i
```

</td></tr>
</table>

### Exact Rational Arithmetic

<table>
<tr><th>TypeScript</th><th>JavaScript</th></tr>
<tr><td>

```typescript
const half = new Gauss(1, 2, 0, 1);
const third = new Gauss(1, 3, 0, 1);

const sum = half.add(third);       // 5/6
const diff = half.sub(third);      // 1/6
const product = half.mul(third);   // 1/6
const quotient = half.div(third);  // 3/2

console.log(sum.toString());      // "5/6"
console.log(sum.a, sum.b);        // 5n, 6n
```

</td><td>

```javascript
const half = new Gauss(1, 2, 0, 1);
const third = new Gauss(1, 3, 0, 1);

const sum = half.add(third);       // 5/6
const diff = half.sub(third);      // 1/6
const product = half.mul(third);   // 1/6
const quotient = half.div(third);  // 3/2

console.log(sum.toString());      // "5/6"
console.log(sum.a, sum.b);        // 5n, 6n
```

</td></tr>
</table>

---

## Pramana Identity

Every numeric value has a deterministic Pramana identity (UUID v5) that is identical across all SDK languages.

<table>
<tr><th>TypeScript</th><th>JavaScript</th></tr>
<tr><td>

```typescript
import { Gint, Gauss } from '@pramana/sdk';

const g = new Gint(3, 4);
console.log(g.pramanaKey);    // "3,1,4,1"
console.log(g.pramanaId);     // UUID v5 string
console.log(g.pramanaLabel);  // "pra:num:3,1,4,1"
console.log(g.pramanaUrl);    // "https://pramana.dev/entity/..."

// Gauss values work the same way
const q = new Gauss(1, 2, 3, 4);
console.log(q.pramanaId);
console.log(q.pramanaUrl);
```

</td><td>

```javascript
const { Gint, Gauss } = require('@pramana/sdk');

const g = new Gint(3, 4);
console.log(g.pramanaKey);    // "3,1,4,1"
console.log(g.pramanaId);     // UUID v5 string
console.log(g.pramanaLabel);  // "pra:num:3,1,4,1"
console.log(g.pramanaUrl);    // "https://pramana.dev/entity/..."

// Gauss values work the same way
const q = new Gauss(1, 2, 3, 4);
console.log(q.pramanaId);
console.log(q.pramanaUrl);
```

</td></tr>
</table>

---

## Mathematical Aliases

For those who prefer standard mathematical notation:

```typescript
import { Zi, Qi } from '@pramana/sdk';  // Zi = Gint, Qi = Gauss
```

```javascript
const { Zi, Qi } = require('@pramana/sdk');  // Zi = Gint, Qi = Gauss
```

---

## Runnable Examples

See the [`docs/examples/`](examples/) directory for complete runnable scripts:

- [`basic-arithmetic.ts`](examples/basic-arithmetic.ts) / [`basic-arithmetic.cjs`](examples/basic-arithmetic.cjs) — Core arithmetic operations
- [`pramana-ids.ts`](examples/pramana-ids.ts) / [`pramana-ids.cjs`](examples/pramana-ids.cjs) — Pramana identity generation
