"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

// Dynamic Card component
export default function Card() {
  const [cards, setCards] = useState([]);

  // Fetch data from the JSON file
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/models/services.json");
      const data = await response.json();
      setCards(data);
    }

    fetchData();
  }, []);

  return (
    <>
      {cards.map((card) => (
        <div
          key={card.id}
          className="max-w-sm rounded-lg bg-[#FBE4CC] text-[#1B262C] border border-gray-200 shadow-lg hover:bg-[#F8D9B0] active:bg-[#F7C7A4] transition-all duration-300 transform hover:scale-105 overflow-hidden"
        >
          {/* Image */}
          <div className="relative h-48 w-full">
            <Image
              src={card.image}
              alt={card.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>

          {/* Card Content */}
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2 hover:text-[#1B262C] transition-colors duration-200">
              <a href="#" className="hover:underline">
                {card.title}
              </a>
            </h2>
            <p className="mb-4 text-lg leading-relaxed">{card.description}</p>
            <div className="space-y-2 text-sm">
              {card.services.map((service, index) => (
                <a
                  key={index}
                  href={`/${service}`}
                  className="block text-[#1B262C] hover:text-[#0F1A1E] font-medium transition-colors duration-200 hover:text-blue-500"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
