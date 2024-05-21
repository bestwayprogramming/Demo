var intro={
    name:"vivek",
    age:20
}

var introduction=Object.create(intro);
console.log(introduction)

var intro2=Object.create(intro)
console.log(intro.name)

var intro3=Object.create(intro)
intro3.name="avi"
console.log(intro3.name)
