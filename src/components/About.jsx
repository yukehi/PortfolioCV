import React ,{useEffect} from 'react';
import '../css/about.css';
import Menu from '../core/Mnue';
import Body from '../core/Body';
import Fotter from '../core/Fotter';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import '../css/fx.css';
import { makeStyles } from '@material-ui/core/styles';
import Seed from '../images/Seed.png';
const useStyles = makeStyles({
    root: {
      minWidth: 275,
      backgroundColor:'transparent',
      margin:'0 3% 0 3%',
      color:'white',
      border:' 2px outset white',
      
    },
    title: {
      fontSize: 25,
      fontFamily: 'Maven Pro',
    },
    body:{
        fontSize: 18,
        fontFamily: 'Cantarell',
    }
    
  });



  

const About = () => {
    const classes = useStyles();

    useEffect(() => {
        document.body.classList.add('background-about')
        document.body.classList.add('fadeIn')
        return () => {
            document.body.classList.remove('background-about');
            document.body.classList.remove('fadeIn');
        };
    }, []);
    return(<div className='container'>
        <Menu/>
        
        <Body
            mainTitle='The Root'
            upperUnderTitle='reason why I started with programming'
            midContant='Five months ago I made a decision to study programming, I was told that learning programming would be difficult for me because of my dyslexia and attention deficit disorder, but after I started soon I fell in love with code writing and development, from initial ideas to application, it was not easy at all. In self learning. Obviously it is impossible to learn everything in such a short time, but I was able to establish the initial skills, and mastering some of the latest technologies, my conclusion regarding programming is that anyone can learn it, but must be aware that learning never ends.'
        />
        <div className='img-seed'><img className='seed' src={Seed} alt="Seed"/></div>
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
                <ListItemText primary="Html"/>
                <ListItemText primary="Css"/>
                <ListItemText primary="Javascript"/>
                <ListItemText primary="Python"/>
            </List>
            
           </CardContent>
           </Card>

           <Card className={classes.root} variant="outlined">
           <CardContent>
            <Typography className={classes.title}>
            Framework
            </Typography>
            <List>
                <ListItemText primary="Node/Express"/>
                <ListItemText primary="React"/>
                <ListItemText primary="Bootstrap"/>
                <ListItemText primary="Material-ui "/>
                <ListItemText primary="Git"/>
            </List>
            
           </CardContent>
           </Card>

        </div>
        <Fotter/>
        
    </div>)


}

export default About;