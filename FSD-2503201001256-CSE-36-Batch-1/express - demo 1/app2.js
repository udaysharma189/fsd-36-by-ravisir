const EvenEmitter=require('events');
const event =new EvenEmitter();
event.on('greet',()=>{
    console.log("Hello,this is an event!");

});
event.emit('greet');