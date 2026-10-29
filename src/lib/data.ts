export const whatsNewData = [
  {
    id: 1,
    category: "BIOSKOP",
    title: "GJLS BERAPI-API",
    description: "Film kedua bersama Amadeus Sinemaga. Tayang 5 November 2026 di seluruh Indonesia.",
    synopsis: "Tiga sahabat dari dunia stand-up comedy terjebak dalam petualangan absurd saat tur nobar mereka berubah menjadi misi penyelamatan kota. Komedi, drama, dan ledakan emosi dalam satu paket yang akan membuatmu tertawa dan menangis bergantian.",
    trailerLink: "https://www.youtube.com/watch?v=GgUeZPppNS4", // Ganti dengan link asli
    movieDetails: {
      sutradara: "Monty Tiwa",
      pemain: "Rigen, Hifdzi, Rispo, Ananta Rispo",
      genre: "Comedy / Drama",
      durasi: "100 Menit",
    },
    image: "/images/poster-berapi-api.jpg",
    ctaText: "CEK TIKET DI TIX.ID",
    ctaLink: "https://www.tix.id",
    type: "large",
  },
  {
    id: 2,
    type: "small",
    category: "GJLS MERCH",
    title: "FAN AND MAKERS VOL.2",
    description: "Menunggu kehadiran dirimu itu di @fanandmakers catat tanggal nya pun. Sampai Bertemu Di sana 🙌🏻🤩!",
    ctaText: "CEK LOKASINYA",
    ctaLink: "/merch",
    image: "/images/home/merch-drop.jpg", // ← TAMBAH INI
  },
  {
    id: 3,
    type: "small",
    category: "PODCAST",
    title: "SLEDING TACKLE",
    description: "Saat ini sedang Break Season. Kami sedang meracik format baru. Stay tuned untuk season berikutnya!",
    ctaText: null, // ← NULL agar tombol tidak muncul
    ctaLink: null,
    image: "/images/home/sleding-tackle-logo.png", // ← TAMBAH INI
  },
];

export const siteConfig = {
  name: "GJLS ENTERTAINMENT",
  tagline: "PT. HIBURAN JELAS NUSANTARA",
};

export const heroContent = {
  badge: "SELAMAT DATANG DI GJLS ENTERTAIMENT",
  headline: "THE OFFICIAL HUB FOR ORANG BAEK",
  subheadline: "VERIFIED BY BASKARA PUTRA",
  cta: "CEK JADWAL NOBAR",
};

export const contentEcosystem = [
  {
    id: 1,
    name: "GJLS PODCAST",
    description: "Obrolan absurd tapi relatable bersama Trio GJLS dan tamu spesial.",
    stats: "200K+ Members",
  },
  {
    id: 2,
    name: "MAMA SABI",
    description: "Acara masak-masak dengan bumbu drama ibu-ibu kompleks.",
    stats: "Top 10 Comedy",
  },
  {
    id: 3,
    name: "SLEDING TACKLE",
    description: "Podcast olahraga paling tidak serius tapi bahasannya daging semua.",
    stats: "Weekly Release",
  },
  // Tambahkan IP lain sesuai PDF (GJLS Activity, Live Bukber, dll)
];

export const merchDrop = [
  {
    id: 1,
    name: "AC ANGET Vol. 2",
    price: "Rp 240.000",
    status: "AVAILABLE", // Atau "SOLD OUT"
  },
  {
    id: 2,
    name: "BUAYA EMPUK Vol. 2",
    price: "Rp 240.000",
    status: "SOLD OUT",
  },
  {
    id: 3,
    name: "NYENDOK Vol. 2",
    price: "Rp 240.000",
    status: "AVAILABLE",
  },
];

export const statsData = [
  "190 JUTA+ TOTAL VIEWS",
  "409 REBU SUBSCRIBERS",
  "120 REBU FOLLOWERS IG",
  "1800+ TOTAL KONTEN",
  "20+ EVENTS DI BERBAGAI KOTA",
  "3+ JUTA FANS GJLSER",
];

export const brandPartners = [
  { 
    id: 1, 
    name: "KOMPAS TV", 
    logo: "/images/partners/kompas-tv.svg",
    height: "h-auto",  // Override tinggi logo (default: h-16)
    width: "w-55"  // Lebar otomatis proporsional
  },
  { 
    id: 2, 
    name: "BCA", 
    logo: "/images/partners/bca.png",
    height: "h-auto",  // BCA lebih besar
    width: "w-40"
  },
  { 
    id: 3, 
    name: "YAMAHA", 
    logo: "/images/partners/yamaha.webp",
    height: "h-12",
    width: "w-auto"
  },
  { 
    id: 4, 
    name: "PLN", 
    logo: "/images/partners/pln.webp",
    height: "h-auto",  // PLN lebih besar karena ada ikon
    width: "w-40"
  },
  { 
    id: 5, 
    name: "CIMORY", 
    logo: "/images/partners/cimory.png",
    height: "h-20",
    width: "w-auto"
  },
  { 
    id: 6, 
    name: "SUNPRIDE", 
    logo: "/images/partners/sunpride.webp",
    height: "h-20",
    width: "w-auto"
  },
  { 
    id: 7, 
    name: "KOPI KENANGAN", 
    logo: "/images/partners/kopi-kenangan.webp",
    height: "h-17",
    width: "w-auto"
  },
  { 
    id: 8, 
    name: "MISTER POTATO", 
    logo: "/images/partners/mister-potato.png",
    height: "h-23",
    width: "w-auto"
  },
  { 
    id: 9, 
    name: "KAHF", 
    logo: "/images/partners/kahf.png",
    height: "h-24",
    width: "w-auto"
  },
  { 
    id: 10, 
    name: "GUDANG GARAM", 
    logo: "/images/partners/gudang-garam.svg",
    height: "h-12",
    width: "w-auto"
  },
  { 
    id: 11, 
    name: "SALON", 
    logo: "/images/partners/sukun.jpg",
    height: "h-24",
    width: "w-auto"
  },
  { 
    id: 12, 
    name: "AMADEUS SINEMAGA", 
    logo: "/images/partners/amadeus.jpg",
    height: "h-24",
    width: "w-auto"
  },
];

