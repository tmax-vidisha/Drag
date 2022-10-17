// @ts-nocheck


import React from 'react'
import {Card,CardActionArea,CardContent,Typography,CardActions,Button} from '@mui/material'
// import {} from "@mui/material";
// import CardMedia from "@mui/material";
// import CardContent from "@mui/material";
// import Typography from "@mui/material";
// import {Button } from "@mui/material";
// import CardActions from "@mui/material";

const CustomCard = React.forwardRef((props, ref) => (
    
    <Card ref={ref}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.children}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  ));

export default CustomCard