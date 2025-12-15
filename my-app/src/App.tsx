import { useState } from "react";
import { Button } from "antd";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        Click me
      </Button>
      <div>count: {count}</div>
    </>
  );
}

export default App;
