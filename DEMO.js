// //DAY-2 
// function outer(){
//     let count = 0;
    
//     function inner(){
//         count++;
//         console.log(count);
//     }
//     return inner;
// }
// const counter = outer();
// counter(); // 1
// counter(); // 2
// counter(); // 3


let x = {
    a:10,
    b:20,
    c:"HELLO"
};
delete x.a;
console.log(x);

