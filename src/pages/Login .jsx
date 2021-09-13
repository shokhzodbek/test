import React,{useState,useEffect}from 'react'
import {login} from '../redux/action/userAction'
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom'
import 'antd/dist/antd.css';
import "./Login.css"
import {Button} from 'antd'
function Login() {
      const history = useHistory()
	const dispatch = useDispatch();
      const [username, setName] = useState('');
      const [password, setPassword] = useState('');
      const [subdomain, setDomain] = useState('');
      const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;
      const submitHandler = (e) => {
		e.preventDefault();
		dispatch(login(username,password,subdomain));
		
          
	};
      useEffect(() => {
		if (userInfo) {
			history.push('/');
		}},[history,userInfo])
      return (
            <div className="center">
            <h3 style={{textAlign:'center'}}>Login</h3>
            <form method="post">
              <div className="txt_field">
                <input type="text" required value={username} onChange={(e)=>setName(e.target.value)}/>
                <span />
                <label>Username</label>
              </div>
              <div className="txt_field">
                <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <span />
                <label>Password</label>
              </div>
              <div className="txt_field">
                <input type="text" required value={subdomain} onChange={(e)=>setDomain(e.target.value)}/>
                <span />
                <label>Subdomain</label>
              </div>
              <div className="pass"></div>
              <Button type="primary" onClick={submitHandler}>Kirish </Button>
             
            </form>
          </div>
      )
}

export default Login
