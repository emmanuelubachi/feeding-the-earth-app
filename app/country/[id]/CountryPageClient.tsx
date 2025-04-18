"use client";

import { useRouter } from "next/navigation";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowLeft,
  Globe2,
  Users,
  Wheat,
  Cloud,
  DollarSign,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import CountryStats from "@/components/country/CountryStats";
import ProductionSection from "@/components/country/ProductionSection";
import ConsumptionSection from "@/components/country/ConsumptionSection";
import TradeSection from "@/components/country/TradeSection";
import NutritionSection from "@/components/country/NutritionSection";
import ClimateSection from "@/components/country/ClimateSection";

interface CountryPageClientProps {
  data: {
    name: string;
    flag: string;
    summary: {
      population: string;
      region: string;
      undernourished: string;
      agLand: string;
      gdpPerCapita: string;
      climateRisk: string;
    };
    themes: {
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
    };
  };
}

export default function CountryPageClient({ data }: CountryPageClientProps) {
  const router = useRouter();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />

      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Map
            </button>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              {data.flag} {data.name}
            </h1>
          </div>
        </div>
      </header>

      {/* Country Summary */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <CountryStats
              icon={Users}
              label="Population"
              value={data.summary.population}
            />
            <CountryStats
              icon={Globe2}
              label="Region"
              value={data.summary.region}
            />
            <CountryStats
              icon={Wheat}
              label="Undernourished"
              value={data.summary.undernourished}
            />
            <CountryStats
              icon={Globe2}
              label="Agricultural Land"
              value={data.summary.agLand}
            />
            <CountryStats
              icon={DollarSign}
              label="GDP per capita"
              value={data.summary.gdpPerCapita}
            />
            <CountryStats
              icon={Cloud}
              label="Climate Risk"
              value={data.summary.climateRisk}
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="production" className="space-y-8">
          <TabsList className="w-full justify-start space-x-2 overflow-x-auto">
            <TabsTrigger value="production">🌾 Production</TabsTrigger>
            <TabsTrigger value="consumption">🍽️ Consumption</TabsTrigger>
            <TabsTrigger value="trade">🌍 Trade</TabsTrigger>
            <TabsTrigger value="nutrition">🥦 Nutrition</TabsTrigger>
            <TabsTrigger value="climate">🔥 Climate Impact</TabsTrigger>
          </TabsList>

          <TabsContent value="production">
            <ProductionSection data={data.themes.production} />
          </TabsContent>

          <TabsContent value="consumption">
            <ConsumptionSection data={data.themes.consumption} />
          </TabsContent>

          <TabsContent value="trade">
            <TradeSection data={data.themes.trade} />
          </TabsContent>

          <TabsContent value="nutrition">
            <NutritionSection data={data.themes.nutrition} />
          </TabsContent>

          <TabsContent value="climate">
            <ClimateSection data={data.themes.climate} />
          </TabsContent>
        </Tabs>

        {/* Compare Section */}
        <Card className="mt-12 p-6 bg-muted/50">
          <p className="text-muted-foreground text-center">
            Compare with another country (coming soon)
          </p>
        </Card>
      </main>
    </div>
  );
}
