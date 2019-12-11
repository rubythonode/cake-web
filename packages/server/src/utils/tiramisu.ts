// tslint:disable
export const rooms: any = {
  비즈쿨실: '0101',
  상담실: '0102',
  북카페: '0103',
  디컨실: '0201',
  이비실: '0202',
  방과후실: '0203',
  시청각실: '1101',
  세미나실: '1102',
};

export const timetable: any = [
  { name: '방과후 1타임', code: 'afsc1' },
  { name: '방과후 2타임', code: 'afsc2' },
  { name: '야자 1타임', code: 'night1' },
  { name: '야자 2타임', code: 'night2' },
];

export const getRoomByCode = (code: string) =>
  Object.keys(rooms).find(key => rooms[key] === code);

export const getTimeByCode = (time: string) =>
  timetable.find((t: any) => t.code === time).name;
