import head from "../assets/dccl--frontend-simple-coffee-listing/bg-cafe.jpg";
import Menu from "./Menu";
const Main = () => {
  return (
    <div className="bg-bg-primary  min-h-screen">
      <img src={head} alt="head-image" />
      <Menu />
    </div>
  );
};

export default Main;
