
import styled from 'styled-components'

export const Body=({children,display,margin})=>{
   
    return<>
  <BodyLayout displays={display} margin={margin}>
  {children}
  </BodyLayout>
    
    </>
}



const BodyLayout=styled.div`

background:#121212;
width:1100px;
min-height:580px;
justify-content: center;
align-items: center;
.parent{
   width:70%;
   margin:40px auto;
   display:flex;
flex-direction:${props => props.displays};
flex-wrap:wrap;

& div{
    margin:${props=>props.margin};
}

   justify-content: center;
    align-items: center;
}

`