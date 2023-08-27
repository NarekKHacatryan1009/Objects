// // Objects {}
// let obj = {
//     name:"Narek",
//     age:18,
//     phone:"+37477190202",
//     "birth day": "10.09.2004"
// }
// let b = Number(obj.phone)
// console.log(obj);

// console.log(obj.name); // ktpi Narek

// console.log(obj.age); // 18

// console.log(obj.phone); // ktpi hamary

// console.log(b);

// console.log(obj["birth day"]);

// obj.job = "developer"
// console.log(obj);

// // obj.job = prompt("Grir masnagitutyun")
// // console.log(obj); // drsic grvac

// let a = obj.name
// a = a.split("")
// console.log(a[0]);
// // let ob = new Object()

// delete obj["birth day"]
// console.log(obj);

// function num(name, age){
//     return{
//         name:name,
//         age:age,
//     }
// }
// console.log(num("Narek",18));

// // function numm(name, age, phone){
// //     return{
// //         name:name,
// //         age:age,
// //         phone:phone,
// //     }
// // }
// // console.log(numm(prompt("Greq dzer anuny"),prompt("Greq dzer tariqy"),prompt("Greq dzer heraxosahamary")));


// let num = obj
// console.log(num);

// stexcel object vercnel objecti keyeric meky u dardznel mecatar

//  let obj = {
//      name:"Narek",
//      age:18,
//      phone:"+37477190202",
//      "birth day": "10.09.2004"
// }


// let a = obj.name
// console.log(a.toLocaleUpperCase());


// let obj = {
//       name:"Narek",
//       age:18,
//       job:"Developer"    
// }
// obj.sayHi()
// let o = obj
// console.log(o);
// let clon = {
//     Name:"Aram"
// }
// Object.assign(clon,obj)
// console.log(clon);


// obj.city = "Yerevan"
// console.log(obj);

// obj.sayHi = function(){
//     alert("Hello")
// }
// console.log(obj.name);
// obj.sayHi()
// console.log(obj);

// function sey(){
//     alert("Hello")
// }
// obj.seyHi = sey
// obj.seyHi()


// obj.sayHi = function(){
//     alert(`Hello ${this.name}, you are ${this.age}, and you ${this.job}`)
// }
// obj.sayHi()



// function num(name, age){
//     return{
//         name:name,
//         age:age,
//         a(){
//             alert(`Hello ${this.name}, you are ${this.age}`)
//         }
//     }
// }

// let o = num(prompt("Greq dzer anuny"),prompt("Greq dzer tariqy"))
// o.a()


// function name(job, age){
//     return{
//         job:job,
//         age:age,
//         sey(){
//             alert("Hello")
//             return this
//         },
//         s(){
//             alert("Lav es")
//             return this
//         },
//         d(){
//             alert("Ur gnanq")
//             return this
//         }
//     }
// }
// let obj = name("Developer",18)
// obj.sey().s().d()


// function constructor
// function User(){
//     this.name = "Narek";
//     this.age = 18;
// }
// console.log(new User());

// decleration
// function User(name, age){
    //  this.name = name;
    //  this.age = age;

    // methods in function constructor
//     this.name = name
//     this.age = age
//     this.sayHi = function(){
//         alert(`My name is ${this.name}`)
//     }
//  }
// console.log(new User("Narek", 18).sayHi()) // My name is Narek

// let num = new User("Lianna", 34)
// console.log(num.sayHi()); // My name is Lianna

// let s = new User("Vahan",33)
// console.log(s);
// console.log(s); // 2 object irar havasar chen


// decleration
// function  User(phone,gender){
//     this.phone = phone
//     this.gender = gender
// }
// console.log(new User(+37477190202,"male"));

// let a = new User(+37494210160,"female")
// console.log(a);

// let b = new User(+37494558866, "male")
// console.log(b);


// expretion
// let user = new function(){
//     this.name = "Narek"
//     this.age = 18
// }
// console.log(user);

// let a = Symbol("text")
// console.log(a.toString()); //text // tipapoxutyun e anum
// console.log(a); //symbol
// console.log(a.description); // vercnum e arjeqy


