import { useNavigate } from "react-router-dom";

export function RegisterSecondSteep({ handlerBackSteep }) {
  const navigate = useNavigate();

  const handlerBack = () => {
    handlerBackSteep();
  };


  const handlerSubmit = (e) => {
    e.preventDefault();
    // validata todos los datos y consulta a la api para registrar al usuario


    // redireccion al home
    navigate("/home");
  }

  return (
    <>
      <input
        type="text"
        placeholder="Nombre"
        className="border border-gray-300 rounded-[10px] p-2 w-full h-11.25 bg-[#ffffff] shadow-md focus:outline-none focus:ring-2 text-[16px]"
      />
      <input
        type="text"
        placeholder="Apellido Paterno"
        className="border border-gray-300 rounded-[10px] p-2 w-full h-11.25 bg-[#ffffff] shadow-md focus:outline-none focus:ring-2 text-[16px]"
      />
      <input
        type="text"
        placeholder="Apellido Materno"
        className="border border-gray-300 rounded-[10px] p-2 w-full h-11.25 bg-[#ffffff] shadow-md focus:outline-none focus:ring-2 text-[16px]"
      />
      <input
        type="text"
        placeholder="Licencia"
        className="border border-gray-300 rounded-[10px] p-2 w-full h-11.25 bg-[#ffffff] shadow-md focus:outline-none focus:ring-2 text-[16px]"
      />
      <input
        type="date"
        placeholder="Fecha de vencimiento"
        className="border border-gray-300 rounded-[10px] p-2 w-full h-11.25 bg-[#ffffff] shadow-md focus:outline-none focus:ring-2 text-[16px]"
      />
      <input
        type="text"
        placeholder="Teléfono"
        className="border border-gray-300 rounded-[10px] p-2 w-full h-11.25 bg-[#ffffff] shadow-md focus:outline-none focus:ring-2 text-[16px]"
      />
      {/* Genero en radio btn */}
      <div>
        <span className="text-[#A2A2A2] font-semibold text-[16px]">Sexo</span>
        <div className="mt-3 text-[14px] flex">
          <div className="flex items-center">
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              className="mr-2"
            />
            <label htmlFor="male">Masculino</label>
          </div>
          <div className="flex items-center ml-12">
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              className="mr-2"
            />
            <label htmlFor="female">Femenino</label>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-3.75">
        <button
          className="bg-white border border-[#B9B9B9] text-[#B9B9B9] font-bold rounded-[10px] w-1/2 h-11.25"
          onClick={handlerBack}
        >
          <span>Volver</span>
        </button>
        <button className="bg-[#497ACE] text-[#ffffff] font-bold rounded-[10px] w-1/2 h-11.25" onClick={handlerSubmit}>
          <span>Regístrate</span>
        </button>
      </div>
    </>
  );
}
