import React from 'react';
import { Link , withRouter} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import WorkIcon from '@material-ui/icons/Work';
import MailIcon from '@material-ui/icons/Mail';
import '../css/mnue.css';
import Logo from '../core/Logo';

const isActive =(history,path) =>{
    if(history.location.pathname === path) return {color:'#333333'}
    else return {color:'#fff'}
};

const Menu = ({history})=>{

    return(<div className="menu">
    <div className='logo-wrapper'>
    <Logo/>
    </div>
    <div className='nav-bar'>
    <ul className="nav">
    <li className="nav-item">
        <Link style={isActive(history,'/')} className="nav-link" to='/'><HomeIcon style={{ fontSize: 40 }} /></Link>
    </li>  
    <li className="nav-item">
        <Link style={isActive(history,'/about')} className="nav-link" to='/about'><PersonIcon style={{ fontSize: 40 }}/></Link>
    </li> 
    <li className="nav-item">
        <Link style={isActive(history,'/portfolio')} className="nav-link" to='/portfolio'><WorkIcon style={{ fontSize: 40 }}/></Link>
    </li>
    <li className="nav-item">
        <Link style={isActive(history,'/hobbies')} className="nav-link" to='/hobbies'><VideogameAssetIcon style={{ fontSize: 40 }}/></Link>
    </li> 
    <li className="nav-item">
        <Link style={isActive(history,'/contact')} className="nav-link" to='/contact'><MailIcon style={{ fontSize: 40 }}/></Link>
    </li> 
    </ul> 
    </div>
    </div>  
    )
}









export default withRouter(Menu);