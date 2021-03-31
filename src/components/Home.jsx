import React,{useEffect}from 'react';
import profile from '../images/Profile.jpg';
import Tab from '../core/Tab';
import '../css/home.css';
import About from '../images/About.png';
import Portfolio from '../images/portfilo.png';
import Houbbis from '../images/Hobbis.png';
import Contact from '../images/Conact.png'
import Learn from '../images/Lern.png';
import '../css/fx.css';
// import {Link} from 'react-router-dom';
const Home = () => {
    useEffect(() => {
        document.body.classList.add('background-home')
        document.body.classList.add('fadeIn')
        return () => {
            document.body.classList.remove('background-home');
            document.body.classList.remove('fadeIn');
        };
    }, []);
    return(
        <div className='dashbord '>
        <div className="grid-container">
        
        <Tab
                    img={profile}
                    mainTitle='Aleksey Zgeria'
                    body='Web Developer'
                    to=''
                    tabClass='home tab-no'
                    tab=''
                    
                />
        <Tab
                    img={About}
                    mainTitle='About'
                    body='Shattering the status quo.'
                    to='/about'
                    tabClass='about tab'
                    className='tab'
                    tab='hover'
                />
        <Tab
                    img={Portfolio}
                    mainTitle='Portfolio'
                    body='From idea to app, it’s all here.'
                    to='/portfolio'
                    tabClass='portfolio tab'
                    tab='hover'
                />
     </div>
     <div className="grid-container">
        <Tab
                    img={Houbbis}
                    mainTitle='Interests'
                    body='Check my other skills'
                    to='/hobbies'
                    tabClass='hobbies tab'
                    tab='hover'
                />
        <Tab
                    img={Contact}
                    mainTitle='Contact'
                    body='Ready to make something special? Me too!'
                    to='/contact'
                    tabClass='contact tab'
                    tab='hover'
                />
        <Tab
                    img={Learn}
                    mainTitle='Quote'
                    body='"Learn from every experience"'
                    to='/'
                    tabClass='experimental tab-no'
                    tab=''
                />
     </div>
     </div>
    
            
            

            )


}

export default Home;