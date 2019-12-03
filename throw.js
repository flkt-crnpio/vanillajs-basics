/*
Task

Complete the isPositive function below. It has one integer parameter, 'a'.
If the value of 'a' is positive, it must return the string YES.
Otherwise, it must throw an Error according to the following rules:

If 'a' is '0', throw an Error with 'message' = Zero Error.
If 'a' is negative, throw an Error with 'message' = Negative Error.
*/

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */

function isPositive(a) {
    if (a > 0) {
        return 'YES';
    }
    else {
        let err = (a===0)? 'Zero Error':'Negative Error';
        throw Error(err);
    }
}
