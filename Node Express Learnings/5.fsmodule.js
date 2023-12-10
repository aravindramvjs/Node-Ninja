// // file system module sync method

// const { readFileSync, writeFileSync } = require('fs')
// console.log('start')
// const first = readFileSync('./content/first.txt', 'utf8')
// const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first);
// console.log(second);


// writeFileSync(
//   './content/result-sync.txt',
//   `Here is the result : ${first}, ${second}`,
//   { flag: 'a' },
//   console.log('done with this task')
// )
// console.log('starting another task')


// filesystem async method

const { readFile, writeFile } = require('fs')
console.log('operation 01 starts');
console.log('operation 01 ends')


console.log('operation 02 starts');
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {console.log(err)}
  console.log(result);
  const first = result;
  

  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {console.log(err)}
    console.log(result);
    const second = result;



    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,(err, result) => {
        if (err) {console.log(err)}
        console.log('result-async.txt created and first and second txt added')
      })
  })
  console.log('operation 02 ends');
})

console.log('operation 03 starts');
console.log('operation 03 ends');

