import React from "react";
import Map from "./Map";

const App = () => {
  return (
    <div
      className="  main-container
      @apply bg-[#0093E9] bg-[linear-gradient(160deg,#0093E9_0%,#80D0C7_100%)];
    
      sm:h-auto h-[100vh]"
    >
      <Map />
    </div>
  );
};

export default App;
