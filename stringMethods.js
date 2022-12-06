//1.Length
let js ='Javascript'
console.log(js.length)

//2. Accessing the strings by indexes: used to accessn the string like Arrays(Walids⭐)
let string = 'Javascript'
let firstLetter = string[0]

console.log(firstLetter)

let secondLetter =string[1]
let thirdLetter = string[2]
let lastLetter = string [9]

console.log(lastLetter)

let lastIndex = string.length - 1;
console.log(lastIndex)

console.log(string[lastIndex])

//3.toUperCase(): Changes strings to upper case ☀️
 console.log(string.toUpperCase())
let firstname = "Musa"
 console.log(firstname.toUpperCase())

 //4.toLowerCase(): Method used to change strings to lower Letter 🦷

 console.log(string.toLowerCase())

 /*5.substr(): It takes two arguements , the starting index and number
  of character to slice */
 console.log(string.substr(4,6))

 let country = 'Finland'
console.log(country.substr(3,4))

/*6. substring():😕this method works by putting 2 vales first starting
 index of value to print and ending index but doesn't include character 
 after stopping index */

console.log(string.substring(0,5))

/*7. split() splits a string at a particular place 😕*/ 
string = '30 Days of JavaScript'

console.log(string.split())
console.log(string.split(' '))

/* 8.Trim(): Used to remove trailing space in the beginnig or the end of a 
string */
string = '    30 Days of JavaScript   '

console.log(string)
console.log(string.trim())

/*9.includes(): it take a substring and checks weather it exist and returns
 a boolean */

 console.log(string.includes('Days'))
 console.log(string.includes('days'))
 console.log(string.includes('D'))
 console.log(string.includes(' '))

 /*10.replace(): takes two parameter an old and new substring replacing 
 the old one */
console.log(string.replace('JavaScript', 'Python'))

/*charAt(),charCodeAt(),indexOf(),lastIndexOf(), concat(),startWith(),
endsWith(),search(),match(),repeat()*/

/*Casting : It ia the changing of a datatype to another data type by
 the use of  parseInt(), parseFloat(),Number()*/
// Different javascript data types
// Let's declare different data types

let firstName = 'Asabeneh'      // string
let lastName = 'Yetayeh'        // string
let city = 'Helsinki'           // string
let age = 250                   // number, it is not my real age, do not worry about it
let job                         // undefined, because a value was not assigned

console.log(typeof 'Asabeneh')  // string
console.log(typeof firstName)   // string
console.log(typeof 10)          // number
console.log(typeof 3.14)        // number
console.log(typeof true)        // boolean
console.log(typeof false)       // boolean
console.log(typeof NaN)         // number
console.log(typeof job)         // undefined
console.log(typeof undefined)   // undefined
console.log(typeof null)        // object

//String to Int /Float to Int  // 
let num = '10'
let numInt = parseInt(num)
console.log(numInt)

numInt =  Number(num)
console.log(numInt)
 

numInt = +num
console.log(numInt)
//works same for float but parseInt = parseFloat.

let challenge = '30 Days Of JavaScript'
console.log(challenge)

console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substr(3,22))
console.log(challenge.substr(0,2))
let check = challenge.includes('Script')
console.log (check)

console.log(challenge.split())
console.log(challenge.split(' '))

let seprate = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(seprate.split(','))

rpl = challenge.replace('JavaScript','Python')
console.log(rpl)

console.log(challenge.charCodeAt('J'))

console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))


let find = 'You cannot end a sentence with because because because is a conjunction'

console.log(find.indexOf('because'))
console.log(find.lastIndexOf('because'))

console.log(find.search('because'))

challenge = "   30 Days of JavaScript  "
console.log(challenge.trim())

console.log(challenge.startsWith(' '))

console.log(challenge.endsWith(' '))
//learning hard way 😞
let sting = 'I love JavaScript.It you do not love JavaScript what else can you love.'
let pattern =/love/gi
console.log(sting.match(pattern))
let txt ='In 2019,I ran 30 Days of Python.Now in 2020 i am super exited to start this challenge'
let regEx = /\d+/
console.log(txt.match(regEx))
console.log(txt.match(/\d+/g))
//End
let serch = /a/gi
console.log(challenge.match(serch))


let sepe1 = "30 Days Of "
let spc = " "
let sepe2 ="JavaScript"

let add = sepe1.concat( spc, sepe2)

console.log(add)

console.log("'There ar no exercise better for the heart than reaching down and lifting people up.'by Holmes teaches us to help one another.")
console.log("Love is not patronizing and charity is't about pity, it about love. Charity and love are same -- with charity you give love ,love so don't just give money but reach out your hand instead.")

console.log(typeof 10 == typeof 10)




console.log(Math.round(parseFloat('9.8' == 10)))
