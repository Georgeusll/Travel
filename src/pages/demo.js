import React from 'react'
import styled from "styled-components"

const demo = () => {
    return (
       <DemoTitle>

           <h1> Demo Page </h1>
            <p> Here will be demo</p>


       </DemoTitle>
            
        
    )
}

export default demo

const DemoTitle = styled.div
`
p
{
    text-align:center;
}
h1
{
    text-align: center;
    color: red;
}

`