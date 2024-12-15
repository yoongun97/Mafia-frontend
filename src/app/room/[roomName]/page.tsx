import ChatArea from "@/components/room/ChatArea";
import UserList from "@/components/room/UserList";
import UserStateBar from "@/components/room/UserStateBar";
// 낮과 밤에 따라 theme 변경

export default function Room() {
  return (
    <div className="bg-slate-950 text-white h-screen p-28 flex flex-col gap-y-28">
      <div className="flex">
        <UserList />
        <ChatArea />
      </div>
      <UserStateBar />
    </div>
  );
}
