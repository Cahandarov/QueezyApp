import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../LogIn/userSlice"
import userDataReducer from "../LogIn/userSlice"
import SignUpReducer from "../LogIn/userSlice"
import PasswordStagesReducer from "../LogIn/userSlice"
import ForgotPasswordReducer from '../LogIn/userSlice'
import newUserReducer from "../LogIn/userSlice"
// import { getDataThunk } from '../LogIn/userDataSlice';

export const store = configureStore ({
    reducer:{
        login: userReducer,
        userData: userDataReducer,
        SignUpStages:SignUpReducer,
        ForgotPassword: ForgotPasswordReducer,
        ResetPassword:PasswordStagesReducer,
        AddUser:newUserReducer,
    },
   
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(getDataThunk),
});
    
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;