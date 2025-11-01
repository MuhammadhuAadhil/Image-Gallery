import React from "react";

import one from "../assets/image source/car 1.jpg";
import two from "../assets/image source/car 2.jpg";
import three from "../assets/image source/car 3.jpg";
import four from "../assets/image source/car 4.jpg";
import five from "../assets/image source/Car 5.jpg";
import six from "../assets/image source/Car 6.jpg";
import seven from "../assets/image source/Car 7.jpg";
import eight from "../assets/image source/Car 8.jpg";

function Body() {
  const cars = [
    {
      img: one,
      title: "Aston Martin Valkyrie",
      desc: "The Aston Martin Valkyrie is a road-legal hypercar born from Formula 1 technology. Its lightweight carbon-fiber body and extreme aerodynamics deliver unmatched performance. Powered by a screaming naturally aspirated V12 paired with hybrid tech, it redefines speed. Every detail is engineered for a race-car-like driving experience on public roads.",
    },
    {
      img: two,
      title: "Koenigsegg Trevita",
      desc: "The Koenigsegg Trevita is a hypercar draped in a diamond-weave carbon-fiber finish. It’s an ultra-rare creation, built for those who demand beauty and exclusivity. With a powerful V8 engine and blistering speed, it’s a marvel of Swedish engineering. Each Trevita is a piece of art, crafted in extremely limited numbers.",
    },
    {
      img: three,
      title: "BMW 5 Series",
      desc: "The BMW 5 Series is a premium executive sedan with sporty DNA. It offers a perfect balance between performance, comfort, and technology. Engaging handling and powerful engine options make every drive thrilling. A car designed for leaders who demand driving pleasure and class.",
    },
    {
      img: four,
      title: "Hennessey Venom F5",
      desc: "The Hennessey Venom F5 is built to chase the 300 mph barrier. Its 1,817 hp twin-turbo V8 makes it one of the fastest cars on earth. Aerodynamics are sculpted purely for speed and stability. A symbol of extreme engineering and American performance power.",
    },
    {
      img: five,
      title: "Range Rover",
      desc: "The Range Rover is the ultimate expression of a luxury SUV. It blends world-class off-road capability with first-class comfort. Elegant styling meets a plush interior filled with advanced tech. Perfect for those who want power, prestige, and versatility.",
    },
    {
      img: six,
      title: "SSC Tuatara",
      desc: "The SSC Tuatara is a hypercar designed for record-breaking speed runs. Its sleek, aerodynamic body slices through the air with precision. The 1,750 hp twin-turbo V8 delivers jaw-dropping performance. It’s a symbol of engineering ambition and American innovation.",
    },
    {
      img: seven,
      title: "Toyota Camry",
      desc: "The Toyota Camry is a symbol of reliability and practicality. Known for its comfort and fuel efficiency, it’s built for daily driving. Smooth performance and a quiet cabin make every trip stress-free. A sedan that combines affordability, safety, and peace of mind.",
    },
    {
      img: eight,
      title: "Bugatti Chiron Super Sport",
      desc: "The Bugatti Chiron Super Sport is the pinnacle of hypercar engineering. Its quad-turbo W16 engine delivers astonishing speed and power. Inside, it offers luxury craftsmanship and timeless design. A masterpiece that blends elegance, exclusivity, and raw performance.",
    },
  ];

  return (
    <div className="gallery">
      {cars.map((car, index) => (
        <div className="card-container" key={index}>
          <div className="card">
            <div className="front">
              <img className="pic" src={car.img} alt={car.title} />
              <h3>{car.title}</h3>
            </div>
            <div className="back">
              <p>{car.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Body;
