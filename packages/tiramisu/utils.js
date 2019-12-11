import { rooms, timetable } from '.';

const getRoomByCode = (code) =>
  Object.keys(rooms).find(key => rooms[key] === code);

const getTimeByCode = (time) =>
  timetable.find((t) => t.code === time).name;

module.exports = {
  getRoomByCode,
  getTimeByCode,
};
