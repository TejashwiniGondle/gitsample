
function getValue(value) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value);
      }, 1000); 
    });
  }
  
  
  getValue(5)
    .then((value1) => {
      return getValue(10).then((value2) => value1 + value2); 
    })
    .then((sum1) => {
      return getValue(15).then((value3) => sum1 + value3); 
    })
    .then((totalSum) => {
      console.log("Total sum:", totalSum); 
    })
    .catch((error) => {
      console.log("Error:", error); 
    });
  