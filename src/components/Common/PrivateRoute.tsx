import { Redirect, Route,  RouteProps} from "react-router";
export const PrivateRoute = (props: RouteProps) => {
    //Check if user is login
    //If yes, show route
    //else redirect
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));
    console.log(isLoggedIn);
    
    if (!isLoggedIn){
        return <Redirect to='/login'/>
    }
    return <Route { ...props } />
}
