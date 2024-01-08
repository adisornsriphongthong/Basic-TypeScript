// Function that never returns
function throwError(message: string): never {
    throw new Error(message);
  }
  
  // Variable that should never have a value
  let unreachable: never;
  
  // This function is expected to never return
  function infiniteLoop(): never {
    while (true) {
      console.log("This function never returns!");
    }
  }
  