import React from 'react'
import styled from 'styled-components'
import Map from '../map/Map'
import axios from 'axios'
import { useEffect, useState } from 'react'
import DealCards from '../components/DealCards'


const SearchContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 100%;
    position: relative;
    top: 100px;
`

const Header = styled.h1`
    font-size: 35px;
    font-weight: 700;
    color: var(--secondary-text);
    font-family: Montserrat;
    margin-left: 20px;
`

const Search = styled.input`
    height: 35px;
    width: 400px;
    border-radius: 10px;
    border: 1px solid #000;
    padding-left: 20px;
    font-size: 15px;
    font-family: Montserrat;
    font-weight: 300;
    margin-right: 20px;

`



const Restaurants = () => {


    const url = ""
    const [coordinates, setCoordinates] = useState({})
    const [places, setPlaces] = useState([])
    const [bounds, setBounds] = useState({})
    const [currentLocation, setCurrentLocation] = useState({})
    const location = `location=${coordinates.lat},${coordinates.lng}`;
    const radius = '&radius=2000';
    const type = '&keyword=restaurant';
    const key = '&key=AIzaSyDZaDr8KY4EcksgJ5mVXyknwF6OY2eGNuo';
    const restaurantSearchUrl = url + location + radius + type + key;
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('');
    


    const getPlacesData = async (sw, ne) => {

        try {
            const { data } = await axios.get("http://localhost:8000/api/restaurants")
            console.log(data)
            setPlaces(data)
            return data
        } catch (error) {
            console.log(error)
            
        }
    }

    const filteredData = places.filter((item) => {
        return item.restaurantName.toLowerCase().includes(searchTerm.toLowerCase());
    });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
          setCoordinates({lat: latitude, lng: longitude});
          console.log("changed")
          setCurrentLocation({lat: latitude, lng: longitude});
        })
      }, []);

    useEffect(() => {
        console.log(coordinates, bounds);
        console.log(coordinates.lat, coordinates.lng)
        getPlacesData(coordinates.lat, coordinates.lng).then((data) => {
            // setPlaces(data)
        })
    }, [coordinates, bounds])

  return (
    <>
    <SearchContainer>
        <Header>
            Deals For You
        </Header>
        <Search placeholder='Search for a restaurant. . .'
        type='text'
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} >
        
        </Search>
    </SearchContainer>

    <Map setBounds={setBounds}
        setCoordinates={setCoordinates}
        coordinates={coordinates}
        places={filteredData}
        currentLocation={currentLocation}/>

    {/* { loading ? <h1>Loading...</h1> : <DealCards places={places}/>} */}
    <DealCards places={filteredData} 
            currentLocation={currentLocation}/>
    </>
  )
}

export default Restaurants