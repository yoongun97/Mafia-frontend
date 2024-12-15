"use client";

export default function CreateRoomCard() {
  return (
    <div className="border border-slate-100 rounded p-10 flex flex-col gap-y-5 items-center">
      <h1>Create New Room</h1>
      <input
        className="bg-slate-800 border-slate-100 border rounded p-2"
        placeholder="roomName"
      />
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            className="bg-slate-800 border-slate-100 border w-5 h-5"
          />
          <p>publics</p>
        </div>
        <input
          className="bg-slate-800 border-slate-100 border rounded p-2"
          type="password"
        />
      </div>
      <button className="border-slate-100 border px-7 py-2 rounded ">
        Create
      </button>
    </div>
  );
}
