import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(1);

  function increaseCount() {
    setCount((currentVal) => currentVal + 1);
  }

  useEffect(() => {
    const intervalId = setInterval(increaseCount, 1000); // set once

    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, []); // Empty array: only run once on mount

  return <>{count}</>;
}

export default App;
