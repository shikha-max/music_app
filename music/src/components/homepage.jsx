import { Body } from "./body";
import { Album } from "./albumDiv";
import { useEffect, useState } from "react";
import axios from "axios";
import { SearchBar } from "./searchBar";
import { Link } from "react-router-dom";
import { useCallback } from "react";
import { Audio } from "react-loader-spinner";
import { PageBox } from "./pageBox";
import styled from "styled-components";
import { Sidebar } from "./sidebar";
export const Homepage = () => {
  const [album, setAlbum] = useState([]);
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
    const [arr1,setarr]= useState([])
    const [page,setPage]= useState(2)
  let arr = [];
  useEffect(() => {
    getAlbums();
  }, [page]);

  let getAlbums = async () => {
    let res = await axios.get(`https://vast-tan-yak-gear.cyclic.app/album?page=${page}`);

    for (var i = 1; i <= res.data.totalpage; i++) {
      arr.push(i);
    }

   setarr(arr)
    setLoad(false);
    setAlbum(res.data.data);
    setData(res.data.data);
  };


  const pageChange=(value)=>{
      setLoad(true)
            setPage(value)
  }

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const handlechange = (e) => {
    const { value } = e.target;
    console.log(value.lenght);
    setLoad(true);
    setText(value);
    fetch(`https://vast-tan-yak-gear.cyclic.app/album/search?q=${value}`)
      .then((res) => res.json())
      .then((res) => {
        setLoad(false);
        setData(res.data);
      });
  };

  const magic = useCallback(debounce(handlechange), []);

  return (
    <>
    
     <Container>
         <div>
             <Sidebar>
             <input placeholder="Enter album name" onChange={magic}></input>
            
   {/* <div className='select'>
   <select name="format" id="format">
      <option selected disabled>Choose a book format</option>
      <option value="Romantic">Romantic</option>
      <option value="Party">Party</option>
      <option value="Pop">Pop</option>
      <option value="filmi">filmi</option>
      
   </select>
   </div>
 */}

             </Sidebar>
         </div>

         <div>
         <SearchBar>
       
        
      </SearchBar>
      <Body display="row" margin="8px">
        <div className="parent">
          {load ? <div style={{width:'70%',margin:"200px auto",display:'flex',alignItems:'center',justifyContent:"center"}}>
                   <Audio
               heigth="100"
               marginTop="700px"
               width="100"
               color="grey"
               arialLabel="loading"
              
             />
               </div> : (
            <>
              {text === undefined || text === ""
                ? album.map((e) => {
                    return (
                      <Link
                        to={`/album/${e._id}`}
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          width: "30%",
                          flexWrap: "wrap",
                        }}
                      >
                        {" "}
                        <Album key={e._id} data={e}></Album>
                      </Link>
                    );
                  })
                : data.map((e) => {
                    return (
                      <Link
                        to={`/album/${e._id}`}
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          width: "30%",
                          flexWrap: "wrap",
                        }}
                      >
                        {" "}
                        <Album key={e._id} data={e}></Album>
                      </Link>
                    );
                  })}
            </>
          )}
        </div>
        <Div>
          {arr1.map((e) => {
            return <PageBox func={pageChange} num={e}></PageBox>;
          })}
        </Div>
      </Body>
         </div>
     </Container>
    </>
  );
};

export const Div = styled.div`
  display: flex;
  width: 50%;
  margin: 30px auto 0;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

export const Container=styled.div`

display:flex;
`