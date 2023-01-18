import { type NextPage } from "next";
import { useState, useEffect } from "react";
import Grid from "../modules/hero/grid";
import type { RickAndMorty } from "../domain/interfaces";

const APILInk = "https://rickandmortyapi.com/api/character/?page=1";


const Home: NextPage = () => {
  const [infoData, setInfoData] = useState< RickAndMorty[]>( []);

  useEffect(() => {
    fetch(APILInk)
      .then((response) => response.json())
      .then((response) => {
        setInfoData(response.results);
        console.log(response)
      });
  }, []);
  
  return (
 <div>
  <Grid rickanmortyAPI={infoData}/>
 </div>
  );
};

export default Home;

