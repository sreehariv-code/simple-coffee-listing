import { useContext } from "react";
import Card from "./Card";
import { DataContext } from "../context/DataContext";

const GridSection = () => {
  const { filteredData } = useContext(DataContext);

  if (filteredData === null) {
    return <h1>Loading....</h1>;
  }
  return (
    <div className="grid-wrapper min-h-full">
      <div className="grid grid-cols-1 gap-5 px-16 mx-auto pt-20 max-w-[80%] md:grid-cols-2 lg:grid-cols-3">
        {filteredData.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            popular={item.popular}
            price={item.price}
            rating={item.rating}
            votes={item.votes}
            available={item.available}
          />
        ))}
      </div>
    </div>
  );
};

export default GridSection;
