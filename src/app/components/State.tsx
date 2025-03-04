import React from "react";

interface StateProps {
  totalValue: number;
}

export default function State({ totalValue }: StateProps) {
  return <div className="text-4xl font-bold mb-20">Total: {totalValue}</div>;
}
