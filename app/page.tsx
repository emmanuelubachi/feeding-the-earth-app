import { getThemes, getRegions, getInsights, getSnapshots } from "@/lib/data";
import { config } from "@/config";
import HomePage from "@/app/(home)/HomePageClient";

export default function Home() {
  const themes = getThemes();
  const regions = getRegions();
  const insights = getInsights();
  const snapshots = getSnapshots();

  return (
    <HomePage
      themes={themes}
      regions={regions}
      insights={insights}
      snapshots={snapshots}
      config={config}
    />
  );
}
// "use client";

// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   Search,
//   Leaf,
//   Globe2,
//   ShoppingBasket,
//   Thermometer,
//   Apple,
//   LineChart,
//   ChevronRight,
//   MapPin,
//   Users,
//   TrendingUp,
//   Scale,
//   Sprout,
// } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// // import { Card } from "@/components/ui/card";

// const fadeIn = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.6 },
// };

// const slideIn = {
//   initial: { opacity: 0, x: -20 },
//   animate: { opacity: 1, x: 0 },
//   transition: { duration: 0.5 },
// };

// const themes = [
//   {
//     title: "Food Production",
//     icon: Leaf,
//     description:
//       "Explore global agricultural yields, farming practices, and production trends",
//     color: "bg-emerald-50 dark:bg-emerald-950",
//     link: "/production",
//   },
//   {
//     title: "Consumption",
//     icon: ShoppingBasket,
//     description:
//       "Understand dietary patterns and food security challenges worldwide",
//     color: "bg-amber-50 dark:bg-amber-950",
//     link: "/consumption",
//   },
//   {
//     title: "Global Trade",
//     icon: Globe2,
//     description: "Track international food trade flows and market dynamics",
//     color: "bg-blue-50 dark:bg-blue-950",
//     link: "/trade",
//   },
//   {
//     title: "Climate Impact",
//     icon: Thermometer,
//     description: "Analyze environmental footprint and climate resilience",
//     color: "bg-red-50 dark:bg-red-950",
//     link: "/climate",
//   },
//   {
//     title: "Nutrition",
//     icon: Apple,
//     description: "Discover global nutrition trends and dietary health impacts",
//     color: "bg-purple-50 dark:bg-purple-950",
//     link: "/nutrition",
//   },
//   {
//     title: "Economics",
//     icon: LineChart,
//     description: "Examine food economics and market influences",
//     color: "bg-teal-50 dark:bg-teal-950",
//     link: "/economics",
//   },
// ];

// const regions = [
//   {
//     name: "Africa",
//     stat: "23% undernourished",
//     image:
//       "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&q=80&w=800",
//     color: "from-amber-500/20 to-amber-700/20",
//   },
//   {
//     name: "Asia",
//     stat: "8.9% undernourished",
//     image:
//       "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?auto=format&fit=crop&q=80&w=800",
//     color: "from-emerald-500/20 to-emerald-700/20",
//   },
//   {
//     name: "Europe",
//     stat: "2.5% undernourished",
//     image:
//       "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800",
//     color: "from-blue-500/20 to-blue-700/20",
//   },
//   {
//     name: "Latin America",
//     stat: "7.2% undernourished",
//     image:
//       "https://images.unsplash.com/photo-1518185617399-7e3ad588c26d?auto=format&fit=crop&q=80&w=800",
//     color: "from-purple-500/20 to-purple-700/20",
//   },
//   {
//     name: "North America",
//     stat: "2.8% undernourished",
//     image:
//       "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80&w=800",
//     color: "from-red-500/20 to-red-700/20",
//   },
//   {
//     name: "Oceania",
//     stat: "6.2% undernourished",
//     image:
//       "https://images.unsplash.com/photo-1589330273594-fade1ee91647?auto=format&fit=crop&q=80&w=800",
//     color: "from-teal-500/20 to-teal-700/20",
//   },
// ];

// const insights = [
//   {
//     icon: Users,
//     stat: "828M",
//     description: "People face hunger worldwide",
//     color: "bg-red-50 dark:bg-red-950",
//   },
//   {
//     icon: TrendingUp,
//     stat: "31%",
//     description: "Of global emissions linked to food systems",
//     color: "bg-amber-50 dark:bg-amber-950",
//   },
//   {
//     icon: Scale,
//     stat: "1/3",
//     description: "Of all food produced is lost or wasted",
//     color: "bg-blue-50 dark:bg-blue-950",
//   },
//   {
//     icon: Sprout,
//     stat: "80%",
//     description: "Of farmland used for livestock",
//     color: "bg-emerald-50 dark:bg-emerald-950",
//   },
// ];

