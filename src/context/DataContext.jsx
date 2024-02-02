import axios from "axios";
import { createContext, useEffect, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
      )
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};

export { DataContext, DataProvider };
