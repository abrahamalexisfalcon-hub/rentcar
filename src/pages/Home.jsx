import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomeWellcome } from "../components/home/Wellcome";
import { HomeDetails } from "../components/home/Details";

export function Home() {

  const [order, setOrder] = useState("");
  const [search, setSearch] = useState(""); // ✅ NUEVO
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/inicio");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#497ACE]/20 via-white to-[#497ACE]/10">

      {/* HEADER */}
      <div className="flex justify-between items-center px-6 py-3 bg-[#3E546D] shadow-md">

        <h1 className="font-bold text-white text-[19px] tracking-wide">
          RentCars
        </h1>

        <div className="flex items-center gap-3">

          <button
            onClick={() => navigate("/history")}
            className="text-white ml-4 text-sm hover:underline"
          >
            Historial
          </button>
          <button
            onClick={() => navigate("/favorites")}
            className="text-white ml-2 text-sm hover:underline"
          >
            Favoritos
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-500 ml-1 px-4 py-1 rounded-lg text-sm font-semibold cursor-pointer"
          >
            Salir
          </button>

        </div>

      </div>

      {/* CONTENIDO */}
      <HomeWellcome setOrder={setOrder} setSearch={setSearch} /> {/* ✅ */}
      <HomeDetails order={order} search={search} /> {/* ✅ */}

    </div>
  );
}
