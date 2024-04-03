export const formatDate = (timeString) => {
  const date = new Date(timeString);
  const options = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  return date.toLocaleDateString("en-GB", options);
};

