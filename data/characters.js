const characters = [
  {
    name: "Albedo",
    stars: 5,
    element: "geo",
    image: "albedo.webp",
    ascension: "Character_Albedo.jpg",
    guide: "Character_Albedo.jpg",
    links: [
      {
        title: "Keqing Mains Full Albedo Guide",
        link: "https://keqingmains.com/albedo/",
      },
    ],
  },
  {
    name: "Aloy",
    stars: 5,
    element: "cryo",
    image: "aloy.webp",
    ascension: "Character_Aloy.png",
    guide: "Character_Aloy.jpg",
    links: [],
  },
  {
    name: "Amber",
    stars: 4,
    element: "pyro",
    image: "amber.webp",
    ascension: "Character_Amber.jpg",
    guide: "Character_Amber.jpg",
    links: [
      {
        title: "Keqing Mains Amber Guide",
        link: "https://keqingmains.com/amber/",
      },
    ],
  },
  {
    name: "Ayaka",
    stars: 5,
    element: "cryo",
    image: "ayaka.webp",
    ascension: "Character_Ayaka.png",
    guide: "Character_Ayaka.jpg",
    links: [
      {
        title: "Keqing Mains Full Ayaka Guide",
        link: "https://keqingmains.com/ayaka/",
      },
    ],
  },
  {
    name: "Barbara",
    stars: 4,
    element: "hydro",
    image: "barbara.webp",
    ascension: "Character_Barbara.jpg",
    guide: "Character_Barbara.png",
    links: [],
  },
  {
    name: "Beidou",
    stars: 4,
    element: "electro",
    image: "beidou.webp",
    ascension: "Character_Beidou.jpg",
    guide: "Character_Beidou.jpg",
    links: [
      {
        title: "Keqing Mains Ultimate Beidou Guide",
        link: "https://keqingmains.com/beidou/",
      },
      {
        title: "Keqing Mains 6 Minute Beidou Guide",
        link: "https://www.youtube.com/watch?v=AWlLidtFiDw",
      },
    ],
  },
  {
    name: "Bennett",
    stars: 4,
    element: "pyro",
    image: "bennett.webp",
    ascension: "Character_Bennett.png",
    guide: "Character_Bennett.jpg",
    links: [
      {
        title: "Keqing Mains Bennett Guide",
        link: "https://keqingmains.com/bennett/",
      },
    ],
  },
  {
    name: "Chongyun",
    stars: 4,
    element: "cryo",
    image: "chongyun.webp",
    ascension: "Character_Chongyun.jpg",
    guide: "Character_Chongyun.png",
    links: [],
  },
  {
    name: "Diluc",
    stars: 5,
    element: "pyro",
    image: "diluc.webp",
    ascension: "Character_Diluc.jpg",
    guide: "Character_Diluc.jpg",
    links: [
      {
        title: "Keqing Mains Diluc Guide",
        link: "https://keqingmains.com/diluc/",
      },
    ],
  },
  {
    name: "Diona",
    stars: 4,
    element: "cryo",
    image: "diona.webp",
    ascension: "Character_Diona.jpg",
    guide: "Character_Diona.jpg",
    links: [
      {
        title: "Keqing Mains Full Diona Guide",
        link: "https://keqingmains.com/diona/",
      },
      {
        title: "Keqing Mains 4 Minute Diona Guide",
        link: "https://www.youtube.com/watch?v=IWoSkeAFY4o",
      },
    ],
  },
  {
    name: "Eula",
    stars: 5,
    element: "cryo",
    image: "eula.webp",
    ascension: "Character_Eula.jpg",
    guide: "Character_Eula.png",
    links: [
      {
        title: "Keqing Mains Basic Eula Guide",
        link: "https://keqingmains.com/eula/",
      },
      {
        title: "Keqing Mains 7 Minute Eula Guide",
        link: "https://www.youtube.com/watch?v=4pm1CQ7ftws",
      },
    ],
  },
  {
    name: "Fischl",
    stars: 4,
    element: "electro",
    image: "fischl.webp",
    ascension: "Character_Fischl.jpg",
    guide: "Character_Fischl.jpg",
    links: [],
  },
  {
    name: "Ganyu",
    stars: 5,
    element: "cryo",
    image: "ganyu.webp",
    ascension: "Character_Ganyu.jpg",
    guide: "Character_Ganyu.jpg",
    links: [
      {
        title: "Keqing Mains Full Ganyu Guide",
        link: "https://keqingmains.com/ganyu/",
      },
    ],
  },
  {
    name: "Gorou",
    stars: 5,
    element: "geo",
    image: "gorou.webp",
    ascension: "Character_Gorou.png",
    guide: "Coming_Soon.jpg",
    links: [],
  },
  {
    name: "Hu Tao",
    stars: 5,
    element: "pyro",
    image: "hu_tao.webp",
    ascension: "Character_HuTao.jpg",
    guide: "Character_HuTao.jpg",
    links: [
      {
        title: "Keqing Mains Hu Tao Guide (WIP)",
        link: "https://keqingmains.com/hu-tao/",
      },
    ],
  },
  {
    name: "Jean",
    stars: 5,
    element: "anemo",
    image: "jean.webp",
    ascension: "Character_Jean.jpg",
    guide: "Character_Jean.jpg",
    links: [
      {
        title: "Keqing Mains Jean Guide",
        link: "https://keqingmains.com/eula/",
      },
    ],
  },
  {
    name: "Kaeya",
    stars: 4,
    element: "cryo",
    image: "kaeya.webp",
    ascension: "Character_Kaeya.jpg",
    guide: "Character_Kaeya.jpg",
    links: [
      {
        title: "Keqing Mains Kaeya Guide",
        link: "https://keqingmains.com/kaeya/",
      },
    ],
  },
  {
    name: "Kaedehara Kazuha",
    stars: 5,
    element: "anemo",
    image: "kazuha.webp",
    ascension: "Character_Kazuha.png",
    guide: "Character_Kazuha.png",
    links: [
      {
        title: "Keqing Mains Kazuha Guide",
        link: "https://keqingmains.com/kazuha/",
      },
      {
        title: "Keqing Mains 6 Minute Kazuha Guide",
        link: "https://www.youtube.com/watch?v=QpaxtAxTJuA",
      },
    ],
  },
  {
    name: "Keqing",
    stars: 5,
    element: "electro",
    image: "keqing.webp",
    ascension: "Character_Keqing.jpg",
    guide: "Character_Keqing.jpg",
    links: [
      {
        title: "Keqing Mains Full Keqing Guide",
        link: "https://keqingmains.com/keqing/",
      },
      {
        title: "Keqing Mains 8 Minute Keqing Guide",
        link: "https://www.youtube.com/watch?v=A9_k6p52N1o",
      },
    ],
  },
  {
    name: "Klee",
    stars: 5,
    element: "pyro",
    image: "klee.webp",
    ascension: "Character_Klee.jpg",
    guide: "Character_Klee.jpg",
    links: [
      {
        title: "Keqing Mains In Depth Klee Guide",
        link: "https://keqingmains.com/klee/",
      },
    ],
  },
  {
    name: "Kokomi",
    stars: 5,
    element: "hydro",
    image: "kokomi.webp",
    ascension: "Character_Kokomi.png",
    guide: "Character_Kokomi.jpg",
    links: [
      {
        title: "Keqing Mains Kokomi Guide",
        link: "https://keqingmains.com/kokomi/",
      },
      {
        title: "Keqing Mains 6 Minute Kokomi Guide",
        link: "https://www.youtube.com/watch?v=FAI39xYCMgo",
      },
    ],
  },
  {
    name: "Kojou Sara",
    stars: 4,
    element: "electro",
    image: "kujou_sara.webp",
    ascension: "Character_Sara.png",
    guide: "Character_Sara.jpg",
    links: [],
  },
  {
    name: "Lisa",
    stars: 4,
    element: "electro",
    image: "lisa.webp",
    ascension: "Character_Lisa.jpg",
    guide: "Character_Lisa.jpg",
    links: [
      {
        title: "Keqing Mains In Depth Lisa Guide",
        link: "https://keqingmains.com/lisa/",
      },
    ],
  },
  {
    name: "Mona",
    stars: 5,
    element: "hydro",
    image: "mona.webp",
    ascension: "Character_Mona.jpg",
    guide: "Character_Mona.jpg",
    links: [
      {
        title: "Keqing Mains Mona Guide",
        link: "https://keqingmains.com/mona/",
      },
    ],
  },
  {
    name: "Ningguang",
    stars: 4,
    element: "geo",
    image: "ningguang.webp",
    ascension: "Character_Ningguang.jpg",
    guide: "Character_Ningguang.jpg",
    links: [
      {
        title: "Keqing Mains Full Ningguang Guide",
        link: "https://keqingmains.com/ningguang/",
      },
      {
        title: "Keqing Mains 6 Minute Ningguang Guide",
        link: "https://www.youtube.com/watch?v=aecxJRSn2d4",
      },
    ],
  },
  {
    name: "Noelle",
    stars: 4,
    element: "geo",
    image: "noelle.webp",
    ascension: "Character_Noelle.jpg",
    guide: "Character_Noelle.jpg",
    links: [
      {
        title: "Keqing Mains Full Noelle Guide",
        link: "https://keqingmains.com/noelle/",
      },
    ],
  },
  {
    name: "Qiqi",
    stars: 5,
    element: "cryo",
    image: "qiqi.webp",
    ascension: "Character_Qiqi.jpg",
    guide: "Character_Qiqi.png",
    links: [
      {
        title: "Keqing Mains Qiqi Guide",
        link: "https://keqingmains.com/qiqi/",
      },
    ],
  },
  {
    name: "Raiden Shogun",
    stars: 5,
    element: "electro",
    image: "raiden_shogun.webp",
    ascension: "Character_Raiden.png",
    guide: "Character_Raiden.jpg",
    links: [
      {
        title: "Keqing Mains Ultimate Raiden Shogun Guide",
        link: "https://keqingmains.com/raiden/",
      },
      {
        title: "Keqing Mains 5 Minute Raiden Shogun Guide",
        link: "https://www.youtube.com/watch?v=m1JysEqPbOs",
      },
    ],
  },
  {
    name: "Razor",
    stars: 4,
    element: "electro",
    image: "razor.webp",
    ascension: "Character_Razor.jpg",
    guide: "Character_Razor.jpg",
    links: [
      {
        title: "Keqing Mains In-Depth Razor Guide",
        link: "https://keqingmains.com/razor/",
      },
    ],
  },
  {
    name: "Rosaria",
    stars: 4,
    element: "cryo",
    image: "rosaria.webp",
    ascension: "Character_Rosaria.jpg",
    guide: "Character_Rosaria.png",
    links: [
      {
        title: "Keqing Mains Full Rosaria Guide",
        link: "https://keqingmains.com/rosaria/",
      },
      {
        title: "Keqing Mains 7 Minute Rosaria Guide",
        link: "https://www.youtube.com/watch?v=JQ01_OKxdbs",
      },
    ],
  },
  {
    name: "Sayu",
    stars: 4,
    element: "electro",
    image: "sayu.webp",
    ascension: "Character_Sayu.png",
    guide: "Character_Sayu.jpg",
    links: [],
  },
  {
    name: "Sucrose",
    stars: 4,
    element: "anemo",
    image: "sucrose.webp",
    ascension: "Character_Sucrose.jpg",
    guide: "Character_Sucrose.jpg",
    links: [
      {
        title: "Keqing Mains Full Sucrose Guide",
        link: "https://keqingmains.com/sucrose/",
      },
      {
        title: "Keqing Mains 8 Minute Sucrose Guide",
        link: "https://www.youtube.com/watch?v=paUqUTmcf-Y",
      },
    ],
  },
  {
    name: "Tartaglia",
    stars: 5,
    element: "hydro",
    image: "tartaglia.webp",
    ascension: "Character_Tartaglia.jpg",
    guide: "Character_Tartaglia.jpg",
    links: [
      {
        title: "Keqing Mains Tartaglia Guide",
        link: "https://keqingmains.com/tartaglia/",
      },
    ],
  },
  {
    name: "Thoma",
    stars: 4,
    element: "pyro",
    image: "thoma.webp",
    ascension: "Character_Thoma.jpg",
    guide: "Character_Thoma.jpg",
    links: [],
  },
  {
    name: "Venti",
    stars: 5,
    element: "anemo",
    image: "venti.webp",
    ascension: "Character_Venti.jpg",
    guide: "Character_Venti.jpg",
    links: [
      {
        title: "Keqing Mains Venti Guide",
        link: "https://keqingmains.com/venti/",
      },
    ],
  },
  {
    name: "Xiangling",
    stars: 4,
    element: "pyro",
    image: "xiangling.webp",
    ascension: "Character_Xiangling.jpg",
    guide: "Character_Xiangling.jpg",
    links: [
      {
        title: "Keqing Mains Xiangling Guide",
        link: "https://keqingmains.com/xiangling/",
      },
    ],
  },
  {
    name: "Xiao",
    stars: 5,
    element: "anemo",
    image: "xiao.webp",
    ascension: "Character_Xiao.jpg",
    guide: "Character_Xiao.jpg",
    links: [
      {
        title: "Keqing Mains Xiao Guide",
        link: "https://keqingmains.com/xiao/",
      },
    ],
  },
  {
    name: "Xingqiu",
    stars: 4,
    element: "hydro",
    image: "xingqiu.webp",
    ascension: "Character_Xingqiu.jpg",
    guide: "Character_Xingqiu.jpg",
    links: [
      {
        title: "Keqing Mains Extended Xingqiu Guide",
        link: "https://keqingmains.com/xingqiu-extended/",
      },
      {
        title: "Keqing Mains Xingqiu Handbook",
        link: "https://keqingmains.com/xingqiu-short/",
      },
      {
        title: "Keqing Mains 5 Minute Xingqiu Guide",
        link: "https://www.youtube.com/watch?v=EiOP60N4p58",
      },
    ],
  },
  {
    name: "Xinyan",
    stars: 4,
    element: "pyro",
    image: "xinyan.webp",
    ascension: "Character_Xinyan.jpg",
    guide: "Character_Xinyan.jpg",
    links: [
      {
        title: "Keqing Mains Xinyan Guide",
        link: "https://keqingmains.com/xinyan/",
      },
    ],
  },
  {
    name: "Yanfei",
    stars: 4,
    element: "pyro",
    image: "yanfei.webp",
    ascension: "Character_Yanfei.jpg",
    guide: "Character_Yanfei.jpg",
    links: [],
  },
  {
    name: "Yoimiya",
    stars: 5,
    element: "pyro",
    image: "yoimiya.webp",
    ascension: "Character_Yoimiya.png",
    guide: "Character_Yoimiya.jpg",
    links: [
      {
        title: "Keqing Mains Yoimiya Guide",
        link: "https://keqingmains.com/yoimiya/",
      },
      {
        title: "Keqing Mains 6 Minute Yoimiya Guide",
        link: "https://www.youtube.com/watch?v=FjDsbxPbk50",
      },
    ],
  },
  {
    name: "Zhongli",
    stars: 5,
    element: "geo",
    image: "zhongli.webp",
    ascension: "Character_Zhongli.jpg",
    guide: "Character_Zhongli.jpg",
    links: [
      {
        title: "Keqing Mains Full Zhongli Guide",
        link: "https://keqingmains.com/zhongli/",
      },
    ],
  },
];

export default characters;
