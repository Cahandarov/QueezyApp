import { useState } from "react"
import Logo from "../Images/Logo_Queezy_Dark.svg"
import LogoText from "../Images/Queezy_Text_Dark.svg"
import Lock from "../Images/LockIcon.svg"
import showIcon from "../Images/ShowPasswordIcon.svg"
import hideIcon from "../Images/HidePasswordIcon.svg"
import { useFormik } from "formik";
import { useAppDispatch} from '../../App/hooks';
import { setSignUpStages } from "../userSlice";

export default function SignUpAddPassword() {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      passwordSignUp: "",
  
    },
    // validationSchema:validation
    onSubmit: (values) => {
      console.log(values);
    },
  });
  function getPassword(){
    if(formik.values.passwordSignUp){
      dispatch(setSignUpStages('addCountry'))
    }
    
  }
  const [show, setShow] = useState(false)
  return (
    <div className="flex flex-col items-start justify-start w-[27.5rem] h-full">
        <div className="flex items-center gap-4">
            <img src = {Logo} alt="Logo"/>
            <img src ={LogoText} alt="LogoText"/>
        </div>
        <p className="font-bold text-[2rem] font-Rubik text-textColorNeutralBlack_0C092A mt-[4.5rem]">What’s your password?</p>
        <p className="font-normal text-base font-Rubik text-textColorLigthGrey2_858494 mt-3">Fill in all the data and proceed to the next step</p>

        <div className="flex flex-col items-end gap-2 my-10 w-[27.5rem]">
        <p className="font-medium text-base font-Rubik text-primaryColor">2 of 4</p>
        <div className="w-full flex items-center">
            <div className="w-[13.75rem] h-2 bg-primaryColor rounded-lg"></div>
            <div className="w-[13.75rem] h-2 bg-primaryColor opacity-10 rounded-r-lg"></div>
        </div>
        </div>
        <form onSubmit={formik.handleSubmit}>
        <label htmlFor="passwordSignUp" className="mt-4 font-medium text-base font-Rubik text-[#49465F]">Password</label>

        <div className="w-[27.5rem] h-[3.5rem] flex items-center justify-center relative">
        <input id="passwordSignUp" name="passwordSignUp" value={formik.values.passwordSignUp} onChange={formik.handleChange} className="mt-6 mb-6 registerInputs" type={show ? 'text' : 'password'} placeholder="Your password"/>
        <img src = {Lock} alt="lockIcon" className="top-0 left-0 absolute translate-x-4 translate-y-[1.1rem]" />
        <div onClick={()=>{setShow(prev=>!prev)}}>
        {show?<img src={showIcon} alt="showIcon" className="absolute top-0 right-0 -translate-x-5 translate-y-4"/>:
        <img src={hideIcon} alt="showIcon" className="absolute top-0 right-0 -translate-x-5 translate-y-4"/>}
        </div>

        </div>

        <input onClick={()=>getPassword()} type="submit" value="Next Step" placeholder="Next Step" className="w-[27.5rem] h-[3.5rem] font-medium text-base font-Rubik text-white  rounded-[1.25rem] flex items-center justify-center bg-primaryColor mt-10  hover:bg-secondColor hover:border-secondColor focus:outline-none focus:ring focus:ring-secondColor focus:ring-offset-2 transition-colors duration-300"/>
            
        </form>
        
      </div>
  )
}
