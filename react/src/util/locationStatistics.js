import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export function resolveBusiestDays(checkins) {
  const dayCounts = [0, 0, 0, 0, 0, 0, 0];

  checkins.map((checkin) => {
    const dayOfWeek = dayjs.utc(checkin.date).day();
    dayCounts[dayOfWeek] += 1;
  });

  const maxDayCount = Math.max(...dayCounts);
  const busiestDayIndexes = dayCounts.reduce((busiestDayIndexes, dayCount, index) => {
    if (maxDayCount === dayCount) {
      busiestDayIndexes.push(index);
    }
    return busiestDayIndexes;
  }, []);

  return busiestDayIndexes.map((busiestDayIndex) => {
    return dayjs().day(busiestDayIndex).format('dddd');
  });
}
