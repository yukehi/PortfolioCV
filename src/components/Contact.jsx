import React ,{useEffect} from 'react';
import Menu from '../core/Mnue';
import '../css/contact.css';
import Body from '../core/Body';
import Fotter from '../core/Fotter';
import '../css/fx.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import {Link} from 'react-router-dom';

const Contact = () => {
    useEffect(() => {
        document.body.classList.add('contact')
        document.body.classList.add('fadeIn')
        return () => {
            document.body.classList.remove('contact');
            document.body.classList.remove('fadeIn');
        };
    }, []);
    return(<div className='container'>
    <Menu/>
    <Body
            mainTitle='Hello'
            upperUnderTitle='i will be Happy to collaborate'
            midContant='If you are just starting out your site or app, or if you already have a product that requires improvement and maintenance, I would love to work together, you can contact me through the following'
        />
        <hr className='border'/>
    <div className='card-box'>
        <div className='icon action' ><a className='icon action' href='mailto:alekseyzgeria@gmail.com'><MailOutlineIcon style={{ fontSize: '8vh' }}/></a></div>
        <div className='icon action' ><a className='icon action' href='https://www.linkedin.com/in/aleksey-zgeria/'><LinkedInIcon style={{ fontSize: '8vh' }}/></a></div>
        <div className='icon action'><a className='icon action' href='https://github.com/yukehi'><GitHubIcon style={{ fontSize: '8vh' }}/></a></div>
    </div>
        <hr/>
        <div className='btn-box-contact'>
            <Link className='link bold btn btn-outline-light' to='/portfolio'><h4 className='btn-text'>View Portfolio</h4></Link>
        </div>
    <Fotter/>
    </div>)


}

export default Contact;