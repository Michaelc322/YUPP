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


    const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


    const [coordinates, setCoordinates] = useState({})
    // const [places, setPlaces] = useState([])
    const [bounds, setBounds] = useState({})

    const places = [
        {
            name: 'McDonalds',
            price: '$',
            distance_string: '0.5 mi',
            address: '1234 Main St'

        },
        {
            name: 'Burger King',
            price: '$',
            distance_string: '0.5 mi',
            address: '1234 Main St'
            
        },
        {
            name: 'Chick-fil-a',
            price: '$',
            distance_string: '0.5 mi',
            address: '1234 Main St'
            
        },
        {
            name: 'Chipotle',
            price: '$',
            distance_string: '0.5 mi',
            address: '1234 Main St'
            
        },
        {
            name: 'Taco Bell',
            price: '$',
            distance_string: '0.5 mi',
            address: '1234 Main St'
            
        },
        {
            name: 'Wendys',
            price: '$',
            distance_string: '0.5 mi',
            address: '1234 Main St'
            
        },
        {
            name: 'Popeyes',
            price: '$',
            distance_string: '0.5 mi',
            address: '1234 Main St'
            
        },
        {
            name:'Madison Social',
            price: '$$',
            distance_string: '0.5 mi',
            address: '1234 Main St',
            lat: 30.43684071311915,
            lng: -84.29809147509647,
        },
        {
            name: 'Little Masa',
            price: '$$',
            distance_string: '0.5 mi',
            address: '1234 Main St',
            lat: 30.43685178918325, 
            lng: -84.29704844462029
        }



    ]
    const getPlacesData = async (sw, ne) => {
        try {
            const { data: { data }} = await axios.get(URL, {
                params: {
                    bl_latitude: sw.lat,
                    tr_latitude: ne.lat,
                    bl_longitude: sw.lng,
                    tr_longitude: ne.lng,
                    lunit: 'mi'
                  },
                  headers: {
                    'x-rapidapi-key': '47ffb58032mshfc379c19437d4ebp18eaf5jsnd1bf0da65be2',
                    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
                  }
            })

            return data
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
          setCoordinates({lat: latitude, lng: longitude});
        })
      }, []);

    useEffect(() => {
        console.log(coordinates, bounds);
        getPlacesData(bounds.sw, bounds.ne).then((data) => {
            //setPlaces(data)
            console.log(places)
        })
    }, [coordinates, bounds])

  return (
    <>
    <SearchContainer>
        <Header>
            Deals For You
        </Header>
        <Search placeholder='Search for a restaurant. . .'>
        
        </Search>
    </SearchContainer>

    <Map setBounds={setBounds}
        setCoordinates={setCoordinates}
        coordinates={coordinates}
        places={places}/>


    <DealCards places={places}/>
    </>
  )
}

export default Restaurants