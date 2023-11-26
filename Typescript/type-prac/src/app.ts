const sayHi =(name:string):void=>{
    console.log(`hello ${name}`) //void dont have return
}
sayHi('Jaimes');

const getDiscount =(eiei:string):Number=>{
    return 500;
}

const getAddress = ():string=>{
    return 'bangkok'
}

const showEmployee=(name:string='Anonymous', age:number=20, address:string='Bangkok')=>{
    console.log(`${name} is ${age} live in ${address}`)
}

showEmployee()

const person1 = {
    name:'JaimesJames',
    age:20, address:'bang'}
const person2 : {name:string,age:number} = {name:'JaimesJames', age:30} ///defind type

const showDeteil=(data:{name:string,age:number})=>{
    console.log(`name ${data.name}`)
}


showDeteil(person2)
showDeteil(person1) //showDeteil({name:'JaimesJames', age:20, address:'bang'}) error dont check properties


const position:{lat:number, long:number} = {lat:10,long:20}
const randomPosition = ():{lat:number,long:number} =>{
    return{
        lat:Math.random(),long:Math.random()
    }
}




let fname:string = 'JaimesJames'
let age:number = 30
let isWorking:boolean = false

console.log(`ชื่อ = ${fname.toUpperCase()}`)

//
let anynto:any = 10;
let lname:unknown = 'JaimesJames'

function formatNumber(num:number){
    return num.toFixed(2)
}

let amount = 50.12345
formatNumber(amount)

let money:unknown = '50.12345'
if (typeof money === 'number'){
    formatNumber(money)
}

let username:unknown;
username = 'jsimrd';
(username as string).toUpperCase();
(<string>username).toUpperCase();


let result:string;
if(amount%2 == 0){
    result = 'ku'
}
else{
    result = 'ki'
}

result = (amount%2 == 0) ? 'ku':'ki'


type Employee = {
    readonly id:number,
    name:string,
    salary:number,
    phone?:string //not require (optional)
}
//object type aliases
let emp1:Employee = {
    id:1,
    name:'jum',
    salary:50000,
    phone:'00-000-0000'
}

emp1.salary =100

let emp2:Employee = {
    id:2,
    name:'eiei',
    salary:5000,
    phone:'4444444'
}

let emp3:Employee = {
    id:3,
    name:'hans',
    salary:20,

}

const users:string []=[] //not define default

users.push('jaimes')

const cus:Employee [] = []

cus.push(emp1)


const total =(...numbers:number[])=>{ //rest

}