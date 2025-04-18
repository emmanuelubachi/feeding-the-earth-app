import regions from "@/data/regions.json";
import insights from "@/data/insights.json";
import snapshots from "@/data/snapshots.json";
import kenya from "@/data/countries/kenya.json";
import countryIndex from "@/data/countries/index.json";
import { themes } from "@/constants/themes";
import { regionsSchema } from "./schemas/region";
import { insightsSchema } from "./schemas/insight";
import { snapshotsSchema } from "./schemas/snapshot";
import { countrySchema } from "./schemas/country";
import type { Theme, Region, Insight, Snapshot, Country } from "@/types";

export function getThemes(): Theme[] {
  return themes;
}

const countries: Record<string, Country> = {
  kenya,
};

export function getCountry(id: string): Country | null {
  try {
    if (!id) throw new Error("Country ID is required");

    const country = countries[id.toLowerCase()];
    if (!country) return null;

    return countrySchema.parse(country);
  } catch (error) {
    console.error(`Error getting country ${id}:`, error);
    return null;
  }
}

export function getAvailableCountries(): string[] {
  try {
    return countryIndex.countries;
  } catch (error) {
    console.error("Error getting available countries:", error);
    return [];
  }
}

export function getRegions(): Region[] {
  try {
    const validatedData = regionsSchema.parse(regions);
    return validatedData.regions;
  } catch (error) {
    console.error("Error getting regions:", error);
    return [];
  }
}

export function getInsights(): Insight[] {
  try {
    const validatedData = insightsSchema.parse(insights);
    return validatedData.insights;
  } catch (error) {
    console.error("Error getting insights:", error);
    return [];
  }
}

export function getSnapshots(): Snapshot[] {
  try {
    const validatedData = snapshotsSchema.parse(snapshots);
    return validatedData.snapshots;
  } catch (error) {
    console.error("Error getting snapshots:", error);
    return [];
  }
}
