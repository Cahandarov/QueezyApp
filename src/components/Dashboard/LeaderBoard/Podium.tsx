import Place1 from "./images/Rank1.png";
import Place2 from "./images/Rank2.png";
import Place3 from "./images/Rank3.png";
import medal from "./images/Medal.svg";
import { LeaderboardProps } from "./LeaderBoard";

interface PodiumProps {
  leaderBoardData: LeaderboardProps[];
}
export default function Podium({ leaderBoardData }: PodiumProps) {
  // console.log(leaderBoardData);
  if (!leaderBoardData || leaderBoardData.length < 3) {
    return <div>Loading...</div>;
  }
  return (
    <div
      className="flex mb-0 pb-0 mx-auto items-end
     justify-end"
    >
      <div
        id="Place2"
        className="flex flex-col items-center pr-0 mr-0 translate-x-1"
      >
        <div className="relativ flex items-center justify-center">
          <img
            id="avatarPlace2"
            src={leaderBoardData[1].avatar}
            alt="avatar"
            className="w-12 h-12 rounded-full mb-4"
          />
          <img
            src={leaderBoardData[1].country}
            alt="flag"
            className="absolute translate-x-5 translate-y-2 rounded-sm"
          />
        </div>

        <p
          id="namePlace2"
          className="font-medium text-base font-Rubik text-textColorNeutralBlack_0C092A mb-2"
        >
          {leaderBoardData[1].Name}
        </p>
        <div
          id="pointPlace2"
          className="w-[4.79rem] h-[2.06rem] rounded-[0.61rem] mb-6 border-none bg-secondColor flex items-center justify-center font-normal text-sm font-Rubik text-textColorWhite"
        >
          {String(leaderBoardData[1].pointsTotal)} <span> QP</span>
        </div>
        <img src={Place2} alt="Place2" />
      </div>
      <div
        id="Place1"
        className="flex flex-col items-center relative mx-0 px-0"
      >
        <div className="relativ flex items-center justify-center">
          <img src={medal} alt="Medal" className="absolute top-[-0.7rem]" />
          <img
            id="avatarPlace1"
            src={leaderBoardData[0].avatar}
            alt="avatar"
            className="w-12 h-12 rounded-full mb-4"
          />
          <img
            id="flagPlace1"
            src={leaderBoardData[0].country}
            alt="flag"
            className="absolute translate-x-5 translate-y-2 rounded-sm"
          />
        </div>
        <p
          id="namePlace2"
          className="font-medium text-base font-Rubik text-textColorNeutralBlack_0C092A mb-2"
        >
          {leaderBoardData[0].Name}
        </p>
        <div
          id="pointPlace2"
          className="w-[4.79rem] h-[2.06rem] rounded-[0.61rem] mb-6 border-none bg-secondColor flex items-center justify-center font-normal text-sm font-Rubik text-textColorWhite"
        >
          {String(leaderBoardData[0].pointsTotal)} <span> QP</span>
        </div>
        <img src={Place1} alt="Place2" />
      </div>
      <div
        id="Place3"
        className="flex flex-col items-center ml-0 pl-0 -translate-x-1"
      >
        <div className="relativ flex items-center justify-center">
          <img
            id="avatarPlace3"
            src={leaderBoardData[2].avatar}
            alt="avatar"
            className="w-12 h-12 rounded-full mb-4"
          />
          <img
            id="flagPlace3"
            src={leaderBoardData[2].country}
            alt="flag"
            className="absolute translate-x-5 translate-y-2 rounded-sm"
          />
        </div>
        <p
          id="namePlace3"
          className="font-medium text-base font-Rubik text-textColorNeutralBlack_0C092A mb-2"
        >
          {leaderBoardData[2].Name}
        </p>
        <div
          id="pointPlace3"
          className="w-[4.79rem] h-[2.06rem] rounded-[0.61rem] mb-6 border-none bg-secondColor flex items-center justify-center font-normal text-sm font-Rubik text-textColorWhite"
        >
          {String(leaderBoardData[2].pointsTotal)} <span> QP</span>
        </div>
        <img src={Place3} alt="Place3" />
      </div>
    </div>
  );
}
