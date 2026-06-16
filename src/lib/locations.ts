export interface CityArea {
  slug: string;
  name: string;
  region: "Kreis Kleve" | "Kreis Wesel" | "Südlicher Niederrhein";
  distanceKm: number;
  note: string;
}

// Alle Orte, in denen Platzhelden24 im Niederrhein tätig ist
export const LOCATIONS: CityArea[] = [
  // Kreis Kleve
  { slug: "kleve", name: "Kleve", region: "Kreis Kleve", distanceKm: 0, note: "unser Heimatstandort direkt an der niederländischen Grenze" },
  { slug: "goch", name: "Goch", region: "Kreis Kleve", distanceKm: 15, note: "die Stadt zwischen Niers und Maasterrassen" },
  { slug: "emmerich", name: "Emmerich am Rhein", region: "Kreis Kleve", distanceKm: 20, note: "die Rheinstadt direkt an der niederländischen Grenze" },
  { slug: "kalkar", name: "Kalkar", region: "Kreis Kleve", distanceKm: 12, note: "die historische Hansestadt am Niederrhein" },
  { slug: "kranenburg", name: "Kranenburg", region: "Kreis Kleve", distanceKm: 8, note: "die Grenzgemeinde im Reichswald" },
  { slug: "bedburg-hau", name: "Bedburg-Hau", region: "Kreis Kleve", distanceKm: 8, note: "die Gemeinde zwischen Kleve und Kalkar" },
  { slug: "rees", name: "Rees", region: "Kreis Kleve", distanceKm: 25, note: "die älteste Stadt am Niederrhein" },
  { slug: "kevelaer", name: "Kevelaer", region: "Kreis Kleve", distanceKm: 25, note: "die Wallfahrtsstadt im Kreis Kleve" },
  { slug: "geldern", name: "Geldern", region: "Kreis Kleve", distanceKm: 30, note: "die Stadt im Herzen des Kreises Kleve" },
  { slug: "issum", name: "Issum", region: "Kreis Kleve", distanceKm: 35, note: "die Gemeinde im südlichen Kreis Kleve" },
  { slug: "straelen", name: "Straelen", region: "Kreis Kleve", distanceKm: 30, note: "die Blumenstadt am Niederrhein" },
  { slug: "uedem", name: "Uedem", region: "Kreis Kleve", distanceKm: 18, note: "die Gemeinde am Fuß des Uedemer Hochwalds" },
  { slug: "weeze", name: "Weeze", region: "Kreis Kleve", distanceKm: 20, note: "die Gemeinde an der Niers" },

  // Kreis Wesel
  { slug: "wesel", name: "Wesel", region: "Kreis Wesel", distanceKm: 35, note: "die Kreisstadt am Zusammenfluss von Rhein und Lippe" },
  { slug: "voerde", name: "Voerde", region: "Kreis Wesel", distanceKm: 45, note: "die Stadt am Niederrhein zwischen Wesel und Dinslaken" },
  { slug: "hamminkeln", name: "Hamminkeln", region: "Kreis Wesel", distanceKm: 35, note: "die Stadt zwischen Wesel und Bocholt" },
  { slug: "dinslaken", name: "Dinslaken", region: "Kreis Wesel", distanceKm: 50, note: "die Stadt am Rande des Ruhrgebiets" },
  { slug: "moers", name: "Moers", region: "Kreis Wesel", distanceKm: 55, note: "die Stadt am westlichen Niederrhein" },
  { slug: "kamp-lintfort", name: "Kamp-Lintfort", region: "Kreis Wesel", distanceKm: 45, note: "die Stadt mit dem ehemaligen Zisterzienserkloster" },
  { slug: "rheinberg", name: "Rheinberg", region: "Kreis Wesel", distanceKm: 45, note: "die Stadt am Rhein zwischen Moers und Wesel" },
  { slug: "xanten", name: "Xanten", region: "Kreis Wesel", distanceKm: 30, note: "die historische Römerstadt am Niederrhein" },
  { slug: "sonsbeck", name: "Sonsbeck", region: "Kreis Wesel", distanceKm: 28, note: "die Gemeinde zwischen Geldern und Xanten" },
  { slug: "alpen", name: "Alpen", region: "Kreis Wesel", distanceKm: 40, note: "die Gemeinde im Naturpark Schwalm-Nette-Vorland" },

  // Südlicher Niederrhein
  { slug: "duisburg", name: "Duisburg", region: "Südlicher Niederrhein", distanceKm: 55, note: "die Großstadt am Zusammenfluss von Rhein und Ruhr" },
  { slug: "krefeld", name: "Krefeld", region: "Südlicher Niederrhein", distanceKm: 55, note: "die Samt- und Seidenstadt am Niederrhein" },
  { slug: "kempen", name: "Kempen", region: "Südlicher Niederrhein", distanceKm: 45, note: "die historische Altstadt im Kreis Viersen" },
  { slug: "toenisvorst", name: "Tönisvorst", region: "Südlicher Niederrhein", distanceKm: 50, note: "die Stadt zwischen Krefeld und Kempen" },
  { slug: "viersen", name: "Viersen", region: "Südlicher Niederrhein", distanceKm: 55, note: "die Stadt im Kreis Viersen" },
  { slug: "nettetal", name: "Nettetal", region: "Südlicher Niederrhein", distanceKm: 50, note: "die Stadt an der niederländischen Grenze" },
  { slug: "willich", name: "Willich", region: "Südlicher Niederrhein", distanceKm: 55, note: "die Stadt zwischen Krefeld und Mönchengladbach" },
];

export const REGION_ORDER: CityArea["region"][] = [
  "Kreis Kleve",
  "Kreis Wesel",
  "Südlicher Niederrhein",
];