export const activeContentIPs = [
  {
    id: 1,
    name: "GJLS SHOW",
    description: "Acara variety show paling absurd dengan MC spektakuler.",
    schedule: "Senin, 19:00 WIB",
    color: "bg-gjls-teal",
    thumbnail: "/images/content/gjls-show.png",
  },
  {
    id: 2,
    name: "MAMA SABI",
    description: "Acara masak-masak dengan bumbu drama ibu-ibu kompleks.",
    schedule: "Rabu, 19:00 WIB",
    color: "bg-gjls-pink",
    thumbnail: "/images/content/mama-sabi.png",
  },
  {
    id: 3,
    name: "GJLS PODCAST",
    description: "Obrolan santai bareng Trio GJLS dan tamu spesial.",
    schedule: "Jumat, 19:00 WIB",
    color: "bg-gjls-yellow",
    thumbnail: "/images/content/gjls-podcast.png",
  },
  {
    id: 4,
    name: "GJLS ACTIVITY",
    description: "Dokumentasi kegiatan di balik layar GJLS Entertainment.",
    schedule: "Sabtu, 19:00 WIB",
    color: "bg-gjls-teal",
    thumbnail: "/images/content/gjls-activity.png",
  },
];

export const featuredEvents = [
  {
    id: 1,
    title: "SPECIAL SCREENING SURABAYA",
    description: "Arek Suroboyo!! Gass Nonton Duluan film 𝐆𝐉𝐋𝐒 𝐁𝐄𝐑𝐀𝐏𝐈-𝐀𝐏𝐈 di Special Screening Royal XXI, Sabtu 24 Oktober 2026 jam 16:30 WIB!! 🔥",
    poster: "/images/events/ss-surabaya.jpg",
    badges: ["SPECIAL SCREENING"],
    ctaText: "BELI SEKARANG DI TIX.ID",
    ctaLink: "https://www.tix.id",
    ctaVariant: "tix" as const,
  },
  {
    id: 2,
    title: "SPECIAL SCREENING MALANG",
    description: "Arek-arek Malang!! Yuk, jadi yang pertama nonton film 𝐆𝐉𝐋𝐒 𝐁𝐄𝐑𝐀𝐏𝐈-𝐀𝐏𝐈!! 🔥",
    poster: "/images/events/ss-malang.jpg",
    badges: ["SPECIAL SCREENING"],
    ctaText: "BELI SEKARANG DI MOPIC CINEMAS",
    ctaLink: "https://www.mopic.com",
    ctaVariant: "tix" as const,
  },
  {
    id: 3,
    title: "SPECIAL SCREENING JAKARTA",
    description: "Buat yang pengen Nonton Duluan, kalian bisa ikutan Special Screening film 𝐆𝐉𝐋𝐒 𝐁𝐄𝐑𝐀𝐏𝐈-𝐀𝐏𝐈 di Bassura XXI, Selasa 27 Oktober 2026 jam 16:30 WIB 🔥",
    poster: "/images/events/ss-jakarta.jpg",
    badges: ["SPECIAL SCREENING"],
    ctaText: "BELI SEKARANG DI TIX.ID",
    ctaLink: "https://www.tix.id",
    ctaVariant: "tix" as const,
  },
];

export const featuredMerch = [
  {
    id: 1,
    name: "AC ANGET",
    subtitle: "Vol 2 (Edisi Restock)",
    price: "Rp240.000",
    mainImage: "/images/merch/ac-anget.jpg",
    status: "available",
    ctaLink: "/merch",
  },
  {
    id: 2,
    name: "BUAYA EMPUK",
    subtitle: "Vol 2 (Edisi Restock)",
    price: "Rp240.000",
    mainImage: "/images/merch/buaya-empuk.jpg",
    status: "available",
    ctaLink: "/merch",
  },
  {
    id: 3,
    name: "NYENDOK",
    subtitle: "Vol 2 (Edisi Restock)",
    price: "Rp240.000",
    mainImage: "/images/merch/nyendok.jpg",
    status: "soldout",
    ctaLink: "/merch",
  },
];

// ============ ABOUT US DATA ============

export const aboutHero = {
  badge: "THE GJLS ORIGIN STORY",
  headline: "DARI BERTAHAN HIDUP",
  headlineHighlight: "MENJADI AHLI ABSURD DUNIA",
  description: "Berawal dari konten YouTube di masa pandemi untuk bertahan hidup, GJLS Entertainment kini berevolusi menjadi ekosistem hiburan terstruktur. Menelurkan 15+ IP konten, merilis YouTube Membership, hingga berkolaborasi dengan Monty Tiwa membawa komedi absurd ke layar lebar Indonesia.",
  ctaText: "LIHAT PERJALANAN KAMI",
  teamPhoto: "/images/about/trio-gjls.png",
};

