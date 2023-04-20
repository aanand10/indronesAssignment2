import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

const createRoutineMachineLayer = ({
  position,
  start,
  end,
  color,
  setRoute,
}) => {
  const instance = L.Routing.control({
    position,
    waypoints: [start, end],

    lineOptions: {
      styles: [
        {
          color,
        },
      ],
    },
  }).on("routesfound", function (e) {
    e.routes[0].coordinates;
    setRoute(e.routes[0].coordinates);
    // console.log(e.routes[0].coordinates, "hjhjhj");
  });
  // console.log(instance, "ins");

  // let wayPt = instance._router.options.waypoints;
  // wayPt.

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
