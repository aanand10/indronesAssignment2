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
  const [start, setStart] = useState([18.912471538927843, 73.32785114126712]);
  const [end, setEnd] = useState([19.9957764111209, 73.7718934171437]);
  const [droneMarker, setDroneMarker] = useState(null);
  {
    useEffect(() => {
      // setDroneMarker([19.52155, 73.33829]);
      // if (route._routes) {
      // console.log(route);
      //   console.log(route._routes[0]);
      //   setDroneMarker(route._routes[0].coordinates[1300]);
      // }
      // console.log(route._routes[0].coordinates[1000]);
      if (route) {
        //   console.log("hoty re");
        //   setInterval(dr, 1000);
        route.forEach((element, index) => {
          console.log(element, "dhhfd");
          setTimeout(() => {
            setDroneMarker([element.lat, element.lng]);
          }, 100 * index);
        });
      }
    }, [route]);
  }
  return (
    <>
      <MapContainer
        center={[37.0902, -95.7129]}
        zoom={13}
        zoomControl={false}
        style={{ height: "80vh", width: "80vw", padding: 0 }}
        ref={setMap}
      >
        {/* {map[0].map((element) => {
          console.log(element);
        })} */}
        {/* {console.log(map, "map")} */}
        <RoutingControl
          position={"topright"}
          start={start}
          end={end}
          color={"#757de8"}
          setRoute={setRoute}
          // ref={setRoute}
        />
        {/* {route._routes[0].coordinates.forEach((coord, index) => {},
        100 * index)} */}

        <LayersControl>
          <LayersControl.BaseLayer checked name="Map">
            <TileLayer url={maps.base} />

            {droneMarker && (
              <Marker position={droneMarker} icon={greenIcon}></Marker>
            )}
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
      {/* <p>{(route._routes[0].coordinates[1300])}</p> */}
    </>
  );
};

export default Map;
