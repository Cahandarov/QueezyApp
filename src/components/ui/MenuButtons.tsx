import { NavLink } from "react-router-dom";
type ButtonProps = {
  btnName: string;
  icon: string;
  path: string;
};
export default function MenuButtons({ btnName, icon, path }: ButtonProps) {
  return (
    <NavLink
      to={path}
      className="w-full font-Rubik 
    font-normal text-base text-textColorLigthGrey_D2CDF6 h-[3.5rem] rounded-xl last-of-type:mt-7 focus:font-medium"
    >
      <nav>
        <button className="navButtons w-full flex gap-[0.88rem] items-center justify-start font-Rubik p-4 ">
          <img src={icon} alt="icon" className="btn_svg" />
          {btnName}
        </button>
      </nav>
    </NavLink>
  );
}