// const dataSnapshots = [
//   {
//     stat: "2.37B",
//     label: "Metric tons of cereals produced globally in 2022",
//     source: "FAO",
//   },
//   {
//     stat: "828M",
//     label: "People affected by hunger worldwide",
//     source: "World Food Programme",
//   },
//   {
//     stat: "31%",
//     label: "Of global emissions linked to food systems",
//     source: "UN FAO",
//   },
// ];

// export default function Home() {
//   return (
//     <div className="min-h-screen">
//       {/* Hero Section with Search */}
//       <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary pt-16 pb-32">
//         <motion.div
//           className="mx-auto max-w-7xl px-6 lg:px-8"
//           initial="initial"
//           animate="animate"
//           variants={fadeIn}
//         >
//           <div className="mx-auto max-w-3xl text-center">
//             <motion.h1
//               className="text-4xl font-bold tracking-tight sm:text-6xl mb-6"
//               variants={fadeIn}
//             >
//               Understanding Our Global Food System
//             </motion.h1>
//             <motion.p
//               className="text-lg leading-8 text-muted-foreground mb-8"
//               variants={fadeIn}
//             >
//               Explore data-driven insights about food production, consumption,
//               and sustainability. Make informed decisions for a better food
//               future.
//             </motion.p>
//             <motion.div
//               className="flex flex-col items-center gap-4"
//               variants={fadeIn}
//             >
//               <Link
//                 href="/map"
//                 className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-primary rounded-full hover:bg-primary/90 transition-colors"
//               >
//                 Start Exploring <ArrowRight className="w-4 h-4" />
//               </Link>

//               {/* Global Search */}
//               <div className="relative w-full max-w-2xl mt-8">
//                 <input
//                   type="text"
//                   placeholder="Search for topics, regions, or data..."
//                   className="w-full px-6 py-4 pl-12 text-lg rounded-full border border-border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
//                 />
//                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </section>

