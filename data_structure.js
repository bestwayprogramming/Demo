// const fruits=['mango','kiwi','banana','watermelon','dragon fruit']
// function appendlater(f,indexa){
//     console.log(`${indexa}.${f}`)
// }
// fruits.forEach(appendlater)

// const fruits=['mango','kiwi','banana','watermelon']
// fruits.forEach(function(f,i){
//     console.log(`${i}.${f}`)
// })

// [18,25,30,50,70].filter(function sum(num){
//     if(num>25){
//     console.log(num);
// }
// })

//Using of maps

// [44,43,20,18].map(function (num){
//     console.log(num*5)
// })

// const result = [];
// const drone={
//     speed:150,
//     color:'red'
// }
// const key = Object.keys(drone);
// key.forEach(function (d){
//     result.push(d,drone[d])
// })

// console.log(result)

const a= [];
const b={
    name:'vivek',
    age:24,
    dob:'25-07-2003'
};
const key=Object.keys(b);
key.forEach(function(c){
    a.push(c,b[c])
});
console.log(a);