export const milestones = [
  {
    id: 1,
    year: "2020",
    title: "SHORT MOVIE KUYUP",
    description: "Titik nol di masa pandemi. Merilis short movie pertama yang mendapat review 10/10 dari Cine Crib, membuktikan komedi absurd punya nilai seni.",
    color: "bg-gjls-pink",
  },
  {
    id: 2,
    year: "2021",
    title: "PODCAST GJLS X PODKESMAS",
    description: "Kerjasama antara GJLS dan Podkesmas Asia Network, menjadi cahaya di tengah keterbatasan industri saat itu.",
    color: "bg-gjls-teal",
  },
  {
    id: 3,
    year: "2022 - 2024",
    title: "SPOTIFY EKSKLUSIF & PT HIJRA",
    description: "Validasi industri terbesar. Resmi menjadi podcast eksklusif Spotify, mendirikan PT Hiburan Jelas Nusantara, dan pindah ke kantor ruko pertama.",
    color: "bg-gjls-pink",
  },
  {
    id: 4,
    year: "2025 - 2026",
    title: "GJLS ENT. X AMADEUS",
    description: "Membawa komedi absurd ke layar lebar. Dimulai dari 'Ibuku Ibu-Ibu' hingga 'GJLS Berapi-Api', membuktikan audien bioskop siap menerima formula baru kami.",
    color: "bg-gjls-yellow",
    badge: "★",
  },
];

export const founders = {
  teamPhoto: "/images/about/the-cofounder.png",
  acronym: [
    { letter: "G", name: "RIGEN" },
    { letter: "J", name: "HIPJI" },
    { letter: "L", name: "LISPO" },
    { letter: "S", name: "SEMUANYA" },
  ],
  companyDescription: "FYI, Kami perusahaan yang bergerak dibidang kreatif industri. Kalo pada gak percaya, ini kami udah dapet izin dari KEMENKUMHAM REPUBLIK INDONESIA dengan nama perusahaan PT HIBURAN JELAS NUSANTARA, nomor izin AHU-0004700.AH.01.01.Tahun 2022 dengan merk dagang GJLS Entertainment.",
  profiles: [
    {
      id: 1,
      name: "Muhammad Rizki Rakelna",
      role: "KOMISARIS & Leader of Content",
      description: "Sebagai KOMISARIS serta leader of divisi content. Rigen juga mengawasi dan mengarahkan jalannya setiap konten yang dibuat oleh tim konten GJLS Entertainment agar tetap pada jalur komedi yang disepakati bersama.",
      photo: "/images/about/rigen.png",
    },
    {
      id: 2,
      name: "Rizki Ananta Putra",
      role: "DIREKTUR UTAMA & Leader of Finance",
      description: "Sebagai DIREKTUR UTAMA serta Leader of divisi finance. Rispo juga menjadi pintu persetujuan utama untuk masuk dan keluarnya keuangan di GJLS Entertainment.",
      photo: "/images/about/rispo.png",
    },
    {
      id: 3,
      name: "M. Hifdzi Khoir",
      role: "DIREKTUR & Leader of Event & Merchandise",
      description: "Sebagai DIREKTUR Serta Leader of divisi Event & Merchandise. Hifdzi juga menjadi pengambil keputusan terakhir pada setiap Event & Merchandise yang ada di GJLS Entertainment.",
      photo: "/images/about/hifdzi.png",
    },
  ],
};

export const crewSection = {
  logo: "/images/crew/logo.png", // ← Tambah ini
  tagline: "PALUGADA artinya lu mau kalo gua apa juga gua bisa",
};

export const crewTabs = [
  {
    id: "creative",
    label: "CREATIVE & VISUAL",
    color: "bg-gjls-pink",
    members: [
      { name: "Bilqis Safira", role: "SOCMED SPECIALIST", photo: "/images/crew/bilqis.jpg" },
      { name: "Ronald", role: "CREATIVE", photo: "/images/crew/ronald.jpg" },
      { name: "Rifqi", role: "CREATIVE", photo: "/images/crew/rifqi.jpg" },
      { name: "Lazwar", role: "PRODUSER", photo: "/images/crew/lazwar.jpg" },
    ],
  },
  {
    id: "production",
    label: "PRODUCTION & FIELD",
    color: "bg-gjls-teal",
    members: [
      { name: "M. Rafif", role: "CAMERAMAN / EDITOR", photo: "/images/crew/rafif.jpg" },
      { name: "Ibnu", role: "CAMERAMAN / EDITOR", photo: "/images/crew/ibnu.jpg" },
      { name: "Fadlan", role: "CAMERAMAN / EDITOR", photo: "/images/crew/fadlan.jpg" },
    ],
  },
  {
    id: "management",
    label: "MANAGEMENT & OPS",
    color: "bg-gjls-yellow",
    members: [
      { name: "Coming Soon", role: "TBD", photo: null },
    ],
  },
];

// ============ EVENTS PAGE DATA ============

