import { useState } from "react";
export default function Counter() {
  const [n, setN] = useState(0);
  return (
    <div>
      <button onClick={() => setN(n - 1)}>-1</button>
      <span style={{ margin: "0 8px" }}>{n}</span>
      <button onClick={() => setN(n + 1)}>+1</button>
    </div>
  );
}
