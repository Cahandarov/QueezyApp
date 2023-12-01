import Logo from "../Images/Logo_Queezy_Dark.svg"
import LogoText from "../Images/Queezy_Text_Dark.svg"
import EmailColored from "../Images/emailIconColored.svg"
import { useFormik } from "formik";
import { useAppDispatch, useAppSelector} from '../../App/hooks';
import { setSignUpStages } from "../userSlice";
import { setAddUser } from "../userSlice";
import uniqid from 'uniqid';


export default function SignUpAddEmail() {
  const newUserEmail = useAppSelector((state)=>state.AddUser.newUser.email);
  const NewUserId = useAppSelector((state)=>state.AddUser.newUser.userId);
  const dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues: {
      emailSignUp: "",
  
    },
    // validationSchema:validation
    onSubmit: (values) => {
      console.log(values);
      
    },
  });

  function getEmail(values:{emailSignUp:string}){
    if(formik.values.emailSignUp){
      dispatch(setSignUpStages('addPassword'))

      dispatch(setAddUser(newUserEmail===values.emailSignUp));
      const generatedUserId = uniqid();
      dispatch(setAddUser(NewUserId===generatedUserId))
    }
    console.log(newUserEmail)
    console.log(NewUserId)
  
  }
  return (
    <div className="flex flex-col items-start justify-start w-[27.5rem] h-full">
        <div className="flex items-center gap-4">
            <img src = {Logo} alt="Logo"/>
            <img src ={LogoText} alt="LogoText"/>
        </div>
        <p className="font-bold text-[2rem] font-Rubik text-textColorNeutralBlack_0C092A mt-[4.5rem]">What’s your email?</p>
        <p className="font-normal text-base font-Rubik text-textColorLigthGrey2_858494 mt-3">Fill in all the data and proceed to the next step</p>

        <div className="flex flex-col items-end gap-2 my-10 w-[27.5rem]">
        <p className="font-medium text-base font-Rubik text-primaryColor">1 of 4</p>
        <div className="w-full flex items-center">
            <div className="w-[6.88rem] h-2 bg-primaryColor rounded-lg"></div>
            <div className="w-[20.625rem] h-2 bg-primaryColor opacity-10 rounded-r-lg"></div>
        </div>
        </div>
        <form onSubmit={formik.handleSubmit} >
      
        <label htmlFor="emailSignUp" className="font-medium text-base font-Rubik text-[#49465F] mb-[0.38rem]">Email Address</label>

        <div className="w-[27.5rem] h-[3.5rem] flex items-center justify-center relative">
        <img src = {EmailColored} alt="lockIcon" className="top-0 left-0 absolute translate-x-4 translate-y-[1.15rem]" />
        <input id="emailSignUp" name="emailSignUp" value={formik.values.emailSignUp} onChange={formik.handleChange} className="mt-10 mb-10 registerInputs " type="email" placeholder="Your email address"/>
        </div>

        <input onClick={()=>getEmail(formik.values)} type="submit" value = "Next Step" placeholder="Next Step" className="w-[27.5rem] h-[3.5rem] rounded-[1.25rem] font-medium text-base font-Rubik text-white  flex items-center justify-center bg-primaryColor mt-10  hover:bg-secondColor hover:border-secondColor focus:outline-none focus:ring focus:ring-secondColor focus:ring-offset-2 transition-colors duration-300"/>
          

        </form>
        
    </div>
  )
}