export const eventsHero = {
  title: "JADWAL KELUAR RUMAH",
  subtitle: "Kamu merasa suntuk dan ingin terhibur?, kunjungi setiap event yang ada GJLS-nya yaaa!",
  banners: [
    { 
      src: "/images/events/banner-1.jpg",
      verticalPosition: 17  // Default: center
    },
    { 
      src: "/images/events/banner-6.jpg",
      verticalPosition: 71  // Lebih ke atas
    },
    { 
      src: "/images/events/banner-3.jpg",
      verticalPosition: 61  // Lebih ke bawah
    },
    { 
      src: "/images/events/banner-4.jpg",
      verticalPosition: 50  // Center
    },
  ],
  badge: "KICKOFF TOUR - JAKARTA - OKT 2026",
  filters: ["NONTON DULUAN", "THEATER OF MIND", "BIRTHDAY PARTY", "GJLS BERNYANYI", "GJLS FEST"],
};

export const panggungTeamPhoto = "/images/events/panggung-team.png";

// Kategori 1: PANGGUNG - Event yang dikerjakan GJLS (solo/collab brand)
export const panggungEvents = [
  {
    id: 1,
    title: "GJLS FEST",
    description: "Festival kesenian milik gjls: band, sketsa, standup, podcast live, sampai duo debus tapi mempan",
    poster: "/images/events/portfolio/gjls-fest.jpg",
    badges: ["FESTIVAL KESENIAN", "x YAMAHA"],
  },
  {
    id: 2,
    title: "GJLS SHOW LIVE",
    description: "Show komedi format utama trio GJLS bersama beberapa bintang tamu seru",
    poster: "/images/events/portfolio/gjls-show-live.jpg",
    badges: ["PANGGUNG KOMEDI", "x HAJI ALWI"],
  },
  {
    id: 3,
    title: "GJLS COMEDY NIGHT",
    description: "Malam Komedi bersama Host kesayangan kita Rigen, Rispo dan Hifzi",
    poster: "/images/events/portfolio/comedy-night.jpg",
    badges: ["STANDUP COMEDY", "x PLN"],
  },
  {
    id: 4,
    title: "GJLS BERNYANYI",
    description: "Berdendang seru bersama para ahli nyanyi dunia",
    poster: "/images/events/portfolio/bernyanyi.jpg",
    badges: ["KONSER DAN FESTIVAL"],
  },
  {
    id: 5,
    title: "THEATER OF MIND",
    description: "Pagelaran Panggung sketsa yang membawakan cerita rakyat dan realita kehidupan",
    poster: "/images/events/portfolio/theater-mind.jpg",
    badges: ["SKETSA KOMEDI"],
  },
  {
    id: 6,
    title: "GJLS LIVE PODCAST 373",
    description: "Tonton dan berinteraksi langsung dalam episode GJLS podcast live",
    poster: "/images/events/portfolio/podcast-373.jpg",
    badges: ["PODCAST LIVE"],
  },
];

// Kategori 2: RUTIN & KOMUNITAS - Event rutin GJLS (tahunan/bulanan)
export const communityEvents = [
  {
    id: 1,
    title: "GJLSFC",
    description: "Tetap sehat bugar dengan olahraga bareng GJLS",
    poster: "/images/events/community/gjlsfc.jpg",
    badges: ["FUN FOOTBALL"],
  },
  {
    id: 2,
    title: "GJLS LIVE BUKBER",
    description: "Mem-Bukberi perdilan itu pun, Mem-Bersamai GJLS dan Bintang tamu seru",
    poster: "/images/events/community/bukber.jpg",
    badges: ["BUKBER RAMADHAN", "x MR POTATO"],
  },
  {
    id: 3,
    title: "GJLS BIRTHDAY PARTY",
    description: "Event rutin untuk mengingat setiap langkah yang sudah dilalui GJLS dan para GJLser",
    poster: "/images/events/community/birthday.jpg",
    badges: ["PESTA ULANG TAHUN"],
  },
];

// Kategori 3: TAMU SPESIAL - Panggung yang mengundang GJLS
export const collaborations = [
  {
    id: 1,
    title: "SUCI x SUCI BARBAR SHOW KOMPAS TV",
    description: "Trio GJLS sebagai host (musim 10-12) • Kompas TV",
    subscribeLink: "#",
    infoLink: "#",
  },
  {
    id: 2,
    title: "STANDUPINDO",
    description: "Trio GJLS sebagai host (musim 10-12) • Kompas TV",
    subscribeLink: "#",
    infoLink: "#",
  },
  {
    id: 3,
    title: "PESTAPORA",
    description: "Trio GJLS sebagai host (musim 10-12) • Kompas TV",
    subscribeLink: "#",
    infoLink: "#",
  },
  {
    id: 4,
    title: "SYNCHRONIZE FEST",
    description: "Trio GJLS sebagai host (musim 10-12) • Kompas TV",
    subscribeLink: "#",
    infoLink: "#",
  },
];

// ============ CONTENT PAGE DATA ============

export const contentHero = {
  badge: "KATALOG KONTEN GJLS",
  title: "EKOSISTEM KONTEN",
  titleHighlight: "GJLS ENTERTAINMENT",
};

