import React, { useState } from "react";
import "../styles/slider-component.css";

export function SliderComponent() {
  const [count, setCount] = useState(0);
  return (
    <div class="slider-component">
      <p>Output: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount(count - 1)}>Or me</button>
    </div>
  );
}
