import { useState } from "react";

export function Bar() {
  const [myVar, setMyVar] = useState({
    foo: "hello",
    bar: "world",
    baz: "helloworld",
    // ...
  });

  function makeFooUppercase() {
    // TODO
  }

  const displayVar: JSX.Element[] = [];
  Object.keys(myVar).forEach((key) => {
    const content = `${key}: ${myVar[key as keyof typeof myVar]}`;
    displayVar.push(<p key={key}>{content}</p>);
  });

  return (
    <>
      <p>Bar</p>
      <section>
        {displayVar}
      </section>
    </>
  );
}