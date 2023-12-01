import SignUpMain from "./SignUpMain";
import SignUpAddEmail from "./SignUpAddEmail";
import SignUpAddPassword from "./SignUpAddPassword";
import SignUpAddNameAndSurname from "./SignUpAddNameAndSurname";
import SignUpAddCountry from "./SignUpAddCountry";
// import { setSignUpStages } from "../userSlice";
import { useAppSelector } from "../../App/hooks";



export default function SignUp() {
  const idle = useAppSelector((state)=>state.SignUpStages.SignUpStages === 'idle')
  const addEmail = useAppSelector((state)=>state.SignUpStages.SignUpStages === "addEmail")
  const addPassword = useAppSelector((state)=>state.SignUpStages.SignUpStages === "addPassword")
  const addCountry = useAppSelector((state)=>state.SignUpStages.SignUpStages === "addCountry")
  const addNameAndSurname = useAppSelector((state)=>state.SignUpStages.SignUpStages === "addNameAndSurname")
  // SignUpStages: 'idle' | 'addEmail' | 'addPassword' | 'addCountry' | 'addNameAndSurname';
  return (
    <div className="h-[61.56rem] w-[27.5rem] py-20">
      {idle?<SignUpMain/>:
      addEmail?<SignUpAddEmail/>:
      addPassword?<SignUpAddPassword/>:
      addCountry?<SignUpAddCountry/>:
      addNameAndSurname?<SignUpAddNameAndSurname/>:""}
    </div>
  )
}
