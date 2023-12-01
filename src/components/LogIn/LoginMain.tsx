import Logo from "./Images/Logo_Queezy_Dark.svg"
import LogoText from "./Images/Queezy_Text_Dark.svg"
import GoogleIcon from "./Images/GoogleIcon.svg"
import FacebookIcon from "./Images/FacebookIcon.svg"
import Lock from "./Images/LockIcon.svg"
import Email from "./Images/emailIconColored.svg"
import showIcon from "./Images/ShowPasswordIcon.svg"
import hideIcon from "./Images/HidePasswordIcon.svg"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from '../App/hooks';
import {setLoginStatus} from "../LogIn/userSlice"
// import {setLoginStatus} from "./userSlice"
import { setRegisteredStatus } from "./userSlice"
import { useFormik } from "formik";
import { setForgotPasswordStatus } from "./userSlice";

type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default function LoginMain() {
  const dispatch = useAppDispatch();
  const userData:User[] = useAppSelector((state)=>state.userData.users)

  
  console.log(userData)  
    const formik = useFormik({
        initialValues: {
          emailLogin: "",
          passwordLogin: "",
        },
        // validationSchema:validation
        onSubmit: (values) => {
          checkUserData(values);
        },
      });


      function checkUserData(values:{emailLogin:string, passwordLogin:string}) {
        
        const matchedEmail = userData?.find((user:{ email: string }) => user.email === values.emailLogin);
        const matchedPassword = userData?.find((user:{ password: string }) => user.password === values.passwordLogin);
      
        if (matchedEmail && matchedPassword) {
          dispatch(setLoginStatus(true));
          console.log(setLoginStatus)
          values.emailLogin = "";
          values.passwordLogin = "";
        } else if (matchedEmail && !matchedPassword) {
          console.log("You entered the wrong password. If you forget the password, please click to reset your password");
        } else {
          console.log("Entered data not found, please sign up");
        }
      }
    const [show, setShow] = useState(false)
  return (
    <div className="flex flex-col items-start justify-start w-[27.5rem] h-full">
        <div className="flex items-center gap-4">
            <img src = {Logo} alt="Logo"/>
            <img src ={LogoText} alt="LogoText"/>
        </div>
        <p className="font-bold text-[2rem] font-Rubik text-textColorNeutralBlack_0C092A mt-[4.5rem]">Login in to Queezy</p>
        <p className="font-normal text-base font-Rubik text-textColorLigthGrey2_858494 mt-3">Don’t have account?<span> </span>
        <button onClick={()=>dispatch(setRegisteredStatus(false))} className="font-medium text-base font-Rubik text-primaryColor animate-pulse"> Register</button></p>

        <button className="w-[27.5rem] h-[3.5rem] rounded-[1.25rem] flex items-center justify-center gap-4 bg-white border-2 border-[#E6E6E6] mt-10  hover:bg-slate-200 hover:border-slate-300 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 transition-colors duration-300">
            <img src ={GoogleIcon} alt = "Google"/>
            <p className="font-medium text-base font-Rubik text-textColorNeutralBlack_0C092A ">Login with Google</p>
        </button>

        <button className="w-[27.5rem] h-[3.5rem] rounded-[1.25rem] flex items-center justify-center gap-4 bg-[#0056B2] border-none mt-4   hover:bg-sky-600 hover:border-bg-sky-600 focus:outline-none focus:ring focus:ring-bg-sky-600 focus:ring-offset-2 transition-colors duration-300">
            <img src ={FacebookIcon} alt = "Google"/>
            <p className="font-medium text-base font-Rubik text-textColorWhite ">Login with Facebook</p>
        </button>

        <div className="flex justify-center items-center mt-9">
            <div className="w-[11.35319rem] h-[1px] bg-[#ccc]"></div>
            <p className="px-[1.43rem] font-normal text-base font-Rubik text-textColorLigthGrey2_858494">OR</p>
            <div className="w-[11.35319rem] h-[1px] bg-[#ccc]"></div>
        </div>


        <form onSubmit={formik.handleSubmit} className="mt-[2.25rem] w-[27.5rem] h-[18rem] flex flex-col items-start justify-start">

        <label htmlFor="emailLogin" className="font-medium text-base font-Rubik text-[#49465F]">Email Address</label>

        <div className="w-[27.5rem] h-[3.5rem] flex items-center justify-center relative">
        <img src = {Email} alt="lockIcon" className="top-0 left-0 absolute translate-x-4 translate-y-[1.15rem]" />
        <input id="emailLogin" name="emailLogin" value={formik.values.emailLogin} onChange={formik.handleChange}
         className="mt-10 mb-10 registerInputs " type="email" placeholder="Your email address"/>
        </div>

        <label htmlFor="passwordLogin" className="mt-4 font-medium text-base font-Rubik text-[#49465F]">Password</label>

        <div className="w-[27.5rem] h-[3.5rem] flex items-center justify-center relative">
        <input id="passwordLogin" name="passwordLogin" value={formik.values.passwordLogin} onChange={formik.handleChange} className="mt-6 mb-6 registerInputs" type={show ? 'text' : 'password'} placeholder="Your password"/>
        <img src = {Lock} alt="lockIcon" className="top-0 left-0 absolute translate-x-4 translate-y-[1.1rem]" />
        <div onClick={()=>{setShow(prev=>!prev)}}>
        {show?<img src={showIcon} alt="showIcon" className="absolute top-0 right-0 -translate-x-5 translate-y-4"/>:
        <img src={hideIcon} alt="showIcon" className="absolute top-0 right-0 -translate-x-5 translate-y-4"/>}
        </div>
        
        </div>

        <input
          onClick={(e) => {
            e.preventDefault();
            checkUserData(formik.values);
          }}
          type="submit"
          value="Login"
          placeholder="Login"
          className="w-[27.5rem] h-[3.5rem] rounded-[1.25rem] flex items-center justify-center font-medium text-base font-Rubik text-textColorWhite bg-primaryColor border-none mt-6 hover:bg-secondColor hover:border-secondColor focus:outline-none focus:ring focus:secondColor focus:ring-offset-2 transition-colors duration-300"
        />

          
       
        </form>

        <button onClick={()=>dispatch(setForgotPasswordStatus(true))}   className="font-medium text-base font-Rubik text-primaryColor  mx-auto">Forgot password?</button>

        <p className="font-normal text-base font-Rubik text-textColorLigthGrey2_858494 w-[22.75rem] mt-6 mx-auto text-center">By continuing, you agree to the <a href="#privacy" className="font-medium text-base font-Rubik text-[#49465F]" >Terms of Services<span className="text-textColorLigthGrey2_858494"> & </span> Privacy Policy.</a></p>
        

    </div>
  )
}