// s[a] = "Lorem"
// console.log(s); //symboli arjeqy vorpes key karox e tpvel objecti mej ir arjeqov


// function  User(name,phone,gender){
//     this.name = name
//     this.phone = phone
//     this.gender = gender
// }
// console.log(new User("Narek",+37477190202,"male"));

// let s = new User("Narek",+374556688,"male")
// s.job = function(){
//     alert(`es ${this.name}s haskacel em objectsi himunqnery`)
// }
// console.log(s);
// s.job()


// function User(name,age){
//     this.name = name
//     this.age = age
// }

// let s = new User("Lianna",34)
// s.num = function(){
//     alert(`Im dasaxos ${this.name}n shat lav e bacatrum `) // Im dasaxos Liannan shat lav e bacatrum
// }
// console.log(s);
// s.num()


// sarqel mi hat constructor function promptov name functionov veradardzni alert name duq sovorum eq code lium


// function User(name){
//     this.name = name
// }

// let a = new User(prompt("Greq dzer anuny"))
// a.us = function(){
//     alert(`${this.name} Duq sovorum eq Code li dprocum`)
// }
// a.us()




// proto-types
// let user = {
//     name: "Narek",
//     sey(){
//         alert("Hello")
//     }
// }
// console.log(user);

// let us = {
//     name: "Aram",
//     age: 18,
//     sey(){
//         // alert("Hello sey")
//     },
//     __proto__:user // 1.
// }
// console.log(us);
// // us.__proto__ = user // 2.
// us.name = "Lianna"
// console.log(us);
// us.sey() // 1.



// let user = {
//     name: "Narek",
//     sey(){
//         alert(` hello ${this.name}`)
//     }
// }
// user.sey()


// let us = {
//     name: "Aram",
//     age: 18,
//     __proto__:user
// }

// // console.log(us);
// // console.log(us.name);

// for(let key in us){
//     // console.log(key);
//     let has = us.hasOwnProperty(key)
//     if(has){
//         console.log(key);
//     }
// }
// us.sey()



// let abc = {
//     phone: +37477190202,
//     surname: "Khachatryan",
// }


// let def = {
//     __proto__:abc,
// }
// console.log(def);
// console.log(def.phone);


// abc.sey= function(){
//     alert("Hello")
// }
//  console.log(abc);
//  abc.sey()
//  def.sey()



// function User(city){
//     this.city = city
// }

// User.prototype = user
// console.log(new User("Erevan"));

/* **************************************** */

// spreed, rest (...)

// 1. spreed

// let arr = [1,2,3,4,5]
// let ar = [6,7,8,9,10]
// // let c = [arr]
// // arr.concat(ar)
// // c = arr.concat(ar)
// // console.log(c);
// // console.log(arr.concat(ar));
// let c = [...arr,...ar] // ecma script 6
// console.log(c); // spreed
// console.log(...arr,...ar); // aranc zangvac

/* *************************************** */

// let user = {
//     name: "Narek",
//     age: 18,
//     phone: "+37477190202"
// }


// let s = {
//     city: "Yerevan",
//     ...user,
//     job: "Development"
// }
// console.log(s);
// console.log(...user); sxal 
// console.log({...user}); chisht (symbol operator)


// 2.rest
// grvuma vorpes parametr

// function n(x, y, z, ...rest){
    // console.log(` Hello ${x}, ${y}, ${z} `);
    // console.log(x);
    // console.log(y);
    // console.log(z);
    // console.log(rest);
//     return{
//         name: x,
//         age: y,
//         phone: z,
//         city: rest,
//     } 
// }
// console.log(n(...arr));


// let arr = ["Narek", "Vahan", "Arsen", "Sash", "Lianna"]



// let a = {
//     b(){
//         alert("Mer xmbum sovorum en  " + [...arr])
//     }
// }
// a.b()


// function x(a, b, c, d, ...rest){
//  alert( `im dasatun ${rest} `)
//  alert(`Mer xmbum en ${a}, ${b}, ${c}, ${d} `)
// }

// x(...arr)


/* ************************************ */


// bind, call, apply {this}

// function num(){
//     console.log(`Hello`,this);
// }
// window.num()
// console.log(this == window); // true

