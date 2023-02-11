import React, { useState } from "react";
import useFetch from "./useFetch";
const endpoint1 = "http://api.openweathermap.org/data/2.5/weather?q=";
const endpoint2 = "http://api.openweathermap.org/data/2.5/forecast?q=";

const API_KEY = "2f30efc9b6f02e277aa6d1df597bc628";
const Search = (props) => {
  const quickSearch = ["Nigeria", "London", "Germany", "Malaysia", "Australia"];
  const quickSearchElement = quickSearch.map((item, ind) => {
    return (
      <p
        className=" text-black h-[4rem] capitalize hover:bg-green-500 cursor-pointer  px-20 py-5 text-2xl hidden lg:grid"
        key={ind}
        onClick={() => {
          setCity(item);
          // setMyCity(item)
        }}
      >
        {item}
      </p>
    );
  });

  const [city, setCity] = useState("");
  const [myCity, setMyCity] = useState("");
  const url1 = `${endpoint1}${
    myCity ? myCity : "nigeria"
  }&units=metric&appid=${API_KEY}`;
  const url2 = `${endpoint2}${
    myCity ? myCity : "nigeria"
  }&units=metric&appid=${API_KEY}`;
  const { data, loading } = useFetch(url1);
  const fiveDays = useFetch(url2);

  console.log(data);
  console.log(fiveDays);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMyCity(city);
    props.handleRecieveData(city);
    setCity("");
  };
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  return (
    <section className="lg:bg-gradient-to-b lg:from-green-700 lg:to-green-300 lg:h-[100vh]  lg:w-[30vw] xl:w-[22vw] opacity-70">
      <form className="flex justify-center  pt-[4rem]">
        <input
          type="text"
          name="city"
          placeholder="City Here"
          id="1"
          onChange={handleChange}
          value={city}
          className="m-5 h-8 border-b-2 border-green-600 lg:border-white text-xl lg:placeholder:text-white w-3/5 text-white px-2 focus:outline-none bg-inherit pb-3"
        />
        <button onClick={handleSubmit} className="h-10 py-7 ">
          find
        </button>
      </form>
      <div className="py-5">{quickSearchElement}</div>
      <hr className="w-3/4 mx-auto my-5" />
      <h2 className="px-20 text-xl py-8">Weather Details</h2>
      <div className="px-20 flex justify-between hover:bg-green-500">
        <p className="text-xl py-5">Humidity</p>
        <p className="text-xl py-5">
          {loading ? "loading" : `${data?.main.humidity} %` || "nil"}
        </p>
      </div>
      <div className="px-20 flex justify-between hover:bg-green-500">
        <p className="text-xl py-5">Pressure</p>
        <p className="text-xl py-5">
          {loading ? "loading" : `${data?.main.pressure} mb` || "nil"}
        </p>
      </div>
      <div className="px-20 flex justify-between hover:bg-green-500">
        <p className="text-xl py-5">Wind speed</p>
        <p className="text-xl py-5">
          {loading ? "loading" : `${data?.wind.speed} km/hr` || "nil"}
        </p>
      </div>
      <div className="px-20 flex justify-between hover:bg-green-500">
        <p className="text-xl py-5">Wind gust</p>
        <p className="text-xl py-5">
          {loading ? "loading" : data?.wind.gust || "nil"}
        </p>
      </div>
      <div className="px-20 flex justify-between hover:bg-green-500">
        <p className="text-xl py-5">Wind deg</p>
        <p className="text-xl py-5">
          {loading ? "loading" : data?.wind.deg || "nil"}
        </p>
      </div>
      <hr className="w-3/4 mx-auto my-10" />
    </section>
  );
};

export default Search;
