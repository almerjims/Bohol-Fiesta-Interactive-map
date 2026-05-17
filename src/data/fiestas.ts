import type { Fiesta } from "@/types/fiesta";
import sandugo from "@/assets/sandugo.jpg";
import parade from "@/assets/fiesta-parade.jpg";

export const fiestas: Fiesta[] = [
  {
    id: "tagbilaran-sandugo",
    town: "Tagbilaran City",
    festival: "Sandugo Festival",
    patron: "St. Joseph the Worker",
    date: "2026-07-01",
    month: 7,
    latitude: 9.6496,
    longitude: 123.8547,
    description:
      "A month-long celebration reenacting the historic blood compact between Datu Sikatuna and Miguel López de Legazpi.",
    image: sandugo,
  },
  {
    id: "panglao-hudyaka",
    town: "Panglao",
    festival: "Hudyaka sa Panglao",
    patron: "St. Augustine of Hippo",
    date: "2026-08-28",
    month: 8,
    latitude: 9.5786,
    longitude: 123.7486,
    description:
      "A vibrant island fiesta featuring street dancing, beach parties, and tributes to Saint Augustine.",
    image: parade,
  },
  {
    id: "loboc-loboc",
    town: "Loboc",
    festival: "Loboc Town Fiesta",
    patron: "San Pedro Apostol",
    date: "2026-06-29",
    month: 6,
    latitude: 9.6386,
    longitude: 124.0306,
    description:
      "Riverside celebration honoring San Pedro with the world-famous Loboc Children's Choir performances.",
    image: parade,
  },
  {
    id: "baclayon-immaculate",
    town: "Baclayon",
    festival: "Inmaculada Concepcion Fiesta",
    patron: "Immaculate Conception",
    date: "2026-12-08",
    month: 12,
    latitude: 9.6231,
    longitude: 123.9128,
    description:
      "Historic town fiesta beside the centuries-old Baclayon Church with novenas, processions, and dance.",
    image: sandugo,
  },
  {
    id: "carmen-suroy",
    town: "Carmen",
    festival: "Suroy sa Carmen",
    patron: "Our Lady of Mt. Carmel",
    date: "2026-07-16",
    month: 7,
    latitude: 9.8169,
    longitude: 124.1797,
    description:
      "Hometown celebration at the heart of the Chocolate Hills with street parades and food festivals.",
    image: parade,
  },
  {
    id: "jagna-calamay",
    town: "Jagna",
    festival: "Calamay Festival",
    patron: "St. Michael the Archangel",
    date: "2026-09-29",
    month: 9,
    latitude: 9.6497,
    longitude: 124.3675,
    description:
      "Showcases the town's famous calamay (sweet sticky rice delicacy) with culinary contests and dance.",
    image: parade,
  },
  {
    id: "anda-anda",
    town: "Anda",
    festival: "Anda White Sand Festival",
    patron: "Sto. Niño",
    date: "2026-05-15",
    month: 5,
    latitude: 9.7411,
    longitude: 124.5736,
    description:
      "Beach-themed fiesta celebrating Anda's pristine white sand coves and the Holy Child.",
    image: sandugo,
  },
  {
    id: "dauis-virgen",
    town: "Dauis",
    festival: "Virgen sa Dauis Fiesta",
    patron: "Our Lady of the Assumption",
    date: "2026-08-15",
    month: 8,
    latitude: 9.6097,
    longitude: 123.8467,
    description:
      "Devotional fiesta at the historic Dauis Church featuring the miraculous well and Marian procession.",
    image: parade,
  },
  {
    id: "talibon-pamilacan",
    town: "Talibon",
    festival: "Pamilacan Festival",
    patron: "Holy Trinity",
    date: "2026-06-12",
    month: 6,
    latitude: 10.1497,
    longitude: 124.3253,
    description:
      "Northern Bohol fishing town fiesta with boat parades and seafood celebrations.",
    image: sandugo,
  },
];
