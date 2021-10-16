const characters = [
  {
    name: "Albedo",
    stars: 5,
    element: "geo",
    image: "albedo.webp",
    ascension: "Character_Albedo.webp",
    guide: "Character_Albedo.webp",
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
    ascension: "Character_Aloy.webp",
    guide: "Character_Aloy.webp",
    links: [],
  },
  {
    name: "Amber",
    stars: 4,
    element: "pyro",
    image: "amber.webp",
    ascension: "Character_Amber.webp",
    guide: "Character_Amber.webp",
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
    ascension: "Character_Ayaka.webp",
    guide: "Character_Ayaka.webp",
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
    ascension: "Character_Barbara.webp",
    guide: "Character_Barbara.webp",
    links: [],
  },
  {
    name: "Beidou",
    stars: 4,
    element: "electro",
    image: "beidou.webp",
    ascension: "Character_Beidou.webp",
    guide: "Character_Beidou.webp",
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
    ascension: "Character_Bennett.webp",
    guide: "Character_Bennett.webp",
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
    ascension: "Character_Chongyun.webp",
    guide: "Character_Chongyun.webp",
    links: [],
  },
  {
    name: "Diluc",
    stars: 5,
    element: "pyro",
    image: "diluc.webp",
    ascension: "Character_Diluc.webp",
    guide: "Character_Diluc.webp",
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
    ascension: "Character_Diona.webp",
    guide: "Character_Diona.webp",
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
    ascension: "Character_Eula.webp",
    guide: "Character_Eula.webp",
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
    ascension: "Character_Fischl.webp",
    guide: "Character_Fischl.webp",
    links: [],
  },
  {
    name: "Ganyu",
    stars: 5,
    element: "cryo",
    image: "ganyu.webp",
    ascension: "Character_Ganyu.webp",
    guide: "Character_Ganyu.webp",
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
    ascension: "Character_Gorou.webp",
    guide: "Coming_Soon.webp",
    links: [],
  },
  {
    name: "Hu Tao",
    stars: 5,
    element: "pyro",
    image: "hu_tao.webp",
    ascension: "Character_HuTao.webp",
    guide: "Character_HuTao.webp",
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
    ascension: "Character_Jean.webp",
    guide: "Character_Jean.webp",
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
    ascension: "Character_Kaeya.webp",
    guide: "Character_Kaeya.webp",
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
    ascension: "Character_Kazuha.webp",
    guide: "Character_Kazuha.webp",
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
    ascension: "Character_Keqing.webp",
    guide: "Character_Keqing.webp",
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
    ascension: "Character_Klee.webp",
    guide: "Character_Klee.webp",
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
    ascension: "Character_Kokomi.webp",
    guide: "Character_Kokomi.webp",
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
    ascension: "Character_Sara.webp",
    guide: "Character_Sara.webp",
    links: [],
  },
  {
    name: "Lisa",
    stars: 4,
    element: "electro",
    image: "lisa.webp",
    ascension: "Character_Lisa.webp",
    guide: "Character_Lisa.webp",
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
    ascension: "Character_Mona.webp",
    guide: "Character_Mona.webp",
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
    ascension: "Character_Ningguang.webp",
    guide: "Character_Ningguang.webp",
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
    ascension: "Character_Noelle.webp",
    guide: "Character_Noelle.webp",
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
    ascension: "Character_Qiqi.webp",
    guide: "Character_Qiqi.webp",
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
    ascension: "Character_Raiden.webp",
    guide: "Character_Raiden.webp",
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
    ascension: "Character_Razor.webp",
    guide: "Character_Razor.webp",
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
    ascension: "Character_Rosaria.webp",
    guide: "Character_Rosaria.webp",
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
    ascension: "Character_Sayu.webp",
    guide: "Character_Sayu.webp",
    links: [],
  },
  {
    name: "Sucrose",
    stars: 4,
    element: "anemo",
    image: "sucrose.webp",
    ascension: "Character_Sucrose.webp",
    guide: "Character_Sucrose.webp",
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
    ascension: "Character_Tartaglia.webp",
    guide: "Character_Tartaglia.webp",
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
    ascension: "Character_Thoma.webp",
    guide: "Character_Thoma.webp",
    links: [],
  },
  {
    name: "Venti",
    stars: 5,
    element: "anemo",
    image: "venti.webp",
    ascension: "Character_Venti.webp",
    guide: "Character_Venti.webp",
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
    ascension: "Character_Xiangling.webp",
    guide: "Character_Xiangling.webp",
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
    ascension: "Character_Xiao.webp",
    guide: "Character_Xiao.webp",
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
    ascension: "Character_Xingqiu.webp",
    guide: "Character_Xingqiu.webp",
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
    ascension: "Character_Xinyan.webp",
    guide: "Character_Xinyan.webp",
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
    ascension: "Character_Yanfei.webp",
    guide: "Character_Yanfei.webp",
    links: [],
  },
  {
    name: "Yoimiya",
    stars: 5,
    element: "pyro",
    image: "yoimiya.webp",
    ascension: "Character_Yoimiya.webp",
    guide: "Character_Yoimiya.webp",
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
    ascension: "Character_Zhongli.webp",
    guide: "Character_Zhongli.webp",
    links: [
      {
        title: "Keqing Mains Full Zhongli Guide",
        link: "https://keqingmains.com/zhongli/",
      },
    ],
  },
];

export default characters;
