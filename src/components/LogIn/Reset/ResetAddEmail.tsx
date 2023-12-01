import Logo from "../Images/Logo_Queezy_Dark.svg"
import LogoText from "../Images/Queezy_Text_Dark.svg"
import Email from "../Images/emailIconColored.svg"
import { useFormik } from "formik";
import { useAppDispatch } from "../../App/hooks";
import { setResetPasswordStages } from "../userSlice";

export default function ResetAddEmail() {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      emailReset: "",
  
    },
    // validationSchema:validation
    onSubmit: (values) => {
      console.log(values);
    },
  });
  function ResetAddEmail(){
    if(formik.values.emailReset){
      dispatch(setResetPasswordStages('ResetPassword'))
    }
  }
  return (
    <div className="flex flex-col items-start justify-start w-[27.5rem] h-full">
        <div className="flex items-center gap-4">
            <img src = {Logo} alt="Logo"/>
            <img src ={LogoText} alt="LogoText"/>
        </div>
        <p className="font-bold text-[2rem] font-Rubik text-textColorNeutralBlack_0C092A mt-[4.5rem]">Reset Password</p>
        <p className="font-normal text-base font-Rubik text-textColorLigthGrey2_858494 mt-3">Enter your email and we will send you a link to reset your password.</p>

        <form onSubmit={formik.handleSubmit}  className="mt-[2.25rem] w-[27.5rem] h-[18rem] flex flex-col items-start justify-start">

        <label htmlFor="emailReset" className="font-medium text-base font-Rubik text-[#49465F]">Email Address</label>

        <div className="w-[27.5rem] h-[3.5rem] flex items-center justify-center relative">
        <img src = {Email} alt="lockIcon" className="top-0 left-0 absolute translate-x-4 translate-y-[1.15rem]" />
        <input id="emailReset" name="emailReset" value={formik.values.emailReset} onChange={formik.handleChange} className="mt-10 mb-10 registerInputs " type="email" placeholder="Your email address"/>
        </div>

        <input onClick={()=>{ResetAddEmail()}} type="submit" value="Reset Password" placeholder="Reset Password" className="w-[27.5rem] h-[3.5rem] rounded-[1.25rem] flex items-center justify-center font-medium text-base font-Rubik text-textColorWhite  bg-primaryColor border-none mt-6 hover:bg-secondColor hover:border-secondColor focus:outline-none focus:ring focus:secondColor focus:ring-offset-2 transition-colors duration-300"/>
           
        
        </form>
    </div>
  )
}
