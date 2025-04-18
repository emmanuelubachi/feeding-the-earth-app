"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Search, Layers } from "lucide-react";
import MapComponent from "@/components/map/MapComponent";
import CountryPanel from "@/components/map/CountryPanel";

const mockCountryData = {
  name: "kenya",
  production: {
    cereals: "120M tonnes",
    livestock: "45M tonnes",
    vegetables: "80M tonnes",
  },
  consumption: {
    calories: "2,800 kcal/day",
    protein: "80g/day",
  },
  trade: {
    exports: "$12B",
    imports: "$8B",
  },
  climate: {
    emissions: "45 MT CO2e",
    waterUse: "75B m³",
  },
};

const mapLayers = [
  { id: "production", name: "Production", color: "bg-emerald-500" },
  { id: "consumption", name: "Consumption", color: "bg-amber-500" },
  { id: "trade", name: "Trade", color: "bg-blue-500" },
  { id: "climate", name: "Climate Impact", color: "bg-red-500" },
];

export default function MapPage() {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [activeLayer, setActiveLayer] = useState("production");
  const [searchQuery, setSearchQuery] = useState("");

  const handleCountryClick = (countryName: string) => {
    // First show the preview panel
    setSelectedCountry(countryName);
  };

  const handleViewDetails = (countryName: string) => {
    // Navigate to the country detail page
    router.push(`/country/${countryName.toLowerCase()}`);
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-card border-b border-border p-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 max-w-md w-full">
            <input
              type="text"
              placeholder="Search for a country..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-border bg-background"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          </div>

          <div className="flex items-center gap-4">
            <Layers className="w-5 h-5 text-muted-foreground" />
            <div className="flex gap-2">
              {mapLayers.map((layer) => (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors
                    ${
                      activeLayer === layer.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                >
                  {layer.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Map and Side Panel */}
      <div className="flex-1 relative">
        <MapComponent
          onCountryClick={handleCountryClick}
          activeLayer={activeLayer}
        />

        <AnimatePresence>
          {selectedCountry && (
            <CountryPanel
              country={selectedCountry}
              data={mockCountryData}
              onClose={() => setSelectedCountry(null)}
              onViewDetails={() => handleViewDetails(selectedCountry)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// "use client";

// import { useState } from "react";
// import { AnimatePresence } from "framer-motion";
// import dynamic from "next/dynamic";
// import { Search, Layers } from "lucide-react";
// import MapComponent from "@/components/map/MapComponent";
// import CountryPanel from "@/components/map/CountryPanel";

// const mockCountryData = {
//   name: "Sample Country",
//   production: {
//     cereals: "120M tonnes",
//     livestock: "45M tonnes",
//     vegetables: "80M tonnes",
//   },
//   consumption: {
//     calories: "2,800 kcal/day",
//     protein: "80g/day",
//   },
//   trade: {
//     exports: "$12B",
//     imports: "$8B",
//   },
//   climate: {
//     emissions: "45 MT CO2e",
//     waterUse: "75B m³",
//   },
// };

// const mapLayers = [
//   { id: "production", name: "Production", color: "bg-emerald-500" },
//   { id: "consumption", name: "Consumption", color: "bg-amber-500" },
//   { id: "trade", name: "Trade", color: "bg-blue-500" },
//   { id: "climate", name: "Climate Impact", color: "bg-red-500" },
// ];

// // Dynamically import map component to avoid SSR issues
// const DynamicMapComponent = dynamic(
//   () => import("@/components/map/MapComponent"),
//   {
//     ssr: false,
//     loading: () => (
//       <div className="w-full h-[calc(100vh-4rem)] bg-muted flex items-center justify-center">
//         <div className="animate-pulse text-lg">Loading Map...</div>
//       </div>
//     ),
//   }
// );

// export default function MapPage() {
//   const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
//   const [activeLayer, setActiveLayer] = useState("production");
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleCountryClick = (countryName: string) => {
//     setSelectedCountry(countryName);
//   };

//   return (
//     <div className="h-screen flex flex-col">
//       {/* Top Bar */}
//       <div className="bg-card border-b border-border p-4">
//         <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 items-center justify-between">
//           <div className="relative flex-1 max-w-md w-full">
//             <input
//               type="text"
//               placeholder="Search for a country..."
//               className="w-full pl-10 pr-4 py-2 rounded-full border border-border bg-background"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
//           </div>

//           <div className="flex items-center gap-4">
//             <Layers className="w-5 h-5 text-muted-foreground" />
//             <div className="flex gap-2">
//               {mapLayers.map((layer) => (
//                 <button
//                   key={layer.id}
//                   onClick={() => setActiveLayer(layer.id)}
//                   className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors
//                     ${
//                       activeLayer === layer.id
//                         ? "bg-primary text-primary-foreground"
//                         : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
//                     }`}
//                 >
//                   {layer.name}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Map and Side Panel */}
//       <div className="flex-1 relative">
//         <DynamicMapComponent
//           onCountryClick={handleCountryClick}
//           activeLayer={activeLayer}
//         />

//         <AnimatePresence>
//           {selectedCountry && (
//             <CountryPanel
//               country={selectedCountry}
//               data={mockCountryData}
//               onClose={() => setSelectedCountry(null)}
//             />
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }
