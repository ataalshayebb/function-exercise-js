
// q1  function revfun (a){
// var z=" " ;
// for (let i = a.toString().length-1 ; i>=0 ; i--){
//   z+=a[i];
// }
// console.log(z);
// }

// let x = prompt("Please enter the number that you wanted to be reversed");
// revfun(x);

// q2   for(i=0; i<=15;i++){
//   if (i%2==0){
//     console.log(i+"even")
//   }
//   else{
//     console.log(i+"odd")
//   }
// }




function alphabet_order(str){
  
return str.split('').sort().join('');
}

let a = prompt ("Enter a word ");
console.log(alphabet_order(a));

//  q4  let a =  prompt ("Enter a number :");
//     let arr = a.toString()
//     var newArray=[arr[0]]
//             for (let i = 0; i < arr.length; i++) {
//                 if(arr[i] % 2 === 0 && arr[i+1] % 2 === 0){
//                     newArray.push('-', arr[i+1])
//                 } else{
//                     newArray.push(arr[i+1])
//                 }
//             }
//     console.log('newArray', newArray.join(''))

// q5  let a =prompt ("Enter Age Please");
// parseInt(a)>=18 ?console.log("adult") : console.log("Minor");
