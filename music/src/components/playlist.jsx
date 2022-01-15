import styled from "styled-components";



export const PlaylistBoxes = (song, count) => {

    
    return <Box >
        <div>{song.count + 1}</div>
        <img src={song?.song.img} alt="song" />
        <div>{song?.song.name}</div>

        <div>
           {song?.song.monthlyListeners}
        </div>
        
        <div>{song.song?.duration}</div>
        
    </Box>
}

const Box = styled.div`
   
    width:776px;
    background: #616161;
    cursor:pointer;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 8px 40px;
    &:hover{
    background: rgba(255, 255, 255, 0.15);
    &>img:nth-child(5),
    &>img:nth-child(7){
        visibility:visible;
    }
    }
    &>div:nth-child(1){
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
        color: #FFFFFF;
    }
    &>div:nth-child(3){
        width:234px;
      
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #FFFFFF;
    }
    &>div:nth-child(4){
        width:100px;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        color: #FFFFFF;
        margin-left:15%;
    }
    &>div:nth-child(6){
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        color: #FFFFFF;
        margin-left:4%;

    }
    &>img{
        width:40px;
        margin: 0px 20px;
    }
    &>img:nth-child(5){
        visibility:hidden;
        width:24px;
        margin: 0px;

    }
    &>img:nth-child(7){
        width:24px;
        margin: 4%;
        visibility:hidden;
    }
    &>img:nth-child(5):hover{
        /* width:24px;
        margin: 4%;
        visibility:hidden; */
        src:"http://localhost:3000/heartwhite.svg";
    }
`;
