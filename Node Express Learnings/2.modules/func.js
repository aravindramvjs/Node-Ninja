// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// const sayhi = (name) => {
//     console.log(`Hello ${name}!!!`)
// }


// module.exports = sayhi; 

// alternative syntax 
// module.exports.sayhi = function(name){
//     console.log(`Hello ${name}!!!`)
// }


// export entire file

function add(num1, num2) {
    console.log(`The sum of ${num1} and ${num2} is ${num1+num2}`);
}

let num1 = 4;
let num2 = 3589;
add(num1,num2)

