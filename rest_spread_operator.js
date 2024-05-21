//spread operator

// const place =[
//     "Taj Mahal",
//     "Qutur Minar",
//     "Sadar Vallabhai Patel Statue"
// ]
// function showiternary(place1,place2,place3){
//     console.log("First I visits ",place1);
//     console.log("then I visits ",place2);
//     console.log("Last with a visits to",place3);
// }

// showiternary(...place)

//rest operator

// const top7=[
//     'Taj Mahal',
//     'Qutur Minar',
//     'Gloden Temple',
//     'Goa Beach',
//     'Juhu Beach',
//     'Infosys Headquarter',
//     'Apple Company Mumbai'
// ];
// const []=top7;
// const [first,second,thrid,...secondVisit]=top7;

// console.log(first)

function taxRate(rate,...itemsbrought){
    return itemsbrought.map(function (item){
        return rate * item
    })
}

let shoppingcart=taxRate(1.1,23,23,43,54,35)

console.log(shoppingcart)
