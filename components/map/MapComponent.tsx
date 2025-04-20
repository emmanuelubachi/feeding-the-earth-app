"use client";

import { useCallback, useMemo } from "react";
import Map, { Source, Layer, NavigationControl } from "react-map-gl";
import type { LayerProps, MapLayerMouseEvent } from "react-map-gl";
import { motion } from "framer-motion";

interface MapComponentProps {
  onCountryClick: (countryName: string) => void;
  activeLayer: string;
}

import type { FeatureCollection, Geometry, GeoJsonProperties } from "geojson";

// This would normally come from a GeoJSON file
const mockGeoJSON: FeatureCollection<Geometry, GeoJsonProperties> = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Sample Country",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [0, 0],
            [1, 0],
            [1, 1],
            [0, 1],
            [0, 0],
          ],
        ],
      },
    },
  ],
};

const layerStyles: Record<string, LayerProps> = {
  production: {
    id: "production-layer",
    type: "fill",
    paint: {
      "fill-color": "#059669",
      "fill-opacity": 0.4,
    },
  },
  consumption: {
    id: "consumption-layer",
    type: "fill",
    paint: {
      "fill-color": "#D97706",
      "fill-opacity": 0.4,
    },
  },
  trade: {
    id: "trade-layer",
    type: "fill",
    paint: {
      "fill-color": "#2563EB",
      "fill-opacity": 0.4,
    },
  },
  climate: {
    id: "climate-layer",
    type: "fill",
    paint: {
      "fill-color": "#DC2626",
      "fill-opacity": 0.4,
    },
  },
};

const MAPBOX_TOKEN =
  "pk.eyJ1IjoibWFudWVsLTUyIiwiYSI6ImNsbTlsc2RsYTBpYm0zaXM1djR6Y3hndjkifQ.eSTJ1yxIIzqz3PItuWiY1Q";

export default function MapComponent({
  onCountryClick,
  activeLayer,
}: MapComponentProps) {
  const onClick = useCallback(
    (event: MapLayerMouseEvent) => {
      const feature = event.features?.[0];
      if (feature && feature.properties) {
        onCountryClick(feature.properties.name);
      }
    },
    [onCountryClick]
  );

  const layerStyle = useMemo(() => layerStyles[activeLayer], [activeLayer]);

  return (
    <motion.div
      className="w-full h-[calc(100vh-4rem)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Map
        initialViewState={{
          longitude: 0,
          latitude: 20,
          zoom: 2,
        }}
        mapStyle="mapbox://styles/mapbox/light-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
        interactiveLayerIds={[layerStyle.id ?? ""]}
        onClick={onClick}
      >
        <NavigationControl />
        <Source type="geojson" data={mockGeoJSON}>
          <Layer {...layerStyle} />
        </Source>
      </Map>
    </motion.div>
  );
}
