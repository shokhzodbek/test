import Login from './pages/Login '
import { BrowserRouter as Router,Route,Switch,useHistory } from 'react-router-dom';
import PaginationTablePage from './pages/PaginationTablePage'
import SearchPage from './pages/SearchPage'
import Headers from './components/Header';
import { useEffect } from 'react';
import {useSelector} from 'react-redux'

function App() {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const history = useHistory()
    useEffect(() => {
		if (!userInfo) {
			history.push('/login');
		}},[history,userInfo])
    return ( <div className = "app" >
 
            <Switch>
                <Route path="/login">
                <Login/>
                </Route>
                <Route path="/search">
                    <Headers/>
                    <SearchPage/>
                </Route>
                <Route path="/" >
                <Headers/>
                    <PaginationTablePage/>
                </Route>
                
            </Switch>
        
       

       
        </div>  
    );
}

export default App;