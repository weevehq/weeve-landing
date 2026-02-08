"use client";

type ListCard = {
  title: string;
  items: number;
  folder: string;
  images: [string, string, string, string];
};

const lists: ListCard[] = [
  {
    title: "Trip to France",
    items: 8,
    folder: "Trip to France (8 items)",
    images: [
      "21.jpg",
      "25Paris-HeadsUp4-articleLarge.webp",
      "IMG_1137.jpg",
      "vue_depuisjardins_webbanner_3.jpg",
    ],
  },
  {
    title: "Baby Registry",
    items: 18,
    folder: "Baby Registry (18 items)",
    images: [
      "GUEST_6c0d98f6-bd00-4609-b786-6b5ab9788b53.avif",
      "Mobile_FI_Caterpillar_web.webp",
      "SprsftStrCtnGzBBnChngrCvSSF25.jpg",
      "img321xl.jpg",
    ],
  },
  {
    title: "Watches I like",
    items: 25,
    folder: "Watches I like (25 items)",
    images: [
      "17331437_1.webp",
      "FS5380_main.webp",
      "JM-H203-005-1_84239eba-3bc7-43c9-a5a6-15f2cb810696.webp",
      "aee2b90edc91349be4335784cd89504e4c9be0df762c223873c3824d85af094c_a8d56255-a575-4f64-9a7c-c561e34f81cc.webp",
    ],
  },
  {
    title: "Must try recipes",
    items: 23,
    folder: "Must try recipes(23 items)",
    images: [
      "57661-tomato-bisque-iii-VAT-007-4x3-44151fe6eccf42e2b7fecb632f3ff198.jpg",
      "MMPSOUPSANDSTEWS-SEA-BoeufBourguignon-FredHardyII-000-991c38a78f934722954c47567b6be97b.jpg",
      "Nicks-Authentic-Italian-Spaghetti-twisting.jpg",
      "delish-211105-one-pan-sausage-gnocchi-007-ab-web-1637553340.avif",
    ],
  },
  {
    title: "Home inspo",
    items: 15,
    folder: "Home inspo (15 items)",
    images: [
      "2025-Home-Decor-Trends-to-Look-for-in-the-New-Year.jpg",
      "IMG_2186.webp",
      "alba-wood-sculptural-objects-1-xl.jpg",
      "spacejoy-TbWzzDaqgRE-unsplash-768x768.jpg",
    ],
  },
  {
    title: "Engagement Rings",
    items: 29,
    folder: "Engagement Rings (29 items)",
    images: [
      "BE18959-18KY-MO10X7OV1-S6_066_PDP_image_square_2.jpg",
      "BE1D602LC-18KY-7449288A-S7_014.webp",
      "BNS05xBNH04_M1_RND_DIM_wht_0100CT_W_W.001.jpg",
      "Elena_Gorgeous_Gold_Oval_Ring.webp",
    ],
  },
  {
    title: "Workout vids",
    items: 22,
    folder: "Workout vids (22)",
    images: [
      "123574_00_2x.webp",
      "HomeGymContentCreator.webp",
      "Untitled-design-2022-12-12T135101.682.png",
      "rear-view-of-young-asian-man-working-out-his-chest-muscle-by-using-dumbbell.avif",
    ],
  },
  {
    title: "Packing List",
    items: 13,
    folder: "Packing List (13 items)",
    images: [
      "2fa38eea_d529.webp",
      "644a3bec8c6cd4c662affe535b93700695d9f3a4.avif",
      "7050111281.jpg",
      "PDP_PC_Matte_Coast_BCO_02.webp",
    ],
  },
  {
    title: "Fashion inspo",
    items: 22,
    folder: "Fashion inspo (22 items)",
    images: [
      "0381_3769_915_of.webp",
      "KIC_144-5157-00190-480_model1.avif",
      "cn59568961.avif",
      "secretsauce-goodmood_CAT_b5a6a637-a1c7-4ec9-89be-14f01db0808f.webp",
    ],
  },
  {
    title: "Cool Science Reads",
    items: 12,
    folder: "Cool Science Reads (12 items)",
    images: [
      "blackhole.png",
      "cell.png",
      "humantissue.png",
      "neutron.png",
    ],
  },
  {
    title: "Gifts for dad",
    items: 5,
    folder: "Gifts for dad (5 items)",
    images: [
      "0.avif",
      "1023-BRWBRW_Front.webp",
      "Gunmetal-Wallet-RenderFront-frontinjector_2000x.webp",
      "NEPTUNE_SLIPON_TAN_CJ8415-01-2000x3001-e95106e_1.webp",
    ],
  },
  {
    title: "New heels",
    items: 6,
    folder: "New heels (6 items)",
    images: [
      "35042298_fpx.webp",
      "8252701_1662416.webp",
      "avif.avif",
      "cn60688421.avif",
    ],
  },
  {
    title: "Potential Homes",
    items: 14,
    folder: "Potential Homes (14 items)",
    images: [
      "7481b85be4e8ef6a261d3df94fe043b8-cc_ft_768.webp",
      "83e2c5e79fed30b50f46302b4cbda437-cc_ft_768.webp",
      "a8a952b0ee56ec0e799428ec0cac7118-cc_ft_768.webp",
      "b4607509f039759fed567d763d1803a9-uncropped_scaled_within_1536_1152.webp",
    ],
  },
  {
    title: "Best running shoes",
    items: 8,
    folder: "Best running shoes",
    images: [
      "82725dd62596f0e8d85b787ba622f77a95b1a85c.avif",
      "87c3fedf-5ae9-4afc-984e-f8abd359979e.jpg",
      "MagMax-NITRO™-2-Women's-Road-Running-Shoes.avif",
      "brooks-w-glycerin-max-2-whiteblackchateau-gray-1204681b131-athletic-annex.webp",
    ],
  },
  {
    title: "Supplement Recs",
    items: 13,
    folder: "Supplement Recs (13 items)",
    images: [
      "V3_Magnesium-L-Threonate-Bottle_2000x2000_07142025.webp",
      "sb302__v2028050a26fc15349594618ab9b1b1ccb5c19a43.png",
      "sf752__v92fe46f3bdc9de3202989f233756ff11eeae7be5.png",
      "shopping.webp",
    ],
  },
  {
    title: "Date spots",
    items: 7,
    folder: "Date spots (7 items)",
    images: [
      "241028_KIKO_SHOT_13_TABLESCAPE_049_Gentl__Hyers-1-2000x1125.jpg",
      "CrowsNest@crowsnest-e1621965057670.jpg",
      "Palmers-Restaurant-Bar-San-Marcos.jpg",
      "undine-prohl-21.jpg",
    ],
  },
  {
    title: "Office setup",
    items: 11,
    folder: "Office setup (11 items)",
    images: [
      "41019084ad7c41fd84bcb10f00e5dd5f.webp",
      "DraperGingerUphOfficeChr3QSSF25.jpg",
      "Duo-woodgrain_white1.webp",
      "PalmerUphWdPnlOffcChr3QSSS26.jpg",
    ],
  },
  {
    title: "Christmas gifts",
    items: 18,
    folder: "Christmas gifts (18 items)",
    images: [
      "1174470-CHE_1.webp",
      "GUEST_87d70695-9ae4-4fd2-9cfa-10666f7ab012.avif",
      "GUEST_9788221c-732b-424b-841e-b283634cddc9.avif",
      "s2804821-main-zoom.webp",
    ],
  },
  {
    title: "Workout gear",
    items: 4,
    folder: "Workout gear (4 items)",
    images: [
      "0866Shorts_Olive_24be737a-ae87-4da7-b12e-23f0cb74fd15_800x.webp",
      "309576-03_side_02.webp",
      "70342_BLK_001.webp",
      "LM3FG2S_070561_1.webp",
    ],
  },
  {
    title: "Hat options",
    items: 17,
    folder: "Hat options (17 items)",
    images: [
      "1623752_01.webp",
      "LSCAR25_NAT_4_1600x@2x.progressive.webp",
      "i7CllriPDpvMbznEIa2dqNDM1bF4v9R4-1.webp",
      "sunshine-tienda-rosita-palm-hat-31793464901747.jpg",
    ],
  },
  {
    title: "Recipes",
    items: 24,
    folder: "Recipes (24 items)",
    images: [
      "MarryMeChickenSoup-19.jpg",
      "Ratatouille-recipe-1.webp",
      "chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg",
      "healthy-chicken-chow-mein-134805-1.jpg",
    ],
  },
  {
    title: "Earrings",
    items: 13,
    folder: "Earrings (13 items)",
    images: [
      "1665516880-10mm-huggie-with-stone-three-quarter-yellow.avif",
      "2_210921_q_stencil_ohrringe_marmor_gold_cv_19_1.jpg",
      "ASE1B0406-1WE0-1-1103.webp",
      "EG-5601_WHITEPEARL_01_1_600x.webp",
    ],
  },
  {
    title: "Jackets for NY",
    items: 6,
    folder: "Jackets for NY (6 items)",
    images: [
      "2726071_Retakes_02_front_2025-11-26.webp",
      "35039598_fpx.webp",
      "9a52f23f-d9cf-460f-a86b-50ff2ba15346.jpg",
      "cn60567222.avif",
    ],
  },
  {
    title: "For kids",
    items: 5,
    folder: "For kids (5 items)",
    images: [
      "311336e5-c524-4917-8c52-0033cd738be4.2772ff6989a2ba12640875b9ceb927d0.webp",
      "LZ2208NP990_LZ2208NP991_LZ2208NP992_LZ2208NP993_6.webp",
      "WRP9-01_1512x.webp",
      "james-block-set-translucent-windows-lucite-gemstones-educational-toy-color-exploration.webp",
    ],
  },
  {
    title: "Summer fits",
    items: 5,
    folder: "Summer fits (5 items)",
    images: [
      "KIC_125-6053-00323-104_model1.avif",
      "KIC_128-6120-00238-412_prod1.avif",
      "PANT_CHINO-PANT_BPT10629S1256W_1.avif",
      "SWEATER_OTHER-SWEATER_BST01186NM8508_2_hover.avif",
    ],
  },
  {
    title: "Apartment hunt",
    items: 19,
    folder: "Apartment hunt (19 items)",
    images: [
      "1d721133effdd4192a83953aeab15a21-cc_ft_768.webp",
      "3067cc683bcdf455550a5da8b2f78947-cc_ft_768.webp",
      "51dfc7d989062aef9c34fa3390cd27e7-cc_ft_768.webp",
      "65e7c57ae78e1d248aa5d563116ef5a5-cc_ft_768.webp",
    ],
  },
  {
    title: "Gift ideas",
    items: 6,
    folder: "Gift ideas (6 items)",
    images: [
      "PalmerBundle5_f4aa8731-923f-417c-b17c-12bb9f5b673b.webp",
      "etched-glass-carafe-set1_1800x1800.webp",
      "img219xl.jpg",
      "img78xl.jpg",
    ],
  },
  {
    title: "Books to read",
    items: 9,
    folder: "Books to read (9 items)",
    images: [
      "shopping-1.webp",
      "shopping-2.webp",
      "shopping-3.webp",
      "shopping.webp",
    ],
  },
];

