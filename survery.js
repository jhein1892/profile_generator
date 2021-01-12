const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question('What do you think of Node.js? ', (answer) => {

//   console.log(`Thank you for your valuable feedback: ${answer}`);
//   rl.question('What do you think of god.js? ', (answer) => {

//     console.log(`Thank you for your value feedback: ${answer}`);
//     rl.close();
//   })
// });
let myName = ''
let myActivity = ''
let myEar = ''
let myMeal = ''
let myFavMeal = ''
let mySport = ''
let myPower = ''


const name = function(){  
  rl.question('What is your Name(or Nickname?) ', (answer) => {
    myName = answer; 
    activity();
  }) 
}

const activity = function(){
  rl.question('What activity do you enjoy? ', (answer) => {
    myActivity = answer
    listen()
  })
}
const listen = function(){
  rl.question('What do you listen to while doing that? ', (answer) => {
  myEar = answer;
  meal();
  })
}

const meal = function(){
  rl.question('What meal is your favourite(Dinner,lunch...)? ', (answer) => {
  myMeal = answer;
  favMeal();
  })
}

const favMeal = function(){
  rl.question('What is your favoirite dish? ', (answer) => {
  myFavMeal = answer; 
  sport();
  })
}

const sport = function() {
  rl.question('What is your favourite sport? ', (answer) => {
    mySport = answer;
    superPower()
  })
}

const superPower = function() {
  rl.question(`What is your superpower? In a few words, tell us what you're good at. `, (answer) => {
    myPower = answer
    resume()
  })
}

const resume = function(){
  console.log("\n" + `So my name is ${myName}, and I enjoy ${myActivity} while listening to ${myEar}. My favourite meal of the day is ${myMeal}, and my favourite dish is ${myFavMeal}. I love ${mySport}, and my SuperPower is ${myPower}`)
  rl.close();
};






// console.log(myName, mySport)
name()
// rl.close();
