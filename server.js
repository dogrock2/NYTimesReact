const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const socket = require('socket.io');
const app = express();
const PORT = process.env.PORT || 3001;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("client/build"));
require("./controller/controller.js")(app);


mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactnytimesapi",
  {
    useMongoClient: true
  }
);

app.listen(PORT, function() {
  console.log(`API Server now listening on PORT ${PORT}!`);
});

const server = express.createServer({ key: "123" });
register(server);
https.listen(443);

const io = socket(server);

io.on('connection', function (socket) { 
  console.log('Socket connection with id = ' + socket.id);
  
  socket.on("articleAddedMsg", function (data) {
      socket.broadcast.emit("articleAddedMsg", data);
  });
  socket.on("articleDelete", function (data) {
    io.sockets.emit("articleDelete", data);
});
     
}); 