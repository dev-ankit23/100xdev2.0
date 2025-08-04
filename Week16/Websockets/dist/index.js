import WebSocket, { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });
wss.on("connection", function (socket) {
    console.log("Websocket Server Connected");
    socket.send("Hello Websocket Server");
});
//# sourceMappingURL=index.js.map