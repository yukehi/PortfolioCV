import React from 'react';
import Logo from './Logo';
import '../css/fotter.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';



const Fotter = () => {
    return(<div className="fotter">
        <div className="copyright"><h4 className="logo-title">©2021 aleksey zgeria</h4></div>
        <div className="icons">
        <a className='icon' href="https://www.linkedin.com/in/aleksey-zgeria/"><LinkedInIcon style={{ fontSize: 40 }}/></a>
        <a className='icon' href="https://github.com/yukehi"><GitHubIcon style={{ fontSize: 30 }}/></a>
        </div>
        
    </div>)

}


export default Fotter