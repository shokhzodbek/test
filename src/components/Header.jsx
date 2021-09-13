import React from 'react'
import { Layout, Menu} from 'antd';
import {Link} from 'react-router-dom'
import {logout} from '../redux/action/userAction'
import {useDispatch} from 'react-redux'
const { Header} = Layout;


function Headers() {
      const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }
      return (
            <div>
      <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
       <Menu.Item  key={1}><Link to="/"> Products</Link></Menu.Item>
       <Menu.Item key={2}><Link to="/search">Search Product</Link> </Menu.Item>
       <Menu.Item  key={3} onClick={logoutHandler}>Log out</Menu.Item>
      </Menu>
      
    </Header> 
            </div>
      )
}

export default Headers