export const featuredPodcast = {
  badges: ["SETIAP JUMAT", "YOUTUBE MEMBERSHIP"],
  title: "GJLS PODCAST",
  description: "Bukan sekadar obrolan warkop biasa. GJLS Podcast mengoperasikan model distribusi dua-tahap yang terbukti efisien: 10 menit pertama gratis di Spotify untuk jangkauan luas (Reach), dan sisa episode eksklusif untuk 200rb+ pendengar membership berbayar dengan tingkat retensi dan trust tertinggi di industri komedi tanah air.",
  thumbnail: "/images/content/podcast-thumbnail.png",
  quote: {
    text: "MEMBERSHIP SEKARANG!!!",
    author: "BASKARA PUTRA, KETUM GJLSER SE-INDONESIA",
    year: "2026",
  },
  stats: [
    { label: "LIBRARY KONTEN", value: "500+", sublabel: "TOTAL EPISODE RILIS" },
    { label: "RATING SPOTIFY", value: "4.9", sublabel: "4900+ ULASAN", icon: "★" },
    { label: "PAID COMMUNITY", value: "200K+", sublabel: "ACTIVE MEMBER" },
    { label: "SPOTIFY CHART", value: "#1 TOP", sublabel: "KATEGORI KOMEDI BERKOKOK", icon: "★" },
  ],
  ctaText: "LAKSANAKAN PERINTAH KETUM",
  ctaLink: "#",
};

export const regularShows = [
  {
    id: 1,
    day: "SETIAP SELASA",
    dayColor: "bg-gjls-yellow",
    title: "MAMA SABI",
    description: "Habitat natural untuk product placement F&B.",
    detail: "Sesi masak dan review makanan dengan gaya khas GJLS yang kocak, ceplas-ceplos, dan bikin ngiler tapi berujung tawa ngakak. Integrasi bumbu, minuman, hingga perlengkapan dapur terasa sangat natural menyatu di meja makan.",
    targetPersona: "Pecinta kuliner, ibu muda & pekerja kantoran foodie (18-35 tahun).",
    slots: ["PRODUCT PLACEMENT", "AD READ", "COOKING INTEGRATION"],
  },
  {
    id: 2,
    day: "SETIAP RABU",
    dayColor: "bg-gjls-pink",
    title: "GJLS SHOW",
    description: "Panggung talkshow unhinged dengan exposure reach tertinggi.",
    detail: "Flagship studio variety show yang mengundang bintang tamu papan atas, musisi, politisi santai, hingga figur viral internet. Pertanyaan acak, sketsa kilat, dan improvisasi tanpa rem yang selalu trending di YouTube Indonesia.",
    targetPersona: "Pecinta kuliner, ibu muda & pekerja kantoran foodie (18-35 tahun).",
    slots: ["PRODUCT PLACEMENT", "AD READ", "COOKING INTEGRATION"],
  },
  {
    id: 3,
    day: "SETIAP KAMIS",
    dayColor: "bg-gjls-teal",
    title: "SLEDING TACKLE",
    description: "Diskusi bola & olahraga santai tanpa beban gengsi.",
    detail: "Bedah taktik sepak bola liga lokal dan internasional dengan bumbu roasting antarkomika penggemar klub rival. Diskusi panas penuh tawa, ideal untuk kampanye sportswear, otomotif, hingga produk grooming pria.",
    targetPersona: "Pecinta kuliner, ibu muda & pekerja kantoran foodie (18-35 tahun).",
    slots: ["PRODUCT PLACEMENT", "AD READ", "COOKING INTEGRATION"],
  },
  {
    id: 4,
    day: "SETIAP SABTU",
    dayColor: "bg-gjls-yellow",
    title: "GJLS ACTIVITY",
    description: "Eksplorasi out-of-studio: tantangan absurd dan field trip.",
    detail: "Keluar dari sangkar podcast! Trio GJLS turun ke lapangan menjadi arena ekstrem, pasar tumpah, wahana rekreasi, hingga road trip antarkota dengan mobil sponsor. Interaksi manusiawi, spontan, dan sangat visual.",
    targetPersona: "Pecinta kuliner, ibu muda & pekerja kantoran foodie (18-35 tahun).",
    slots: ["PRODUCT PLACEMENT", "AD READ", "COOKING INTEGRATION"],
  },
  {
    id: 5,
    day: "SEASONAL: RAMADHAN",
    dayColor: "bg-gjls-pink",
    title: "GJLS LIVE BUKBER",
    description: "Aktivasi kultural terpopuler saat bulan suci Ramadhan.",
    detail: "Program siaran harian menjelang adzan maghrib menggabungkan komedi ngabuburit, kuis berhadiah ratusan juta, dan silaturahmi on-ground di cafe mitra. Salah satu aset sponsorship paling diperebutkan brand nasional.",
    targetPersona: "Pecinta kuliner, ibu muda & pekerja kantoran foodie (18-35 tahun).",
    slots: ["PRODUCT PLACEMENT", "AD READ", "COOKING INTEGRATION"],
  },
  {
    id: 6,
    day: "SEASONAL: AGUSTUSAN",
    dayColor: "bg-gjls-teal",
    title: "AGUSHUTAN",
    description: "Pesta rakyat kemerdekaan penuh performa gak masuk akal.",
    detail: "Festival karnaval kemerdekaan tahunan versi GJLS: balap karung helm baja, panjat pinang berhadiah motor listrik, hingga tarik tambang antar kreator konten. Menghasilkan puluhan potongan reel & TikTok FYP organik.",
    targetPersona: "Pecinta kuliner, ibu muda & pekerja kantoran foodie (18-35 tahun).",
    slots: ["PRODUCT PLACEMENT", "AD READ", "COOKING INTEGRATION"],
  },
];

