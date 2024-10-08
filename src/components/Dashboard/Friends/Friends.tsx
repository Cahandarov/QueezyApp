import groupLeft from "./images/Group-left.svg";
import groupRigth from "./images/Group-rigth.svg";
import buttonSVG from "./images/Button-group.svg";
import FriendsItem from "./FriendsItem";
import { FriendsData } from "./FriendsData";
import { useRef, useState } from "react";

export interface FriendsProps {
  FullName: string;
  avatar: string;
  points: number;
  country: string;
}

export default function Friends() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const topThreeFriends = FriendsData.sort((a, b) => b.points - a.points).slice(
    0,
    3
  );
  const [friendList, setFriendList] = useState<FriendsProps[]>(topThreeFriends);

  function handleSeeAll() {
    const allFriends = FriendsData.sort((a, b) => b.points - a.points);
    setFriendList(allFriends);
    console.log("hello");
    if (scrollRef.current) {
      (scrollRef.current as HTMLDivElement).style.overflow = "auto";
    } else {
      console.error("scrollRef is null");
    }
  }

  return (
    <div className="w-[23rem] h-[32rem] p-6 flex flex-col gap-6 rounden-[2rem] bg-white dashboard_boxes">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-medium font-Rubik text-textColorNeutralBlack_0C092A leading-10">
          Friends
        </p>
        <button
          className="text-base font-medium font-Rubik text-primaryColor z-40"
          onClick={() => {
            handleSeeAll();
          }}
        >
          See all
        </button>
      </div>
      <div
        id="findFriends"
        className="relative w-[17.5rem] h-[12.5rem] p-6 flex flex-col items-center justify-center gap-6 bg-secondColor"
      >
        <img
          src={groupLeft}
          alt="groupSVG"
          className="absolute left-0 bottom-0 -translate-x-8 translate-y-20"
        />
        <img
          src={groupRigth}
          alt="groupSVG"
          className="absolute rigth-0 top-0 translate-x-24 -translate-y-20"
        />
        <p className="text-base font-medium font-Rubik text-textColorWhite opacity-80  mx-auto">
          FEATURED
        </p>
        <p className="text-xl font-medium font-Rubik text-textColorWhite  mx-auto text-center">
          Challenge with friends or other players
        </p>
        <button className="w-[9.5rem] h-[2.5rem] bg-BackRCLigthGrey_EFEEFC items-center justify-center rounded-[1.25rem]">
          <img src={buttonSVG} alt="btnsvg" />
        </button>
      </div>
      <div
        className="flex flex-col items-start justify-start gap-4"
        ref={scrollRef}
      >
        {friendList.map((friend, index) => (
          <FriendsItem
            key={index}
            FullName={friend.FullName}
            avatar={friend.avatar}
            points={friend.points}
            country={friend.country}
          />
        ))}
      </div>
    </div>
  );
}
