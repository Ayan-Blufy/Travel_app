import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'
import PlaceDetails from './components/PlaceDetails/PlaceDetails'
import { CssBaseline, Grid } from '@material-ui/core'
import { solve } from './api'




function App() {

  const [places, setPlaces] = useState([]);
  const [filter, setFilter] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [childclicked, setChildClicked] = useState('');
  const [isloading, setLoading] = useState(false);
  const [type, setType] = useState('restaurants');

  const [rating, setRating] = useState('0');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setLoading(true);
      solve(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data);
        setFilter([]);
        setLoading(false);
 
      })
    }
  }, [type, bounds])


  useEffect(() => {

    const data1 = places?.filter((ele) => ele.rating > rating);

    setFilter(data1);

  }, [rating])

  return (









    <>

      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>

          <List places={filter.length ? filter : places} childclicked={childclicked} isloading={isloading} setType={setType} setRating={setRating} type={type} rating={rating} />


        </Grid>
        <Grid item xs={12} md={8}>

          <Map places={filter.length ? filter : places} setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} setChildClicked={setChildClicked} />


        </Grid>
      </Grid>










    </>
  );
}

export default App;
