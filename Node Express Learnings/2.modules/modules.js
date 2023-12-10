// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)


const names = require('./names') //imports the names as names from names.js
const sayhi = require('./func') //imports the sayhi function as sayhi from func


// sayhi(names.aravind)
// sayhi(names.sarvesh)

// alternative syntax used in func.js 
// sayhi.sayhi(names.priya)

// import entire func.js file

const addfunc = require('./func')
console.log(addfunc);