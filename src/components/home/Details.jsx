import { HomeCar } from "./Car";

export function HomeDetails() {
    const cars = [
        {
            id: 1,
            name: "Toyota 4 Runner",
            price: 130,
            year:2026,
            brand: "Toyota",
            img: "/toyota-4-runner.png",
        },
        {
            id: 2,
            name: "Audi Q3 Sportback",
            price: 230,
            year:2026,
            brand: "Audi",
            img: "/audi-q3-sportback.png",
        },
        {
            id: 3,
            name: "Nissan Sentra",
            price: 100,
            year:2026,
            brand: "Nissan",
            img: "/nissan-sentra.png",
        },
        {
            id: 4,
            name: "Toyota Hilux",
            price: 180,
            year:2026,
            brand: "Toyota",
            img: "/toyota-hilux.png",
        },
    ];
    return (
        <div className="my-7 mx-8 grid grid-cols-2 gap-7">
            {cars.map((car) => (
                <HomeCar
                    key={car.id}
                    name={car.name}
                    price={car.price}
                    year={car.year}
                    brand={car.brand}
                    img={car.img}
                />
            ))}
        </div>
    )
}