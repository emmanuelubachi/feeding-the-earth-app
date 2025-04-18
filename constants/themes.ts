import { Theme } from "@/types";

export const themes: Theme[] = [
  {
    title: "Food Production",
    iconName: "Leaf",
    description:
      "Explore global agricultural yields, farming practices, and production trends",
    color: "bg-emerald-50 dark:bg-emerald-950",
    link: "/production",
  },
  {
    title: "Consumption",
    iconName: "ShoppingBasket",
    description:
      "Understand dietary patterns and food security challenges worldwide",
    color: "bg-amber-50 dark:bg-amber-950",
    link: "/consumption",
  },
  {
    title: "Global Trade",
    iconName: "Globe2",
    description: "Track international food trade flows and market dynamics",
    color: "bg-blue-50 dark:bg-blue-950",
    link: "/trade",
  },
  {
    title: "Climate Impact",
    iconName: "Thermometer",
    description: "Analyze environmental footprint and climate resilience",
    color: "bg-red-50 dark:bg-red-950",
    link: "/climate",
  },
  {
    title: "Nutrition",
    iconName: "Apple",
    description: "Discover global nutrition trends and dietary health impacts",
    color: "bg-purple-50 dark:bg-purple-950",
    link: "/nutrition",
  },
  {
    title: "Economics",
    iconName: "LineChart",
    description: "Examine food economics and market influences",
    color: "bg-teal-50 dark:bg-teal-950",
    link: "/economics",
  },
];
