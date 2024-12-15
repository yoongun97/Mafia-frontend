"use client";

import { Users } from "@/dumyData";
import React from "react";

function UserList() {
  return (
    <div className="absolute left-0 top-14 bottom-0 p-5 border border-slate-100 w-24">
      {Users.map((user, index) => {
        return <p key={index}>{user.name}</p>;
      })}
    </div>
  );
}

export default UserList;
