import React, { useState } from "react";

export function Foo() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function moveHorizontal(amount: number) {
    // TODO
  }

  function moveVertical(amount: number) {
    // TODO
  }

  return (
    <div style={{
      left: position.x,
      top: position.y,
    }}>
      Foo
    </div>
  );
}

