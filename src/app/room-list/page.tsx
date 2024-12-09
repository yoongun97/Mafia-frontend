import CreateRoomCard from "@/components/roomlist/CreateRoomCard";
import JoinRoomCard from "@/components/roomlist/JoinRoomCard";
import RoomListCard from "@/components/roomlist/RoomListCard";
import React from "react";

export default function RoomList() {
  return (
    <div className="bg-slate-950 text-white h-screen p-28 flex flex-col gap-y-28">
      <div className="flex justify-between">
        <CreateRoomCard />
        <JoinRoomCard />
      </div>
      <RoomListCard />
    </div>
  );
}
