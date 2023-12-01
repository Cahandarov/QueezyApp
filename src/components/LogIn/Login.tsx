import LoginRigth from "./LoginRigth";
import LoginMain from "./LoginMain";
import { useAppDispatch, useAppSelector } from '../App/hooks';
// import { getDataThunk } from './userDataSlice';
import { getDataThunk } from './userSlice';
import { useEffect } from "react";
import SignUp from "./SignUp/SignUp";
import ResetPassword from "./Reset/ResetPassword";

export default function Login() {
  const isForgotPassword = useAppSelector((state)=>state.ResetPassword.isForgotPassword);
  const isRegistered = useAppSelector((state)=>state.login.isRegistered);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getDataThunk());
  }, [dispatch]);
  return (

    <div className="w-full h-[61.56rem] py-10 pr-10 pl-[8.56rem] flex items-center justify-between bg-[#EFEEFC]">
        {isForgotPassword?<ResetPassword/>:
        isRegistered?<LoginMain/>:
        <SignUp/>}
        <LoginRigth/>
    </div>
  
  )
}
