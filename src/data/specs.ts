export const acpSpecs = {
  headers: ["Grade", "Total ACP", "Front Skin", "LDPE Core", "Back Skin", "Front Coating", "Back Coating"],
  rows: [
    ["Platinum", "4MM", "0.50MM", "3.00MM", "0.50MM", "25µ ±3", "7µ ±1"],
    ["Pearl", "4MM", "0.25MM", "3.50MM", "0.25MM", "25µ ±3", "7µ ±1"],
    ["Ruby", "3MM", "0.25MM", "2.50MM", "0.25MM", "25µ ±3", "7µ ±1"],
  ],
};

export const aludecorSpecs = {
  headers: ["Particulars", "AL 45", "AL 43", "AL 33"],
  rows: [
    ["Total Thickness", "4 mm", "4 mm", "3 mm"],
    ["Aluminium Skin (Top/Bottom)", "0.5 mm", "0.25 mm", "0.25 mm"],
    ["LDPE / Mineral Core", "3 mm", "3.5 mm", "2.5 mm"],
    ["Skin Grade", "AA3105 (Hindalco)", "AA1100 (Hindalco)", "AA1100 (Hindalco)"],
    ["Front Coating", "30–35µ Three Coat", "30–35µ Three Coat", "30–35µ Three Coat"],
    ["Back Coating", "4–7µ Service", "4–7µ Service", "4–7µ Service"],
    ["Width Tolerance", "±2.0 mm", "±2.0 mm", "±2.0 mm"],
    ["Length Tolerance", "±4.0 mm", "±4.0 mm", "±4.0 mm"],
    ["Bow", "Max 0.5%", "Max 0.8%", "Max 0.8%"],
  ],
};

export const alstarSpecs = {
  physical: {
    headers: ["Parameter", "Standard", "Unit", "Tolerance"],
    rows: [
      ["Thickness of ACP", "-", "mm", "3 ±0.20"],
      ["Thickness of Al. Skin", "-", "mm", "0.20 ±0.02"],
      ["Core Density", "ASTM D792", "g/cc", "≥0.92"],
      ["Weight", "-", "Kg/sqm", "3.70 ±5%"],
      ["Length", "-", "mm", "±4"],
      ["Width", "-", "mm", "±2"],
      ["Squareness", "-", "mm", "Max. 5"],
    ],
  },
  mechanical: {
    headers: ["Parameter", "Standard", "Unit", "Tolerance"],
    rows: [
      ["Tensile Strength", "ASTM E-8", "MPa", "≥27"],
      ["Yield Strength", "ASTM E-8", "MPa", "≥20"],
      ["Elongation", "ASTM E-8", "%", "≥2"],
      ["Peel Off Strength", "ASTM D-903", "N/mm", "≥4.5"],
    ],
  },
  skin: {
    headers: ["Parameter", "Standard", "Unit", "Tolerance"],
    rows: [
      ["Alloy", "ASTM B209", "-", "11XX/3XXX"],
      ["Tensile Strength", "ASTM E-8", "MPa", "≥110"],
      ["0.2% Proof Stress", "ASTM E-8", "MPa", "≥90"],
      ["Elongation", "ASTM E-8", "%", "≥3"],
      ["Modulus of Elasticity", "ASTM E-8", "GPa", "≥50"],
    ],
  },
  coating: {
    headers: ["Parameter", "Standard", "Unit", "Tolerance"],
    rows: [
      ["Coating Type", "Chemical Test", "-", "HDPE/PVDF"],
      ["DFT (Solid/Metallic)", "ASTM E-376", "microns", "≥22"],
      ["DFT (Wooden)", "-", "microns", "≥25"],
      ["Specular Gloss", "ASTM D-523", "%", "As per Surface"],
      ["Dry Adhesion", "ASTM D-3359", "-", "Min. 3B"],
      ["T-Bend Test", "ASTM D-4145", "-", "Max. 2T"],
      ["Reverse Impact", "ASTM D-2794", "-", "No Pick Off"],
      ["Pencil Hardness", "ASTM D-3363", "-", "Min. HB"],
      ["MEK Rub Test", "ASTM D-5402", "-", "100"],
      ["Muriatic Acid Resistance", "AAMA 2605", "-", "No blistering"],
      ["Nitric Acid Resistance", "AAMA 2605", "-", "≤ 5ΔE Units"],
      ["Alkali (NaOH) Test", "ASTM D-1308", "-", "No colour change"],
    ],
  },
};

export const alstoneSpecs = {
  physical: {
    headers: ["Parameter", "Standard", "Unit", "Tolerance"],
    rows: [
      ["Thickness of ACP", "-", "mm", "4 ±0.20"],
      ["Thickness of Al. Skin", "-", "mm", "0.25 ±0.02"],
      ["Core Density", "ASTM D792", "g/cc", "≥0.92"],
      ["Weight", "-", "Kg/sqm", "4.80 ±5%"],
      ["Length", "-", "mm", "±4"],
      ["Width", "-", "mm", "±2"],
      ["Squareness", "-", "mm", "Max. 5"],
    ],
  },
  mechanical: {
    headers: ["Parameter", "Standard", "Unit", "Tolerance"],
    rows: [
      ["Tensile Strength", "ASTM E-8", "MPa", "≥30"],
      ["Yield Strength", "ASTM E-8", "MPa", "≥24"],
      ["Elongation", "ASTM E-8", "%", "≥2"],
      ["Peel Off Strength", "ASTM D-903", "N/mm", "≥5.0"],
    ],
  },
  skin: {
    headers: ["Parameter", "Standard", "Unit", "Tolerance"],
    rows: [
      ["Alloy", "ASTM B209", "-", "11XX/3XXX"],
      ["Tensile Strength", "ASTM E-8", "MPa", "≥120"],
      ["0.2% Proof Stress", "ASTM E-8", "MPa", "≥100"],
      ["Elongation", "ASTM E-8", "%", "≥3"],
      ["Modulus of Elasticity", "ASTM E-8", "GPa", "≥50"],
    ],
  },
  coating: {
    headers: ["Parameter", "Standard", "Unit", "Tolerance"],
    rows: [
      ["Coating Type", "Chemical Test", "-", "HDPE/PVDF"],
      ["DFT (Solid/Metallic)", "ASTM E-376", "microns", "≥23"],
      ["DFT (Wooden)", "-", "microns", "≥25"],
      ["Specular Gloss", "ASTM D-523", "%", "As per Surface"],
      ["Dry Adhesion", "ASTM D-3359", "-", "Min. 3B"],
      ["T-Bend Test", "ASTM D-4145", "-", "Max. 2T"],
      ["Reverse Impact", "ASTM D-2794", "-", "No Pick Off"],
      ["Pencil Hardness", "ASTM D-3363", "-", "Min. HB"],
      ["MEK Rub Test", "ASTM D-5402", "-", "100"],
      ["Muriatic Acid Resistance", "AAMA 2605", "-", "No blistering"],
      ["Nitric Acid Resistance", "AAMA 2605", "-", "≤ 5ΔE Units"],
      ["Alkali (NaOH) Test", "ASTM D-1308", "-", "No colour change"],
    ],
  },
};
