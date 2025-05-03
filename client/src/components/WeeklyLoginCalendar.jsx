import React from "react";
import { format, subDays } from "date-fns";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const WeeklyLoginCalendar = ({ loginHistory }) => {
  // Get last 7 days, today last
  const today = new Date();
  const last7Days = Array.from({ length: 7 }, (_, i) =>
    subDays(today, 6 - i)
  );

  return (
    <div className="flex items-center gap-2 mt-4">
      {last7Days.map((date, idx) => {
        const dateStr = format(date, "yyyy-MM-dd");
        const loggedIn = loginHistory?.[dateStr];
        return (
          <div key={dateStr} className="flex flex-col items-center">
            <span className="text-xs text-gray-400">{daysOfWeek[date.getDay()]}</span>
            <span
              className={`w-3 h-3 rounded-full mt-1 ${
                loggedIn ? "bg-green-500" : "bg-gray-300"
              }`}
              title={loggedIn ? "Logged in" : "Not logged in"}
            />
          </div>
        );
      })}
    </div>
  );
};

export default WeeklyLoginCalendar;
