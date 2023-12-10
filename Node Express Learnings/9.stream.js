// Node. js streams are used to read and continuously write data. 
// Streams work differently from traditional techniques that read or write data, which require the data to be read and stored in memory before being processed.

// The readable stream is a stream that is used for read operations. 
// The writable stream as the name suggests is a stream used for write operations. 
// A duplex stream is a stream that performs both read and write operations. 
// A transform stream is a stream that uses it input to compute an output.

// Creating a big file
// const { writeFileSync } = require('fs')
// for (let i = 0; i < 10000; i++) {
//   writeFileSync('./content/big.txt', `hello world ${i}\n`, { flag: 'a' })
// }

// use of readstream is that it send the info in chunks which avoids too much loading
// Readstrem
// const {createReadStream} = require('fs');
// const stream = createReadStream('./content/big.txt');

// stream.on('data',(result)=>{
//     console.log(result);
// })


// Default buffer - 64kb
// set buffer to 90kb - createReadStream('./content/big.txt', {highWaterMark: 90000});
// set utf8 - createReadStream('./content/big.txt', {encoding: 'utf8'});


// HTTP EXAMPLE

let http = require('http')
let fs = require('fs')

http.createServer((req, res) => {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)


    const fileStream = fs.createReadStream('./content/big.txt', 'utf8');

    fileStream.on('open', () => {
      fileStream.pipe(res)  // Pipe is to attach a writeable stream to a readable stream allowing to pass the readable stream data to the writeable stream.
    })

    fileStream.on('error', (err) => {
      res.end(err)
    })

  })

    .listen(5000)