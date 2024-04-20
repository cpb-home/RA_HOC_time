import DateTime, { IDateTime } from "../DateTime/DateTime";

const DateTimePretty = (date: IDateTime) => {

  const currentDate = new Date();

// @ts-expect-error because the date format
  const updatedDate = new Date(date.date);

  // @ts-expect-error because the date difference
  const hours = parseInt((currentDate - updatedDate)/1000)/60/60;
  let result: string;
  if (hours < 1) {
    result = `${Math.round(hours*60)} мин. назад`;
  } else if (hours < 5) {
    result = `${Math.round(hours)} час. назад`;
  } else {
    result = `${Math.round(hours/24)} дн. назад`;
  }

  return (
    <DateTime date={result} />
  )
}

export default DateTimePretty
