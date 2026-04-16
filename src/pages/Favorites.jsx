import { useEffect, useState } from "react";
import { HomeCar } from "../components/home/Car";
import { useNavigate } from "react-router-dom";

export function Favorites() {

  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(data);
  }, []);

  return (
    <div className="min-h-screen p-5">
      
      <h1 className="text-2xl font-bold mb-4">
        Tus vehículos más gustados ❤️
      </h1>

      {favorites.length === 0 ? (
        <p>No tienes favoritos aún</p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {favorites.map((car, index) => (
            <HomeCar key={index} {...car} />
          ))}
        </div>
      )}

      <button
        onClick={() => navigate("/home")}
        className="mt-6 bg-blue-500 text-white p-3 rounded"
      >
        Volver
      </button>
    </div>
  );
}