/* ************************************ */

// 1. bind

// let user = {
//     name:"Narek",
//     age:18,
//     phone:"+37477190202",
//     // say:num,
//     // human:num.bind(),
//     man:function(job,city,work){
//         console.group(`${this.name} info`)
//         console.log(`My name is ${this.name} `);
//         console.log(`My age is ${this.age} `);
//         console.log(`My phone number is ${this.phone} `);
//         console.log(`I am ${job} `);
//         console.log(`I live in ${city} `);
//         console.log(`I love my ${work}`);
//         console.groupEnd()
//     }
// }
// // user.say()
// // user.human()
// user.man("developer","Erevan","esim")

// // let us = {
// //     name:"Lianna",
// //     age:34,
// //     phone:"+37498771255"
// // }
// // let n = user.man.bind(us)
// // n() 

// // or

// // user.man.bind(us)()

// /* ************************************ */

// // 2. call

// let user1 = {
//     name:"Narek",
//     age:18,
//     phone:"+37477190202",
//     man:function(){
//         console.group(`${this.name} info`)
//         console.log(`My name is ${this.name} `);
//         console.log(`My age is ${this.age} `);
//         console.log(`My phone number is ${this.phone} `);
//         console.groupEnd()
//     }
// }


// user.man("hashvapah","Erevan","develop")

// let us = {
//     name:"Lianna",
//     age:34,
//     phone:"+37498771255"
// }
// user.man.bind(us,"hashvapah","Erevan","develop")()
// user.man.call(us,"hashvapah","Erevan","develop")
// // 3. apply
// user.man.apply(us,["developer","Erevan","Work"]) // qich ogtagorcvox


// let arr = ["development","Erevan","developer","Lianna"]


// let a = {
//     name:"Narek",
//     age:18,
//     say(job,city,work,...rest){
//         console.log(`${this.name} proffesion is ${job} `);
//         console.log(`${this.age} tarekanum der aprum e ${city}um `);
//         console.log(`${this.name}y ashxatum e ${work} `);
//         console.log(`${this.name}in ognel e hasnel ays amenin ${rest}n `);
//     }
// }
// a.say(...arr)

// let c = {
//     name:"Vahan",
//     age:34,
// }
// a.say.bind(c,"development","Erevan","developer","Lianna")()



// let arr = ["usanox","Erevan","cragravorox","USA"]

// let a = {
//     name:"Narek",
//     age:18,
//     say(zbaxmunq,city,proffesion,city2){
//         console.log(`${this.name}y ${zbaxmunq} e `);
//         console.log(`${this.age} tarekanum ${this.name}y aprum e ${city} `);
//         console.log(`${this.name}y cankanum e darnal ${proffesion} `);
//         console.log(`${this.name}y cankanum e meknel ${city2} `);
//     }
// }
// a.say(...arr)


// let c = {
//     name:"Vahan",
//     age:34
// }
// a.say.bind(c,"masnaget","Erevan","cragravorox","USA")()

/* ************************************************* */


// ************* class ********* (function constructor)

class User{
    static type = "Hello"
    constructor(option){
        this.name = option.name
        this.age = option.age
        this.job = option.job
    }
    sey(){
        console.log(`Hello ${this.name} `);
    }
    job(){
        console.log(`How are you ${this.name} `);
    }
}
console.log(new User({
    name: "Narek",
    age: 18,
    job: "Developer",
}));

let user = new User({
    name: "Narek",
    age: 18,
    job: "Developer",
})
console.log(user);


let b = new User({
    name:"Arsen",
    age:25,
    job:"Mi ban"
})
b.sey()
b.job()

console.log(User.type);

// **********  classic class jarangum  ************************* */

class Man extends User{
    constructor(city){
        super()
        this.travel = city
    }
}
console.log(new Man({name:"Vahan",age:33,job:"AAC"},"Italy"));


class A{
    constructor(option){
        this.name = option.name
        this.job = option.job
    }
    sey(){
        console.log(`${this.name}y ${this.job} e `);
    }
}

let a = new A({
    name:"Narek",
    job:"Dev",
})



