export const shortFilms = [
  {
    id: 1,
    year: "2020",
    duration: "12 MENIT",
    title: "KUYUP",
    thumbnail: "/images/content/films/kuyup.png",
    description: "Kisah kehidupan di halte reot yang menguji batas kesabaran tiga sahabat saat berteduh dari badai Jakarta.",
  },
  {
    id: 2,
    year: "2020",
    duration: "12 MENIT",
    title: "SENDOK",
    thumbnail: "/images/content/films/sendok.png",
    description: "Kisah kehidupan di halte reot yang menguji batas kesabaran tiga sahabat saat berteduh dari badai Jakarta.",
  },
  {
    id: 3,
    year: "2021",
    duration: "12 MENIT",
    title: "GJLS MERILIS VAKSIN",
    thumbnail: "/images/content/films/vaksin.png",
    description: "Kisah kehidupan di halte reot yang menguji batas kesabaran tiga sahabat saat berteduh dari badai Jakarta.",
  },
  {
    id: 4,
    year: "2025",
    duration: "23 MENIT",
    title: "BUN",
    thumbnail: "/images/content/films/bun.png",
    description: "Kisah kehidupan di halte reot yang menguji batas kesabaran tiga sahabat saat berteduh dari badai Jakarta.",
  },
  {
    id: 5,
    year: "2025",
    duration: "12 MENIT",
    title: "UDUK",
    thumbnail: "/images/content/films/uduk.png",
    description: "Kisah kehidupan di halte reot yang menguji batas kesabaran tiga sahabat saat berteduh dari badai Jakarta.",
  },
  {
    id: 6,
    year: "2026",
    duration: "12 MENIT",
    title: "PULKAM",
    thumbnail: "/images/content/films/pulkam.png",
    description: "Kisah kehidupan di halte reot yang menguji batas kesabaran tiga sahabat saat berteduh dari badai Jakarta.",
  },
];

export const musicSingles = [
  {
    id: 1,
    year: "2026",
    duration: "12 MENIT",
    title: "STRAWBERRY",
    thumbnail: "/images/content/music/strawberry.png",
    description: "Kisah kehidupan di halte reot yang menguji batas kesabaran tiga sahabat saat berteduh dari badai Jakarta.",
    videoId: "UE40RPyazhQ", // YouTube Video ID
  },
  {
    id: 2,
    year: "2025",
    duration: "12 MENIT",
    title: "ISTRIKU MERONG-RONG",
    thumbnail: "/images/content/music/merong.png",
    description: "Kisah kehidupan di halte reot yang menguji batas kesabaran tiga sahabat saat berteduh dari badai Jakarta.",
    videoId: "5KLDo0fdBes",
  },
  {
    id: 3,
    year: "2025",
    duration: "12 MENIT",
    title: "SING A SONG",
    thumbnail: "/images/content/music/sing-a-song.png",
    description: "Kisah kehidupan di halte reot yang menguji batas kesabaran tiga sahabat saat berteduh dari badai Jakarta.",
    videoId: "BUE-9pUFvus",
  },
];

export const legacyIPs = [
  "ALI EN RIO",
  "IBU-IBU KOMPLEKS",
  "SUKA MASAK",
  "SSSTT",
  "REVIEW VIEW VIEW VIEW",
  "GHOSTING GHOSTING",
  "KAGUM OR DROP SHAY",
];

// ============ PREMIUM WORKS DATA ============

export const premiumWorks = {
  featureFilms: [
    {
      id: 1,
      year: "2025",
      title: "GJLS: IBUKU IBU-IBU",
      description: "Petualangan absurd trio GJLS yang diangkat ke layar lebar. Membuktikan komedi lokal bisa bersaing dan menghibur di bioskop nasional bersama Amadeus Sinemaya.",
      poster: "/images/content/premium/ibuku-ibu-ibu.jpg",
      partner: "AMADEUS SINEMAYA",
    },
    {
      id: 2,
      year: "2026",
      title: "GJLS: BERAPI-API",
      description: "Sekuel sinematik yang membawa kekacauan komedi GJLS ke level yang lebih panas, liar, dan tak terduga. Kolaborasi lanjutan untuk pasar massal.",
      poster: "/images/content/premium/berapi-api.jpg",
      partner: "AMADEUS SINEMAYA",
    },
  ],
  brandedShows: [
    {
      id: 1,
      year: "2025",
      title: "KELUARGAKU KELUARGA KELUARGAMU",
      description: "Serial komedi situasi (Sitkom) yang mengintegrasikan nilai-nilai kelistrikan ke dalam cerita sehari-hari yang kocak. Tayang eksklusif di channel YouTube PLN.",
      poster: "/images/content/premium/pln-sitkom.jpg",
      partner: "PLN",
      type: "BRANDED SERIES",
    },
    {
      id: 2,
      year: "2025",
      title: "SUCI BAR BAR SHOW",
      description: "Variety show komedi yang tayang di Kompas TV. Membuktikan kemampuan GJLS beradaptasi dengan standar produksi televisi nasional dan menjangkau audiens mainstream.",
      poster: "/images/content/premium/suci-barbar.jpg",
      partner: "KOMPAS TV",
      type: "BROADCASTING",
    },
  ],
};

