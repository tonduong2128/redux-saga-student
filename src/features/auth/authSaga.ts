import { call, delay, fork, take } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { authActions, LoginPayLoad } from "./authSlice";

function* handleLogin(payload:LoginPayLoad){
    localStorage.setItem("access_token",JSON.stringify(true));
    console.log("login");
    
}
function* handleLogout(){
    yield delay(1000)
    console.log("logout");
    localStorage.removeItem("access_token");
}

function* watchLoginFlow(){
    while (true){
        console.log("watch login");
        const isLoggedIn=Boolean(localStorage.getItem("access_token"));
        if (!isLoggedIn){
            const action:PayloadAction<LoginPayLoad>=
            yield take(authActions.login.type);
            yield fork(handleLogin, action.payload);
        }
    
        yield take(authActions.logout.type);
        // yield fork(handleLogout);
        // không sử dụng fork vì nó là non-blocking nó sẽ chạy tiếp lên vòng lặp tiếp theo trước khi xóa access_token nên sử dụng call
        yield call(handleLogout);
    }
}

function * authSaga(){
    yield fork(watchLoginFlow);
}
export default authSaga;