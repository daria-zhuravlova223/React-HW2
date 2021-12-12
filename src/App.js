import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import Pagination from '@mui/material/Pagination';
import ImgMediaCard from './Components/Card/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'


export const api = {
  getPhotos: (query, page = 1) =>`https://pixabay.com/api/?q=${query}&page=${page}&key=16656339-a562499c4313e4a5714644999&image_type=photo&orientation=horizontal&per_page=12`,
}

function App() {

  const [page, setPage] = useState(1);
  const [listPhotos, setListPhotos] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(()=> {
    setLoader(true);

    axios.get(api.getPhotos(query, page))
        .then(res=>setListPhotos(res.data.hits))
        .catch((error)=> setError(error))
        .finally(() => setLoader(false));
}, [query, page]);

  const listJsx = listPhotos.map((item) =>
        <ImgMediaCard img={item.largeImageURL}/>
    )

    const paginationJSX = [1, 2, 3, 4, 5].map(item=> <li key={item} onClick={()=> setPage(item)}>{item}</li>)


  //  const handleChange = (event)=> {
  //   event.setState({value: event.target.value});
  //   }

  const handleSubmit = (event) => {
      setQuery(event.target.search.value);
      event.preventDefault();
  }

  return (
    <>
    <form onSubmit={handleSubmit} className="form">
        <TextField id="outlined-basic" label="Search" variant="outlined" name="search"/>
        <Button variant="contained" type="submit" className="button">Search Image</Button>
      </form>
    <ul className="list">
    
        {listJsx}
        {/* {paginationJSX} */}
       
    </ul>
    <Pagination count={10} onChange={(event,value)=> {setPage(value)}}/>
  </>
  )
}

export default App;
