import Head from "next/head";
import Navbar from "../components/Navbar";
import Link from "next/link";
import characters from "../data/characters";
import CharacterCard from "../components/CharacterCard";
import { useState } from "react";

export function getStaticProps({ params }) {
  return {
    props: {
      characters,
    },
  };
}

export default function Characters({ characters }) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <Head>
        <title>Characters - Genshin Quick Reference</title>
        <meta
          name="description"
          content="A quick reference guide to the game Genshin Impact"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar page="Characters" />
      <main className="container mx-auto text-gray-50">
        <div className="relative">
          <h2 className="text-4xl sm:text-5xl text-center font-semibold">
            Characters
          </h2>
          <input
            type="text"
            name="search"
            onChange={handleChange}
            value={search}
            placeholder="Search"
            autoComplete="off"
            className="text-lg bg-gray-900 bg-opacity-80 focus:outline-none rounded px-2 py-1 w-full mt-4 md:mt-0 md:w-3/12 md:absolute md:right-1 md:top-3"
          />
        </div>
        <div className="my-4 flex flex-wrap">
          {characters.map((character) =>
            character.name.toLowerCase().includes(search.toLowerCase()) ? (
              <CharacterCard key={character.name} character={character} />
            ) : (
              ""
            )
          )}
        </div>
      </main>
    </div>
  );
}
