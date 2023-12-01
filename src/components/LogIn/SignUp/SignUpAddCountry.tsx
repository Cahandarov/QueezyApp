import Logo from "../Images/Logo_Queezy_Dark.svg"
import LogoText from "../Images/Queezy_Text_Dark.svg"
import { useFormik } from "formik";
import SelectOption from "./SelectOption";
import { useAppDispatch} from '../../App/hooks';
import { setSignUpStages } from "../userSlice";


export default function SignUpAddCountry() {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
        countrySignUp: "",
  
    },
    // validationSchema:validation
    onSubmit: (values) => {
      console.log(values);
    },
  });
  function getCountry(){
    if(formik.values.countrySignUp){
      dispatch(setSignUpStages('addNameAndSurname'))
    }
  }

  return (
    <div className="flex flex-col items-start justify-start w-[27.5rem] h-full">
        <div className="flex items-center gap-4">
            <img src = {Logo} alt="Logo"/>
            <img src ={LogoText} alt="LogoText"/>
        </div>
        <p className="font-bold text-[2rem] font-Rubik text-textColorNeutralBlack_0C092A mt-[4.5rem]">What’s your country?</p>
        <p className="font-normal text-base font-Rubik text-textColorLigthGrey2_858494 mt-3">Fill in all the data and proceed to the next step</p>

        <div className="flex flex-col items-end gap-2 my-10 w-[27.5rem]">
        <p className="font-medium text-base font-Rubik text-primaryColor">3 of 4</p>
        <div className="w-full flex items-center">
            <div className="w-[20.62rem] h-2 bg-primaryColor rounded-lg"></div>
            <div className="w-[6.875rem] h-2 bg-primaryColor opacity-10 rounded-r-lg"></div>
        </div>
        </div>
        <form onSubmit={formik.handleSubmit}>
        <label className="mt-4 font-medium text-base font-Rubik text-[#49465F]">Country</label>

        <div id='countrySignUp' className="w-[27.5rem] h-[3.5rem] flex items-center justify-center relative">
        
         <SelectOption formik = {formik}/>

        </div>

        <input onClick={()=>getCountry()} type="submit" value="Next Step" placeholder="Next Step" className="w-[27.5rem] h-[3.5rem] font-medium text-base font-Rubik text-white  rounded-[1.25rem] flex items-center justify-center bg-primaryColor mt-10  hover:bg-secondColor hover:border-secondColor focus:outline-none focus:ring focus:ring-secondColor focus:ring-offset-2 transition-colors duration-300"/>
            
        </form>
        
      </div>
  )
}
