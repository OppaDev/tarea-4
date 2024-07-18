import "../app/globals.css";
import { useEffect, useState } from "react";
import { getRickMorty } from "../../lib/getRickMorty";
import Image from "next/image";

export default function Home() {
  const [characters, setCharacters] = useState<
    { id: number; image: string; name: string; status: string, species: string, gender: string }[]
  >([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      console.log("fetching characters");
      const charactersData = await getRickMorty();
      console.log("charactersData", charactersData);
      setCharacters(charactersData);
    };

    fetchCharacters();
  }, []);

  return (
    <main className="bg-gradient-to-r from-gray-900 from-10% via-slate-700 via-30% to-neutral-500 to-90% min-h-screen p-5 flex justify-center">
      <div>
        <h1 className="text-4xl font-bold mb-5 text-green-600">Characters</h1>
        <ul className="space-y-5">
          {characters.map((character) => (
            <li
              key={character.id}
              className=" bg-gradient-to-b from-yellow-400 to-green-900 p-4 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl text-red-500">Nombre: {character.name}</h2>
              <p>Estado: {character.status}</p>
              <p>Especie: {character.species}</p>
              <p>Género: {character.gender}</p>
              <Image
                src={character.image}
                alt={character.name}
                width={200}
                height={200}
                className="rounded-lg border-cyan-500 border-8"
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
