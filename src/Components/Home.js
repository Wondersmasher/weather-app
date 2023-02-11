import React, { useState } from "react";
import Main from "./Main";
import Search from "./Search";
import useFetch from "./useFetch";
const endpoint1 = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "2f30efc9b6f02e277aa6d1df597bc628";
const Home = () => {
  const [recievedData, setRecievedData] = useState("");
  const url = `${endpoint1}${
    recievedData ? recievedData : "nigeria"
  }&units=metric&appid=${API_KEY}`;
  const handleRecieveData = (data) => {
    setRecievedData(data);
  };
  const fact = useFetch(url);
  console.log(fact.data);
  return (
    <main className="background min-h-screen w-[100vs]">
      <section className=" float-none lg:float-right">
        <Search handleRecieveData={handleRecieveData} />
      </section>
      <Main fact={fact} />
    </main>
  );
};
export default Home;
