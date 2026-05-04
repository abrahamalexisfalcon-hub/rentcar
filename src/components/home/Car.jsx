import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import { useState, useEffect } from "react";


// RECIBE propiedades: name, price, year, brand (marca), img (imagen)
export function HomeCar({ name, price, year, brand, img }) {

  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate("/details", {
      state: { name, price, year, brand, img }
    });
  };

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const exists = favorites.find((car) => car.name === name);

    setIsFavorite(!!exists);
  }, [name]);

  const handleFavorite = (e) => {
    e.stopPropagation();

    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const exists = favorites.find((car) => car.name === name);

    let newFavorites;

    if (exists) {
      // quitar de favoritos
      newFavorites = favorites.filter((car) => car.name !== name);
      setIsFavorite(false);
    } else {
      // agregar a favoritos
      newFavorites = [...favorites, { name, price, year, brand, img }];
      setIsFavorite(true);
    }

    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  return (
    <div className="relative bg-white rounded-[10px] active:scale-95 shadow-[5px_7px_5px_rgba(0,0,0,0.28)] h-45" onClick={handleDetailsClick}>
      <div
        onClick={handleFavorite}
        className="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow cursor-pointer"
      >
        <Heart
          size={18}
          className={isFavorite ? "text-red-500 fill-red-500" : "text-gray-400"}
        />
      </div>
      <div className="flex justify-center items-center h-24 overflow-hidden">
        <img src={img} alt={name} className="h-full object-contain" />
      </div>
      <div className="flex flex-col  border-t border-[#B9B9B9] p-2.5 h-26.75">
        <span className="text-[#B9B9B9] text-[8px]">{brand} - {year}</span>
        <span className="mt-1.25 mb-2.5 font-bold text-[11px]">{name}</span>
        <span className="text-[#497ACE] font-bold text-[16px]">S/. {price}
          <span className="text-[#B9B9B9] font-normal text-[8px]"> x dia</span>
        </span>
      </div>
    </div>
  );
}
