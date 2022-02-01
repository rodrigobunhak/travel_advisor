import React from 'react';
import { Box, Typography, Button, Card, CardMedia, cardContent, CardActions, Chip, CardContent } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

const PlaceDetails = ({ place }) => {
  const classes = useStyles();
  
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={place.photo ? place.photo.images.large.url : 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="5">{place.name}</Typography>
      </CardContent>

    </Card>
  );
}

export default PlaceDetails;