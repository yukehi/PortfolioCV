import React ,{useEffect} from 'react';
import Menu from '../core/Mnue';
import Body from '../core/Body';
import Fotter from '../core/Fotter';
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
      border:' 2px solid white',
      
      
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
            mainTitle='Root'
            upperUnderTitle='reason why I started with programming'
            midContant='Five months ago I made a decision to study programming, I was told that learning programming would be difficult for me because of my dyslexia and attention deficit disorder, but after I started soon I fell in love with code writing and development, from initial ideas to application, it was not easy at all. In self learning. Obviously it is impossible to learn everything in such a short time, but I was able to establish the initial skills, and mastering some of the latest technologies, my conclusion regarding programming is that anyone can learn it, but must be aware that learning never ends.'
        />
        <div className='img-seed-box'><img className='seed-img' src={Seed} alt="Seed"/></div>
        <div className="table fadeIn">
           <Card className={classes.root} variant="outlined">
           <CardContent>
            <Typography className={classes.title}>
            Philosophy
            </Typography>
            <Typography className={classes.body}>
            Everything is possible to solve, all we need is the right minds, and the creative collaboration between them, and the ability of self-learning 
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
            Framework
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
        <Fotter/>
        
    </div>)


}

export default About;