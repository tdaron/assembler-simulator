# Node Version - Assembler Simulator

This package provides a Node.js-based runner for the assembler simulator.

## Running Tests

The test suite uses [Mocha](https://mochajs.org/) to verify the assembler and emulator functionality.

### Prerequisites

Install dependencies:

```bash
cd node-version
pnpm install
```

### Run Tests

```bash
pnpm test
```

This runs `mocha --require tsx test/test.ts` which:
- Uses `tsx` to run TypeScript tests directly
- Executes all test cases in `test/test.ts`

### Test Structure

The tests verify various assembly instructions and programs:

- **ASM tests**: Basic instruction tests (INC, MOV, etc.)
- **Syllabus tests**: Curriculum-aligned tests covering:
  - Arithmetic operations (ADD, SUB, MUL, DIV)
  - Data definitions (DB)
  - Comparisons (CMP) and flags (zero, carry)
  - Overflow detection
  - Jump instructions (JMP, JE, JZ, JA, JBE, etc.)
  - Loops
  - Data structures (arrays, coordinates)
  - Functions (CALL, RET, PUSH, POP)
  - Recursion (factorial, sum)

### Writing New Tests

Tests use a `check_equality` helper that:
1. Creates a new `Runner` instance
2. Executes the provided assembly code
3. Verifies registers, flags, or memory values match expected results

Example:

```typescript
it('my test', function() {
    let code = `
MOV A, 5
ADD A, 3
HLT
`;
    check_equality(code, { "A": 8 })
});
```

Expected values can be:
- **Registers**: `{ "A": 10, "B": 5 }` - checks register values
- **Flags**: `{ "zero": true, "carry": false }` - checks CPU flags
- **Labels**: `{ "myvar": 42 }` - checks memory at label address
- **Arrays**: `{ "arr": [1, 2, 3] }` - checks consecutive memory values
