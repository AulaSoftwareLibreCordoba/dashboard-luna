import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Dashboard() {
  // const [isDropdownVisible, setDropdownVisible] = useState(false);

  // const toggleDropdown = () => {
  //   setDropdownVisible(!isDropdownVisible);
  // };

  return (
    <div className="flex-col bg-[#0f0c29] h-screen -scroll-my-0 overflow-y-hidden flex md:flex md:w-80">
      <div className="flex flex-col items-center">
        <div className="text-center mt-5 p-10 text-white bg-[#0f0c29] w-12 h-12 flex items-center justify-center ease-in-out">
          <div className="text-white">
            <FontAwesomeIcon icon={faChartPie} className="size-12" />
          </div>
        </div>
      </div>
      <div className="my-auto mb-auto">
        <a href="/users">
          <div className="p-4 text-white hover:bg-[#252849] cursor-pointer">
            <div className="flex items-center text-center md:m-3 mdtext-xl">
              <FontAwesomeIcon icon={faUser} className="size-7" />
              <p class="mx-auto font-bold text-lg">Usuarios</p>
            </div>
          </div>
        </a>
        <Link to={"/denuncias-dash"}>
          <div className="p-4 text-white hover:bg-[#252849] cursor-pointer">
            <div className="flex items-center text-center text-md md:m-3 md:text-xl">
              <FontAwesomeIcon icon={faCircleExclamation} className="size-7" />
              <p class="mx-auto font-bold text-lg">Denuncias</p>
            </div>
          </div>
        </Link>
        <a href="/notas-dash">
          <div className="p-4 text-white hover:bg-[#252849] cursor-pointer">
            <div className="flex items-center text-center text-md md:m-3 md:text-xl">
              <FontAwesomeIcon icon={faClipboard} className="size-7" />
              <p class="mx-auto font-bold text-lg">Notas pizarra</p>
            </div>
          </div>
        </a>
      </div>
      <button className="p-16 border-transparent">
        <div className="flex items-center justify-center p-2 mx-auto text-center text-white transition-colors duration-300 ease-in-out bg-red-800 rounded-full hover:bg-red-900 size-14">
          <a href="/">
            <div className="text-white cursor-pointer hover:rounded-full size-5">
              <FontAwesomeIcon icon={faSignOut} className="size-5" />
            </div>
          </a>
        </div>
      </button>
    </div>
  );
}

export default Dashboard;