// ============ MERCH PAGE DATA ============

export const merchHero = {
  badge: "JANGAN BAPER KALAU KEHABISAN",
  title: "GJLS × IMPROVINDO × SHOES NECESSITIES",
  titleHighlight: "DROP TERBATAS.",
  description: "Buaya Empuk vol. 2, Ac Anget vol. 2, IMPROVINDO Longsleeve, Shoes Necessities. Jangan sampai menangis di komentar lagi.",
};

export const merchCollections = [
  {
    id: "gjls-merch",
    badge: "GJLS MERCH",
    products: [
      {
        id: 1,
        name: "AC ANGET",
        subtitle: "Vol 2 (Edisi Restock)",
        price: "Rp240.000",
        image: "/images/merch/ac-anget.jpg",
        status: "available",
        link: "#",
      },
      {
        id: 2,
        name: "BUAYA EMPUK",
        subtitle: "Vol 2 (Edisi Restock)",
        price: "Rp240.000",
        image: "/images/merch/buaya-empuk.jpg",
        status: "available",
        link: "#",
      },
      {
        id: 3,
        name: "NYENDOK",
        subtitle: "Vol 2 (Edisi Restock)",
        price: "Rp240.000",
        image: "/images/merch/nyendok.jpg",
        status: "soldout",
        link: "#",
      },
    ],
  },
  {
    id: "improvindo",
    badge: "GJLS MERCH X IMPROVINDO",
    products: [
      {
        id: 4,
        name: "GJLS MERCH X IMPROVINDO",
        subtitle: "Vol 2 (Edisi Restock)",
        price: "Rp265.000",
        image: "/images/merch/improvindo-1.jpg",
        status: "available",
        link: "#",
      },
      {
        id: 5,
        name: "GJLS MERCH X IMPROVINDO",
        subtitle: "Vol 2 (Edisi Restock)",
        price: "Rp265.000",
        image: "/images/merch/improvindo-2.jpg",
        status: "available",
        link: "#",
      },
    ],
  },
  {
    id: "shoes",
    badge: "GJLS MERCH X SHOES NECESSITIES",
    products: [
      {
        id: 6,
        name: "LOVMOT BY RIGEN",
        subtitle: "Vol 2 (Edisi Restock)",
        price: "Rp149.000",
        image: "/images/merch/lovmot.jpg",
        status: "available",
        link: "#",
      },
      {
        id: 7,
        name: "LOVBERRY BY HIPSI",
        subtitle: "Vol 2 (Edisi Restock)",
        price: "Rp149.000",
        image: "/images/merch/lovberry.jpg",
        status: "available",
        link: "#",
      },
      {
        id: 8,
        name: "LOVLIVING BY RISPO",
        subtitle: "Vol 2 (Edisi Restock)",
        price: "Rp149.000",
        image: "/images/merch/lovliving.jpg",
        status: "available",
        link: "#",
      },
    ],
  },
];

// ============ DIGITAL PAGE DATA ============

export const digitalHero = {
  badge: "STAGE RECORDING & VOD ON-DEMAND",
  title: "KONTEN DIGITAL STREAMING",
  description: "Tonton ulang live show dan Stand-up spesial para komika. Beli sekali, tonton selamanya",
  ctaText: "MASUK/DAFTAR",
  ctaLink: "#",
};

export const vodCatalog = [
  {
    id: 1,
    title: "GJLS LIVE PODCAST 373",
    poster: "/images/Digital/vod-podcast-373.jpg",
    price: "Rp.50.000",
    duration: "60 Minute",
    link: "#",
  },
  {
    id: 2,
    title: "TOM: IBUKU IBU IBU",
    poster: "/images/Digital/vod-tom.jpg",
    price: "Rp.50.000",
    duration: "60 Minute",
    link: "#",
  },
  {
    id: 3,
    title: "GJLS COMEDY NIGHT",
    poster: "/images/Digital/vod-comedy-night.jpg",
    price: "Rp.50.000",
    duration: "60 Minute",
    link: "#",
  },
  {
    id: 4,
    title: "WEDDING PROPOSAL",
    poster: "/images/Digital/vod-wedding.jpg",
    price: "Rp.50.000",
    duration: "60 Minute",
    link: "#",
  },
  {
    id: 5,
    title: "BROTHER CONCERT",
    poster: "/images/Digital/vod-brother.png",
    price: "Rp.50.000",
    duration: "60 Minute",
    link: "#",
  },
  {
    id: 6,
    title: "KOMEDIAN CILIK",
    poster: "/images/Digital/vod-komedian.jpg",
    price: "Rp.50.000",
    duration: "60 Minute",
    link: "#",
  },
];

export const digitalPass = {
  badge: "UNLIMITED VIP ACCESS",
  title: "GJLS DIGITAL PASS",
  price: "RP.29.000/BULAN",
  description: "Buka seluruh gudang pertunjukan panggung, audio eksklusif, materi standup tanpa sensor, dan prioritas presale offline festival se-Indonesia",
  ctaText: "LANGGANAN SEKARANG",
  ctaLink: "#",
};

