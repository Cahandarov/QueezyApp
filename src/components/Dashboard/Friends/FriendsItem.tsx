import { FriendsProps } from "./Friends";
export default function FriendsItem({
  avatar,
  FullName,
  country,
  points,
}: FriendsProps) {
  return (
    <div className="friends flex items-center justify-start gap-6">
      <div className="avatarBox flex w-12 h-12 rounded-full border-none items-center justify-start relative">
        <img
          className="friendsAvatar w-12 h-12 flex items-center justify-center"
          src={avatar}
          alt="avatar"
        />
        <img
          src={country}
          alt="flag"
          className="friends_flag absolute right-0 bottom-0 translate-y-0 translate-x-2 rounded-sm w-[1.33rem] h-[1rem]"
        />
      </div>
      <div className="flex flex-col my-auto items-start justify-center">
        <p className="friendsName font-medium text-base font-Rubik text-textColorNeutralBlack_0C092A">
          {FullName}
        </p>
        <p className="FriendsPoints font-normal text-sm font-Rubik text-textColorLigthGrey2_858494">
          {points} points
        </p>
      </div>
    </div>
  );
}
