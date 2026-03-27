import { DetailsCarCharacter } from "../components/deatilscar/Character";
import { Users, Settings, Settings2, LayoutGrid } from "lucide-react";

export function DetailsCar() {

    const characters = [
        {
            icon: <Users />,
            name: "Asientos",
            value: "5"
        },
        {
            icon: <Settings />,
            name: "Transmisión",
            value: "Automatico"
        },
        {
            icon: <Settings2 />,
            name: "Combustible",
            value: "Gasolina"
        },
        {
            icon: <LayoutGrid />,
            name: "Tipo",
            value: "SUV"
        }
    ]

    return (
        <div>
            <div>
                <img src="/audi-q3-sportback.png" alt="" className="w-full" />
            </div>
            <div className="m-7.5 flex flex-col gap-3.75">
                <span className="text-[#B9B9B9] text-[12px]">Audi - 2026</span>
                <span className="font-bold text-[24px]">Audi Q3 Sportback</span>
                <span className="text-[#497ACE] font-bold text-[24px]">S/. 230 <span className="text-[#B9B9B9] font-normal text-[12px]"> x dia</span> </span> 
            </div>
            <div className="grid grid-cols-2 mx-7.5 gap-5">
                {characters.map((character, index) => (
                    <DetailsCarCharacter
                        key={index}
                        icon={character.icon}
                        name={character.name}
                        value={character.value}
                    />
                ))}
            </div>
            <div className="m-7.5">
                <span className="font-bold">Reserva tu vehículo</span>
                <form action="" className="bg-[#F6F9FE] rounded-[10px] mt-4">
                    <div className="p-7.5">
                        <label htmlFor="">Fecha</label>
                        <input type="date" className="w-full border border-[#B9B9B9] rounded-[10px] p-2.5 mt-1.25 mb-7.5 shadow-lg" />

                        <label htmlFor="">Cantidad de Días</label>
                        <div>
                            <input type="button" value={"-"} className="w-11.25 h-11.25 border border-[#B9B9B9] rounded-l-[10px] text-center shadow-lg" />
                            <input type="text" placeholder="0" className="w-11.25 h-11.25 border border-[#B9B9B9] text-center shadow-lg" />
                            <input type="button" value={"+"} className="w-11.25 h-11.25 border border-[#B9B9B9] rounded-r-[10px] text-center shadow-lg" />
                        </div>
                    </div>
                    <div className="border-t-2 border-[#B9B9B9] p-7.5 grid grid-cols-2">
                        <span className="">Precio x día</span>
                        <span className="text-end text-[#B9B9B9]">S/. 260</span>
                        <span className="pt-5.5">Precio Total</span>
                        <span className="text-end text-[#B9B9B9] pt-5.5">S/ 520</span>
                    </div>
                </form>
            </div>
        </div>
    )
}