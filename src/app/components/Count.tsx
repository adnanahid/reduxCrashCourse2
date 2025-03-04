import React from "react";

interface CountProps {
  count: number;
}

export default function Count({ count }: CountProps) {
  return <h1 className="text-4xl font-bold mb-5">{count}</h1>;
}
