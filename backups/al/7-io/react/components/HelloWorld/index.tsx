import React from "react";

interface HelloWorldProps {
  name: string;
}
export function HelloWorld({ name }: HelloWorldProps) {
  return (
    <div>
      <h1>Hello World, {name || "nameless"}</h1>
    </div>
  );
}
