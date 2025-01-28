function fetchWithTimeout(timeoutDuration) {
    return new Promise((resolve, reject) => {
   
      const timeout = setTimeout(() => {
        reject(new Error(`The operation timed out after ${timeoutDuration} milliseconds`));
      }, timeoutDuration);
  
      
      setTimeout(() => {
        clearTimeout(timeout); 
        resolve("Task completed successfully"); 
      }, Math.random() * timeoutDuration); 
    });
  }
  

  fetchWithTimeout(3000) 
    .then((result) => {
      console.log(result); 
    })
    .catch((error) => {
      console.log(error.message); 
    });
  