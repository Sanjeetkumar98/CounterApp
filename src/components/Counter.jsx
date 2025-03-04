import { useSelector } from "react-redux";

const Counter = () => {
  const { counterVal } = useSelector((store) => store.counter);

  return (
    <h1 className="text-sm font-semibold">
      This is counter value: {counterVal}
    </h1>
  );
};

export default Counter;
