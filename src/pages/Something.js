import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
const Something = () => {

    const data = useStaticQuery(graphql`

    query  {
        img1: allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, 
          name: {in: ["img_1"]}}) {
          edges {
            node {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        img2: allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, 
          name: {in: ["img_2"]}}) {
          edges {
            node {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      


    `
    )
   

   
    
    return (
        <Layout>
    <Navig  />


        <GridArea>
        <header> <Images fluid = {data.img1.childImageSharp.fluid}/>
                 </header>
        <article>
        {data.allFile.edges.map((image, key) => (
                    <Images key = {key}
                     fluid = {image.node.childImageSharp.fluid}
                    />
                ))}
        </article>
        <aside>Author</aside> 
        <nav> Sidebar</nav>
        <footer>footer</footer>
        <something>something</something>
        </GridArea>
        
        </Layout>

    )
}

export default Something
const Navig = styled.div
`
background: #0c0c0c;
height: 8vh;
margin-top: -80px;

h1
{
    
}
`
const GridArea = styled.div`

max-height:60vw;
height: auto;
display: grid;
grid-template-columns: 1fr 2fr 1fr;
grid-template-rows: repeat(2, 1fr) 0.5fr;
grid-column-gap: 27px;
grid-row-gap: 0px; 
background:red;
`
const header = styled.div
`

grid-area: 1 / 2 / 3 / 3; 

`
const aside = styled.div
` grid-area: 1 / 1 / 3 / 2;


`
const article = styled.div
`
grid-area: 1 / 3 / 3 / 4;

`
const nav = styled.div
`
grid-area: 3 / 1 / 4 / 2;

`
const footer = styled.div
`
grid-area: 3 / 2 / 4 / 3; 

`
const something = styled.div`
grid-area: 3 / 3 / 4 / 4; `


const Images = styled(Img)
`
display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  max-height:40%;

border-radius: 10px;
height: 100%;
@media screen and (max-width: 768
    px)
{
    

}

`