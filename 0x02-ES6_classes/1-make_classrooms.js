import ClassRoom from "./0-classroom.js";

/* eslint-disable no-unused-vars */
/* eslint-disable */

export default function initializeRooms() {
  let ClassRoom = [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
  return ClassRoom;
}

const ClassRoom = initializeRooms;
console.log(ClassRoom);
