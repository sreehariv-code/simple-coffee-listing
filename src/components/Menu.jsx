import GridSection from "./GridSection";

const Menu = () => {
  return (
    <div className="bg-bg-secondary relative -top-10 lg:py-16 mx-auto max-w-[90%]">
      <div className="head text-center mx-auto lg:max-w-[53%]">
        <h1 className="text-Head font-semibold font-DM-Sans text-text-primary">
          Our Collection
        </h1>
        <p className="text-text-secondary text-Body">
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
      </div>
      <GridSection />
    </div>
  );
};

export default Menu;
