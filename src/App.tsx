import { useEffect } from 'react';
import { Route, Switch} from 'react-router';
import cityApi from './api/cityApi';
import studentApi from './api/studentsApi';
import './App.css';
import { useAppDispatch } from './app/hooks';
import { NotFound, PrivateRoute } from './components/Common';
import { AdminLayout } from './components/Layout';
import { authActions } from './features/auth/authSlice';
import LoginPage from './features/auth/pages/LoginPage';

function App() {
  const dispatch=useAppDispatch();
  useEffect(() => {
    cityApi.getAll().then(response =>response.data);
    studentApi.getAll({
      _page:1,
    _limit: 10,
    _sort:"id",
    _order:"asc",
    }).then(response=>response.data).then(data=>console.log(data));
  }, [])

  const handleLogout = ()=>{
    dispatch(authActions.logout());
  }

  return (
    <div className="">
      <button onClick={()=>handleLogout()}>Logout</button>
      <Switch>
        <Route path="/login"> 
          <LoginPage/>
        </Route>
        <PrivateRoute path = "/admin">
          <AdminLayout/>
        </PrivateRoute>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
