import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { formatDate } from "../../../utils/api";
import "./DatePicker.css";

export const DatePicker = ({
  values,
  bookings,
  onChange,
}) => {
  const [startDate, setStartDate] = useState(values.startDate);
  const [endDate, setEndDate] = useState(values.endDate);

  const handleReset = () => {
    setStartDate(null);
    setEndDate(null);
  };

  const handleDates = (date) => {
    if (!startDate || date < startDate) {
      setStartDate(new Date(date));
      onChange(startDate, null);
    }

    if (!endDate || date > endDate) {
      setEndDate(new Date(date));
      onChange(startDate, endDate);
    }
  };

  const checkDates = (date) => {
    
    const dateToCheck = date.toISOString();
    if (bookings) {return bookings.some(
      (booking) =>
        dateToCheck >= booking.startDate && dateToCheck <= booking.endDate
    );}
    return;
  };

  useEffect(() => {
    onChange(startDate, endDate);
  }, [startDate, endDate])

  return (
    <>
      <div>
        <Calendar
          calendarType="hebrew"
          defaultView="month"
          onClickDay={handleDates}
          tileClassName={({ date, view }) =>
            view === "month" && checkDates(date)
              ? "text-slate-300" // CSS class for disabled dates
              : startDate &&
                date <= (endDate ?? startDate) &&
                date >= startDate
                ? "bg-blue-400 text-white" // CSS class for selected dates
                : "text-black" // CSS class for other dates
          }
          tileDisabled={({ date, view }) =>
            view === "month" && checkDates(date)
          }
        />
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleReset}
          className="rounded-lg px-2 pt-1 py-1 text-slate-400 "
        >
          <span className="underline underline-offset-2">Reset</span>
        </button>
      </div>
      <div className="mt-4">
        <div>
          <p>From</p>
          <input
            type="text"
            className="border-[1px] border-[neutral-400] p-2 text-[15px] rounded-lg w-full"
            placeholder={startDate ? formatDate(startDate.toString()) : ""}
          />
        </div>
        <div className="mt-2">
          <p>To</p>
          <input
            type="text"
            className="border-[1px] border-[neutral-400] p-2 text-[15px] rounded-lg w-full"
            placeholder={endDate ? formatDate(endDate.toString()) : ""}
          />
        </div>
      </div>
    </>
  );
};
