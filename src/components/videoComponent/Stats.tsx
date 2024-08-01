import React from "react";
import { CountUpStats } from "../miniComponents/CountUpStats";

function Stats() {
  return (
    <div className="w-full flex justify-center items-center bg-white">
      <div className="w-full xl:max-w-[1200px] flex items-center justify-center">
        <CountUpStats />
      </div>
    </div>
  );
}

export default Stats;
