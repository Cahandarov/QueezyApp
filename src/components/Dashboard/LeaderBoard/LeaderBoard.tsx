import LeaderboardButton from "./LeaderboardButton";
import Podium from "./Podium";
import { UsersData } from "./LeaderBoardData";
import { useEffect, useState } from "react";


export interface LeaderboardProps {
  Name: string;
  Surname: string;
  avatar: string;
  country: string;
  pointsTotal: number;
}

export default function LeaderBoard() {
  const [viewType, setViewType] = useState<string>("Weekly");
  const [leaderBoardData, setLeaderBoardData] = useState<LeaderboardProps[]>(
    []
  );

  useEffect(() => {
    function ToggleLeaderBoard() {
      if (viewType === "Weekly") {
        const OneWeekInMseconds = 7 * 24 * 60 * 60 * 1000;
        const dateNowInMseconds = new Date().getTime();
        const OneWeek_AGO_InMseconds = dateNowInMseconds - OneWeekInMseconds;
        const WeeklyData = UsersData.map((users) => ({
          Name: users.Name,
          Surname: users.Surname,
          avatar: users.avatar,
          country: users.country,
          pointsTotal: users.pointsTotal.reduce((acc, entry) => {
            const gainedPointInMseconds = new Date(entry.gainedDate).getTime();
            if (gainedPointInMseconds >= OneWeek_AGO_InMseconds) {
              acc += entry.point;
            }
            return acc;
          }, 0),
        }))
          .sort((a, b) => b.pointsTotal - a.pointsTotal)
          .slice(0, 3);
        setLeaderBoardData(WeeklyData);
      } else if (viewType === "All Time") {
        const AllTimesData = UsersData.map((users) => ({
          Name: users.Name,
          Surname: users.Surname,
          avatar: users.avatar,
          country: users.country,
          pointsTotal: users.pointsTotal.reduce((acc, entry) => {
            acc += entry.point;
            return acc;
          }, 0),
        }))
          .sort((a, b) => b.pointsTotal - a.pointsTotal)
          .slice(0, 3);
        setLeaderBoardData(AllTimesData);
      }
    }

    ToggleLeaderBoard();
  }, [viewType]);

  return (
    <div className="w-[23rem] h-[29.75rem] px-6 pt-6 pb-0 flex flex-col justify-between gap-6 rounden-[2rem] bg-white dashboard_boxes">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-medium font-Rubik text-textColorNeutralBlack_0C092A leading-10">
          Leaderboard
        </p>
        <button className="text-base font-medium font-Rubik text-primaryColor">
          See all
        </button>
      </div>
      <div className="z-0">
      <LeaderboardButton setViewType={setViewType} />
      </div>
      
      <Podium leaderBoardData={leaderBoardData} />
    </div>
  );
}
