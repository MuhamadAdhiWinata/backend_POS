export const totalNight = (start: Date, end: Date): number => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const night = Math.max(
    1,
    Math.ceil(startDate.getTime() - endDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  return night;
};
