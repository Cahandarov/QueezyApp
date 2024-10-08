import React from "react";
import {
  Datepicker,
  DatepickerClasses,
  DatepickerEvent,
} from "@meinefinsternis/react-horizontal-date-picker";
import { enUS } from "date-fns/locale";

const CalendarShort = () => {
  const [date, setDate] = React.useState<{
    endValue: Date | null;
    startValue: Date | null;
    rangeDates: Date[] | null;
  }>({
    startValue: null,
    endValue: null,
    rangeDates: [],
  });

  const handleChange = (d: DatepickerEvent) => {
    const [startValue, endValue, rangeDates] = d;
    setDate((prev) => ({ ...prev, endValue, startValue, rangeDates }));
  };
  const customClassNames: Partial<DatepickerClasses> = {
    selectedDay: "custom-selected-day",
    rangeDays: "custom-range-days",
    dayItem: "custom-day-item",
    dayLabel: "custom-day-label",
    monthLabel: "custom-month-label",
    dateLabel: "custom-date-label",
    weekendItem: "custom-weekend-item",
  };

  return (
    <Datepicker
      onChange={handleChange}
      locale={enUS}
      startValue={date.startValue}
      endValue={date.endValue}
      classNames={customClassNames}
    />
  );
};

export default CalendarShort;
