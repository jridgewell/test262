// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.1.1.3-2
es6id: 18.1.3
esid: sec-undefined
description: undefined is not writable, should throw TypeError in strict mode
flags: [onlyStrict]
---*/

var global = this;

assert.throws(TypeError, function() {
  global["undefined"] = 5;  // Should throw a TypeError as per 8.12.5
});
assert.sameValue(global["undefined"], void 0);
assert.sameValue(undefined, void 0);
