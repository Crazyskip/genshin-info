import Image from "next/image";

export default function CharacterBanner({ character }) {
  return (
    <div className="character-banner flex bg-gray-900 bg-opacity-60">
      <div className="flex flex-col justify-center flex-1 pl-4 py-4 md:py-6 text-gray-50">
        <h1 className="crimson-font text-4xl md:text-5xl font-bold">
          {character.name.toUpperCase()}
        </h1>
        <div className="text-lg md:text-xl pl-2">
          <span>{character.stars} ✦ </span>
          <span className="crimson-font font-bold ml-2">
            {character.element.toUpperCase()}
          </span>
        </div>
        <div className="element-image mt-auto relative">
          <Image
            src={`/assets/elements/${character.element}.webp`}
            alt={`Element ${character.element}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="character-image relative">
        <Image
          src={`/assets/characters/${character.image}`}
          alt={`Character ${character.name}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
