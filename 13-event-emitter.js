const EventEmitter = require('events')

const customEmitter = new EventEmitter()
//on and emit methods
//keep track of order
// additional arguments
// buit-in modules utilize it (http for example)



//luisteren voor het event

customEmitter.on('response',(name,id)=>{
    console.log(`data recieved ${name} with id:${id}`)
})

customEmitter.on('response',()=>{
    console.log(`some other logic here `)
})


//antoorden op het event

customEmitter.emit('response','john',34)
