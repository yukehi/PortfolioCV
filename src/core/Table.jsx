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
      margin:'3% 3% 3% 3%',
      color:'white',
      border:' 2px outset white'
      
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
             <Typography className={classes.title}>
              {props.Title}
             </Typography>
             <Typography className={classes.body}>
             {props.body}
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