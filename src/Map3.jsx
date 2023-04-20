import React, { useEffect, useState, useRef, useCallback } from "react";
import L from "leaflet";
import {
  TileLayer,
  MapContainer,
  LayersControl,
  Marker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

import RoutingControl from "./RoutingControl";

const maps = {
  base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
};

var greenIcon = L.icon({
  iconUrl: "../public/ico.jpg",

  iconSize: [40, 20], // size of the icon
});

const Map = () => {
  const [map, setMap] = useState(null);
  const [route, setRoute] = useState(null);
  const [start, setStart] = useState([18.910257914669327, 73.32854879620761]);
  const [end, setEnd] = useState([18.52806652835113, 73.87498491081841]);
  const [droneMarker, setDroneMarker] = useState(null);
  const [index, setIndex] = useState(0);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    setIndex(0);
  }, [route]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      //   console.log("inhyyfr");
      //   console.log(route[index].lat, "53252");
      setDroneMarker([route[index].lat, route[index].lng]);
      setIndex(index + 1);
      //   DR();
    }, 1000);
    return () => clearInterval(intervalId);
  }, [index, route]);

  return (
    <>
      <MapContainer
        center={[37.0902, -95.7129]}
        zoom={13}
        zoomControl={false}
        style={{ height: "80vh", width: "80vw", padding: 0 }}
        ref={setMap}
      >
        <RoutingControl
          position={"topright"}
          start={start}
          end={end}
          color={"#757de8"}
          setRoute={setRoute}
        />

        <LayersControl>
          <LayersControl.BaseLayer checked name="Map">
            <TileLayer url={maps.base} />
            {droneMarker && (
              <Marker position={droneMarker} icon={greenIcon}></Marker>
            )}
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
      <div style={{ height: "10rem", overflowY: "scroll" }}>
        <ul>
          {route &&
            route.map((element, key) => {
              if (key <= index) {
                // console.log(element);
                return (
                  <li
                    key={key}
                    id={key}
                    onClick={() => {
                      setDroneMarker([element.lat, element.lng]);
                    //   console.log(onclick);
                      setFlag(false);
                    }}
                  >
                    Lat : {element.lat} , lng: {element.lng}
                  </li>
                );
              }
            })}
        </ul>
      </div>
      {/* <p>{(route._routes[0].coordinates[1300])}</p> */}
    </>
  );
};

export default Map;
