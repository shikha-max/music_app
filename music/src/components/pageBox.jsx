
import styled from 'styled-components'


export const PageBox=({num,func})=>{
   const ONCLICK=()=>{
       console.log(num);
       func(num)
   }
    return<>
    
     <Box onClick={ONCLICK}>{num}</Box>
    </>
}


const Box= styled.div`
cursor:pointer;
width:30px;
height:25px;
background:#9E9E9E;
border-radius:3px;
font-family:'Montserrat'
font-weight:600;
margin:3px;
justify-content:center;
align-items: center;
display:flex;
`
