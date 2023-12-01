import Logo from "../Images/Logo_Queezy_Dark.svg"
import LogoText from "../Images/Queezy_Text_Dark.svg"
import UserIcon from "../Images/UserIcon.svg"
import { useFormik } from "formik";
import { useAppDispatch} from '../../App/hooks';
import { setRegisteredStatus } from "../../LogIn/userSlice"
import { setSignUpStages } from "../userSlice";


export default function SignUpAddNameAndSurname() {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      nameSignUp: "",
      surNameSignUp: "",
  
    },
    // validationSchema:validation
    onSubmit: (values) => {
      console.log(values);
    },
  });
  function getNameAndSurName(){
    if(formik.values.nameSignUp && formik.values.surNameSignUp){
    dispatch(setSignUpStages('idle'))
    dispatch(setRegisteredStatus(true))
    }
  }
  return (
    <div className="flex flex-col items-start justify-start w-[27.5rem] h-full">
        <div className="flex items-center gap-4">
            <img src = {Logo} alt="Logo"/>
            <img src ={LogoText} alt="LogoText"/>
        </div>
        <p className="font-bold text-[2rem] font-Rubik text-textColorNeutralBlack_0C092A mt-[4.5rem]">What’s your name and surname?</p>
        <p className="font-normal text-base font-Rubik text-textColorLigthGrey2_858494 mt-3">Fill in all the data and proceed to the next step</p>


        <div className="flex flex-col items-end gap-2 my-10 w-[27.5rem]">
        <p className="font-medium text-base font-Rubik text-primaryColor"><span className="animate-ping ">4</span> of 4</p>
        <div className="w-full flex items-center">
            <div className="w-[26rem] h-2 bg-primaryColor rounded-lg animate-bounce"></div>
            <div className="w-[1.5rem] h-2 bg-primaryColor opacity-10 rounded-r-lg"></div>
        </div>
        </div>
        <form onSubmit={formik.handleSubmit}>
        <label htmlFor="nameSignUp" className="font-medium text-base font-Rubik text-[#49465F] mb-[0.38rem]">Name</label>

        <div className="w-[27.5rem] h-[3.5rem] flex items-center justify-center relative mb-4">
        <img src = {UserIcon} alt="lockIcon" className="top-0 left-0 absolute translate-x-4 translate-y-[1.15rem]" />
        <input id="nameSignUp" name="nameSignUp" value={formik.values.nameSignUp} onChange={formik.handleChange} className="mt-10 mb-10 registerInputs " type="text" placeholder="Your name"/>
        </div>

      

        <label htmlFor="surNameSignUp" className="font-medium text-base font-Rubik text-[#49465F] mb-[0.38rem]">Surname</label>

        <div className="w-[27.5rem] h-[3.5rem] flex items-center justify-center relative">
        <img src = {UserIcon} alt="lockIcon" className="top-0 left-0 absolute translate-x-4 translate-y-[1.15rem]" />
        <input id="surNameSignUp" name="surNameSignUp" value={formik.values.surNameSignUp} onChange={formik.handleChange} className="mt-10 mb-10 registerInputs " type="text" placeholder="Your Surname"/>
        </div>

        <input onClick={()=>getNameAndSurName()} type="submit" value="Complete Account" placeholder="Complete Account" className="w-[27.5rem] h-[3.5rem] font-medium text-base font-Rubik text-white  rounded-[1.25rem] flex items-center justify-center bg-primaryColor mt-10  hover:bg-secondColor hover:border-secondColor focus:outline-none focus:ring focus:ring-secondColor focus:ring-offset-2 transition-colors duration-300"/>
            
        </form>
        
    </div>
  )
}
