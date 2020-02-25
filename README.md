## vanillajs-basics
Reference book [Speaking JavaScript](http://speakingjs.com/)

### Data types
In javascript they are 7 primitive data types (values).
This type of data has no methods, are immutable, and aren't objects.
* string: a sequence of characters
* number: numeric data type in the double precision 64 bit floating point.
* bigint: can represent integers in the arbitrary precision, to store and operate large integers.
* boolean: is a logical data type that can have only the values true or false.
* undefined: means that doesn't have value.
* null: a reference that points to a nonexistent or invalid object.
* symbol: produces an anonymous, unique value.

* object: all non primitive values are objects. Objects are mutable, they are addressed by reference, not by value.

#### Some weird things
Trying `typeof` on a `Null` returns `'Object'`... this is a bug that isn't fixed because it would break existing code. This has been around since the first version of JavaScript inside the `typeof` function in JS source.

`NaN` is defined as a numeric type, but it's not a real number, it is the result of some mathematical operations that can't be quantified as number.

And soooooo many weird things about [type coercion](https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/)
