const {Server} = require('ws');
let wsserver = new Server({ port: 8080, path: '/' });
let person = 0;
let latest = { online: person,userid :"Anonymous", msg: "no messages yet" };

 wsserver.on('connection', ws => {
    person++
    console.log("New client connected");
    
    ws.send(JSON.stringify(latest)+"\n");
    ws.on('close', (code, msg) => {
        person--
        console.log("Connection closing", code, msg) });
    ws.on('message', msg => { 
        latest = { online:person, userid: "" , msg: msg };
        console.log("Message arrived", msg);
        wsserver.clients.forEach(c => c.send(JSON.stringify(latest)));
    });

});