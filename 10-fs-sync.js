const {readFileSync, writeFileSync} = require('fs') //via destructioring
//andere methode
// const fs = require('fs)
// fs.readFileSync

console.log('start')
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

writeFileSync('./content/result-sync.txt','Here is the result : ' + first +', ' + second, {flag: 'a'})
console.log('done with this task')
console.log('starting with the next one')
