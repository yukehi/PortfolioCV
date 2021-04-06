import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LinkIcon from '@material-ui/icons/Link';

const useStyles = makeStyles({
    root: {
      minWidth: 300,
      backgroundColor:'transparent',
      margin:'5vw 3vw 3vw 3vw',
      color:'white',
      border:' 2px outset white'
      
    },
    title: {
      fontSize: '8vw',
      fontFamily: 'Maven Pro',
      '@media only screen and (max-width: 600px)': {
        fontSize: '4.5vw'
      },
      
      '@media only screen and (min-width: 600px) and (max-width: 1200px)': {
        fontSize: '4vw'  
      },
      
      
      '@media only screen and (min-width: 1200px )': {
        fontSize: '2vw'
       },
    },
    body:{
        fontSize: '3vw',
        fontFamily: 'Cantarell',
        '@media only screen and (max-width: 600px)': {
          fontSize: '3.6vw'
        },
        
        '@media only screen and (min-width: 600px) and (max-width: 1200px)': {
          fontSize: '3vw'  
        },
        
        
        '@media only screen and (min-width: 1200px )': {
          fontSize: '1.5vw'
         },
    },
    Languages:{
      fontSize: '5vw',
      fontFamily: 'Maven Pro',
      margin:'2vw 0 2vw 0 ',
      '@media only screen and (max-width: 600px)': {
        fontSize: '4.0vw',
        margin:'2vw 0 2vw 0 ',
      },
      
      '@media only screen and (min-width: 600px) and (max-width: 1200px)': {
        fontSize: '3vw',
        margin:'1vw 0 1vw 0 ',  
      },
      
      
      '@media only screen and (min-width: 1200px )': {
        fontSize: '1.5vw',
        margin:'0.5vw 0 0.5vw 0 ',
       },
    }
    
  });

  

const Table = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
    <CardContent>
         <div className="upper-table">
             <div className='title-table-box'>
                 <Typography className={classes.title}>
                  {props.appName}
                  </Typography>
             </div>
              <div className='app-table-box' >
                 <Typography className={classes.title}>
                 {props.type}
                 </Typography></div>
     
             </div>
         <hr/>
     <div className='grid-container-portfolio'>
         <div className='body'>
             <Typography  className={classes.title}>
              {props.Title}
             </Typography>
             <Typography className={classes.body}>
             {props.body}
             </Typography>
             <Typography className={classes.Languages}>
             {props.Languages}
             </Typography>
         </div>
         <div className='btn-box'>
             <a className='link-box' href={props.link} target='_blank' rel="noreferrer"><button className='btn btn-light '><LinkIcon/></button></a>
         </div>
     </div>
    </CardContent>
    </Card>
  );
}

export default Table;