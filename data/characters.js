const characters = [
  {
    name: "Albedo",
    stars: 5,
    element: "Geo",
    image: "albedo.webp",
    ascension: "character_albedo.webp",
    guide: "character_albedo.webp",
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
    element: "Cryo",
    image: "aloy.webp",
    ascension: "character_aloy.webp",
    guide: "character_aloy.webp",
    links: [],
  },
  {
    name: "Amber",
    stars: 4,
    element: "Pyro",
    image: "amber.webp",
    ascension: "character_amber.webp",
    guide: "character_amber.webp",
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
    element: "Cryo",
    image: "ayaka.webp",
    ascension: "character_ayaka.webp",
    guide: "character_ayaka.webp",
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
    element: "Hydro",
    image: "barbara.webp",
    ascension: "character_barbara.webp",
    guide: "character_barbara.webp",
    links: [],
  },
  {
    name: "Beidou",
    stars: 4,
    element: "Electro",
    image: "beidou.webp",
    ascension: "character_beidou.webp",
    guide: "character_beidou.webp",
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
    element: "Pyro",
    image: "bennett.webp",
    ascension: "character_bennett.webp",
    guide: "character_bennett.webp",
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
    element: "Cryo",
    image: "chongyun.webp",
    ascension: "character_chongyun.webp",
    guide: "character_chongyun.webp",
    links: [],
  },
  {
    name: "Diluc",
    stars: 5,
    element: "Pyro",
    image: "diluc.webp",
    ascension: "character_diluc.webp",
    guide: "character_diluc.webp",
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
    element: "Cryo",
    image: "diona.webp",
    ascension: "character_diona.webp",
    guide: "character_diona.webp",
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
    element: "Cryo",
    image: "eula.webp",
    ascension: "character_eula.webp",
    guide: "character_eula.webp",
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
    element: "Electro",
    image: "fischl.webp",
    ascension: "character_fischl.webp",
    guide: "character_fischl.webp",
    links: [],
  },
  {
    name: "Ganyu",
    stars: 5,
    element: "Cryo",
    image: "ganyu.webp",
    ascension: "character_ganyu.webp",
    guide: "character_ganyu.webp",
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
    element: "Geo",
    image: "gorou.webp",
    ascension: "character_gorou.webp",
    guide: "Coming_Soon.webp",
    links: [],
  },
  {
    name: "Hu Tao",
    stars: 5,
    element: "Pyro",
    image: "hu_tao.webp",
    ascension: "character_hutao.webp",
    guide: "character_hutao.webp",
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
    element: "Anemo",
    image: "jean.webp",
    ascension: "character_jean.webp",
    guide: "character_jean.webp",
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
    element: "Cryo",
    image: "kaeya.webp",
    ascension: "character_kaeya.webp",
    guide: "character_kaeya.webp",
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
    element: "Anemo",
    image: "kazuha.webp",
    ascension: "character_kazuha.webp",
    guide: "character_kazuha.webp",
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
    element: "Electro",
    image: "keqing.webp",
    ascension: "character_keqing.webp",
    guide: "character_keqing.webp",
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
    element: "Pyro",
    image: "klee.webp",
    ascension: "character_klee.webp",
    guide: "character_klee.webp",
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
    element: "Hydro",
    image: "kokomi.webp",
    ascension: "character_kokomi.webp",
    guide: "character_kokomi.webp",
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
    element: "Electro",
    image: "kujou_sara.webp",
    ascension: "character_sara.webp",
    guide: "character_sara.webp",
    links: [],
  },
  {
    name: "Lisa",
    stars: 4,
    element: "Electro",
    image: "lisa.webp",
    ascension: "character_lisa.webp",
    guide: "character_lisa.webp",
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
    element: "Hydro",
    image: "mona.webp",
    ascension: "character_mona.webp",
    guide: "character_mona.webp",
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
    element: "Geo",
    image: "ningguang.webp",
    ascension: "character_ningguang.webp",
    guide: "character_ningguang.webp",
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
    element: "Geo",
    image: "noelle.webp",
    ascension: "character_noelle.webp",
    guide: "character_noelle.webp",
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
    element: "Cryo",
    image: "qiqi.webp",
    ascension: "character_qiqi.webp",
    guide: "character_qiqi.webp",
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
    element: "Electro",
    image: "raiden_shogun.webp",
    ascension: "character_raiden.webp",
    guide: "character_raiden.webp",
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
    element: "Electro",
    image: "razor.webp",
    ascension: "character_razor.webp",
    guide: "character_razor.webp",
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
    element: "Cryo",
    image: "rosaria.webp",
    ascension: "character_rosaria.webp",
    guide: "character_rosaria.webp",
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
    element: "Electro",
    image: "sayu.webp",
    ascension: "character_sayu.webp",
    guide: "character_sayu.webp",
    links: [],
  },
  {
    name: "Sucrose",
    stars: 4,
    element: "Anemo",
    image: "sucrose.webp",
    ascension: "character_sucrose.webp",
    guide: "character_sucrose.webp",
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
    element: "Hydro",
    image: "tartaglia.webp",
    ascension: "character_tartaglia.webp",
    guide: "character_tartaglia.webp",
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
    element: "Pyro",
    image: "thoma.webp",
    ascension: "character_thoma.webp",
    guide: "character_thoma.webp",
    links: [],
  },
  {
    name: "Venti",
    stars: 5,
    element: "Anemo",
    image: "venti.webp",
    ascension: "character_venti.webp",
    guide: "character_venti.webp",
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
    element: "Pyro",
    image: "xiangling.webp",
    ascension: "character_xiangling.webp",
    guide: "character_xiangling.webp",
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
    element: "Anemo",
    image: "xiao.webp",
    ascension: "character_xiao.webp",
    guide: "character_xiao.webp",
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
    element: "Hydro",
    image: "xingqiu.webp",
    ascension: "character_xingqiu.webp",
    guide: "character_xingqiu.webp",
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
    element: "Pyro",
    image: "xinyan.webp",
    ascension: "character_xinyan.webp",
    guide: "character_xinyan.webp",
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
    element: "Pyro",
    image: "yanfei.webp",
    ascension: "character_yanfei.webp",
    guide: "character_yanfei.webp",
    links: [],
  },
  {
    name: "Yoimiya",
    stars: 5,
    element: "Pyro",
    image: "yoimiya.webp",
    ascension: "character_yoimiya.webp",
    guide: "character_yoimiya.webp",
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
    element: "Geo",
    image: "zhongli.webp",
    ascension: "character_zhongli.webp",
    guide: "character_zhongli.webp",
    links: [
      {
        title: "Keqing Mains Full Zhongli Guide",
        link: "https://keqingmains.com/zhongli/",
      },
    ],
  },
];

export default characters;
