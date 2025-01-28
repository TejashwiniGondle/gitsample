function greet(name, callback) {
    const message = `Hello, ${name}!`;
    return callback(message);
  }


function logMessage(message) {
    console.log(message);
  }

  greet("Alice", logMessage);  
  