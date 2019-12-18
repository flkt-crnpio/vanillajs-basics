// function andBin(a,b) {
//     let binA = a.toString(2);
//     let binB = b.toString(2);
//     let arrbin = [];
//
//     if(binA.length != binB.length) {
//       let diff = Math.abs(binA.length - binB.length);
//       if (binA.length > binB.length) {
//         binB = '0'.repeat(diff) + binB;
//       } else {
//         binA = '0'.repeat(diff) + binA;
//       }
//     }
//
//     for(let i=0; i<binA.length; i++){
//       if(binA.charAt(i) === '1' && binB.charAt(i) === '1') {
//         arrbin[i] = 1;
//       } else {
//         arrbin[i] = 0;
//       }
//     }
//     arrbin = arrbin.join('');
//
//     return parseInt(arrbin, 2);
// }
function getMaxLessThanK(n, k) {
    let max = 0;
    for(let a=1; a<n; a++) {
        for(let b=a+1; b<=n; b++) {
            // let intBin = andBin(a,b);
            let intBin = (a&b); //pffffff que triste no saber y hacerlo a pata!@
            if ( intBin < k && intBin > max ) {
              max = intBin;
            }
        }
    }
    return max;
}

console.log(getMaxLessThanK(8,3));
