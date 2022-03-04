import React, { useState, useEffect, createRef } from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, useMediaQuery } from '@material-ui/core'
import makeStyles from './Styles'
import { Scrollbars } from 'react-custom-scrollbars-2'
import PlaceDetails from '../PlaceDetails/PlaceDetails';



const List = ({ places, childclicked, isloading, type, setType, setRating, rating }) => {


  const classes = makeStyles();



  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((refs) => Array(places?.length).fill().map((_, i) => refs[i] || createRef()));
  }, [places]);

  return (
    <>
      <div className={classes.container}>
        <Typography variant="h5">Restaurant & Hotels around you</Typography>
        {isloading ? (
          <div className={classes.loading}>
            <CircularProgress size="5rem" />
          </div>
        ) : (
          <>
            <FormControl className={classes.formControl}>
              <InputLabel id="type">Type</InputLabel>
              <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                <MenuItem value="restaurants">Restaurants</MenuItem>
                <MenuItem value="hotels">Hotels</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="rating">Rating</InputLabel>
              <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                <MenuItem value='0'>All</MenuItem>
                <MenuItem value="3">Above 3.0</MenuItem>
                <MenuItem value="4">Above 4.0</MenuItem>
                <MenuItem value="4.5">Above 4.5</MenuItem>
              </Select>
            </FormControl>

            <Grid container spacing={3} className={classes.list}>
              {/* <Scrollbars> */}
              {places?.map((place, i) => place.name ? (
                <Grid key={i} item xs={12} ref={elRefs[i]} >
                  <PlaceDetails selected={Number(childclicked) === i} refProp={elRefs[i]} place={place} />
                </Grid>
              ) : null)}
              {/* </Scrollbars> */}
            </Grid>
          </>
        )}

      </div>


    </>
  )
}

export default List
