"use client";

import { motion } from "framer-motion";
import { DivideIcon as LucideIcon } from "lucide-react";

interface CountryStatsProps {
  icon: typeof LucideIcon;
  label: string;
  value: string;
}

export default function CountryStats({
  icon: Icon,
  label,
  value,
}: CountryStatsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 rounded-lg bg-background border border-border"
    >
      <div className="flex items-center gap-3 mb-2">
        <Icon className="w-5 h-5 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">{label}</span>
      </div>
      <p className="text-2xl font-bold">{value}</p>
    </motion.div>
  );
}
