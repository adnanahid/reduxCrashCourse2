
import { useSelector } from "react-redux";
import State from "./components/State";
import Counter from "./components/Counters";


export default function Home() {
  const counters = useSelector((state)=> state.counters)

  const totalValue = counters.reduce(
    (initial, current) => initial + current.value,
    0
  );

  const handleIncrement = (counterId) => {
    const updatedCounter = counters.map((counter) => {
      if (counter.id === counterId) {
        return {
          ...counter,
          value: counter.value + 1,
        };
      }
      return counter;
    });
    setCounters(updatedCounter);
  };

  const handleDecrement = (counterId) => {
    const updatedCounter = counters.map((counter) => {
      if (counter.id === counterId) {
        return {
          ...counter,
          value: counter.value - 1,
        };
      }
      return counter;
    });
    setCounters(updatedCounter);
  };

  return (
    <div className="max-w-md mx-auto flex justify-center items-center min-h-screen">
      <div className="bg-gray-50 p-10 text-black rounded-2xl text-center">
        <State totalValue={totalValue} />
        <div className="space-y-12">
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
