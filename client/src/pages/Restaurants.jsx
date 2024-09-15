import React from 'react'
import styled from 'styled-components'
import Map from '../map/Map'

const DealCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    height: 300px;
    width: 350px;
    background-color: var(--logo-background);
    margin: 20px;
    border-radius: 10px;
    box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.4);
    top: -100px;
    position: relative;

`

const Distance = styled.p`
    font-size: 15px;
    font-weight: 300;
    color: #fff;
    font-family: Montserrat;
    margin-left: 20px;
    background-color: var(--secondary-text);
    width: 50px;
    padding: 5px;
    border-radius: 10px;
`

const Name = styled.h1`
    font-size: 25px;
    font-weight: 700;
    color: var(--secondary-text);
    font-family: Montserrat;
    margin: 0;
    margin-left: 20px;

`

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

    

  return (
    <>
    <SearchContainer>
        <Header>
            Deals For You
        </Header>
        <Search placeholder='Search for a restaurant. . .'>
        
        </Search>
    </SearchContainer>

    <Map/>


    <DealCard>
        <Distance>0.5 mi</Distance>
        <Name>placeholder name</Name>

    </DealCard>
    </>
  )
}

export default Restaurants