import { useContext } from "react";
import { DataContext } from "../context/DataContext";
const Switcher = () => {
  const { available, setAvailable } = useContext(DataContext);

  return (
    <div className="max-w-[30rem] mx-auto  mt-16 min-h-[30px] flex justify-center gap-1  text-text-primary">
      <div
        className={`after:content-[''] after:absolute after:w-[50%] after:h-full after:rounded-lg after:bg-text-secondary after:-z-10 relative 
            after:left-[0%] rounded-lg ${
              available
                ? " after:translate-x-[100%] "
                : " after:translate-x-[0%] "
            } transition-transform
            ease-in duration-300 button-wrapper`}
      >
        <button
          onClick={() => setAvailable(false)}
          className="px-5 py-2 border-0 rounded-lg "
        >
          All Products
        </button>
        <button
          onClick={() => setAvailable(true)}
          className="px-5 py-2 border-0 rounded-lg"
        >
          Available Now
        </button>
      </div>
    </div>
  );
};

export default Switcher;
