export interface User {
  id: string;
  name: string;
}

export interface Room {
  roomName: string;
  code: string;
  userLength: number;
  users: User[];
  host: string;
  state: "private" | "public";
  password: number;
}

export const Rooms: Room[] = [
  {
    roomName: "room1",
    code: "123456",
    userLength: 4,
    users: [
      {
        id: "123456",
        name: "user1",
      },
      {
        id: "123456",
        name: "user1",
      },
      {
        id: "123456",
        name: "user1",
      },
      {
        id: "123456",
        name: "user1",
      },
    ],
    host: "user1",
    state: "private",
    password: 1234,
  },
  {
    roomName: "room1",
    code: "123456",
    userLength: 4,
    users: [
      {
        id: "123456",
        name: "user1",
      },
      {
        id: "123456",
        name: "user1",
      },
      {
        id: "123456",
        name: "user1",
      },
      {
        id: "123456",
        name: "user1",
      },
    ],
    host: "user1",
    state: "private",
    password: 1234,
  },
  {
    roomName: "room1",
    code: "123456",
    userLength: 4,
    users: [
      {
        id: "123456",
        name: "user1",
      },
      {
        id: "123456",
        name: "user1",
      },
      {
        id: "123456",
        name: "user1",
      },
      {
        id: "123456",
        name: "user1",
      },
    ],
    host: "user1",
    state: "private",
    password: 1234,
  },
  {
    roomName: "room1",
    code: "123456",
    userLength: 4,
    users: [
      {
        id: "123456",
        name: "user1",
      },
      {
        id: "123456",
        name: "user1",
      },
      {
        id: "123456",
        name: "user1",
      },
      {
        id: "123456",
        name: "user1",
      },
    ],
    host: "user1",
    state: "private",
    password: 1234,
  },
  {
    roomName: "room1",
    code: "123456",
    userLength: 4,
    users: [
      {
        id: "123456",
        name: "user1",
      },
      {
        id: "123456",
        name: "user1",
      },
      {
        id: "123456",
        name: "user1",
      },
      {
        id: "123456",
        name: "user1",
      },
    ],
    host: "user1",
    state: "private",
    password: 1234,
  },
];

export const Users = [
  {
    id: "123456",
    name: "user1",
  },
  {
    id: "123456",
    name: "user1",
  },
  {
    id: "123456",
    name: "user1",
  },
  {
    id: "123456",
    name: "user1",
  },
  {
    id: "123456",
    name: "user1",
  },
];
