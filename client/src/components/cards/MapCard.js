import GoogleMapReact from "google-map-react";
import { GOOGLE_PLACES_KEY } from "../../config";

export default function MapCard() {
  const defaultProps = {
    center: {
      lat: -73.043068,
      lng: 41.55426,
    },
    zoom: 11,
  };
  return (
    <div style={{ width: "100%", height: "350px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: GOOGLE_PLACES_KEY,
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      />
    </div>
  );
}
