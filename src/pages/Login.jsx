export function Login() {
  return (
    <div className="flex flex-col items-center">
      <img
        src="./logo-de-rentcars.png"
        alt="Logo de RentCars"
        style={{ width: "100%" }}
      />
      <h1 className="text-[#497ACE] font-bold text-[28px]">Iniciar Sesión</h1>
      <div className="w-full my-10 p-7 flex flex-col gap-6">
        <input
          type="text"
          placeholder="Correo electrónico"
          className="border border-gray-300 rounded-[10px] p-2 w-full h-11.25 bg-[#ffffff] shadow-md focus:outline-none focus:ring-2 text-[16px]"
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded-[10px] p-2 w-full h-11.25 bg-[#ffffff] shadow-md focus:outline-none focus:ring-2 text-[16px]"
        />
        <button className="bg-[#497ACE] text-[#ffffff] font-bold py-2 mt-6.5 px-4 h-11.25 rounded-[10px] hover:bg-[#3a6cb0]">
          Iniciar Sesión
        </button>
        <div className="flex justify-center">
          <span>
            ¿No tienes una cuenta?
            <a href="/register" className="text-[#FF960D] underline ml-2.5">
              Regístrate
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
