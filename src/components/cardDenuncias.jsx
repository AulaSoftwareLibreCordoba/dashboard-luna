import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Denuncias({ id, name, onDelete, url }) {
  const deletePost = async () => {
    try {
      await fetch(`${url}${id}`, { method: "DELETE" });
      console.log(`Deleted user with ID: ${id}`);
      onDelete(id);
    } catch (e) {
      console.error("Failed to delete the user:", e);
    }
  };
  return (
    <div className="w-[15rem] h-80 sm:w-[14rem] sm:h-[19rem] md:w-[14rem] md:h-[18rem] lg:w-[12.5rem] lg:h-[17rem] xl:w-[12rem] xl:h-[17rem] 2xl:w-[15rem] 2xl:h-[20rem] relative p-5 m-5 mx-auto rounded items-center text-base hover:scale-110 transition duration-300 grid bg-[#181343]">
      <div className="grid items-center w-full h-full overflow-hidden text-base texto-pizarra">
        <span className="text-2xl text-center text-white">{name}</span>
        <hr className="w-full mx-auto border-white"></hr>
      </div>
      <button 
      onClick={deletePost}
      className="grid items-center justify-center w-10 h-12 mx-auto font-semibold text-white transition-all duration-300 bg-red-700 border-transparent rounded-md shadow-2xl cursor-pointer hover:bg-red-800 xl:w-10"
      >
          <FontAwesomeIcon icon={faTrash} className="size-4" />
        </button>
    </div>
  );
}

export default Denuncias;

