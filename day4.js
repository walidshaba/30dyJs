let numi = 3
if (numi > 0) {
}

numi = -3
if (numi > 0) {
    console.log(`${numi} is a poitive number `)
}
else {
    console.log(`${numi} is a negative number `)
    }

let weather = 'cloudy'
switch (weather) {
    case 'rainy':
        console.log('You Need a rain coat.')
        break
    case 'cloudy':
        console.log('It might be cold you need a jacket')
        break
    case 'sunny':
        console.log('Go out freely.')
        break
    default:
        console.log('No need for a rain coat.')
}

// let dayUserInput = prompt('What day is today')
// let day = dayUserInput.toLowerCase()

// switch (day) {
//     case 'monday':
//       console.log('Today is Monday')
//       break
//     case 'tuesday':
//       console.log('Today is Tuesday')
//       break
//     case 'wednesday':
//       console.log('Today is Wednesday')
//       break
//     case 'thursday':
//       console.log('Today is Thursday')
//       break
//     case 'friday':
//       console.log('Today is Friday')
//       break
//     case 'saturday':
//       console.log('Today is Saturday')
//       break
//     case 'sunday':
//       console.log('Today is Sunday')
//       break
//     default:
//       console.log('It is not a week day.')
//   }

isRaining = true

isRaining
    ? console.log('You need a rain coat.')
    : console.log('No need for a rain coat.')

//Exercises 

//   let age = prompt('Enter your age')
//   cal = 18 - age
//   if (age >= 18 )
//   {
//     console.log('You are old enough to drive.')
//   }
//   else
//   {
//     console.log(`You are left with ${cal} years to drive`)
//   }

// age =  prompt('Enter your Age')
// yourage = prompt('Enter Age 2')
// me = age - yourage
// you = yourage - age

// if (age > yourage)
// {
//     console.log(`I am ${me} years older than me`)
// }
// else if(yourage > age)
// {
//     console.log(`You are ${you} years older than me`)
// }
// else 
// {
//     console.log('we are agemates')
// }
// a = 4
// b = 3

// if (a>b)
// {
//     console.log(`${a} is greater than ${b}`)
// }
// else
// {
//     console.log(`${a} is less than ${b}`)
// }

// check = a>b
// ?console.log(`${a} is greater than ${b}`)
// :console.log(`${a} is less than ${b}`)

numi = prompt(`Enter a number`)
if (numi % 2 == 0) {
    console.log(`${numi} is an Even Number`)
} else {
    console.log(`${numi} is an Odd Number`)
}