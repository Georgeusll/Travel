import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import{Button} from '../components/Button'
import Img from 'gatsby-image'
const Something = ({data}) => {

    
   

   
    
    return (
        <Layout>
    <Navig  />


        <GridArea>
        <header> 
          <Limage fluid = {data.img1.childImageSharp.fluid}  
          alt = "something alt" />
          <h3>Menu</h3>
          <p>Xinkali.................$1<br/>
            Mtsvadi..................$2<br/>
            Qababi...................$3
            
            
          </p>
                 </header>
        <article>
        <Midimage fluid = {data.img2.childImageSharp.fluid}  
          alt = "something else alt" />
        </article>
        <aside><Rimage fluid = {data.img3.childImageSharp.fluid}  
          alt = "something elses alt" /></aside> 
        <nav> 
           <p css={`position:relative;top:30%`}>Sidebar</p> 
           
            </nav>
        <footer><p>this is a remplate of the restaurant which I created to check if the design is applicable for users of the computer and phone devices
          Turns out that is is not as smooth as I imagined it but there can be somet hings done for this....I hopewelp
          rip. THis restorant will offer you something something interesting, good food, amazing service
          all good all alright
          
        </p></footer>
        <something>
         
            <p css={`position:relative;top:30%`}>something something will be placed here that is good and will provoke the user to push this button</p>
        <Button to = "/somewhere" primary = "true" round = "true" 
                css={
                  `
                  
                
                 top:40%;
               position:relative;
                
                font-size: 14px;
                
                `

              }>
                
                
                
                somewhere </Button>
                
        </something>
        </GridArea>
        
        </Layout>

    )
}

export default Something
export const query = graphql`
query  {
  img1:file(relativePath: {eq: "img_menu1.jpg"}) {
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid
					}
    }
  }
  img2:file(relativePath: {eq: "img_rest.jpg"}) {
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid
					}
    }
  }
  img3:file(relativePath: {eq: "img_cust.jpg"}) {
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid
					}
    }
  }

}

`

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

max-height:50vw;
height: auto;
display: grid;
grid-template-columns: 1fr 2fr 1fr;
grid-template-rows: repeat(2, 1fr) 0.5fr;
grid-column-gap: 20px;
grid-row-gap: 0px; 

text-align:center;

background:red;


`
const header = styled.div
`
max-height:100%;
max-width:100%;
background:blue;
grid-area: 1 / 2 / 3 / 3; 


`
const aside = styled.div
` grid-area: 1 / 1 / 3 / 2;


`
const article = styled.div
`
margin-bottom:10px;
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

grid-area: 3 / 3 / 4 / 4; 

`


const Limage = styled(Img)
`
display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  max-height:70%;

  border-radius: 10px;
height: auto;
@media screen and (max-width: 768
    px)
{
    

}


`
const Midimage = styled(Img)
`
position:relative;
max-height:80%;
top:50px;
margin-top:20px;
display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  
border-radius: 10px;

@media screen and (max-width: 768
    px)
{
    

}
`
const Rimage = styled(Img)
`
display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  max-height:70%;

border-radius: 10px;
height: 50%;
@media screen and (max-width: 768
    px)
{
    

}


`