import { useContext } from "react";
import Card from "./Card";
import { DataContext } from "../context/DataContext";


const GridSection = () => {
  const { data } = useContext(DataContext)
  console.log(data)
  if (data === null) {
    return <h1>Loading....</h1>
  }
  return <div className="grid grid-cols-1 gap-5 px-16 pt-20 place-items-center grid-wrapper md:grid-cols-2 lg:grid-cols-3">
    {data.map((item) => <Card key={item.id} id={item.id} image={item.image} name={item.name} popular={item.popular} price={item.price} rating={item.rating} votes={item.votes} />)}
  </div>;
};

export default GridSection;
