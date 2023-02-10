import React, { useState } from "react";
import useFetch from "./useFetch";
const endpoint1 = "http://api.openweathermap.org/data/2.5/weather?q=";
const endpoint2 = "http://api.openweathermap.org/data/2.5/forecast?q=";

const API_KEY = "2f30efc9b6f02e277aa6d1df597bc628";
const Search = () => {
  const quickSearch = [
    "Nigeria",
    "London",
    "Germany",
    "South Africa",
    "Australia",
  ];
  const quickSearchElement = quickSearch.map((item, ind) => {
    return (
      <p
        className=" text-black h-[4rem] capitalize hover:bg-green-500 cursor-pointer  p-5 text-2xl hidden lg:grid"
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
    <section className="lg:bg-green-600 lg:h-[100vh]  lg:w-[30vw] xl:w-[22vw]">
      <form className="flex justify-center  py-10">
        <input
          type="text"
          name="city"
          placeholder="City Here"
          id="1"
          onChange={handleChange}
          value={city}
          className="m-5 h-8 border-b-2 border-green-600 lg:border-white text-xl lg:placeholder:text-white text-white px-2 w-[40%] focus:outline-none bg-inherit "
        />
        <button onClick={handleSubmit} className="h-10 py-7 ">
          find
        </button>
      </form>
      <div className="py-5">
        <h2 className="border text-center">Quick Search</h2>

        {quickSearchElement}
      </div>
    </section>
  );
};

export default Search;
