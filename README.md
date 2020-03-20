## vanillajs-basics
Reference [Speaking JavaScript](http://speakingjs.com/), [Eloquent JavaScript](https://eloquentjavascript.net/) and [moz://a](https://developer.mozilla.org/)

### Values
Primitive values. This type of data has no methods, are immutable, and aren't objects.
* string: a sequence of characters
* number: numeric data type in the double precision 64 bit floating point.
* boolean: is a logical data type that can have only the values true or false.
* undefined: means that doesn't have value.
* null: a reference that points to a nonexistent or invalid object.
* symbol: produces an anonymous, unique value.

### Objects
All non primitive values are objects. Objects are mutable, they are addressed by reference, not by value.
* object: used to stored keyed collections and more complex entities.
* arrays: sequences of elements that can be accessed by integers started at zero.
* regular expressions: patterns used to match character combinations in strings.
* date: represent a single moment in time in a platform-independent format. Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.
* ...


#### Some weird things
Trying `typeof` on a `Null` returns `'Object'`... this is a bug that isn't fixed because it would break existing code. This has been around since the first version of JavaScript inside the `typeof` function in JS source.

`NaN` (“not a number”) is defined as a numeric type, but it's not a real number, it is the result of some mathematical operations that can't be quantified as number.

There is only one value in JavaScript that is not equal to itself, and that is `NaN`.
```
console.log(NaN == NaN)
// → false
```

And so on...

There is some weird things about [type coercion](https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/).
