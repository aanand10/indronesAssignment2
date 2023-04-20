// import {
//   MapContainer,
//   TileLayer,
//   useMap,
//   Marker,
//   Popup,
//   useMapEvents,
// } from "react-leaflet";
// import L from "leaflet";
// import { useState } from "react";
// // import "./App.css";
// import "leaflet/dist/leaflet.css";
// import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

// function LocationMarker() {
//   const [position, setPosition] = useState(null);
//   const map = useMapEvents({
//     click() {
//       map.locate();
//     },
//     locationfound(e) {
//       setPosition(e.latlng);
//       map.flyTo(e.latlng, map.getZoom());
//     },
//   });

//   return position === null ? null : (
//     <Marker position={position}>
//       <Popup>You are here</Popup>
//     </Marker>
//   );
// }

// function App() {
//   const center = [18.910975264695118, 73.32806515137291];
//   L.Routing.control({
//     waypoints: [L.latLng(57.74, 11.94), L.latLng(57.6792, 11.949)],
//   }).addTo(map);
//   return (
//     <MapContainer
//       center={center}
//       zoom={13}
//       scrollWheelZoom={false}
//       style={{ height: "98vh", width: "98vw" }}
//     >
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <LocationMarker />
//     </MapContainer>
//   );
// }

// export default App;
import React from "react";
import Map from "./Map3";

const App = () => {
  return (
    <div>
      <Map />
    </div>
  );
};

export default App;
