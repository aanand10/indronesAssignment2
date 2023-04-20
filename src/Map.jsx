import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";
import { TileLayer, MapContainer, LayersControl, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

import RoutingControl from "./RoutingControl";

const maps = {
  base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
};

const Map = () => {
  const [map, setMap] = useState(null);
  const [start, setStart] = useState([18.912471538927843, 73.32785114126712]);
  const [end, setEnd] = useState([19.9957764111209, 73.7718934171437]);

  return (
    <>
      <MapContainer
        center={[37.0902, -95.7129]}
        zoom={13}
        zoomControl={false}
        style={{ height: "80vh", width: "80vw", padding: 0 }}
        whenCreated={(map) => setMap(map)}
      >
        {/*  */}
        {/* *************** */}
        {/* Pass in our custom control layer here, inside of the map container */}
        {/* *************** */}
        <RoutingControl
          position={"topright"}
          start={start}
          end={end}
          color={"#757de8"}
        />
        <LayersControl>
          <LayersControl.BaseLayer checked name="Map">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url={maps.base}
            />
            {
              
            }
            <Marker position={[19.843001870423322, 73.99475797348336]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
    </>
  );
};

export default Map;
