const http = require('http');
const fs = require('fs');
const buffer = require('stream/consumers');
const os = require('os');

// const PORT = 3001;
// ******** SERVER RUNNING APPROACH TO READ FILE AND PRINT THE DATA INTO CONSOLE *******

// const server = http.createServer(function (req, res) {
//    fs.readFile('./nodeArch.txt', function (err, data){
//       if(err) {
//        console.log('Error Reading File: ', err)
//       } else {
//        console.log('Data: ', data.toString());
//        console.log("File Read Successfuly");
//       }
//    });
   
//    res.end("RES NODE END")


// });

// server.listen(PORT, () => {
//    console.log("SERVER WORKING")
// })



// ****** APPROACH 2 TO READ FILE AND PRINT THE DATA JUST USING FILE SYSTEM MODULE ******
// READ => READ + OPEN

// const buf = new Buffer(50000000);
// fs.open('nodeArch.txt', 'r+', function (err, fd) {
//    if(err){
//       console.log("Error: ", err)
//    } 
//    console.log("File Open Success")

//    fs.read(fd, buf, 0, buffer.length, 0, function(err, bytes){
//       if(err) {
//          console.log("Error In Reading File: ", err)
//       } 
//       console.log("Data In File: ", bytes);
//       console.log("Data ", buf.slice(0, bytes).toString());
     
//    }); 
// });

// Updating the content STUFF IN nodeArch.txt 

// fs.appendFile('nodeArch.txt', 
// ` 
// **** 
// High Performance Scalability. 
// Easy to Learn. 
// Reduces Loading time using caching. 
// Improves Response time and boosts performance. 
// Large Community Support. 
// Cost-Effective. Extensibility. 
// **** 
// `, function(err) {
//    if(err) {
//       console.log("ERROR IN ADDING MORE DATA TO OUT FILE :", err);
//    }
//    console.log("DATA: ");
// })

//  Deleting the file nodeArch.txt

// fs.unlink('nodeArch.txt', function (err){
//    if(err){
//       console.log("Error in deleting file: ", err);
//    }
//    console.log("FILE DELETE SUCCESS")
// })


//***********  OS Information ***************

// console.log("OS Platform: ", os.platform())
// console.log("OS Release Version: ", os.release())

// const PORT = 3000;
// const nodeServer = http.createServer(function (req, res) {
//       if( req.url == '/'){
//          res.write("Happy to learn Full Stacks Development With Pw Skills")
//       }
//       res.end();
// })

// nodeServer.listen(PORT, function(){
//    console.log("SERVER REQ LISTNED ON PORT: ", PORT);
// })


//************ CREATING EVENT EMITTER ******************

const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

const subscribeMessage = (channelName) => {
   console.log(`Thanks For Subscribing to ${channelName}`);
};

eventEmitter.addListener("subscribe", subscribeMessage);


console.log("Calling Event Listner Befre removing the Event");
eventEmitter.emit("subscribe", "College Wallha");
// The above statement must Print Thanks fro Subscribing to ChannaleName.


// Setting default Maximum No. of listners which are 10.
console.log(`The default maximum number of event listners are: ${eventEmitter.getMaxListeners()}`) 
// Updating default Maximum No. Of listner to 5
eventEmitter.setMaxListeners(5);
console.log(`The Updated maximum number of event listners are: ${eventEmitter.getMaxListeners()}`)


// Removing the event listner
console.log("Calling Event Listner after removing the Event");
eventEmitter.removeListener("subscribe", subscribeMessage);

eventEmitter.emit("subscribe", "College Wallha");



