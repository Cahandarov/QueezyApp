import ResetAddEmail from './ResetAddEmail'
import ResetAddAndConfirmPassword from './ResetAddAndConfirmPassword'
import { useAppSelector } from '../../App/hooks'



export default function ResetPassword() {
  const ResetEmail = useAppSelector((state)=>state.ResetPassword.ResetPasswordStages === 'ResetEmail');
  const ResetPassword = useAppSelector((state)=>state.ResetPassword.ResetPasswordStages === 'ResetPassword');
  return (
    <div>
        {ResetEmail&&<ResetAddEmail/>}
         {ResetPassword&&<ResetAddAndConfirmPassword/>}
    </div>
  )
}
