import Head from "next/head";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";

const links = [
  {
    title: "Interactive Map",
    link: "https://webstatic-sea.mihoyo.com/app/ys-map-sea/index.html?lang=en-us#/map/2",
  },
  {
    title: "All Character Builds",
    link: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRq-sQxkvdbvaJtQAGG6iVz2q2UN9FCKZ8Mkyis87QHFptcOU3ViLh0_PJyMxFSgwJZrd10kbYpQFl1/pubhtml#",
  },
  { title: "Keqing Mains", link: "https://keqingmains.com" },
  {
    title: "Honey Impact DB",
    link: "https://genshin.honeyhunterworld.com/?lang=EN",
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Genshin Quick Reference</title>
        <meta
          name="description"
          content="A quick reference guide to the game Genshin Impact"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar page="Home" />
      <main className="mx-auto w-full lg:w-10/12 xl:w-3/4 text-gray-50">
        <h1 className="text-4xl sm:text-5xl text-center font-semibold">
          Genshin Impact Quick Reference
        </h1>

        <div className="w-full mt-4">
          <div className="bg-gray-900 bg-opacity-60 p-4 flex flex-col items-center">
            <span className="text-3xl font-semibold pb-1">Quick Links</span>
            <hr className="mb-2" />
            <div className="flex flex-col items-center text-2xl">
              <Link href={"/characters"}>
                <a className="py-1 hover:text-gray-400">Characters</a>
              </Link>
              {links.map((link) => (
                <a
                  key={link.link}
                  href={link.link}
                  className="py-1 hover:text-gray-400"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center mt-4">
          <div className="w-full xl:w-1/2 pb-2 px-2 xl:pr-2 xl:pl-0">
            <a href="/assets/Character_CharacterEXP.webp">
              <Image
                src="/assets/character_exp.webp"
                alt={`Character EXP Requirements`}
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
