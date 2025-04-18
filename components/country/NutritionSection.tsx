"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface NutritionData {
  stunting: string;
  wasting: string;
  obesity: string;
}

export default function NutritionSection({ data }: { data: NutritionData }) {
  const chartData = [
    { name: "Stunting", value: parseFloat(data.stunting) },
    { name: "Wasting", value: parseFloat(data.wasting) },
    { name: "Obesity", value: parseFloat(data.obesity) },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      {/* Headline Stat */}
      <div className="text-center py-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4"
        >
          {data.stunting}
        </motion.h2>
        <p className="text-muted-foreground">Children affected by stunting</p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Child Wasting</h3>
          <p className="text-3xl font-bold mb-2">{data.wasting}</p>
          <p className="text-sm text-muted-foreground">Of children under 5</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Adult Obesity</h3>
          <p className="text-3xl font-bold mb-2">{data.obesity}</p>
          <p className="text-sm text-muted-foreground">Of adult population</p>
        </Card>
      </div>

      {/* Chart */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-6">Nutrition Indicators</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="value" fill="hsl(var(--chart-1))" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-muted-foreground mt-4">Source: WHO, 2023</p>
      </Card>
    </motion.div>
  );
}
