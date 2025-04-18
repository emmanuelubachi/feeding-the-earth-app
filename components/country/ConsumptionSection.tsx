"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface ConsumptionData {
  calories: string;
  staples: string;
  protein: string;
}

export default function ConsumptionSection({
  data,
}: {
  data: ConsumptionData;
}) {
  const pieData = [
    { name: "Staples", value: 68 },
    { name: "Other", value: 32 },
  ];

  const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))"];

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
          {data.calories}
          <span className="text-2xl text-muted-foreground"> kcal/day</span>
        </motion.h2>
        <p className="text-muted-foreground">
          Average daily caloric intake per person
        </p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Staple Foods</h3>
          <p className="text-3xl font-bold mb-2">{data.staples}</p>
          <p className="text-sm text-muted-foreground">
            Of total caloric intake
          </p>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Protein Intake</h3>
          <p className="text-3xl font-bold mb-2">{data.protein}</p>
          <p className="text-sm text-muted-foreground">Per person per day</p>
        </Card>
      </div>

      {/* Chart */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-6">Dietary Composition</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Source: World Food Programme, 2023
        </p>
      </Card>
    </motion.div>
  );
}
