/*
Task
Complete the getLetter(s) function.
It has one parameter: a string, 's',
consisting of lowercase English alphabetic letters (i.e., a through z).
It must return A, B, C, or D depending on the following criteria:

If the first character in string 's' is in the set {a,e,i,o,u}, then return A.
If the first character in string 's' is in the set {b,c,d,e,f}, then return B.
If the first character in string 's' is in the set {h,j,k,l,m}, then return C.
If the first character in string 's' is in the set {n,p,k,r,s,t,v,w,x,y,z}, then return D.
Hint: You can get the letter at some index 'i' in 's' using the syntax s[i] or s.charAt(i).
*/

function getLetter(s) {
    let letter;
    // Write your code here
    switch(true) {
        case (['a','e','i','o','u'].includes(s[0])):
            letter = 'A';
            break;
        case (['b','c','d','f','g'].includes(s[0])):
            letter = 'B';
            break;
        case (['h','j','k','l','m'].includes(s[0])):
            letter = 'C';
            break;
        default:
            letter = 'D';
            break;
    }
    return letter;
}
