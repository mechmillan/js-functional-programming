// NOTE: the following utilities are for educational purposes only, more robust functional utilities can be found in popular FP JS libraries like Rambda, functional.js, etc.

// unary: wraps a function call to ensure that only one argument will pass through
// motivation: useful when you want a function to only receive a single argument
function unary(fn) {
  return function onlyOneArg(arg) {
    return fn(arg);
  };
}
const unaryES6 = fn => arg => fn(arg);

// identity: takes one argument and does nothing but returns the value untouched
// motivation: useful for .map(), .filter(), .reduce() TODO: improve desc.
function identity(value) {
  return value;
}
const identityES6 = value => value;

// constant: takes one argument and returns a function expression that returns that argument
// motivation: useful for APIs that expect a function (even if the function is just returning a value)
function constant(v) {
  return function value() {
    return v;
  };
}
const constantES6 = v => () => v;

// spreadArgs: adapt a function so that it spreads out a received array as its individual arguments
// motivation: when you don't have the ability to change a function definition (3rd party api maybe?). Can have functions that return multiple values via an array but can also treat those multiple values independently as inputs to other functions.
function spreadArgs(fn) {
  return function spreadFn(argsArr) {
    return fn(...argsArr);
  };
}
const spreadArgsES6 = fn => argsArr => fn(...argsArr);

// gatherArgs: gather individual arguments into a single array
// motivation: adapt a function with array parameter destructuring to another utility that passes arguments seperately
function gatherArgs(fn) {
  return function gatheredFn(...argsArr) {
    return fn(argsArr);
  };
}
const gatherArgsES6 = fn => (...argsArr) => fn(argsArr);

// partial: preset arguments to a function
// motivation: useful for when you want to supply some parameters up front and have others supplied at a later point
function partial(fn, ...presetArgs) {
  return function partiallyApplied(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}
const partialES6 = (fn, ...presetArgs) => (...laterArgs) =>
  fn(...presetArgs, ...laterArgs);

// reverseArgs: wraps a function to reverse its arguments order
// motivation: if you want to partially apply starting from the right, rather then the left
function reverseArgs(fn) {
  return function argsReveresed(...args) {
    return fn(...args.reverse());
  };
}
const reverseArgsES6 = fn => (...args) => fn(...args.reverse());

// partialRight: partially applies the rightmost arguments
// motivation: instead of having to use reverseArgs, can partially apply starting from the right
function partialRight(fn, ...presetArgs) {
  return function partiallyApplied(...laterArgs) {
    // note the order passed in: later, preset
    return fn(...laterArgs, ...presetArgs);
  };
}
const partialRightES6 = (fn, ...presetArgs) => (...laterArgs) =>
  fn(...laterArgs, ...presetArgs);
