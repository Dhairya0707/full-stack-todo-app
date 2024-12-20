import React from "react";
import { Themebtn } from "./themebtn";

export const Nav = () => {
  return (
    <div className="navbar bg-base-300 fixed top-0 z-10">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Todo-App</a>
      </div>
      <div className="flex-none">
        <Themebtn />
      </div>
    </div>
  );
};
