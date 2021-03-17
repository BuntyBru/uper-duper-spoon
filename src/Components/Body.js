import React from "react";

import LeftNav from "./LeftNav";
import DashboardLayout from "./Dashboard/DashboardLayout";
function Body() {
  return (
    <div>
      <LeftNav />
      <DashboardLayout />
    </div>
  );
}

export default Body;
