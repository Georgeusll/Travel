import React from 'react'
import Layout from '../components/layout'
import styled from "styled-components"
import Trips from '../components/Trips'
const trips = () => {
    return (
       <Layout >
           <TripsBlock>
            
           </TripsBlock>
            <Trips />
           
            </Layout>
    )
}

export default trips

const TripsBlock = styled.div
`
background: #0c0c0c;
height: 10vh;
margin-top: -80px;


`
