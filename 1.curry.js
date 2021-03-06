function curry(fn) {
  // your code here
  return function curried(...args) {
    console.log(args.length, fn.length)
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return curried.bind(this, ...args);
    }
  }
}


const join = (a, b, c) => {
   return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)

curriedJoin(1)(2)(3) // '1_2_3'
curriedJoin(1, 2, 3) // '1_2_3'
curriedJoin(1)(2, 3) // '1_2_3'
curriedJoin(1, 2)(3) // '1_2_3'
