// ─────────────────────────────────────────────────────────────────
// PHOTOGRAPHY REGISTRY — PROTOTYPE PLACEHOLDERS
//
// Free stock photography from Unsplash, used under the Unsplash License
// (free for commercial use, no attribution required).
// https://unsplash.com/license
//
// ⚠  STAND-INS ONLY. Replace with genuine Rainbow Group photography before
//    launch — see CLIENT_ASSETS_REQUIRED.md items 11–28.
//
// TWO RULES THIS FILE FOLLOWS
//
// 1. Indian context. Rainbow is a Thane-based group; Western classrooms in
//    the hero read as generic stock to any parent looking at it. Every slot
//    where people are recognisable uses Indian schools, students and
//    campuses. Subject-only shots (books, lab glassware, architecture) are
//    used where ethnicity is not visible and adds nothing.
//
// 2. No repeats. Sets are namespaced per page and do not overlap, so no two
//    pages — and no two slots on one page — show the same picture.
//
// Every ID below was checked to resolve before being added. Unsplash IDs do
// go dead, and newer "Unsplash+" IDs are not publicly hotlinkable at all.
// ─────────────────────────────────────────────────────────────────

const src = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

/** Homepage only. */
export const homePhotos = {
  // Indian classroom — the single most important image on the site
  heroPrimary: src("photo-1692269725836-fbd72e98883f", 1200),
  heroSecondary: src("photo-1692609659165-1ec4d8108c0e", 700),
  aboutPrimary: src("photo-1692269725827-699e04a11cdf", 900),
  aboutSecondary: src("photo-1692269725911-87697c558be1", 700),
  schoolCard: src("photo-1572847748080-bac263fae977", 1000),
  preschoolCard: src("photo-1624641328326-ecb54b7cff1f", 1000),
  careersStrip: src("photo-1521737604893-d14cc237f11d", 1000),
  avatars: [
    src("photo-1623303366639-0e330d7c3d9f", 200),
    src("photo-1627475312657-3752fa068473", 200),
    src("photo-1489942986787-cded4ecf962e", 200),
  ],
  campusSlider: [
    src("photo-1680084521816-cc1ad0433ceb", 900), // campus architecture
    src("photo-1588072432836-e10032774350", 800), // library
    src("photo-1516627145497-ae6968895b74", 800), // graduation
    src("photo-1649008726820-d90aeb70c32e", 800), // yoga / assembly
    src("photo-1703546572827-4c6d1711a991", 800), // students with flags
    src("photo-1509228468518-180dd4864904", 800), // science
  ],
};

/** Careers page only. */
export const careersPhotos = {
  hero: src("photo-1519389950473-47ba0277781c", 1400),
  lifeSlider: [
    src("photo-1522071820081-009f0129c71c", 800),
    src("photo-1600880292203-757bb62b4baf", 800),
    src("photo-1531545514256-b1400bc00f31", 800),
    src("photo-1454165804606-c3d57bc86b40", 800),
    src("photo-1524995997946-a1c2e315a42f", 800),
    src("photo-1573496359142-b8d87734a5a2", 800),
  ],
};

/** Institution detail pages — keyed by slug, no overlap between the two. */
export const institutionPhotos: Record<
  string,
  { hero: string; about: string; gallery: string[]; programmes: string[] }
> = {
  "rainbow-international-school": {
    hero: src("photo-1692269726060-9c604e06f63b", 1400),
    about: src("photo-1692269725976-2bebd4622fd4", 1000),
    gallery: [
      src("photo-1735966329265-6b57ed8dd2ef", 900), // students together
      src("photo-1656321717360-be568acc171b", 700), // campus lawn
      src("photo-1519452575417-564c1401ecc0", 700), // books
      src("photo-1541963463532-d68292c34b19", 700), // books
      src("photo-1531482615713-2afd69097998", 700), // collaboration
    ],
    programmes: [
      src("photo-1472162072942-cd5147eb3902", 700),
      src("photo-1516534775068-ba3e7458af70", 700),
      src("photo-1541178735493-479c1a27ed24", 700),
      src("photo-1587654780291-39c9404d746b", 700),
    ],
  },
  "rainbow-preschool-international": {
    hero: src("photo-1692269725887-51e67bf1bed0", 1400),
    about: src("photo-1610093435813-526af1b3fe11", 1000),
    gallery: [
      src("photo-1524069290683-0457abfe42c3", 900), // children together
      src("photo-1497486751825-1233686d5d80", 700), // five children smiling
      src("photo-1503454537195-1dcabb73ffb9", 700),
      src("photo-1607453998774-d533f65dac99", 700),
      src("photo-1591123120675-6f7f1aae0e5b", 700),
    ],
    programmes: [
      src("photo-1513475382585-d06e58bcb0e0", 700),
      src("photo-1503945438517-f65904a52ce6", 700),
      src("photo-1596464716127-f2a82984de30", 700),
      src("photo-1588075592446-265fd1e6e76f", 700),
    ],
  },
};

/** Legal pages — Indian campus architecture, one each. */
export const legalPhotos = {
  privacy: src("photo-1642915680258-6aaca62d3849", 900),
  terms: src("photo-1658133134704-121129a67c73", 900),
};

/** Shown in the UI so the client always knows these are temporary. */
export const PHOTO_DISCLAIMER =
  "Stock imagery shown for design purposes — to be replaced with Rainbow Group photography.";
