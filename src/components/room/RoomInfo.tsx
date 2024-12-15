import React from "react";

function RoomInfo() {
  return (
    <div className="flex bg-slate-950 justify-between absolute z-10 left-0 top-0 w-full px-5 py-3 border border-slate-100 ">
      <div className="flex gap-x-2 items-center">
        <div>Image</div>
        <p>roomName : room1</p>
        <p>code : 1234</p>
      </div>
      <button className="border-slate-100 border px-3 py-1 rounded ">
        exit
      </button>
    </div>
  );
}

export default RoomInfo;
