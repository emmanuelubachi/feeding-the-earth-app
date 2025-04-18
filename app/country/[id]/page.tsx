import { Card, CardContent } from "@/components/ui/card";
import CountryPageClient from "./CountryPageClient";
// Mock data - replace with real API call
// const countryData = {
//   name: "Kenya",
//   flag: "🇰🇪",
//   summary: {
//     population: "54.9M",
//     region: "East Africa",
//     undernourished: "23%",
//     agLand: "48.5%",
//     gdpPerCapita: "$2,007",
//     climateRisk: "High",
//   },
//   themes: {
//     production: {
//       headline: "42% of workforce in agriculture",
//       topCrops: ["Maize", "Tea", "Sugarcane"],
//       output: "44.7M tonnes",
//       growth: "+2.3%",
//     },
//     consumption: {
//       calories: "2,206",
//       staples: "68%",
//       protein: "58g",
//     },
//     trade: {
//       balance: "-$2.1B",
//       exports: "$3.2B",
//       imports: "$5.3B",
//     },
//     nutrition: {
//       stunting: "26.2%",
//       wasting: "4.1%",
//       obesity: "6.3%",
//     },
//     climate: {
//       emissions: "18.6 MT",
//       drought: "High",
//       adaptation: "Medium",
//     },
//   },
// };
import { getCountry } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// This would normally come from your API or database
export async function generateStaticParams() {
  // For now, we'll just pre-render the Kenya page as an example
  // In a real app, this would return an array of all country IDs
  return [{ id: "kenya" }];
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const paramsData = await params;
  const id = paramsData.id;
  const country = getCountry(id);
  if (!country)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <CardContent className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Country not found</h1>
            <Link href="/">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  return <CountryPageClient data={country} />;
}
