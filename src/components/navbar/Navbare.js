import React from 'react'
import './Navbare.css';
import Phi from '../../images/Phi.png'

import {
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';

function Navbare() {


    return (
        <div >

            <Nav className="header">

                <NavbarBrand style={{marginLeft:'20px',color:'white'}} ><img style={{height:'55px'}} src={Phi} alt="" /></NavbarBrand>

                <NavItem>
                    <NavLink style={{color:'white', marginTop:'10px'}} >Acceuil</NavLink>
                </NavItem>
                <br />
            </Nav>

        </div>
  );
}

export default Navbare
