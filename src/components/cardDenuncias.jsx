import { useState, useEffect } from "react";
import Dashboard from "./dashboard";

function Denuncias({ id, name }) {
  return (
    <div className="w-[15rem] h-80 sm:w-[14rem] sm:h-[19rem] md:w-[15rem] md:h-[19rem] xl:w-[17rem] xl:h-[20rem] 2xl:w-[18rem] 2xl:h-[20rem] relative p-5 m-5 border mx-auto border-violet-900 rounded items-center text-base hover:scale-110 transition duration-300 grid">
      <div className="w-full h-full text-base texto-pizarra overflow-hidden grid items-center">
        <span className="text-center text-2xl">{name}</span>
        <hr className="w-full mx-auto border-violet-900"></hr>
      </div>
      <button className="text-white bg-red-500 border border-red-500 rounded-lg flex items-center justify-center h-10 px-4 hover:bg-red-600 hover:border-red-600 transition duration-300 ease-in-out">
        Eliminar
      </button>
    </div>
  );
}

export default Denuncias;
