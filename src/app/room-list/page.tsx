import CreateRoomCard from "@/components/roomlist/CreateRoomCard";
import JoinRoomCard from "@/components/roomlist/JoinRoomCard";
import RoomListCard from "@/components/roomlist/RoomListCard";
import React from "react";

export default function RoomList() {
  return (
    <div className="bg-slate-950 text-white h-full p-5 flex flex-col gap-y-12">
      <div className="flex gap-x-5">
        <CreateRoomCard />
        <JoinRoomCard />
      </div>
      <RoomListCard />
    </div>
  );
}
