const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt', {
    highWaterMark: 500000,
    encoding: 'utf8'})

// default 64kb
//last buffer - remainder
// highwatermark - control size
// const stream = createReadStream('./content/big.txt', {highWaterMark}

stream.on('data',(result)=>{
    console.log(result)
})
stream.on('error',(err)=>{
    console.log(err)
})