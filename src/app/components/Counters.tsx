import Button from "./Button";
import Count from "./Count";


interface CounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export default function Counter({ count, onIncrement, onDecrement }: CounterProps) {
  return (
    <div>
      <Count count={count} />
      <div className="space-x-3 flex">
        <Button handler={onIncrement}>Increment</Button>
        <Button handler={onDecrement}>Decrement</Button>
      </div>
    </div>
  );
}
