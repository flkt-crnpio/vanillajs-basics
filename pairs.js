function sockMerchant(n, ar) {
  let pair=0;
  for(let i = 0; i < (ar.length - 1); i++){
    for(let j = (i+1); j < ar.length; j++){
      if(ar[j] === undefined) break;
      if(ar[i] === ar[j] && ar[i] !== undefined){
        pair++;
        ar.splice(j,1);
        break;
      }
    }
    if(ar[i] === undefined) break;
  }
  return pair;
}

const n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

console.log( sockMerchant(n,ar) );
