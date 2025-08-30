import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port :8080})

// below is the event handler

wss.on("connection", function(socket){
    console.log("user connected");
    setInterval(()=>{
        socket.send("current price of SOL is "+ Math.random())
    })
} )