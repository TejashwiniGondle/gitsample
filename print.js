function delayedMessage(message, delay, callback) {
    setTimeout(() => {
      console.log(message);
      if (callback) {
        callback(); 
      }
    }, delay);
  }

  delayedMessage("Hello, world!", 2, () => {
    console.log("Message has been printed!");
  });
  