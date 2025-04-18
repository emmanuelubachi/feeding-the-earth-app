"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface ClimateData {
  emissions: string;
  drought: string;
  adaptation: string;
}

export default function ClimateSection({ data }: { data: ClimateData }) {
  const chartData = [
    { year: 2019, value: 15 },
    { year: 2020, value: 16 },
    { year: 2021, value: 17 },
    { year: 2022, value: 18 },
    { year: 2023, value: 18.6 },
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
          {data.emissions}
          <span className="text-2xl text-muted-foreground"> MT CO2e</span>
        </motion.h2>
        <p className="text-muted-foreground">Annual agricultural emissions</p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Drought Risk</h3>
          <p className="text-3xl font-bold mb-2">{data.drought}</p>
          <p className="text-sm text-muted-foreground">Risk level</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Adaptation Capacity</h3>
          <p className="text-3xl font-bold mb-2">{data.adaptation}</p>
          <p className="text-sm text-muted-foreground">Assessment level</p>
        </Card>
      </div>

      {/* Chart */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-6">Emissions Trend</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Line
                type="monotone"
                dataKey="value"
                stroke="hsl(var(--chart-1))"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-muted-foreground mt-4">Source: IPCC, 2023</p>
      </Card>
    </motion.div>
  );
}
