import ChatArea from "@/components/room/chat/ChatArea";
import RoomInfo from "@/components/room/RoomInfo";
import UserList from "@/components/room/UserList";
import UserStateBar from "@/components/room/UserStateBar";
// 낮과 밤에 따라 theme 변경

export default function Room() {
  return (
    <div className="bg-slate-950 text-white h-screen w-full pl-28 pt-20 pr-4 flex flex-col gap-y-28">
      <RoomInfo />
      <div className="flex w-full h-full mb-14">
        <UserList />
        <ChatArea />
      </div>
      <UserStateBar />
    </div>
  );
}
