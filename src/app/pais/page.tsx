"use client";

import { useEffect, useState } from "react";

export default function MissoesPais() {
  const [frase, setFrase] = useState("");

  useEffect(() => {
    fetch("/missoesPais.json")
      .then((res) => res.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setFrase(data[randomIndex]);
      });
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-green-700 px-6">
      <div className="text-center text-white">
        <p className="text-4xl md:text-8xl font-semibold leading-snug mx-auto">
          {frase}
        </p>
      </div>
    </div>
  );
}
