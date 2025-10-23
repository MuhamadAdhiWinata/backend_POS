import moment from "moment";

export const getDateRange = (startDate: Date, endDate: Date) => {
  const start = moment(startDate);
  const end = moment(endDate);

  return end.diff(start, "days");
};
