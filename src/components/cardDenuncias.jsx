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
    <div className="w-[15rem] h-80 sm:w-[14rem] sm:h-[19rem] md:w-[15rem] md:h-[19rem] xl:w-[17rem] xl:h-[20rem] 2xl:w-[18rem] 2xl:h-[20rem] relative p-5 m-5 border-solid mx-auto border-black rounded items-center text-base hover:scale-110 transition duration-300 grid">
      <div className="grid items-center w-full h-full overflow-hidden text-base texto-pizarra">
        <span className="text-2xl text-center">{name}</span>
        <hr className="w-full mx-auto border-black"></hr>
      </div>
      <button
        onClick={deletePost}
        className="flex items-center justify-center h-10 px-4 text-white transition duration-300 ease-in-out bg-red-500 border border-red-500 rounded-lg hover:bg-red-600 hover:border-red-600"
      >
        Eliminar
      </button>
    </div>
  );
}

export default Denuncias;
