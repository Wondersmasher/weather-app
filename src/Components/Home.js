import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";
const endpoint1 = "http://api.openweathermap.org/data/2.5/weather?q=";
const endpoint2 = "http://api.openweathermap.org/data/2.5/forecast?q=";

const API_KEY = "2f30efc9b6f02e277aa6d1df597bc628";
const Home = () => {
  const [city, setCity] = useState("");
  const [myCity, setMyCity] = useState("");
  const url1 = `${endpoint1}${
    myCity ? myCity : "nigeria"
  }&units=metric&appid=${API_KEY}`;
  const url2 = `${endpoint2}${
    myCity ? myCity : "nigeria"
  }&units=metric&appid=${API_KEY}`;
  const { data } = useFetch(url1);
  const fiveDays = useFetch(url2);
  console.log(data);
  console.log(fiveDays);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMyCity(city);
  };
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        name="city"
        placeholder="City Here"
        id="1"
        onChange={handleChange}
        value={city}
        className="mx-5"
      />
      <button onClick={handleSubmit}>find</button>
    </>
  );
};

export default Home;
