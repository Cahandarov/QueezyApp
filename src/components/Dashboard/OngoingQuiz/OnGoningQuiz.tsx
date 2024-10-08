// import MyCalendar from "./MyCalendar";

import CalendarShort from "./CalendarShort";

export default function OnGoningQuiz() {
  return (
    <div className="w-[23rem] h-[15rem] p-6 flex flex-col gap-4 rounden-[2rem] bg-white dashboard_boxes z-0">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-medium font-Rubik text-textColorNeutralBlack_0C092A leading-10">
          Ongoing Quiz
        </p>
        <button className="text-base font-medium font-Rubik text-primaryColor">
          See all
        </button>
      </div>

      {/* <MyCalendar /> */}

      <CalendarShort />
    </div>
  );
}
