const WebSocket = require("ws");
const fs = require("fs");

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(message) {
    console.log("received msg");
    try {
      const obj = JSON.parse(message);
      const { content, filename } = obj;
      const dirName =
        __dirname
          .split("/")
          .slice(0, __dirname.split("/").length - 1)
          .join("/") + "/src/menus/";
      const fullPath = dirName + filename + ".js";
      console.log("writing", fullPath);
      fs.writeFile(fullPath, content, (err) => {
        if (err) {
          console.error("error writing file", err);
          ws.send(JSON.stringify({ path: filename, result: "failed", err }));
          return;
        }
        console.log("written", filename, "length:", content.length);
        ws.send(JSON.stringify({ path: filename, result: "success" }));
      });
    } catch (err) {
      console.error("error", err);
      ws.send(JSON.stringify({ result: "failed", err }));
    }
  });
  ws.send(JSON.stringify({ connected: true }));
  console.log("client connection");
});

console.log("starting");
