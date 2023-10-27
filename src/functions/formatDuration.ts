const formatDuration = (milliseconds: number) => {
  // Calculate minutes and seconds
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  // Format the result as "min:sec"
  const formattedTime = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return formattedTime;
};

export const formatDurationH = (milliseconds: number) => {
  // Calculate hours, minutes, and seconds
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const remainingSeconds = totalSeconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  // Format the result as "hours:min:sec"
  const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;

  return formattedTime;
};

export default formatDuration;