//       {/* Explore by Theme Section */}
//       <section className="py-24 bg-background">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
//               Explore by Theme
//             </h2>
//             <p className="text-lg text-muted-foreground">
//               Dive deep into key aspects of our global food system
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {themes.map((theme, index) => (
//               <motion.div
//                 key={theme.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.02 }}
//                 className={`${theme.color} rounded-3xl p-8 cursor-pointer`}
//               >
//                 <theme.icon className="h-12 w-12 text-primary mb-4" />
//                 <h3 className="text-xl font-semibold mb-2">{theme.title}</h3>
//                 <p className="text-muted-foreground mb-4">
//                   {theme.description}
//                 </p>
//                 <Link
//                   href={theme.link}
//                   className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
//                 >
//                   View Insights <ChevronRight className="w-4 h-4 ml-1" />
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Explore by Region Section */}
//       <section className="py-24 bg-secondary/50">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
//               Explore by Region
//             </h2>
//             <p className="text-lg text-muted-foreground">
//               Discover regional food systems and challenges
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {regions.map((region, index) => (
//               <motion.div
//                 key={region.name}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.02 }}
//                 className="relative overflow-hidden rounded-3xl cursor-pointer group"
//               >
//                 <div className="absolute inset-0">
//                   <Image
//                     src={region.image}
//                     alt={region.name}
//                     fill
//                     className="object-cover transition-transform group-hover:scale-105"
//                   />
//                   <div
//                     className={`absolute inset-0 bg-gradient-to-b ${region.color} backdrop-blur-[2px]`}
//                   />
//                 </div>
//                 <div className="relative p-8">
//                   <h3 className="text-2xl font-bold mb-2">{region.name}</h3>
//                   <p className="text-sm font-medium mb-4">{region.stat}</p>
//                   <Link
//                     href={`/map?region=${region.name.toLowerCase()}`}
//                     className="inline-flex items-center gap-2 px-4 py-2 bg-background/90 rounded-full text-sm font-medium hover:bg-background transition-colors"
//                   >
//                     <MapPin className="w-4 h-4" />
//                     Browse Countries
//                   </Link>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured Insights Section */}
//       <section className="py-24 bg-background">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
//               Featured Insights
//             </h2>
//             <p className="text-lg text-muted-foreground">
//               Key statistics shaping our understanding
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {insights.map((insight, index) => (
//               <motion.div
//                 key={insight.stat}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className={`${insight.color} rounded-3xl p-8 text-center`}
//               >
//                 <insight.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
//                 <p className="text-4xl font-bold mb-2">{insight.stat}</p>
//                 <p className="text-muted-foreground">{insight.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Data Snapshots Section */}
//       <section className="py-24 bg-secondary/50">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
//               Global Food System at a Glance
//             </h2>
//             <p className="text-lg text-muted-foreground">
//               Key statistics that shape our understanding
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {dataSnapshots.map((item, index) => (
//               <motion.div
//                 key={item.stat}
//                 className="bg-card rounded-xl p-8 text-center shadow-sm border border-border"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.2 }}
//                 viewport={{ once: true }}
//               >
//                 <p className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
//                   {item.stat}
//                 </p>
//                 <p className="text-lg mb-2">{item.label}</p>
//                 <p className="text-sm text-muted-foreground">
//                   Source: {item.source}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-secondary py-16">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//             <div className="col-span-1 md:col-span-2">
//               <h3 className="font-semibold text-xl mb-4">
//                 About Feeding the Earth
//               </h3>
//               <p className="text-muted-foreground mb-6">
//                 A data-driven platform dedicated to understanding and improving
//                 global food systems through research, analysis, and
//                 collaborative insights.
//               </p>
//               <div className="flex gap-4">
//                 {/* Placeholder for future partner logos */}
//                 <div className="w-12 h-12 bg-muted rounded-full"></div>
//                 <div className="w-12 h-12 bg-muted rounded-full"></div>
//                 <div className="w-12 h-12 bg-muted rounded-full"></div>
//               </div>
//             </div>
//             <div>
//               <h3 className="font-semibold mb-4">Quick Links</h3>
//               <ul className="space-y-3">
//                 <li>
//                   <Link
//                     href="/about"
//                     className="text-muted-foreground hover:text-primary"
//                   >
//                     About Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/methodology"
//                     className="text-muted-foreground hover:text-primary"
//                   >
//                     Methodology
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/contact"
//                     className="text-muted-foreground hover:text-primary"
//                   >
//                     Contact
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/privacy"
//                     className="text-muted-foreground hover:text-primary"
//                   >
//                     Privacy Policy
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-semibold mb-4">Data Sources</h3>
//               <ul className="space-y-3">
//                 <li>
//                   <a
//                     href="https://www.fao.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-muted-foreground hover:text-primary"
//                   >
//                     FAO
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://comtrade.un.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-muted-foreground hover:text-primary"
//                   >
//                     UN Comtrade
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://www.worldbank.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-muted-foreground hover:text-primary"
//                   >
//                     World Bank
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://www.ipcc.ch"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-muted-foreground hover:text-primary"
//                   >
//                     IPCC
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
//             <p>
//               © {new Date().getFullYear()} Feeding the Earth. All rights
//               reserved.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// // "use client";

// // import { motion } from "framer-motion";
// // import {
// //   ArrowRight,
// //   Search,
// //   Leaf,
// //   Globe2,
// //   ShoppingBasket,
// //   Thermometer,
// //   Apple,
// //   LineChart,
// //   ChevronRight,
// // } from "lucide-react";
// // import Link from "next/link";
// // import Image from "next/image";

// // const fadeIn = {
// //   initial: { opacity: 0, y: 20 },
// //   animate: { opacity: 1, y: 0 },
// //   transition: { duration: 0.6 },
// // };

// // const slideIn = {
// //   initial: { opacity: 0, x: -20 },
// //   animate: { opacity: 1, x: 0 },
// //   transition: { duration: 0.5 },
// // };

// // const themes = [
// //   {
// //     title: "Food Production",
// //     icon: Leaf,
// //     description:
// //       "Explore global agricultural yields, farming practices, and production trends",
// //     color: "bg-emerald-50 dark:bg-emerald-950",
// //     link: "/production",
// //   },
// //   {
// //     title: "Consumption",
// //     icon: ShoppingBasket,
// //     description:
// //       "Understand dietary patterns and food security challenges worldwide",
// //     color: "bg-amber-50 dark:bg-amber-950",
// //     link: "/consumption",
// //   },
// //   {
// //     title: "Global Trade",
// //     icon: Globe2,
// //     description: "Track international food trade flows and market dynamics",
// //     color: "bg-blue-50 dark:bg-blue-950",
// //     link: "/trade",
// //   },
// //   {
// //     title: "Climate Impact",
// //     icon: Thermometer,
// //     description: "Analyze environmental footprint and climate resilience",
// //     color: "bg-red-50 dark:bg-red-950",
// //     link: "/climate",
// //   },
// //   {
// //     title: "Nutrition",
// //     icon: Apple,
// //     description: "Discover global nutrition trends and dietary health impacts",
// //     color: "bg-purple-50 dark:bg-purple-950",
// //     link: "/nutrition",
// //   },
// //   {
// //     title: "Economics",
// //     icon: LineChart,
// //     description: "Examine food economics and market influences",
// //     color: "bg-teal-50 dark:bg-teal-950",
// //     link: "/economics",
// //   },
// // ];

// // const dataSnapshots = [
// //   {
// //     stat: "2.37B",
// //     label: "Metric tons of cereals produced globally in 2022",
// //     source: "FAO",
// //   },
// //   {
// //     stat: "828M",
// //     label: "People affected by hunger worldwide",
// //     source: "World Food Programme",
// //   },
// //   {
// //     stat: "31%",
// //     label: "Of global emissions linked to food systems",
// //     source: "UN FAO",
// //   },
// // ];

// // export default function Home() {
// //   return (
// //     <div className="min-h-screen">
// //       {/* Hero Section with Search */}
// //       <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary pt-16 pb-32">
// //         <motion.div
// //           className="mx-auto max-w-7xl px-6 lg:px-8"
// //           initial="initial"
// //           animate="animate"
// //           variants={fadeIn}
// //         >
// //           <div className="mx-auto max-w-3xl text-center">
// //             <motion.h1
// //               className="text-4xl font-bold tracking-tight sm:text-6xl mb-6"
// //               variants={fadeIn}
// //             >
// //               Understanding Our Global Food System
// //             </motion.h1>
// //             <motion.p
// //               className="text-lg leading-8 text-muted-foreground mb-8"
// //               variants={fadeIn}
// //             >
// //               Explore data-driven insights about food production, consumption,
// //               and sustainability. Make informed decisions for a better food
// //               future.
// //             </motion.p>
// //             <motion.div
// //               className="flex flex-col items-center gap-4"
// //               variants={fadeIn}
// //             >
// //               <Link
// //                 href="/explore"
// //                 className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-primary rounded-full hover:bg-primary/90 transition-colors"
// //               >
// //                 Start Exploring <ArrowRight className="w-4 h-4" />
// //               </Link>

// //               {/* Global Search */}
// //               <div className="relative w-full max-w-2xl mt-8">
// //                 <input
// //                   type="text"
// //                   placeholder="Search for topics, regions, or data..."
// //                   className="w-full px-6 py-4 pl-12 text-lg rounded-full border border-border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
// //                 />
// //                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
// //               </div>
// //             </motion.div>
// //           </div>
// //         </motion.div>
// //       </section>

// //       {/* Data Snapshots Section */}
// //       <section className="py-24 bg-background relative overflow-hidden">
// //         <div className="mx-auto max-w-7xl px-6 lg:px-8">
// //           <motion.div
// //             className="text-center mb-16"
// //             initial={{ opacity: 0 }}
// //             whileInView={{ opacity: 1 }}
// //             viewport={{ once: true }}
// //           >
// //             <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
// //               Global Food System at a Glance
// //             </h2>
// //             <p className="text-lg text-muted-foreground">
// //               Key statistics that shape our understanding
// //             </p>
// //           </motion.div>

// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             {dataSnapshots.map((item, index) => (
// //               <motion.div
// //                 key={item.stat}
// //                 className="bg-card rounded-xl p-8 text-center shadow-sm border border-border"
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: index * 0.2 }}
// //                 viewport={{ once: true }}
// //               >
// //                 <p className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
// //                   {item.stat}
// //                 </p>
// //                 <p className="text-lg mb-2">{item.label}</p>
// //                 <p className="text-sm text-muted-foreground">
// //                   Source: {item.source}
// //                 </p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Mission Statement */}
// //       <section className="py-24 bg-secondary/50">
// //         <div className="mx-auto max-w-7xl px-6 lg:px-8">
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// //             <motion.div
// //               initial={{ opacity: 0, x: -20 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               viewport={{ once: true }}
// //             >
// //               <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
// //                 Why This Matters
// //               </h2>
// //               <p className="text-lg text-muted-foreground mb-6">
// //                 Our global food system faces unprecedented challenges. From
// //                 climate change to population growth, the way we produce and
// //                 consume food has never been more critical to our planet's
// //                 future.
// //               </p>
// //               <p className="text-lg text-muted-foreground mb-6">
// //                 Through data-driven insights and collaborative research, we're
// //                 working to understand these challenges and identify sustainable
// //                 solutions for future generations.
// //               </p>
// //               <Link
// //                 href="/about"
// //                 className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
// //               >
// //                 Learn more about our mission{" "}
// //                 <ChevronRight className="w-4 h-4 ml-1" />
// //               </Link>
// //             </motion.div>
// //             <motion.div
// //               className="relative h-[400px] rounded-2xl overflow-hidden"
// //               initial={{ opacity: 0, x: 20 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               viewport={{ once: true }}
// //             >
// //               <Image
// //                 src="https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e"
// //                 alt="Sustainable farming"
// //                 fill
// //                 className="object-cover"
// //               />
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Themes Section */}
// //       <section className="py-24 bg-background">
// //         <div className="mx-auto max-w-7xl px-6 lg:px-8">
// //           <div className="mx-auto max-w-2xl text-center mb-16">
// //             <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
// //               Thematic Areas
// //             </h2>
// //             <p className="mt-4 text-lg text-muted-foreground">
// //               Dive deep into key aspects of our global food system
// //             </p>
// //           </div>
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {themes.map((theme, index) => (
// //               <motion.div
// //                 key={theme.title}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.5, delay: index * 0.1 }}
// //                 viewport={{ once: true }}
// //                 className={`${theme.color} rounded-3xl p-8 hover:scale-[1.02] transition-transform cursor-pointer`}
// //               >
// //                 <theme.icon className="h-12 w-12 text-primary mb-4" />
// //                 <h3 className="text-xl font-semibold mb-2">{theme.title}</h3>
// //                 <p className="text-muted-foreground mb-4">
// //                   {theme.description}
// //                 </p>
// //                 <Link
// //                   href={theme.link}
// //                   className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
// //                 >
// //                   Explore <ChevronRight className="w-4 h-4 ml-1" />
// //                 </Link>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Footer */}
// //       <footer className="bg-secondary py-16">
// //         <div className="mx-auto max-w-7xl px-6 lg:px-8">
// //           <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
// //             <div className="col-span-1 md:col-span-2">
// //               <h3 className="font-semibold text-xl mb-4">
// //                 About Feeding the Earth
// //               </h3>
// //               <p className="text-muted-foreground mb-6">
// //                 A data-driven platform dedicated to understanding and improving
// //                 global food systems through research, analysis, and
// //                 collaborative insights.
// //               </p>
// //               <div className="flex gap-4">
// //                 {/* Placeholder for future partner logos */}
// //                 <div className="w-12 h-12 bg-muted rounded-full"></div>
// //                 <div className="w-12 h-12 bg-muted rounded-full"></div>
// //                 <div className="w-12 h-12 bg-muted rounded-full"></div>
// //               </div>
// //             </div>
// //             <div>
// //               <h3 className="font-semibold mb-4">Quick Links</h3>
// //               <ul className="space-y-3">
// //                 <li>
// //                   <Link
// //                     href="/about"
// //                     className="text-muted-foreground hover:text-primary"
// //                   >
// //                     About Us
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link
// //                     href="/methodology"
// //                     className="text-muted-foreground hover:text-primary"
// //                   >
// //                     Methodology
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link
// //                     href="/contact"
// //                     className="text-muted-foreground hover:text-primary"
// //                   >
// //                     Contact
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link
// //                     href="/privacy"
// //                     className="text-muted-foreground hover:text-primary"
// //                   >
// //                     Privacy Policy
// //                   </Link>
// //                 </li>
// //               </ul>
// //             </div>
// //             <div>
// //               <h3 className="font-semibold mb-4">Data Sources</h3>
// //               <ul className="space-y-3">
// //                 <li>
// //                   <a
// //                     href="https://www.fao.org"
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="text-muted-foreground hover:text-primary"
// //                   >
// //                     FAO
// //                   </a>
// //                 </li>
// //                 <li>
// //                   <a
// //                     href="https://comtrade.un.org"
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="text-muted-foreground hover:text-primary"
// //                   >
// //                     UN Comtrade
// //                   </a>
// //                 </li>
// //                 <li>
// //                   <a
// //                     href="https://www.worldbank.org"
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="text-muted-foreground hover:text-primary"
// //                   >
// //                     World Bank
// //                   </a>
// //                 </li>
// //                 <li>
// //                   <a
// //                     href="https://www.ipcc.ch"
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="text-muted-foreground hover:text-primary"
// //                   >
// //                     IPCC
// //                   </a>
// //                 </li>
// //               </ul>
// //             </div>
// //           </div>
// //           <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
// //             <p>
// //               © {new Date().getFullYear()} Feeding the Earth. All rights
// //               reserved.
// //             </p>
// //           </div>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // }
