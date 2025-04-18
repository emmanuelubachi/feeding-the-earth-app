"use client";

import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";

interface CountryData {
  name: string;
  production: {
    cereals: string;
    livestock: string;
    vegetables: string;
  };
  consumption: {
    calories: string;
    protein: string;
  };
  trade: {
    exports: string;
    imports: string;
  };
  climate: {
    emissions: string;
    waterUse: string;
  };
}

interface CountryPanelProps {
  country: string;
  data: CountryData;
  onClose: () => void;
  onViewDetails: () => void;
}

export default function CountryPanel({
  country,
  data,
  onClose,
  onViewDetails,
}: CountryPanelProps) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 30 }}
      className="absolute top-0 right-0 h-full w-full sm:w-[400px] bg-card border-l border-border overflow-y-auto"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">{country}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <Tabs defaultValue="production" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="production">Production</TabsTrigger>
            <TabsTrigger value="consumption">Consumption</TabsTrigger>
            <TabsTrigger value="trade">Trade</TabsTrigger>
            <TabsTrigger value="climate">Climate</TabsTrigger>
          </TabsList>

          <TabsContent value="production" className="space-y-4">
            <div className="rounded-lg bg-secondary p-4">
              <h3 className="font-medium mb-2">Cereals</h3>
              <p className="text-2xl font-bold">{data.production.cereals}</p>
            </div>
            <div className="rounded-lg bg-secondary p-4">
              <h3 className="font-medium mb-2">Livestock</h3>
              <p className="text-2xl font-bold">{data.production.livestock}</p>
            </div>
            <div className="rounded-lg bg-secondary p-4">
              <h3 className="font-medium mb-2">Vegetables</h3>
              <p className="text-2xl font-bold">{data.production.vegetables}</p>
            </div>
          </TabsContent>

          <TabsContent value="consumption" className="space-y-4">
            <div className="rounded-lg bg-secondary p-4">
              <h3 className="font-medium mb-2">Daily Calories</h3>
              <p className="text-2xl font-bold">{data.consumption.calories}</p>
            </div>
            <div className="rounded-lg bg-secondary p-4">
              <h3 className="font-medium mb-2">Protein Intake</h3>
              <p className="text-2xl font-bold">{data.consumption.protein}</p>
            </div>
          </TabsContent>

          <TabsContent value="trade" className="space-y-4">
            <div className="rounded-lg bg-secondary p-4">
              <h3 className="font-medium mb-2">Food Exports</h3>
              <p className="text-2xl font-bold">{data.trade.exports}</p>
            </div>
            <div className="rounded-lg bg-secondary p-4">
              <h3 className="font-medium mb-2">Food Imports</h3>
              <p className="text-2xl font-bold">{data.trade.imports}</p>
            </div>
          </TabsContent>

          <TabsContent value="climate" className="space-y-4">
            <div className="rounded-lg bg-secondary p-4">
              <h3 className="font-medium mb-2">GHG Emissions</h3>
              <p className="text-2xl font-bold">{data.climate.emissions}</p>
            </div>
            <div className="rounded-lg bg-secondary p-4">
              <h3 className="font-medium mb-2">Water Usage</h3>
              <p className="text-2xl font-bold">{data.climate.waterUse}</p>
            </div>
          </TabsContent>
        </Tabs>

        <Button
          onClick={onViewDetails}
          className="w-full mt-6 flex items-center justify-center gap-2"
        >
          View Full Profile <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  );
}
