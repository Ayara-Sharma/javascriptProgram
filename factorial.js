
//------------factorial using loop-------------//

let num = 5;
let num1 = 1;
for (let a=1; a<=num; a++ ){
     num1 *= a;
}
console.log(num1);



//------------factorial using recursion----------//

function facRec(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * facRec(n - 1); // Recursive call
    }
  }
  
  console.log(facRec(6));
