import { Gint, Gauss } from '@pramana/sdk';

// ── Pramana Identity for Gaussian Integers ─────────────────

const values = [
  new Gint(0, 0),    // zero
  new Gint(1, 0),    // one
  new Gint(0, 1),    // i
  new Gint(3, 4),    // 3 + 4i
  new Gint(-1, 0),   // -1
];

console.log('Gaussian Integer Pramana IDs:');
console.log('─'.repeat(80));
for (const g of values) {
  console.log(`  ${g.toString().padEnd(10)} key=${g.pramanaKey.padEnd(12)} id=${g.pramanaId}`);
}

// ── Pramana Identity for Gaussian Rationals ────────────────

console.log('\nGaussian Rational Pramana IDs:');
console.log('─'.repeat(80));

const rationals = [
  new Gauss(1, 2, 0, 1),    // 1/2
  new Gauss(1, 3, 0, 1),    // 1/3
  new Gauss(3, 4, 5, 7),    // 3/4 + 5/7 i
];

for (const q of rationals) {
  console.log(`  ${q.toString().padEnd(20)} key=${q.pramanaKey.padEnd(12)} id=${q.pramanaId}`);
}

// ── Cross-language consistency ──────────────────────────────

console.log('\nPramana IDs are deterministic and identical across all SDK languages.');
console.log('The same value always produces the same UUID v5, whether computed in');
console.log('TypeScript, Python, C#, Rust, Go, or Java.');

const g = new Gint(3, 4);
console.log(`\nGint(3,4).pramanaUrl = ${g.pramanaUrl}`);
