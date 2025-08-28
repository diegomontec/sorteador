"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-6 bg-slate-900 text-white">
      <h1 className="text-4xl font-bold">Escolha as missões</h1>
      <div className="flex gap-4 max-w-xl w-full">
        <Link
          href="/pais"
          className="bg-green-700 flex w-full justify-center hover:bg-green-600 px-6 py-3 rounded-lg text-lg"
        >
          Pais
        </Link>
        <Link
          href="/filhos"
          className="bg-blue-700 flex w-full justify-center hover:bg-blue-600 px-6 py-3 rounded-lg text-lg"
        >
          Filhos
        </Link>
      </div>
    </main>
  );
}
