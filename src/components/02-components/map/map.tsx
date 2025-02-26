import { useState, useMemo, useEffect } from "react";
import { Map, Marker, Popup } from "@vis.gl/react-maplibre";
import {
  Box,
  Button,
  Typography,
  useTheme,
} from '@mui/material';
import Link from '../../01-elements/link/link';
import LocationOnIcon from '@mui/icons-material/LocationOn';

type Location = {
  id: string;
  title: string;
  url: string;
  latitude: number | null;
  longitude: number | null;
  destinationUrl?: string;
  dates?: string;
  location?: string;
  timeCommitment?: string;
  facultyUrl?: string;
};

export type MapFieldProps = {
  locations: Location[];
};

function MapField({ locations }: MapFieldProps) {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .maplibregl-popup {
        max-width: max-content !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);



  // Filtrar ubicaciones válidas
  const validLocations = locations.filter(
    (loc) => loc.latitude !== null && loc.longitude !== null
  );

  // Obtener la primera ubicación válida
  const firstValidLocation = validLocations.length > 0 ? validLocations[0] : null;

   // Establecer la vista inicial
   const initialViewState = useMemo(
    () => ({
      longitude: firstValidLocation?.longitude ?? -100,
      latitude: firstValidLocation?.latitude ?? 40,
      zoom: 16,
    }),
    [firstValidLocation]
  );

  const theme = useTheme();

  const subtitleStyles = {
    pr: theme.spacing(1),
  };

  const buttonsContainerSyles = {
    display: 'flex',
    mt: theme.spacing(2),
    gap: theme.spacing(1),
    flexWrap: 'wrap',
    justifyContent: 'right',
  };

  return (
    <Map
      initialViewState={initialViewState}
      style={{ height: "700px", width: "100%", overflow: "hidden" }}
      mapStyle="https://tiles.openfreemap.org/styles/liberty"
      // onMove={() => setSelectedLocation(null)}
    >
            {validLocations.length > 0 ? (
        <>
          {validLocations.map((loc) => (
            <Marker
              key={loc.id}
              longitude={loc.longitude!}
              latitude={loc.latitude!}
              onClick={() => setSelectedLocation(loc.id)}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: selectedLocation === loc.id ? "70px" : "auto",
                  height: selectedLocation === loc.id ? "70px" : "auto",
                  backgroundColor: selectedLocation === loc.id ? "white" : "transparent",
                  borderRadius: "50%",
                  padding: selectedLocation === loc.id ? "5px" : "0",
                  transition: "0.3s ease-in-out",
                }}
              >
                <LocationOnIcon
                  sx={{
                    color: theme.palette.primary.main,
                    fontSize: "60px",
                  }}
                />
              </Box>
            </Marker>
          ))}

          {validLocations.map(
            (loc) =>
              selectedLocation === loc.id && (
                <Popup
                  key={loc.id}
                  longitude={loc.longitude!}
                  latitude={loc.latitude!}
                  closeOnClick={false}
                  onClose={() => setSelectedLocation(null)}
                >
                  <Box sx={{ padding: "10px" }}>
                    <Typography variant="h2">{loc.title}</Typography>
                    {loc.location && <Typography sx={subtitleStyles}>{loc.location}</Typography>}
                    {loc.dates && <Typography sx={subtitleStyles}>{loc.dates}</Typography>}
                    {loc.timeCommitment && <Typography sx={subtitleStyles}>{loc.timeCommitment}</Typography>}
                  </Box>
                  <Box sx={buttonsContainerSyles}>
                    <Button
                      variant="outlined"
                      component={Link}
                      href={loc.url}
                      sx={{ flexShrink: 0 }}
                    >
                      View details
                    </Button>
                    {loc.facultyUrl && (
                      <Button
                        variant="outlined"
                        component={Link}
                        href={loc.facultyUrl}
                        sx={{ flexShrink: 0 }}
                      >
                        Add to Course
                      </Button>
                    )}
                    {loc.destinationUrl && (
                      <Button
                        variant="contained"
                        component={Link}
                        href={loc.destinationUrl}
                        sx={{ flexShrink: 0 }}
                      >
                        Select
                      </Button>
                    )}
                  </Box>
                </Popup>
              )
          )}
        </>
      ) : (
        <Typography sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
          No locations available.
        </Typography>
      )}
    </Map>
  );
}

export default MapField;
