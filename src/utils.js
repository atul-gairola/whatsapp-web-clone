export function convertTimestamp(timestamp) {
  const dateObj = new Date(timestamp);

  const date = dateObj.getDate();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();

  const hour =
    dateObj.getHours() + 1 > 12
      ? String(dateObj.getHours() - 11).padStart(2, "0")
      : String(dateObj.getHours() + 1).padStart(2, "0");
  const period = dateObj.getHours() + 1 > 12 ? "PM" : "AM";
  const minutes = dateObj.getMinutes().toString().padStart(2, "0");
  const seconds = dateObj.getSeconds().toString().padStart(2, "0");

  return {
    date,
    month,
    year,
    hour,
    period,
    minutes,
    seconds,
  };
}
