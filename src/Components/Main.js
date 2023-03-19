import React from "react";

const Main = ({ fact, type }) => {
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
  return (
    <section
      className={
        type
          ? "mysection  lg:ml-[4rem] lg:mt-[50rem] xl:ml-[10rem] 2xl:ml-[14rem] "
          : ""
      }
    >
      <div className={type ? "flex pb-[3rem] " : "grid"}>
        <div
          className={
            type
              ? "flex pr-[6rem] "
              : "px-10 flex justify-between hover:bg-green-500 py-5"
          }
        >
          <p className={type === "first" ? "hidden" : ""}>Country</p>
          <p className={type ? "text-6xl" : ""}>
            {fact?.loading ? loading : fact?.data?.name}
          </p>
        </div>
        <div
          className={
            type
              ? "flex justify-between"
              : "px-10 flex justify-between hover:bg-green-500 py-5"
          }
        >
          <p className={type === "first" ? "hidden" : ""}>Temperature</p>
          <p className={type ? "text-4xl my-auto" : ""}>
            {fact?.loading ? loading : fact?.data?.main.temp}
            &deg;C
          </p>
        </div>
      </div>
      <div
        className={
          type
            ? "flex pb-[3rem]"
            : "px-10 flex justify-between hover:bg-green-500 py-5"
        }
      >
        <p className={type === "first" ? "pr-[4rem] text-4xl" : ""}>
          Feels Like
        </p>
        <p className={type ? "text-3xl" : ""}>
          {fact?.loading ? loading : fact?.data?.main.feels_like}
          &deg;C
        </p>
      </div>
      <p
        className={
          type ? " text-center text-3xl " : "px-10  hover:bg-green-500 py-5"
        }
      >
        {fact?.loading
          ? loading
          : `${time} - ${weekDay} ${day} ${month}' ${year?.at(-2)}${year?.at(
              -1
            )}`}
      </p>
    </section>
  );
};

export default Main;
