// import PieChartDemo from "./PieChartDemo";

import PieChartWithCustomizedLabel from "./PieChartWithCustomizedLabel";

export default function QuizPerformance() {
  return (
    <div className="w-[23rem] h-[29.75rem] p-6 flex justify-start items-start flex-col rounden-[2rem] bg-white dashboard_boxes">
      <p className="text-2xl font-medium font-Rubik text-textColorNeutralBlack_0C092A leading-10 mb-6 ">
        Quiz Performance
      </p>
      {/* <PieChartDemo /> */}
      <PieChartWithCustomizedLabel />
    </div>
  );
}
