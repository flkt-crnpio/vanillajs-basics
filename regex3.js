// Complete the function in the editor below by returning a RegExp object, 're', that matches every integer in some string 's'.


function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    let re = /\d+/g;

    /*
     * Do not remove the return statement
     */
    return re;
}


function main() {
    const re = regexVar();
    const s = '102, 1948948 and 1.3 and 4.5';

    const r = s.match(re);

    for (const e of r) {
        console.log(e);
    }
}
main()
