import React from 'react';
import { Link , withRouter} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import CodeIcon from '@material-ui/icons/Code';
import MailIcon from '@material-ui/icons/Mail';
import '../css/mnue.css';
import Logo from '../core/Logo';

const isActive =(history,path) =>{
    if(history.location.pathname === path) return {color:'#333333'}
    else return {color:'#fff'}
};

const Menu = ({history})=>{

    return(<div>
    <div style = {{display: 'flex'}}>
    <div className='a'>
    <Logo/>
    </div>
    <div className='b'>
    <ul className="nav">
    <li className="nav-item">
        <Link style={isActive(history,'/')} className="nav-link" to='/'><HomeIcon style={{ fontSize: 40 }} /></Link>
    </li>  
    <li className="nav-item">
        <Link style={isActive(history,'/about')} className="nav-link" to='/about'><InfoIcon style={{ fontSize: 40 }}/></Link>
    </li> 
    <li className="nav-item">
        <Link style={isActive(history,'/portfolio')} className="nav-link" to='/portfolio'><CodeIcon style={{ fontSize: 40 }}/></Link>
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
    </div>
    )
}









export default withRouter(Menu);