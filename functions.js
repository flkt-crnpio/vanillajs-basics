/*
 * Create the function factorial here
 */
function factorial(n) {
    let f = n;
    if (n === 0 || n === 1) {
        return 1;
    }
    while(n > 1) {
        n--;
        f *= n;
    }
    return f;
}
