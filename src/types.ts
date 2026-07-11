export interface Floorplan {
  id: string;
  name: string; // e.g., "A1 - Luxury Suite"
  bedrooms: number;
  bathrooms: number;
  area: number; // in sqm
  priceEstimate: number; // in billion VND or million USD
  direction: string;
  features: string[];
  svgLayout: string; // SVG path mockup
}

export interface ProjectHighlight {
  title: string;
  description: string;
}

export interface Project {
  id: 'thuthiem' | 'giaduc' | 'conic';
  name: string;
  nameEn: string;
  tagline: string;
  taglineEn: string;
  location: string;
  locationEn: string;
  locationFull: string;
  locationFullEn: string;
  type: string;
  typeEn: string;
  scale: string;
  scaleEn: string;
  constructionArea: string;
  investmentCap: string;
  progress: string;
  progressEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  highlights: ProjectHighlight[];
  highlightsEn: ProjectHighlight[];
  amenities: { icon: string; text: string; textEn: string }[];
  floorplans: Floorplan[];
}

export type Language = 'vi' | 'en';
