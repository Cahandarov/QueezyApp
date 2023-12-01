import Friends from "./Friends/Friends";
import LeaderBoard from "./LeaderBoard/LeaderBoard";
import LiveQuiz from "./LiveQuiz/LiveQuiz";
import OnGoningQuiz from "./OngoingQuiz/OnGoningQuiz";
import QuizPerformance from "./QuizPerformance/QuizPerformance";
import RecentQuiz from "./RecentQuiz/RecentQuiz";

export default function DashboardMain() {
  return (
    <div className="flex flex-col gap-8 w-full min-h-min mx-auto px-10 pt-10 pb-4 bg-BackRCLigthGrey_EFEEFC">
      <div className="flex gap-8 mx-auto">
        <QuizPerformance />
        <div className="flex flex-col gap-8">
          <RecentQuiz />
          <OnGoningQuiz />
        </div>
        <LeaderBoard />
      </div>
      <div className="flex gap-8 mx-auto">
        <LiveQuiz />
        <Friends />
      </div>
    </div>
  );
}
