import CountryPageClient from "./CountryPageClient";
// Mock data - replace with real API call
const countryData = {
  name: "Kenya",
  flag: "🇰🇪",
  summary: {
    population: "54.9M",
    region: "East Africa",
    undernourished: "23%",
    agLand: "48.5%",
    gdpPerCapita: "$2,007",
    climateRisk: "High",
  },
  themes: {
    production: {
      headline: "42% of workforce in agriculture",
      topCrops: ["Maize", "Tea", "Sugarcane"],
      output: "44.7M tonnes",
      growth: "+2.3%",
    },
    consumption: {
      calories: "2,206",
      staples: "68%",
      protein: "58g",
    },
    trade: {
      balance: "-$2.1B",
      exports: "$3.2B",
      imports: "$5.3B",
    },
    nutrition: {
      stunting: "26.2%",
      wasting: "4.1%",
      obesity: "6.3%",
    },
    climate: {
      emissions: "18.6 MT",
      drought: "High",
      adaptation: "Medium",
    },
  },
};

// This would normally come from your API or database
export async function generateStaticParams() {
  // For now, we'll just pre-render the Kenya page as an example
  // In a real app, this would return an array of all country IDs
  return [{ id: "kenya" }];
}

export default function CountryPage({ params }: { params: { id: string } }) {
  return <CountryPageClient data={countryData} />;
}
