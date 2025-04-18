export interface Theme {
  title: string;
  iconName: React.ReactNode;
  description: string;
  color: string;
  link: string;
}

export interface Region {
  name: string;
  stat: string;
  image: string;
  color: string;
}

export interface Insight {
  iconName: string;
  stat: string;
  description: string;
  color: string;
}

export interface Snapshot {
  stat: string;
  label: string;
  source: string;
}

export interface CountrySummary {
  population: string;
  region: string;
  undernourished: string;
  agLand: string;
  gdpPerCapita: string;
  climateRisk: string;
}

export interface CountryThemes {
  production: {
    headline: string;
    topCrops: string[];
    output: string;
    growth: string;
  };
  consumption: {
    calories: string;
    staples: string;
    protein: string;
  };
  trade: {
    balance: string;
    exports: string;
    imports: string;
  };
  nutrition: {
    stunting: string;
    wasting: string;
    obesity: string;
  };
  climate: {
    emissions: string;
    drought: string;
    adaptation: string;
  };
}

export interface Country {
  name: string;
  flag: string;
  summary: CountrySummary;
  themes: CountryThemes;
}
