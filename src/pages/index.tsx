import { type NextPage } from "next";
import { useState, useEffect } from "react";
import Grid from "../modules/hero/grid";

const APILInk = "https://rickandmortyapi.com/api/character/?page=1";


const Home: NextPage = () => {
  const [infoData, setInfoData] = useState([]);

  useEffect(() => {
    fetch(APILInk)
      .then((response) => response.json())
      .then((response) => {
        setInfoData(response.results);
        console.info(response.results);
      });
  }, []);
  
  return (
 <div>
  <Grid/>
 </div>
  );
};

export default Home;
