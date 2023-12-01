import Logo from "../Images/Logo_Queezy_Dark.svg"
import LogoText from "../Images/Queezy_Text_Dark.svg"
import GoogleIcon from "../Images/GoogleIcon.svg"
import FacebookIcon from "../Images/FacebookIcon.svg"
import Email from "../Images/emailIcon.svg"
import { setRegisteredStatus } from "../../LogIn/userSlice"
import { useAppDispatch} from '../../App/hooks';
import { setSignUpStages } from "../userSlice";


export default function SignUpMain() {
    const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col items-start justify-start w-full h-full">
        <div className="flex items-center gap-4">
            <img src = {Logo} alt="Logo"/>
            <img src ={LogoText} alt="LogoText"/>
        </div>
        <p className="font-bold text-[2rem] font-Rubik text-textColorNeutralBlack_0C092A mt-[4.5rem]">Sign up</p>
        <p className="font-normal text-base font-Rubik text-textColorLigthGrey2_858494 mt-3">Already have an account?<span> </span>
        <button onClick={()=>dispatch(setRegisteredStatus(true))} className="font-medium text-base font-Rubik text-primaryColor animate-pulse"> Login</button></p>

        <button className="w-[27.5rem] h-[3.5rem] rounded-[1.25rem] flex items-center justify-center gap-4 bg-white border-2 border-[#E6E6E6] mt-10  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300">
            <img src ={GoogleIcon} alt = "Google"/>
            <p className="font-medium text-base font-Rubik text-textColorNeutralBlack_0C092A ">Sign Up with Google</p>
        </button>

        <button className="w-[27.5rem] h-[3.5rem] rounded-[1.25rem] flex items-center justify-center gap-4 bg-[#0056B2] border-none mt-4   hover:bg-sky-600 hover:border-bg-sky-600 focus:outline-none focus:ring focus:ring-bg-sky-600 focus:ring-offset-2 transition-colors duration-300">
            <img src ={FacebookIcon} alt = "Google"/>
            <p className="font-medium text-base font-Rubik text-textColorWhite ">Sign Up with Facebook</p>
        </button>

        <div className="flex justify-center items-center mt-9">
            <div className="w-[11.35319rem] h-[1px] bg-[#ccc]"></div>
            <p className="px-[1.43rem] font-normal text-base font-Rubik text-textColorLigthGrey2_858494">OR</p>
            <div className="w-[11.35319rem] h-[1px] bg-[#ccc]"></div>
        </div>

        <button onClick={()=>dispatch(setSignUpStages('addEmail'))} className="w-[27.5rem] h-[3.5rem] rounded-[1.25rem] flex items-center justify-center gap-4 bg-primaryColor mt-10  hover:bg-secondColor hover:border-secondColor focus:outline-none focus:ring focus:ring-secondColor focus:ring-offset-2 transition-colors duration-300">
            <img src ={Email} alt = "EmailIcon"/>
            <p className="font-medium text-base font-Rubik text-white ">Sign Up with Email</p>
            <img src ={Email} alt = "EmailIcon"/>
        </button>

        <p className="font-normal text-base font-Rubik text-textColorLigthGrey2_858494 mt-6 text-center mx-auto">Already have an account?<span> </span>
        <button onClick={()=>dispatch(setRegisteredStatus(true))} className="font-medium text-base font-Rubik text-primaryColor animate-pulse"> Login</button></p>

        <p className="font-normal text-base font-Rubik text-textColorLigthGrey2_858494 w-[22.75rem] mt-6 mx-auto text-center">By continuing, you agree to the <a href="#privacy" className="font-medium text-base font-Rubik text-[#49465F]" >Terms of Services<span className="text-textColorLigthGrey2_858494"> & </span> Privacy Policy.</a></p>
        

   


    </div>
  )
}
