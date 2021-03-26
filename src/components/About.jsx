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
      fontFamily: 'Odibee Sans',
    },
    body:{
        fontSize: 18,
        fontFamily: 'Big Shoulders Display',
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
            mainTitle='About Me'
            upperUnderTitle='this was a long journey'
            midContant='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum rhoncus justo in blandit. Nunc ut auctor tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis in odio sit amet nisi rhoncus pretium sit amet quis tortor. Cras volutpat quam ex, id placerat lectus vestibulum vitae. Praesent ut dictum quam. Nulla ut nibh ipsum. Vestibulum vel purus accumsan, sagittis tortor quis, consequat velit. Etiam in ullamcorper tortor, vitae tempus felis. Quisque sagittis semper volutpat. Pellentesque pretium enim massa, vitae maximus augue dapibus ac. Nulla sagittis lorem non odio interdum suscipit. Praesent porttitor magna quis.'
        />
        <div className="table fadeIn">
           <Card className={classes.root} variant="outlined">
           <CardContent>
            <Typography className={classes.title}>
            Philosophy
            </Typography>
            <Typography className={classes.body}>
            Every problem, possible to solve,
             we need only the right minds to solve
            , the basic values of collaboration is of 
            course creativity between minds 
            </Typography>
            
            
           </CardContent>
           </Card>

           <Card className={classes.root} variant="outlined">
           <CardContent>
            <Typography className={classes.title}>
            Skills
            </Typography>
            <List>
                <ListItemText primary="Drafts"/>
                <ListItemText primary="Drafts"/>
                <ListItemText primary="Drafts"/>
                <ListItemText primary="Drafts"/>
                <ListItemText primary="Drafts"/>
            </List>
            
           </CardContent>
           </Card>

           <Card className={classes.root} variant="outlined">
           <CardContent>
            <Typography className={classes.title}>
            Framework
            </Typography>
            <List>
                <ListItemText primary="Drafts"/>
                <ListItemText primary="Drafts"/>
                <ListItemText primary="Drafts"/>
                <ListItemText primary="Drafts"/>
                <ListItemText primary="Drafts"/>
            </List>
            
           </CardContent>
           </Card>

        </div>
        <Fotter/>
        
    </div>)


}

export default About;