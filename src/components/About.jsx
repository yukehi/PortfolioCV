import React ,{useEffect} from 'react';
import Menu from '../core/Mnue';
import Body from '../core/Body';
import Fotter from '../core/Fotter';
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import Seed from '../images/Seed.png';
import '../css/about.css';
import '../css/fx.css';
const useStyles = makeStyles({
    root: {
      minWidth: 275,
      backgroundColor:'transparent',
      margin:'3vw 1vw 3vw 1vw',
      color:'white',
      border:' 2px outset white',
      
      
    },
    title: {
      fontSize: '5vw',
      fontFamily: 'Maven Pro',
      '@media only screen and (max-width: 600px)': {
        fontSize: '6vw'
      },
      '@media only screen and (min-width: 600px) and (max-width: 1200px)': {
        fontSize: '3vw'
      },
      '@media only screen and (min-width: 1200px )': {
        fontSize: '1.5vw'
       }
    },
    body:{
        fontSize: '4.2vw',
        fontFamily: 'Cantarell',
      '@media only screen and (max-width: 600px)': {
        fontSize: '5vw'
      },
      '@media only screen and (min-width: 600px) and (max-width: 1200px)': {
        fontSize: '2vw'
      },
      '@media only screen and (min-width: 1200px )': {
        fontSize: '1.2vw'
       }
    },
    
  });

  
  

const About = () => {
    const classes = useStyles();
    useEffect(() => {
        document.body.classList.add('about')
        document.body.classList.add('fadeIn')
        return () => {
            document.body.classList.remove('about');
            document.body.classList.remove('fadeIn');
        };
    }, []);
    return(<div className='container'>
        <Menu/>
        
        <Body
            mainTitle='My story'
            upperUnderTitle='The root reason I started programming'
            midContant='Five months ago I had an idea that I was passionate to realize. This was the turning point for me and I made the decision to learn programming. I was told that learning programming would be difficult for me because of my dyslexia and attention deficit disorder, but I was willing to take the challenge. By self-learning and mentorship, I quickly fell in love with code writing, problem solving and the development of initial ideas into the implementation. Obviously it is impossible to learn everything in such a short time, but I was able to establish initial skills, and master some of the latest technologies. My conclusion about programming is that anyone can learn it, but should be aware that the learning never ends.'
        />
        
        <div className="table fadeIn">
           <Card className={classes.root} variant="outlined">
           <CardContent>
            <Typography className={classes.title}>
            Philosophy
            </Typography>
            <Typography className={classes.body}>
            Everything is possible to solve, all we need is collaboration of creative and problem solving mindsets, and the ability of learning from every experience, bad or good.
            </Typography>
            
            
           </CardContent>
           </Card>

           <Card className={classes.root} variant="outlined">
           <CardContent>
            <Typography className={classes.title}>
            Languages
            </Typography>
            <List>
            <Typography className={classes.body}>
            Html
            </Typography>
            <Typography className={classes.body}>
            Css
            </Typography>
            <Typography className={classes.body}>
            Javascript
            </Typography>
            </List>
            
           </CardContent>
           </Card>

           <Card className={classes.root} variant="outlined">
           <CardContent>
            <Typography className={classes.title}>
            Framework and Tools
            </Typography>
            <List >
            <Typography className={classes.body}>
            Node/Express
            </Typography>
            <Typography className={classes.body}>
            React
            </Typography>
            <Typography className={classes.body}>
            Bootstrap
            </Typography>
            <Typography className={classes.body}>
            Material-ui
            </Typography>
            <Typography className={classes.body}>
            Git
            </Typography>
            </List>
            
           </CardContent>
           </Card>

        </div>
        <div className='img-seed-box'><img className='seed-img' src={Seed} alt="Seed"/></div>
        <div className='btn-box-contact'>
            <Link className='link bold btn btn-outline-about' to='/portfolio'><h4 className='btn-text'>View Portfolio</h4></Link>
        </div>
        <Fotter/>
        
    </div>)


}

export default About;