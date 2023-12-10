// event emitter => Node. js allows us to create and handle custom events easily by using events module.
//  Event module includes EventEmitter class which can be used to raise and handle custom events.

// ON - Listens the event
// EMIT - emits or execute the event

// event emitter vs event listener:
// event emitters - code that create event - you write code to create events and then you write handlers for it. 
// event listeners - event is created by browser eg - http request, click- you write code to handle the events that is listeners.

const EventEmitter = require('events');
const customEvents = new EventEmitter();

customEvents.on('response', ()=>{
    console.log('on response event worked');
})

customEvents.on('response', (name,age)=>{
    console.log(`userdata received username:${name} and age:${age}.`);
})

customEvents.emit('response', 'aravind', 21)


// CREATE HTTP SERVER USING EVENT EMITTER


const http = require('http');
const server = http.createServer();

server.on('request', (req, res)=>{
    res.end('WELCOME TO EVENT EMITTER HTTP SERVER')
})

server.listen(3030)