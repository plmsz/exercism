export function totalBirdCount(birdsPerDay) {
  return birdsPerDay.reduce((acc, item) => acc + item);
}

export function birdsInWeek(birdsPerDay, week) {
  const birdsPerDayInThisWeek = birdsPerDay.slice(week * 7 - 7, week * 7);
  return totalBirdCount(birdsPerDayInThisWeek);
}

/* export function fixBirdCountLog(birdsPerDay) {
  birdsPerDay.forEach((bird, i) => i % 2 == 0 ? birdsPerDay[i]++ : birdsPerDay[i]);
  return birdsPerDay;
} */

export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i]++;
  }
  return birdsPerDay;
}