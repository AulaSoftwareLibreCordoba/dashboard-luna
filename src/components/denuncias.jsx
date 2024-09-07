import { useState, useEffect } from "react";
import Dashboard from "./dashboard";
import Card from "./cardDenuncias";

function Denuncias() {
  const [denuncias, setDenuncias] = useState([]);
  const [isSearching, setisSearching] = useState("");
  const url = "https://jsonplaceholder.typicode.com/users/";

  const captDenuncias = async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error al realizar la petición");
      }

      const data = await response.json(); // Convertimos la respuesta en JSON
      setDenuncias(data); // Guardamos los datos en el estado
    } catch (error) {
      console.error("Error al obtener las denuncias:", error);
    }
  };

  // Llama a la función captDenuncias cuando el componente se monte
  useEffect(() => {
    captDenuncias();
  }, []); // El array vacío asegura que se ejecute solo una vez al montar el componente

  const handleDelete = (id) => {
    /*Pasamos como parametro prevRestaurant para dar el valor más actualizado de el array en caso
     * de pasar restaurants el array estaría desactualizado.
     */
    setDenuncias((prevDenuncias) =>
      /*filtramos el valor actualizado de restaurants por el id que recibe como parametro y volvemos
       * a rellenar el array inicial por restaurant con el id que no sea el eliminado para que este
       * no pertenezca a el array inicial
       */
      prevDenuncias.filter((denuncia) => denuncia.id !== id)
    );
  };

  const backButton = () => {
    window.location.href = '/'
  }

  return (
    <div className="grid flex-row md:flex">
      <div className="hidden md:flex">
      <Dashboard/>
      </div>
      <header className="justify-center h-18 text-center md:hidden bg-[#191448]">
        <h1 className="p-5 font-bold text-white">PANEL DE CONTROL - DENUNCIAS</h1>

        <button onClick={backButton} class="cursor-pointer duration-200 hover:scale-125 active:scale-100 border-transparent" title="Go Back">
          <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" class="stroke-blue-300">
            <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
          </svg>
        </button>
        
      </header>
      
      <div className="flex flex-wrap items-center w-screen h-screen overflow-y-scroll">
        {isSearching === "" ? (
          denuncias.map((denuncia) => (
            <Card
              key={denuncia.id}
              id={denuncia.id}
              name={denuncia.name}
              url={url}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <p>No se encontraron resultados de búsqueda</p>
        )}
      </div>
    </div>
  );
}

export default Denuncias;

