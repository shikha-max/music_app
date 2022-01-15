
import {SearchBar} from'./searchBar'
//import styled from 'styled-components'
import {Body} from './body'
import {useParams} from 'react-router-dom'
import {useEffect,useState} from 'react'
import axios from 'axios'
import {PlaylistBoxes} from './playlist'
import {Link} from 'react-router-dom'
import { Audio } from "react-loader-spinner";
import { PageBox } from './pageBox'
import {Div} from './homepage'
import {Sidebar} from './sidebar'
import {Container} from './homepage'
export const Songspage=()=>{
const [song,setSong] =useState([])
const [load,setLoad]= useState(true)
const {albumid}= useParams()
const [page,setPage]= useState(1)
const [pagearr,setPgearr]= useState([])
    useEffect(()=>{
        getSongs()
        
    },[page])
let arr=[]
    const getSongs= async()=>{
        let res= await axios.get(`https://vast-tan-yak-gear.cyclic.app/album/${albumid}/songs?page=${page}`)
       
        for(var i=1;i<=res.data.totalpage;i++){
            arr.push(i)
        }
       
        setSong(res.data.song)
        setLoad(false)
        setPgearr(arr)
        

    }

    const handlechange=(val)=>{
        setLoad(true)
        setPage(val)
    }
    
    return<>
    <Container>
        <div>
<Sidebar>
<Link to={`/`} style={{textDecoration:"none"}}> <h2>GO HOME</h2></Link>
</Sidebar>
        </div>

        <div>
        <SearchBar>
     
    </SearchBar>
    <Body display='column' margin='1px'>
           {
               load? <div style={{width:'70%',margin:"200px auto",display:'flex',alignItems:'center',justifyContent:"center"}}>
                   <Audio
               heigth="100"
               marginTop="700px"
               width="100"
               color="grey"
               arialLabel="loading"
              
             />
               </div>:<>
                <div className='parent'>
                {song.map((e,c)=>{
                    return <PlaylistBoxes key={e._id} song={e} count={c}></PlaylistBoxes>
                })}
            </div>
            </>
           }
           <Div>
               {pagearr.map((e)=>{
                   return <PageBox func={handlechange} num={e}></PageBox>
               })}
           </Div>
    </Body>
        </div>
    </Container>
    </>
}