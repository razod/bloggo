function parseMonth(month: number) {
  let possible = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  return possible[month]
}

function parseDay(day: number) {
  let possible = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  return possible[day];
}

function generateTimestamp() {
  const date = new Date();

  let year = date.getFullYear();
  let month = parseMonth(date.getMonth());
  let day = parseDay(date.getDay());
  let dayInMonth = date.getDate();

  let hours = date.getHours();
  let minutes = date.getMinutes();

  return `${day}, ${month} ${dayInMonth} ${year} at ${hours}:${minutes}`
}

export { parseDay, parseMonth, generateTimestamp }