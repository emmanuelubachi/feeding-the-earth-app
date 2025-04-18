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

interface ProductionData {
  headline: string;
  topCrops: string[];
  output: string;
  growth: string;
}

export default function ProductionSection({ data }: { data: ProductionData }) {
  const chartData = data.topCrops.map((crop, index) => ({
    name: crop,
    value: 100 - index * 20,
  }));

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
          {data.headline}
        </motion.h2>
        <p className="text-muted-foreground">
          Agricultural workforce participation
        </p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Agricultural Output</h3>
          <p className="text-3xl font-bold mb-2">{data.output}</p>
          <p className="text-sm text-muted-foreground">
            Total production volume
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Annual Growth</h3>
          <p className="text-3xl font-bold text-emerald-500">{data.growth}</p>
          <p className="text-sm text-muted-foreground">Year-over-year change</p>
        </Card>
      </div>

      {/* Chart */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-6">Top Crops by Production</h3>
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
        <p className="text-sm text-muted-foreground mt-4">
          Source: FAOSTAT, 2023
        </p>
      </Card>
    </motion.div>
  );
}
