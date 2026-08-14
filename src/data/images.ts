// ─────────────────────────────────────────────────────────────────
// PHOTOGRAPHY REGISTRY — PROTOTYPE PLACEHOLDERS
//
// Every image below is free stock photography from Unsplash, used under the
// Unsplash License (free for commercial use, no attribution required).
// https://unsplash.com/license
//
// ⚠  These are STAND-INS to demonstrate the design intent. Each one must be
//    replaced with genuine Rainbow Group photography before launch —
//    see CLIENT_ASSETS_REQUIRED.md items 11–28.
//
// Photo sets are namespaced PER PAGE and deliberately do not overlap, so no
// two pages show the same picture. Every ID below was checked to resolve
// before being added — Unsplash IDs do go dead.
//
// To swap an image: replace the photo ID string only.
// ─────────────────────────────────────────────────────────────────

const src = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

/** Homepage only. */
export const homePhotos = {
  heroPrimary: src("photo-1509062522246-3755977927d7", 1100),
  heroSecondary: src("photo-1546410531-bb4caa6b424d", 700),
  aboutPrimary: src("photo-1524178232363-1fb2b075b655", 900),
  aboutSecondary: src("photo-1503676260728-1c00da094a0b", 700),
  schoolCard: src("photo-1427504494785-3a9ca7044f45", 1000),
  preschoolCard: src("photo-1594608661623-aa0bd3a69d98", 1000),
  careersStrip: src("photo-1522202176988-66273c2fd55f", 1000),
  // Testimonial avatars — portrait crops
  avatars: [
    src("photo-1573496359142-b8d87734a5a2", 200),
    src("photo-1580537659466-0a9bfa916a54", 200),
    src("photo-1567168544813-cc03465b4fa8", 200),
  ],
  // "Life across our campuses" slider
  campusSlider: [
    src("photo-1588072432836-e10032774350", 800),
    src("photo-1580582932707-520aed937b7b", 800),
    src("photo-1516627145497-ae6968895b74", 800),
    src("photo-1497633762265-9d179a990aa6", 800),
    src("photo-1509228468518-180dd4864904", 800),
    src("photo-1532094349884-543bc11b234d", 800),
  ],
};

/** Careers page only. */
export const careersPhotos = {
  hero: src("photo-1519389950473-47ba0277781c", 1400),
  lifeSlider: [
    src("photo-1521737604893-d14cc237f11d", 800),
    src("photo-1522071820081-009f0129c71c", 800),
    src("photo-1600880292203-757bb62b4baf", 800),
    src("photo-1531545514256-b1400bc00f31", 800),
    src("photo-1454165804606-c3d57bc86b40", 800),
    src("photo-1524995997946-a1c2e315a42f", 800),
  ],
};

/** Institution detail pages — keyed by slug, no overlap between the two. */
export const institutionPhotos: Record<
  string,
  { hero: string; about: string; gallery: string[]; programmes: string[] }
> = {
  "rainbow-international-school": {
    hero: src("photo-1523240795612-9a054b0db644", 1400),
    about: src("photo-1543269865-cbf427effbad", 1000),
    gallery: [
      src("photo-1577896851231-70ef18881754", 900),
      src("photo-1519452575417-564c1401ecc0", 700),
      src("photo-1531482615713-2afd69097998", 700),
      src("photo-1523580494863-6f3031224c94", 700),
      src("photo-1541963463532-d68292c34b19", 700),
    ],
    programmes: [
      src("photo-1472162072942-cd5147eb3902", 700),
      src("photo-1516534775068-ba3e7458af70", 700),
      src("photo-1541178735493-479c1a27ed24", 700),
      src("photo-1587654780291-39c9404d746b", 700),
    ],
  },
  "rainbow-preschool-international": {
    hero: src("photo-1596495578065-6e0763fa1178", 1400),
    about: src("photo-1544717297-fa95b6ee9643", 1000),
    gallery: [
      src("photo-1571260899304-425eee4c7efc", 900),
      src("photo-1503454537195-1dcabb73ffb9", 700),
      src("photo-1607453998774-d533f65dac99", 700),
      src("photo-1591123120675-6f7f1aae0e5b", 700),
      src("photo-1596464716127-f2a82984de30", 700),
    ],
    programmes: [
      src("photo-1513475382585-d06e58bcb0e0", 700),
      src("photo-1503945438517-f65904a52ce6", 700),
      src("photo-1497486751825-1233686d5d80", 700),
      src("photo-1588075592446-265fd1e6e76f", 700),
    ],
  },
};

/** Legal pages — one quiet image each. */
export const legalPhotos = {
  privacy: src("photo-1509869175650-a1d97972541a", 900),
  terms: src("photo-1610484826967-09c5720778c7", 900),
};

/** Shown in the UI so the client always knows these are temporary. */
export const PHOTO_DISCLAIMER =
  "Stock imagery shown for design purposes — to be replaced with Rainbow Group photography.";