function getImagePath(folder: string, filename: string) {
  return `/images/lists/${encodeURIComponent(folder)}/${encodeURIComponent(filename)}`;
}

function ListCardItem({ title, items, folder, images }: ListCard) {
  return (
    <div className="w-[180px] h-[180px] md:w-[210px] md:h-[210px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl relative transition-shadow cursor-pointer">
      {/* 2x2 Image Grid */}
      <div className="grid grid-cols-2 gap-[3px] p-[3px] h-full bg-white">
        {images.map((img, i) => (
          <div key={i} className="rounded-xl overflow-hidden bg-gray-100">
            <img
              src={getImagePath(folder, img)}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Title + item count overlay */}
      <div className="absolute bottom-0 left-0 right-0 px-3 pb-2.5 pt-10 bg-gradient-to-t from-black/50 to-transparent rounded-b-2xl">
        <h3 className="text-white font-bold text-sm leading-tight drop-shadow-lg">
          {title}
        </h3>
        <p className="text-white/75 text-xs drop-shadow-lg">{items} items</p>
      </div>
    </div>
  );
}

export default function ListsMarquee() {
  return (
    <section className="py-10 md:py-14 overflow-hidden bg-white">
      <div className="text-center mb-8 px-4">
        <p className="text-lg md:text-xl text-gray-800 font-semibold tracking-tight">
          Join thousands already saving on{" "}
          <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
            Weeve
          </span>
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="marquee-track flex w-fit animate-marquee-right">
          {[...lists, ...lists].map((list, idx) => (
            <div key={idx} className="flex-shrink-0 px-2">
              <ListCardItem {...list} />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <button className="bg-primary text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg">
          Start Saving
        </button>
      </div>
    </section>
  );
}
