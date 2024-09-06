import { useState, useEffect } from "react";
import Dashboard from "./dashboard";
import Card from "./cardDenuncias";

function Denuncias() {
  const [denuncias, setDenuncias] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users/";

  // Función para capturar las denuncias
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

  return (
    <div className="flex flex-row">
      <Dashboard />
      <div className=" items-center w-screen flex flex-wrap">
        {denuncias.map((denuncia) => (
          <Card id={denuncia.id} name={denuncia.name} />
        ))}
      </div>
    </div>
  );
}

export default Denuncias;
