"use client";

import { Rooms } from "@/dumyData";
import RoomListItem from "./RoomListItem";

export default function RoomListCard() {
  console.log(Rooms);

  return (
    <div className="border border-slate-100 rounded p-10 flex flex-col gap-y-5">
      <h1>Room List</h1>
      <div className="flex flex-col gap-y-2 border border-slate-100 p-2 rounded">
        {Rooms.map((room, index) => {
          return (
            <div key={index}>
              <RoomListItem room={room} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
