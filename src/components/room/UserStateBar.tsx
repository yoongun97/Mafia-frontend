"use client";
// 마피아, 경찰, 의사
// 스킬 사용
// 마피아 일 땐 마피아 채팅 on, 일반 채팅 on
// 죽었을 땐 죽은 사람 채팅 on, 나머지 채팅 off
// 직업 별 theme 변경

function UserStateBar() {
  return (
    <div className="flex justify-between bg-slate-950 absolute z-10 left-0 bottom-0 w-full px-5 py-2 border border-slate-100 ">
      <div className="flex gap-x-2 items-center">
        <div>role Image</div>
        <p>userName</p>
      </div>
      <div className="flex gap-x-2">
        <button className="border-slate-100 border px-3 py-1 rounded ">
          Skill name
        </button>
        <button className="border-slate-100 border px-3 py-1 rounded ">
          vote
        </button>
      </div>
    </div>
  );
}

export default UserStateBar;
