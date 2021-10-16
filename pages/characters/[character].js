import Head from "next/head";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import characters from "../../data/characters";

import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import CharacterBanner from "../../components/CharacterBanner";

export function getStaticProps({ params }) {
  const character = characters.find(
    (character) =>
      character.name.toLowerCase() === params.character.split("-").join(" ")
  );

  return {
    props: {
      character,
    },
  };
}

export function getStaticPaths() {
  const characterNames = characters.map((character) => character.name);
  const paths = characterNames.map((characterName) => {
    return {
      params: {
        character: characterName.split(" ").join("-").toLowerCase(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export default function Character({ character }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<AiFillStar key={i} className="pr-1" />);
  }
  return (
    <div>
      <Head>
        <title>{character.name} - Genshin Quick Reference</title>
        <meta
          name="description"
          content="A quick reference guide to the game Genshin Impact"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar page="Xingqiu" />
      <main className="mx-auto w-full lg:w-10/12 xl:w-3/4">
        <CharacterBanner character={character} />

        <div className="w-full mt-4">
          <div className="text-gray-50 bg-gray-900 bg-opacity-60 p-4 flex flex-col items-center">
            <span className="text-3xl font-semibold pb-1">Quick Links</span>
            <hr className="mb-2" />
            <div className="flex flex-col items-center">
              {character.links.map((link) => {
                return (
                  <a
                    className="text-xl py-1 hover:text-gray-400"
                    href={link.link}
                    key={link.title}
                  >
                    {link.title}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap mt-4">
          <div className="w-full xl:w-1/2 pb-2 px-2 xl:pr-2 xl:pl-0">
            <a href={`/assets/ascension/${character.ascension}`}>
              <Image
                src={`/assets/ascension/${character.ascension}`}
                alt={`${character.name} Ascension Guide`}
                width={1620}
                height={1080}
                layout="responsive"
              />
            </a>
          </div>
          <div className="w-full xl:w-1/2 pb-2 px-2 xl:pl-2 xl:pr-0">
            <a href={`/assets/guides/${character.guide}`}>
              <Image
                src={`/assets/guides/${character.guide}`}
                alt={`${character.name} Ascension Guide`}
                width={1620}
                height={1080}
                layout="responsive"
              />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
