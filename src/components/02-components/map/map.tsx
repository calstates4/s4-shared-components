import { useState, useMemo } from "react";
import { Map, Marker, Popup } from "@vis.gl/react-maplibre";

type Location = {
  id: string;
  title: string;
  latitude: number;
  longitude: number;
  summary?: string;
};

export type MapFieldProps = {
  locations: Location[];
};

function MapField({ locations }: MapFieldProps) {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const initialViewState = useMemo(() => ({
    longitude: locations.length > 0 ? locations[0].longitude : -100,
    latitude: locations.length > 0 ? locations[0].latitude : 40,
    zoom: 16,
  }), [locations]);

  return (
    <Map
      initialViewState={initialViewState}
      style={{ height: "700px", width: "100%", overflow: "hidden" }}
      mapStyle="https://tiles.openfreemap.org/styles/liberty"
    >
      {locations.map((loc) => (
        <Marker
          key={loc.id}
          longitude={loc.longitude}
          latitude={loc.latitude}
          onClick={() => setSelectedLocation(loc.id)}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg"
            alt="marker"
            style={{ width: "20px", height: "20px", cursor: "pointer" }}
          />
        </Marker>
      ))}

      {locations.map(
        (loc) =>
          selectedLocation === loc.id && (
            <Popup
              key={loc.id}
              longitude={loc.longitude}
              latitude={loc.latitude}
              closeOnClick={false}
              onClose={() => setSelectedLocation(null)}
            >
              <div>
                <h3>{loc.title}</h3>
                {loc.summary && <p>{loc.summary}</p>}
              </div>
            </Popup>
          )
      )}
    </Map>
  );
}

export default MapField;
