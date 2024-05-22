const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthsOfYear = [
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

export const getNextSevenDays = () => {
  const today = new Date();
  const dates = ["Today", "Tomorrow"];

  for (let i = 2; i < 7; i++) {
    const date = new Date();
    date.setDate(today.getDate() + i);
    const formattedDate = `${daysOfWeek[date.getDay()]}, ${date.getDate()} ${
      monthsOfYear[date.getMonth()]
    }`;
    dates.push(formattedDate);
  }

  return dates;
};

export const getDateFromString = (myString) => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const todayFormatted = `${daysOfWeek[today.getDay()]}, ${today.getDate()} ${
    monthsOfYear[today.getMonth()]
  }`;
  const tomorrowFormatted = `${
    daysOfWeek[tomorrow.getDay()]
  }, ${tomorrow.getDate()} ${monthsOfYear[tomorrow.getMonth()]}`;

  return myString === "Today" ? todayFormatted : tomorrowFormatted;
};

export const generateTimeArray = (period) => {
  const times = [];
  let startHour, endHour, periodLabel;

  if (period === "morning") {
    startHour = 8;
    endHour = 10;
    periodLabel = "AM";
  } else if (period === "afternoon") {
    startHour = 12;
    endHour = 14;
    periodLabel = "PM";
  } else if (period === "evening") {
    startHour = 18;
    endHour = 20;
    periodLabel = "PM";
  } else {
    throw new Error(
      "Invalid period. Valid values are: morning, afternoon, evening"
    );
  }

  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      let formattedHour = hour;
      if (hour > 12) {
        formattedHour -= 12;
      }
      times.push(
        `${formattedHour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")} ${periodLabel}`
      );
    }
  }

  return times;
};

export const isTimeExpired = (givenDateTimeStr) => {
  const [, date, month, time, period] = givenDateTimeStr.split(" ");

  const months = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  };

  const currentYear = new Date().getFullYear();

  let [hours, minutes] = time.split(":").map(Number);
  if (period === "PM" && hours < 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;

  const givenDateTime = new Date(
    currentYear,
    months[month],
    parseInt(date),
    hours,
    minutes
  );

  const currentDateTime = new Date();

  return givenDateTime < currentDateTime ? true : false;
};

export const getOptionByVarient = (myVarient) => ({
  variant: myVarient,
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "center",
  },
});

export const getFreshBookingsOnly = (bookings) => {
  return bookings?.filter(
    (booking) =>
      isTimeExpired(`${booking.bookingDay} ${booking.bookingTime}`) === false
  );
};

export const getBookingsFromLocalStorage = (key) => {
  const storedValue = localStorage.getItem(key);
  if (storedValue) {
    return getFreshBookingsOnly(JSON.parse(storedValue));
  }
  return false;
};

export const deleteBookingFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export const addMyBookingToLocalStorage = (key, booking) => {
  const previousBookings = getBookingsFromLocalStorage(key);
  if (previousBookings) {
    const existingBooking = previousBookings.find(
      (oldBooking) => oldBooking.hospitalID === booking.hospitalID
    );
    if (existingBooking) {
      Object.assign(existingBooking, booking);
    } else {
      previousBookings.push(booking);
    }
    deleteBookingFromLocalStorage(key);
    localStorage.setItem(key, JSON.stringify(previousBookings));
  } else {
    localStorage.setItem(key, JSON.stringify([booking]));
  }
};

export const updateBookingsInLocalStorage = (key, data) => {
  const previousValue = localStorage.getItem(key);
  if (previousValue) {
    localStorage.removeItem(key);
  }
  localStorage.setItem(key, JSON.stringify(data));
};
