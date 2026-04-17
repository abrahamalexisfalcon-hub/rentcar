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
      <div className="flex justify-between items-center px-6 py-3 bg-[#497ACE] shadow-md">

        <h1 className="font-bold text-white text-[19px] tracking-wide">
          RentCars
        </h1>

        <div className="flex items-center gap-2 bg-[#3E546D] px-4 py-2 rounded-lg ml-2 ">

          <button
            onClick={() => navigate("/history")}
            className="text-white text-sm hover:underline"
          >
            Historial  
          </button>
          <span className="text-white" >|</span>
          <button
            onClick={() => navigate("/favorites")}
            className="text-white text-sm hover:underline"
          >
            Favoritos
          </button>
          <span className="text-white">|</span>

          <button
            onClick={handleLogout}
            className="rounded-lg text-sm font-semibold cursor-pointer text-white"
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
