import { useState, useEffect } from "react";

export default function useCounter() {
    debugger
  const [count, setCount] = useState(0);
    console.log("RENDERS");
    console.log(count)
  useEffect(() => {
    // runs after component renders on the screen
    debugger
    const id = setInterval(() => {
      
        console.log("is this running")
        setCount((prev)=>{
            return prev+1
        });
    }, 5000);

    return function () {
        console.log("unmounts component")
        // clear timeout 
        clearInterval(id)
    };
  }, []);

  

  return count;
}
