const fs = require('fs');

fs.appendFile('nodeArch.txt', 'As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep. ', function(err) {
    if (err){
        console.log("Error: ", err);
    } else {
        console.log("File Append Successfully");
    }

    
});