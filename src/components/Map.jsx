import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
const Map = ({ issCoords }) => {
  return (
    <MapContainer dragging={true} style={{ height: "100vh", width: "100vw" }} center={issCoords} minZoom={2.2} zoom={3} maxZoom={10} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={issCoords}>
        <Popup>
          The ISS is currently @ <br />{issCoords[1]} - {issCoords[0]}
        </Popup>
      </Marker>
    </MapContainer>
  )
};

export default Map;
