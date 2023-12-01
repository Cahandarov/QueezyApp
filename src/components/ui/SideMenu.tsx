import logo from "./images/Logo-Quezzy.svg";
import logoText from "./images/Queezy.svg";
import oval from "./images/Oval.svg";
import oval2 from "./images/Oval2.svg";
import Menu from "./Menu";
export default function SideMenu() {
  return (
    <div className="w-[18.33%] h-[74rem] min-h-min py-12 px-6 bg-primaryColor">
      <img src={oval} alt="oval" className="absolute top-0 left-0" />
      <img src={oval2} alt="oval" className="absolute top-0 left-0" />
      <img src={logo} alt="Logo Queezy" className="mx-auto" />
      <img
        src={logoText}
        alt="Queezy"
        className="mx-auto pt-3 hover:animate-ping"
      />
      <Menu />
    </div>
  );
}
