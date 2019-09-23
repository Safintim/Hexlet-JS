const formattedTime = (commonMinutes) => {
  const hours = Math.floor(commonMinutes / 60);
  const formattedHours = hours < 10 ? `0${hours}` : hours;

  const minutes = (commonMinutes % 60);
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHours}:${formattedMinutes}`;
};

export default formattedTime;
