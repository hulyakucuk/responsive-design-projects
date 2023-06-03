import React from "react";
import { Outlet } from "react-router-dom";

export default function WorksLayout() {
  return (
    <div>
      <h3> works page</h3>
 
      <Outlet />
    </div>
  );
}