export const howItWorks = {
  badge: "PANDUAN AKSES",
  title: "CARA KERJANYA",
  subtitle: "TIGA LANGKAH PRAKTIS TANPA REGISTRASI BERBELIT BELIT",
  steps: [
    {
      id: 1,
      number: "1.",
      title: "PILIH SHOW",
      icon: "user",
      description: "Tentukan rekaman show satuan favoritmu atau aktifkan GJLS Digital Pass untuk semua akses",
    },
    {
      id: 2,
      number: "2.",
      title: "BAYAR",
      icon: "card",
      description: "Selesaikan pembayaran via QRIS, Virtual Account, atau E-Wallet. Aman dan instan.",
    },
    {
      id: 3,
      number: "3.",
      title: "TONTON",
      icon: "play",
      description: "Akses selamanya. Tonton di laptop, HP, atau TV. Tidak ada expired, tidak ada batas nonton ulang.",
    },
  ],
};

// ============ PARTNERSHIP PAGE DATA ============

export const partnershipHero = {
  badge: "B2B COMMERCIAL & CREATIVE ALLIANCE",
  title: "PITCH DECK KAMI SELALU DIMULAI DENGAN FOTO INI",
  description: "Baskara putra adalah ketua umum GJLSer pusat. Tapi yang ngurusin kampanye brand kamu adalah tim partnership kami",
  ctaText: "KONSULTASIKAN KAMPANYE BRAND ANDA",
  ctaLink: "#form",
  photo: "/images/partnership/baskara-putra.png",
};

export const flexibilityPillars = [
  {
    id: 1,
    title: "KONTEN",
    items: [
      "Sponsored Episode (Podcast, Mama Sabi)",
      "Product Placement & Ad Read",
      "Produksi Sitkom untuk Brand (seperti PLN)",
    ],
    badge: "INTEGRASI DI IP RUTIN",
  },
  {
    id: 2,
    title: "EVENT",
    items: [
      "Sponsorship GJLS Fest & Tour 23 Kota",
      "Booth Activation & Sampling",
      "Co-create Event (seperti Comedy Night)",
    ],
    badge: "AKTIVITAS PANGGUNG",
  },
  {
    id: 3,
    title: "TALENT",
    items: [
      "MC Hosting & Keynote Comedy",
      "Brand Endorsement (Rigen, Rispo, Hifdzi)",
      "Custom Skits untuk Sosmed Brand",
    ],
    badge: "WAJAH & SUARA GJLS",
  },
  {
    id: 4,
    title: "MERCHANDISE",
    items: [
      "Co-Branded Merch Drop (Terbatas)",
      "Bundling Merch dengan Produk Brand",
      "Brand Ambassador",
    ],
    badge: "KOLABORASI PRODUK FISIK",
  },
];

export const availabilityMatrix = {
  headers: ["PROGRAM IP", "AD READ", "PRODUCT PLACEMENT", "SEGMENT SPONSOR", "TITLE SPONSOR", "BRANDED CONTENT"],
  rows: [
    { ip: "GJLS PODCAST", slots: ["check", null, "check", "check", "check"] },
    { ip: "MAMA SABI", slots: ["check", "check", "open", "open", "check"] },
    { ip: "GJLS SHOW", slots: ["check", "check", "check", "check", "check"] },
    { ip: "SLEDING TACKLE", slots: ["check", "check", "open", "open", "open"] },
    { ip: "GJLS ACTIVITY", slots: ["check", "check", "open", "open", "check"] },
    { ip: "AGUSHUTAN", slots: ["check", "check", "check", "open", "open"] },
    { ip: "GJLS LIVE BUKBER", slots: ["check", "check", "check", "check", "open"] },
  ],
};

export const partnershipStats = [
  { value: "411K+", label: "GJLSer Komunitas Fanatik" },
  { value: "164M+", label: "Total Penonton & Pendengar" },
  { value: "23", label: "Kota Tur Keliling Nusantara" },
  { value: "2", label: "Film Layar Lebar Box Office" },
  { value: "10+", label: "Brand Ternama Berkolaborasi" },
];

export const partnershipForm = {
  badge: "FAST RESPONSE PARTNERSHIP DESK",
  title: "KONSULTASIKAN KAMPANYE BRAND ANDA",
  description: "Punya ide kampanye gila atau butuh proposal tailored-fit? Hubungi tim partnership kami.",
  fields: [
    { id: "name", label: "NAMA LENGKAP & PERUSAHAAN *", placeholder: "Contoh: Budi Santoso - PT Sinar Sukses Mandiri", type: "text", full: true },
    { id: "email", label: "EMAIL KANTOR *", placeholder: "budi@perusahaan.com", type: "email", full: false },
    { id: "phone", label: "NOMOR WHATSAPP / TELEPON *", placeholder: "0812XXXXXXXX", type: "tel", full: false },
    { id: "type", label: "JENIS KOLABORASI *", placeholder: "Konten Podcast / Video Integration", type: "text", full: true },
    { id: "budget", label: "ESTIMASI RENTANG BUJET *", placeholder: "< Rp 25 Juta (UMKM Package)", type: "text", full: true },
    { id: "description", label: "DESKRIPSI KEBUTUHAN & TARGET TIMELINE *", placeholder: "Jelaskan gambaran produk, target peluncuran kampanye, atau ide format yang diinginkan...", type: "textarea", full: true },
  ],
  submitText: "KIRIM KONSULTASI",
  contactInfo: "partnership@gjlsentertainment.id | WhatsApp: 0812-XXXX-XXXX • Respon cepat dalam 1×24 jam kerja.",
};
