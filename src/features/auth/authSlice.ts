import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../models/user";


export interface LoginPayLoad{
    username:string;
    password:string;
}

export interface AuthState{
    isLoggedIn: boolean;
    logging?:boolean;
    currentUser?:User;
} 

const initialState: AuthState={
    isLoggedIn: false,
    logging:false,
    currentUser: undefined,
}
const authSice = createSlice({
    name:"auth",
    initialState: initialState,
    reducers:{
        login(state, action:PayloadAction<LoginPayLoad>){
            state.logging=true;
        },
        loginSuccess(state, action:PayloadAction<User>){
            state.isLoggedIn=true;
            state.logging=false;
            state.currentUser=action.payload;
        },
        loginFailed(state, action:PayloadAction<string>){
            state.logging=false;
        },
        logout(state){
            state.isLoggedIn=false;
            state.currentUser=undefined;
        }
    }
     
})
export const authActions=authSice.actions;

export const selectIsLoggedIn=( state:any )=>state.auth.isLoggedIn;
export const selectIsLogging=( state: any )=>state.auth.logging; 

const authReducer = authSice.reducer;
export default authReducer;