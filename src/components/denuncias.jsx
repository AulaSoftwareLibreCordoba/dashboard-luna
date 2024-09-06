import { useState, useEffect } from "react";
import Dashboard from "./dashboard";

function Denuncias() {
  const [denuncias, setDenuncias] = useState([]);
  const url = "http://5.196.26.7:8080/denuncias";

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
      <div>
        {denuncias.map((denuncia) => (
          <h1 key={denuncia.id}>{denuncia.resumen}</h1> // Mostrar el resumen o cualquier otro dato
        ))}
      </div>
    </div>
  );
}

export default Denuncias;
