export function totalBirdCount(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    sum += birdsPerDay[i];
  }
  return sum;
}

export function birdsInWeek(birdsPerDay, week) {
  let sum = 0;
  const start = week * 7 - 7;
  const end = week * 7;
  for (let i = start; i < end; i++) {
    sum += birdsPerDay[i];
  }
  return sum;
}

export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i] = birdsPerDay[i] + 1;
  }
  return birdsPerDay;
}