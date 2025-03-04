import React from "react";

interface ButtonProps {
  handler: () => void;
  children: React.ReactNode;
}

export default function Button({ handler, children }: ButtonProps) {
  return (
    <button
      onClick={handler}
      className="border px-6 py-1 rounded-sm bg-black text-white"
    >
      {children}
    </button>
  );
}
