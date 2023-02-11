// import split from "core-js/fn/symbol/split";
import React from "react";

const Main = ({ fact }) => {
  const loading = `Loading`;
  const date = new Date(fact?.data?.dt * 1000 + fact?.data?.timezone * 1000);

  const myDay = date.toUTCString();
  console.log(myDay.split(" "));
  const splited = myDay.split(" ");
  const weekDay = splited[0];
  const day = splited[1];
  const month = splited[2];
  const year = splited[3];
  const time = splited[4];
  console.log(weekDay, day, month, year, time);
  console.log(`natlurea`);
  console.log(date);
  return (
    <main>
      <div>{fact?.loading ? loading : fact?.data?.name}</div>
      <div>
        {fact?.loading ? loading : fact?.data?.main.temp}
        &deg;C
      </div>
      <div>
        Feels like: {fact?.loading ? loading : fact?.data?.main.feels_like}
        &deg;C
      </div>
      <div>
        {fact?.loading
          ? loading
          : `${time} - ${weekDay} ${day} ${month}' ${year?.at(-2)}${year?.at(
              -1
            )}`}
      </div>
    </main>
  );
};

export default Main;
