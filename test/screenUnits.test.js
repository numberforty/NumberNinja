const assert = require('assert');
const fs = require('fs');
const vm = require('vm');

const code = fs.readFileSync(__dirname + '/../plugins/CommunityExtensions/ScreenUnits/ScreenUnits.js', 'utf8');
const sandbox = {
  numi: { addUnit: () => {}, addFunction: () => {} },
};
vm.createContext(sandbox);
vm.runInContext(code, sandbox);

const { calculate } = sandbox;

assert.strictEqual(typeof calculate, 'function');
assert.strictEqual(calculate(32), 2);
assert.strictEqual(calculate(32, 32), 1);
assert.strictEqual(calculate(0, 10), 0);
console.log('All tests passed.');
