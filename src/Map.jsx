import React, { useEffect, useState } from "react";
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
  iconUrl: "/icoDroneBG.png",

  iconSize: [100, 60], // size of the icon
});

const Map = () => {
  const [map, setMap] = useState(null);
  const [route, setRoute] = useState(null);
  const [start, setStart] = useState([18.910257914669327, 73.32854879620761]);
  const [end, setEnd] = useState([18.52806652835113, 73.87498491081841]);
  const [droneMarker, setDroneMarker] = useState(null);
  const [index, setIndex] = useState(0);
  const [flag, setFlag] = useState(true);
  const [intervalId, setIntervalId] = useState(true);

  useEffect(() => {
    setIndex(0);
  }, [route]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (flag) {
        setDroneMarker([route[index].lat, route[index].lng]);
      }
      setIndex(index + 1);
    }, 1000);
    setIntervalId(intervalId);
    return () => clearInterval(intervalId);
  }, [index, route]);

  return (
    <>
      <div
        className="logo-title px-10 flex lg:flex-row items-center justify-center  bg-slate-300
  -webkit-backdrop-filter: blur(7.5px); sm:flex-col sm:bg-red-100 sm:p-2 "
      >
        <img
          src="/indrones_black.png"
          className="lg:h-20 sm:h-14"
          alt=""
          srcset=""
        />
        <h1 className="ml-7 lg:text-4xl font-bold mb-2 text-[#3a3a3c] sm:text-xl sm:p-0">
          Assignment 2 : using leafletJs , RectJS , TailwindCSS
        </h1>
      </div>
      <section className="flex  items-center gap-5 p-5  justify-center  h-[88vh] sm:flex-col sm:p-2 map-pos">
        <MapContainer
          center={[37.0902, -95.7129]}
          zoom={13}
          zoomControl={false}
          style={{
            height: "80vh",
            width: "80vw",
            padding: 0,
            borderRadius: "0.5rem",
          }}
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

        <div className=" scroll-h p-4 bg-slate-300 rounded-md overflow-hidden h-[80vh] ">
          <h3 className="font-semibold text-2xl text-center mb-5 sm:text-lg sm:p-0">
            Current and old position of drone marker
          </h3>
          <ul className="h-[65vh] overflow-y-scroll">
            {route &&
              route.map((element, key) => {
                if (key <= index) {
                  return (
                    <li
                      className=" text-center"
                      key={key}
                      id={key}
                      onClick={() => {
                        setFlag(false);
                        setDroneMarker([element.lat, element.lng]);
                        clearInterval(intervalId);
                      }}
                    >
                      Lat : {element.lat} , lng: {element.lng}
                    </li>
                  );
                }
              })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Map;
