import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import '../css/card.css';

const useStyles = makeStyles({
    root: {
      maxWidth: 'auto',
      margin:'3% 3% 3% 3% '
    },
    media:{
      objectFit:'contain'
    }
  });

const CardSet = (props) => {
    const classes = useStyles();

    return (<a className='link' href={props.url}>
    <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={props.title}
            height="400"
            image={props.image}
            title="Contemplative Reptile"
            className={classes.media}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.body}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </a>)
}

export default CardSet;