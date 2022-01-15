
import styled from 'styled-components'

export const Album=({data})=>{
    return <>
    <Albumdiv>
        <div>
        <img src={data.img} alt="" />
        </div>
        <div className='art'>
            {data.artist.name}
        </div>

    </Albumdiv>

    
    
    </>
}


let Albumdiv =styled.div`
width:70%;
background: #181818;
mix-blend-mode: normal;
border-radius: 4px;
padding:5px;
margin: 0px 16px;
transition: .3s ease-in-out;
&:hover{
background: #282828;
}

& img{
    max-width:100%;
    border-radius: 10px;

}


.art{
    font-style: normal;
    font-weight:600;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    font-family:'Montserrat';
    background:#282828;;
}

&>div:nth-child(3){
    visibility:hidden;
    position:relative;
    left: 75%;
    bottom: 40%;
    width:40px;
    height:40px;
    border-radius: 28px;
    background-color:#1DB954;
    transition: all 33ms cubic-bezier(.3,0,0,1);
}

&>div:nth-child(3)>img{
    position: relative;
    left: 0;
    top: 0;
    transform:scale(.8)

}

@media only screen and (max-width: 600px) {
        width:45%;
  }
`;