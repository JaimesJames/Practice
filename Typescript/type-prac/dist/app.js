"use strict";
const sayHi = (name) => {
    console.log(`hello ${name}`); //void dont have return
};
sayHi('Jaimes');
const getDiscount = (eiei) => {
    return 500;
};
const getAddress = () => {
    return 'bangkok';
};
const showEmployee = (name = 'Anonymous', age = 20, address = 'Bangkok') => {
    console.log(`${name} is ${age} live in ${address}`);
};
showEmployee();
const person1 = {
    name: 'JaimesJames',
    age: 20, address: 'bang'
};
const person2 = { name: 'JaimesJames', age: 30 }; ///defind type
const showDeteil = (data) => {
    console.log(`name ${data.name}`);
};
showDeteil(person2);
showDeteil(person1); //showDeteil({name:'JaimesJames', age:20, address:'bang'}) error dont check properties
const position = { lat: 10, long: 20 };
const randomPosition = () => {
    return {
        lat: Math.random(), long: Math.random()
    };
};
let fname = 'JaimesJames';
let age = 30;
let isWorking = false;
console.log(`ชื่อ = ${fname.toUpperCase()}`);
//
let anynto = 10;
let lname = 'JaimesJames';
function formatNumber(num) {
    return num.toFixed(2);
}
let amount = 50.12345;
formatNumber(amount);
let money = '50.12345';
if (typeof money === 'number') {
    formatNumber(money);
}
let username;
username = 'jsimrd';
username.toUpperCase();
username.toUpperCase();
let result;
if (amount % 2 == 0) {
    result = 'ku';
}
else {
    result = 'ki';
}
result = (amount % 2 == 0) ? 'ku' : 'ki';
//object type aliases
let emp1 = {
    id: 1,
    name: 'jum',
    salary: 50000,
    phone: '00-000-0000'
};
emp1.salary = 100;
let emp2 = {
    id: 2,
    name: 'eiei',
    salary: 5000,
    phone: '4444444'
};
let emp3 = {
    id: 3,
    name: 'hans',
    salary: 20,
};
const users = []; //not define default
users.push('jaimes');
const cus = [];
cus.push(emp1);
