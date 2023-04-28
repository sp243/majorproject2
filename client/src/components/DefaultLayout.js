import React from 'react'
import { Menu, Dropdown, Button, Space , Row , Col } from "antd";
import { Link } from 'react-router-dom';

function DefaultLayout(props) {
    const user = JSON.parse(localStorage.getItem('user'))
    const items = [
      {
        key: '1',
        label: (
          <a href="/" style={{ textDecoration: 'none' }}>
            Home
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a href="/userbookings" style={{ textDecoration: 'none' }}>
            Bookings
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a href="/admin" style={{ textDecoration: 'none' }}>
            Admin
          </a>
        ),
      },
      {
        key: '4',
        label: (
          <a onClick={()=>{
            localStorage.removeItem('user');
            window.location.href='/login'
          }}><li style={{color:'orangered'}}>Logout</li>
          </a>
        ),
      },
    ]
    return (
      <div>
        <div className="header bs1">
            <Row gutter={16} justify='center'>
                <Col lg={20} sm={24} xs={24}>
                <div className="d-flex justify-content-between">
               <h1 ><Link to='/' style={{color:'orangered', textDecoration: 'none' }}>Rent Ride Repeat</Link></h1>
  
            <Dropdown menu={{items}} placement="bottomCenter">
              <Button>{user.username}</Button>
            </Dropdown>
          </div>
                </Col>
            </Row>
          
        </div>
        <div className="content">{props.children}</div>
  
        <div className="footer text-center">
        <hr />
  
             <p>Desinged and Developed By</p>
  
             
  
             <p>SNEH SWASTIK SAMEEP SHRISHTY</p>
            
        </div>
      </div>
    );
}
  
export default DefaultLayout;