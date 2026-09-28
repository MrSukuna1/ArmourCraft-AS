export const products = [
  {
    id: "armour-cp-iv-mc",
    name: "CP-IV Multi-Curve Ceramic Armor Plate",
    category: "plates",
    categoryLabel: "Body Armor Plates",
    tagline: "Ultra-Lightweight Stand-Alone Hard Armor",
    image: "/products/plate.jpg",
    protectionLevel: "NIJ Level IV (0101.06)",
    ratingBadge: "NIJ IV STAND-ALONE",
    weight: "2.45 kg / 5.4 lbs",
    thickness: "22 mm Profile",
    cut: "Multi-Curve Shooter's Cut (10\" x 12\")",
    materials: "Silicon Carbide (SiC) Ceramic + UHMWPE Matrix",
    spallCoating: "Full Polyurea Anti-Spall & Drop Shield",
    testedThreats: [
      ".30-06 AP (M2 Armor Piercing, 2880 ft/s)",
      "7.62x51mm NATO M80 Ball",
      "7.62x39mm Armor-Piercing Incendiary (API-BZ)",
      "5.56x45mm NATO M855 / SS109 Penetrator"
    ],
    highlights: [
      "Ergonomic multi-curve shape engineered for extended combat operations",
      "Advanced multi-hit ceramic strike face dampens blunt force trauma",
      "Impervious to water, diesel, and extreme thermal variation (-40°C to +75°C)"
    ],
    inStock: true,
  },
  {
    id: "armour-fast-ops-helmet",
    name: "FAST-Ops High-Cut Ballistic Combat Helmet",
    category: "helmets",
    categoryLabel: "Combat Helmets",
    tagline: "Modular Airborne Defense with Integrated NVG Shroud",
    image: "/products/helmet.jpg",
    protectionLevel: "NIJ Level III-A & STANAG 2920",
    ratingBadge: "NIJ III-A + FRAG",
    weight: "1.32 kg / 2.9 lbs",
    thickness: "8 mm High-Tensile Shell",
    cut: "High-Cut Clearance for Comms & Headsets",
    materials: "Thermoset Carbon-Aramid Hybrid Monocoque",
    spallCoating: "Matte Polyurethane Anti-Reflective Infrared IR Coating",
    testedThreats: [
      ".44 Magnum SJHP (1430 ft/s)",
      "9mm Parabellum FMJ (1400 ft/s)",
      "Fragmentation V50 Rating: > 680 m/s (17gr FSP)",
      "Blast Overpressure & Blunt Impact Trauma Mitigated"
    ],
    highlights: [
      "Precision-engineered skeleton Wilcox-spec 3-hole NVG mount",
      "ARC tactical rail system with integrated cable management",
      "Memory cloud closed-cell foam liner with BOA dial retention suspension"
    ],
    inStock: true,
  },
  {
    id: "armour-aegis-qr-carrier",
    name: "Aegis-QR Laser-Cut Ballistic Plate Carrier",
    category: "vests",
    categoryLabel: "Tactical Vests",
    tagline: "Mission-Configurable Load Bearing Armor Platform",
    image: "/products/vest.jpg",
    protectionLevel: "Accepts NIJ III, III+, & IV SAPI Plates",
    ratingBadge: "MODULAR CARRIER",
    weight: "1.15 kg / 2.5 lbs (Chassis)",
    thickness: "Low-Profile Modular Fit",
    cut: "Universal SAPI / ESAPI Geometry (S to XL)",
    materials: "Laser-Cut 500D/1000D Laminate Cordura® + Hypalon",
    spallCoating: "Moisture-wicking antimicrobial 3D spacer mesh lining",
    testedThreats: [
      "Rated for extreme combat tensile stresses (> 250 kg pull strength)",
      "Flame-retardant (FAR 25.853 compliant)",
      "Full quick-release emergency egress in < 1.0 second"
    ],
    highlights: [
      "Dual rapid-release magnetic tube cummerbund locking mechanisms",
      "Reinforced rear drag handle rated for casualty extraction up to 300 kg",
      "Laser-cut negative space MOLLE with integrated hydration and comms routing"
    ],
    inStock: true,
  },
  {
    id: "armour-vanguard-x-shield",
    name: "Vanguard-X Tactical Ballistic Assault Shield",
    category: "shields",
    categoryLabel: "Assault Shields",
    tagline: "Active Breaching & Point-Man Ballistic Barrier",
    image: "/products/shield.jpg",
    protectionLevel: "NIJ Level III+ Stand-Alone",
    ratingBadge: "NIJ III+ MULTI-HIT",
    weight: "8.2 kg / 18.0 lbs",
    thickness: "18 mm Composite Core",
    cut: "Full Torso Protective Profile (20\" x 34\")",
    materials: "Silicon Carbide Ceramic Facing + Monolithic UHMWPE Backer",
    spallCoating: "Curved 4\" x 10\" Ballistic Multi-Laminate Viewport",
    testedThreats: [
      "7.62x39mm Mild Steel Core (MSC)",
      "5.56x45mm M193 & M855 Green Tip",
      "7.62x51mm NATO M80 Ball",
      "Handgun calibers (.357 Sig, .44 Mag, 9mm +P+)"
    ],
    highlights: [
      "Integrated 1,200 lumen blinding tactical strobe lighting system",
      "Ambidextrous ergonomic forearm support with high-density vibration dampening",
      "Heavy-duty impact bumper edges for dynamic door breaching operations"
    ],
    inStock: true,
  },
];

export const defenseCertifications = [
  {
    title: "NIJ Standard 0101.06",
    code: "NIJ-CERT-IV",
    desc: "Certified for ballistic resistance of body armor under National Institute of Justice stringent multi-round protocols.",
  },
  {
    title: "NATO STANAG 2920",
    code: "STANAG-V50",
    desc: "Standardized evaluation of ballistic threat materials and fragmentation velocity resistance under simulated blast environments.",
  },
  {
    title: "ISO 9001:2015 Aerospace & Defense",
    code: "ISO-QMS",
    desc: "Rigorous quality management system ensuring zero-defect manufacturing and full lot-traceability for defense contracts.",
  },
  {
    title: "MIL-STD-810H Environmental",
    code: "MIL-SPEC",
    desc: "Tested against thermal shock, salt fog corrosion, sand abrasion, solar radiation, and extreme fluid contamination.",
  },
];
