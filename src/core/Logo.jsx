import LogoImg from '../images/logo.png';
import React from 'react';
import '../css/Logo.css';
import {Link} from 'react-router-dom';

const Logo = () => {

    return(
        <Link  className='logo-box' to='/'>
        <img className='logo' src={LogoImg} alt='Aleksey Zgeria'/>
        <h1 className='logo-title'>Aleksey Zgeria</h1></Link>
    )


}

export default Logo;