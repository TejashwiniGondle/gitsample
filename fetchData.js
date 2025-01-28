function fetchDataWithCallback(successCallback, errorCallback) {
    
    setTimeout(() => {
      
      const isSuccess = Math.random() > 0.5; 
  
      if (isSuccess) {
        
        const data = { message: "Data fetched successfully!" };
        successCallback(data); 
      } else {
        
        const error = "Failed to fetch data. Please try again later.";
        errorCallback(error); 
      }
    }, 2000); 
  }

  function handleSuccess(data) {
    console.log("Success:", data.message);
  }
  

  function handleError(error) {
    console.log("Error:", error);
  }
  
 
  console.log("Fetching data...");
  fetchDataWithCallback(handleSuccess, handleError);
  

  