// ─────────────────────────────────────────────────────────────────
// PHOTOGRAPHY REGISTRY — PROTOTYPE PLACEHOLDERS
//
// Every image below is free stock photography from Unsplash, used under the
// Unsplash License (free for commercial use, no attribution required).
// https://unsplash.com/license
//
// ⚠  These are STAND-INS to demonstrate the design intent. Each one must be
//    replaced with genuine Rainbow Group campus photography before launch —
//    see CLIENT_ASSETS_REQUIRED.md items 11–28.
//
// To swap an image: replace the photo ID string only. Everything else is
// derived automatically.
// ─────────────────────────────────────────────────────────────────

const src = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const photos = {
  // Hero collage
  heroPrimary: src("photo-1509062522246-3755977927d7", 1100),
  heroSecondary: src("photo-1546410531-bb4caa6b424d", 700),
  heroTertiary: src("photo-1571260899304-425eee4c7efc", 700),

  // About section collage
  aboutPrimary: src("photo-1524178232363-1fb2b075b655", 900),
  aboutSecondary: src("photo-1503676260728-1c00da094a0b", 700),

  // Institution cards
  schoolCard: src("photo-1427504494785-3a9ca7044f45", 1000),
  preschoolCard: src("photo-1546410531-bb4caa6b424d", 1000),

  // Careers
  careers: src("photo-1522202176988-66273c2fd55f", 1000),

  // Institution detail — feature + gallery
  schoolFeature: src("photo-1523240795612-9a054b0db644", 1100),
  preschoolFeature: src("photo-1571260899304-425eee4c7efc", 1100),

  // Five entries each: the detail-page gallery features the first image as a
  // 2x2 tile from lg, so it needs 5 to fill an 8-cell grid without a hole.
  gallery: [
    src("photo-1588072432836-e10032774350", 900),
    src("photo-1580582932707-520aed937b7b", 700),
    src("photo-1516627145497-ae6968895b74", 700),
    src("photo-1497633762265-9d179a990aa6", 700),
    src("photo-1541963463532-d68292c34b19", 700),
  ],
  galleryPreschool: [
    src("photo-1596495578065-6e0763fa1178", 900),
    src("photo-1544717297-fa95b6ee9643", 700),
    src("photo-1503454537195-1dcabb73ffb9", 700),
    src("photo-1607453998774-d533f65dac99", 700),
    src("photo-1503676260728-1c00da094a0b", 700),
  ],
};

/** Shown in the UI so the client always knows these are temporary. */
export const PHOTO_DISCLAIMER =
  "Stock imagery shown for design purposes — to be replaced with Rainbow Group photography.";
