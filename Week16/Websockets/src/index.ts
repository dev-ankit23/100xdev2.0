import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function (socket) {
  console.log("Server Connected");

  socket.on("message", function (e) {
    if (e.toString() === "ping") {
      socket.send("pong");
    } else {
      socket.send("Enter ping to get the value");

      // just for the github streak
    }
  });
});
