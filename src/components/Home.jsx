import React,{useEffect}from 'react';
import profile from '../images/Profile.jpg';
import Tab from '../core/Tab';
import {Link} from 'react-router-dom';
import About from '../images/About.png';
import Portfolio from '../images/portfilo.png';
import Houbbis from '../images/Hobbis.png';
import Contact from '../images/Conact.png'
import Learn from '../images/Lern.png';
import '../css/fx.css';
import '../css/home.css';

const Home = () => {
    useEffect(() => {
        document.body.classList.add('background-home')
        document.body.classList.add('fadeIn')
        return () => {
            document.body.classList.remove('background-home');
            document.body.classList.remove('fadeIn');
        };
    }, []);
    return(<>
        <div className='dashbord '>
        <div className="grid-container">
            <div className='link-home home tab fadeIn'>
                <Tab
                    img={profile}
                    mainTitle='Aleksey Zgeria'
                    body='Web Developer'
                    tabClass='tab-no'
                />
            </div>
            <Link className='link-home about tab tab-hover fadeIn' to='/about'>
                <Tab
                    img={About}
                    mainTitle='About'
                    body='Shattering the status quo.'
                    tabClass='tab'
                />
            </Link>
            <Link className='link-home portfolio tab-hover tab fadeIn' to='/portfolio'>       
                <Tab
                    img={Portfolio}
                    mainTitle='Portfolio'
                    body='From idea to app, it’s all here.'
                    tabClass='tab'
                />
            </Link> 
     
            <Link className='link-home hobbies tab-hover tab fadeIn' to='/hobbies'>
                <Tab
                    img={Houbbis}
                    mainTitle='Interests'
                    body='Check my other skills'
                    tabClass='tab'
                />
            </Link>
            <Link className='link-home contact tab-hover tab fadeIn' to='/contact'>       
                <Tab
                    img={Contact}
                    mainTitle='Contact'
                    body='Ready to make something special?'
                    tabClass='tab'
                />
            </Link> 
            <div className='link-home experimental tab fadeIn' to=''>        
                <Tab
                    img={Learn}
                    mainTitle='Mantra'
                    body='"Learn from every experience"'
                    tabClass='tab-no'
                />
            </div> 
     </div>
     </div>
    
            
            

            </>)


}

export default Home;