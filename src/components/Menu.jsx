import GridSection from "./GridSection";
import swirl from "../assets/dccl--frontend-simple-coffee-listing/vector.svg"
import Switcher from "./Switcher";

const Menu = () => {
  return (
    <div className="bg-bg-secondary relative -translate-y-20 py-10 md:py-14 lg:py-16 mx-auto max-w-[90%] rounded-xl ">
      <div className="head text-center mx-auto max-w-[27rem] lg:w-[43%] lg:max-w-[37rem] relative">
        <h1 className="font-semibold text-Head font-DM-Sans text-text-primary">
          Our Collection
        </h1>
        <p className="text-text-secondary w-[80%] mx-auto text-[4vw] mt-3 md:text-Body">
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
        <img src={swirl} alt="swirl" className="absolute top-0 right-0 -z-20" />
      </div>
      <Switcher />
      <GridSection />
    </div>
  );
};

export default Menu;
