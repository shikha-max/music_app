
import styled from 'styled-components'


export const SearchBar=({children})=>{
    return<>
    <Bar>
       {children}
    </Bar>
    </>
}


export const Bar= styled.div`

width:1100px;
background:#424242;
height:48px;
display:flex;
justify-content:center;
align-items: center;
padding:10px;
& input{
    width:30%;
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
}

`