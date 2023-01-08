import React from 'react';
import {  Link } from 'react-router-dom';
export const NavBar = () =>{
    return(
<nav>
  <ul>
       <li> 
          <Link className="index-link" to={"/"} >
           Index
          </Link>
        </li>
        <li>
            <Link
            to={"/home"}
            className="home-link">
            Home
            </Link>
        </li>
    </ul>
</nav>
    )
}
    {/* <NavLink>
        <Link className='index-link' to={"/"}><Index/></Link>
        <Link className='home-link' to={"/home"}><Home/></Link>
    </NavLink> */}
    
