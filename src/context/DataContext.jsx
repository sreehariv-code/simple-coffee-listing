import axios from "axios";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  let filteredData = null;
  if (data === null) {
    return null;
  }
  filteredData = available ? data.filter((item) => item.available) : data;

  return (
    <DataContext.Provider value={{ filteredData, setAvailable, available }}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.any,
};

export { DataContext, DataProvider };
