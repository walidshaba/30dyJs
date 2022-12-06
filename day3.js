let isLightOn = true;
let isRaining = false
let isHungry = false 
let isMarried = true 
let truValue = 4 > 3 
let falseValue = 4 < 3

console.log(isLightOn)

let firstName 
console.log(firstName)

let empty = null
console.log(empty)

//Explanation of different Arithmetic operators(one i'm not familiar with)

let numOne = 4 
let numTwo = 3
let remainder = numOne % numTwo //Modulus Operation
let powerOf = numOne ** numTwo  //Exponetial 

console.log(remainder)
console.log(powerOf)

const boilingPoint = 100 
const bodyTemp = 37
const gravity = 9.81

console.log(`The Boiling point of water is ${boilingPoint}oC.\nHuman body temperature is ${bodyTemp}oC \nThe gravity of earth is ${gravity} m/s2.`)

//Comparison operators (Advanced(The ones i myselfn dont Know😥))

console.log(3 =='3')
console.log(3 === '3')// The Strict equalsto compares both the value and its datatype unlike the normal that compares only the values
console.log(3 !== '3')
console.log(0 == false )
console.log(0 === false)
console.log(0 == '')
console.log(NaN == NaN)
console.log(typeof NaN)


//Tenary Operators 

isRaining = true 

? console.log('You need a rain coat.')
: console.log('No Need for a rain coat .')

isRaining = false 
? console.log('You need a rain coat.')
: console.log('No Need for a rain coat .')

// To be honest one of the 🆒est operators in javascript 🆒

//the inbuilt Windoews Methods for some reason they are  not working
//alert('')

//let number = prompt('required text','optional text')
//console.log(number)
//const agree = confirm('Are you sure you like to delete?')
//console.log(agree)


/*Ahhhaaa finally understood it we use on our html file while 
using onclick attribute in the tag */


/* here is the creation of a date Object which are used to call 
date time methods of different type  */

const now = new Date()
console.log(now)

const fullnowyear = new Date()
console.log(fullnowyear.getFullYear())

const monthnow = new Date()
console.log(monthnow.getMonth())

const datenow = new Date()
console.log(datenow.getDate())

const daynow = new Date()
console.log(daynow.getDay())

//That it goes on till it reaches the secs and millisecs

//Now converting the Dates to a readable format to humans
const dates = new Date()
const year =  dates.getFullYear()
const month = dates.getMonth()
const date = dates.getDate()
const hours = dates.getHours()
const minutes = dates.getMinutes() 

console.log(`${date}/${month}/${year} ${hours}:${minutes} `)


//My assingment 
firstName = "Musa"
let lastName = "Shaba"
let Country = "Nigerian"
let city = "Kano"
let age = 20
isMarried = false

console.log(typeof(firstName),typeof(lastName),typeof(Country),typeof(city),typeof(age),typeof(isMarried))

let ck = 10 

console.log(typeof('10') == typeof (10))

console.log(parseInt('9.8') == 10)

console.log(4>3)
console.log(4>=3)
console.log(4==4)
console.log(4===4)
console.log(4!=4)
console.log(4!==4)
console.log(4!='4')
console.log(4=='4')
console.log(4==='4')
let pythonLength = 20
let jargonLength = 8734

console.log(jargonLength<=pythonLength)

console.log(!(4<3))
console.log(!(false))/* finallyb cracked it if the  comarison 
on the right is false then the value would be true and if its true
the it come out false and vice versa simply  uses Not Gate*/

firstName = "Musa"
lastName = "Shaba"

firstName.length > lastName.length
? console.log(`Your First Name, ${firstName} is longer than your family name ${lastName}`)
: console.log(`Your Last name, ${lastName} is longer than your first name ${firstName}`)
//how to connect write css? 
 
