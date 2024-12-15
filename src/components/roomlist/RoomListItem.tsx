import { Room } from "@/dumyData";
import { useRouter } from "next/navigation";
import React from "react";

export default function RoomListItem({ room }: { room: Room }) {
  const router = useRouter();

  return (
    <div className="flex justify-between itmes-center">
      <p>roomName</p>
      <p>{`host:${room.host}`}</p>
      <p>{`${room.userLength} / 16`}</p>
      <button
        className="border-slate-100 border px-3 py-1 rounded "
        onClick={() => {
          router.push(`/room/${room.roomName}`);
        }}
      >
        Join
      </button>
    </div>
  );
}
