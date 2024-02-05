import head from "../assets/dccl--frontend-simple-coffee-listing/bg-cafe.jpg";
import Menu from "./Menu";
const Main = () => {
  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="img-container min-h-[200px] max-h-[300px] flex">
        <img src={head} alt="head-image" className="object-cover" />
      </div>
      <Menu />
    </div>
  );
};

export default Main;
