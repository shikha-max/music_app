

import styled from 'styled-components'


export const Sidebar=({children})=>{
return<>
<Sidebardiv>
    {children}
</Sidebardiv>
</>
}

export const Sidebardiv= styled.div`

width:300px;
background:#616161;
height:100vh;
display:flex;
justify-content:center;

padding:10px;
& input{
    margin-top:50px;
    width:90%;
    padding:15px;
    outline:none;
    background:#BDBDBD;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border:none;
    height:40px;
    border-radius:50px;
    font-family: 'Montserrat', "sans-serif";
    font-weight:500;
}
h2{
    color:#9E9E9E;
    font-family:'Montserrat', "sans-serif";
    cursor:pointer;
    margin-top:50px;
}
`