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

  return (
    <div className="flex flex-row">
      <Dashboard />
      <div className="items-center w-screen h-screen flex flex-wrap overflow-y-scroll">
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
