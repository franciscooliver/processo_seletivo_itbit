import * as dayjs from 'dayjs';
dayjs.locale('br');

export function dateBr(date: string) {
  return dayjs(date).format('DD/MM/YYYY');
}
