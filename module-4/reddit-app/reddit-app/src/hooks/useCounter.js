import { useState } from "react";

// Custom hook made by Marcus ;)

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount((prevState) => prevState + 1);
  const decrement = () => setCount((prevState) => prevState - 1);

  return { count, increment, decrement };
};

export default useCounter;
