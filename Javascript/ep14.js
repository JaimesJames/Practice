//Array Map

const numbers = [10, 20, 30, 40]

const result = numbers.map((e,i)=>{e*2;return `team ${i+1} score ${e}`;}) // new Array
console.log(numbers)
console.log(result)

console.log('-----------')

const forcast = [
    {day:'01/11/2566', weather:'Cloudy', temp:22},
    {day:'02/11/2566', weather:'Rainny', temp:22},
    {day:'03/11/2566', weather:'Foggy', temp:22}
]

const weathers = forcast.map(w=>w.weather)

console.log(weathers)