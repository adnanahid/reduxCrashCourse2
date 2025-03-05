"use client";
import React from "react"; // ✅ React import করা হয়েছে
import { useSelector, useDispatch } from "react-redux";
import State from "./components/State";
import Counter from "./components/Counters";
import { increment, decrement } from "./features/counters/countersSlice";
import { RootState } from "./store";

export default function Home() {
  const counters = useSelector((state: RootState) => state.counters);
  const dispatch = useDispatch();

  const totalValue = counters.reduce(
    (initial, current) => initial + current.value,
    0
  );

  const handleIncrement = (id: number) => {
    dispatch(increment(id));
  };

  const handleDecrement = (id: number) => {
    dispatch(decrement(id));
  };

  return (
    <div className="max-w-md mx-auto flex justify-center items-center min-h-screen">
      <div className="bg-gray-50 p-10 text-black rounded-2xl text-center flex gap-4">
        <div className="space-y-12">
          <State totalValue={totalValue} />
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              count={counter.value}
              onIncrement={() => handleIncrement(counter.id)}
              onDecrement={() => handleDecrement(counter.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
