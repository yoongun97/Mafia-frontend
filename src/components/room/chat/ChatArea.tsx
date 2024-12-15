"use client";

import ChatItem from "./ChatItem";
import ChatSelect from "./ChatSelect";

// 마피아 채팅, 죽은사람 채팅, 산사람 채팅 변경

export default function ChatArea() {
  return (
    <div className="flex flex-col gap-y-5 h-ful w-full">
      <div className=" p-5 h-full w-full border border-slate-100 rounded">
        {/* 채팅목록 : map 사용 필요 */}
        {/* 각 select 마다 다른 채팅들 유지 필요 */}
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </div>
      <div>
        <ChatSelect />
        <div className="flex gap-x-2 w-full">
          <input className="w-full" />
          <button className="border-slate-100 border px-3 py-1 rounded ">
            send
          </button>
        </div>
      </div>
    </div>
  );
}
