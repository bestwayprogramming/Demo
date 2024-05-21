// car = {
//     speed:[15,20,55,100,120,200],
//     color:'red'
// }

// car1=['15','red']

// console.log(Object.entries(car))
// console.log(Object.values(car))
// console.log(Object.keys(car))
// for(c of car.speed){
//     console.log(c)
// }

// var car = {
//     price : 5000000,
//     color: 'sliver',
//     pertol_tank: 50,
//     speed: 120
// }
// var sjj='speed';

// for(key of Object.keys(car)){
//     console.log(key,"Values are: ",car[key])
// }

// console.log(car['speed'])

// function speedcheck(){
// var dynamickey;
// var random=Math.random();
// if(random>0.5){
//     dynamickey='speed'
// }
// else{
//     dynamickey='color'
// }

//     var car= {
//     speed:120,
//     color:'black'
// }
// console.log(random)
// console.log(car[dynamickey])
// }

// speedcheck()

var car = {
    engine: true,
    steering:true,
    speed: 'slow'
}

var carspeed= Object.create(car);
carspeed.speed='fast';
console.log(carspeed)
console.log('--for-in is unrealible---------------');
for(car1 in carspeed){
    console.log(car1);
}
console.log('--for-of is reliable---------------');
for(key of Object.keys(carspeed)){
    console.log(key,"Values are: ",carspeed[key])
}
