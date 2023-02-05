import React from "react";
import Search from "./Search";
const Home = () => {
  return (
    <main className="min-h-screen w-screen  bg-gradient-to-r from-blue-300 to-blue-500">
      <div className=" float-right m-10 border ">
        <Search />
      </div>
    </main>
  );
};

export default Home;
