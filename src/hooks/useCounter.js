import { useState, useEffect } from "react";

export default function useCounter(delay) {
  const [count, setCount] = useState(0);
  console.log(delay)
  useEffect(() => {
    // runs after component renders on the screen
    const id = setInterval(() => {
      
        console.log("is this running")
        setCount((prev)=>{
            return prev+1
        });
    }, delay);

    return function () {
        // clear timeout 
        // runs when  component going to unmount
        clearInterval(id)
    };
  }, [delay]);

  

  return count;
}
