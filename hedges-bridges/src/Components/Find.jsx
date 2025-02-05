import React, {useState, useEffect} from 'react'
import '../Styles/Search.css'
import { useNavigate } from 'react-router-dom';
import { searchablePages } from '../Components/data';
const Find = () => {

  const [searchQuery, setSearcQuery] = useState('');
  const [filteredPages, setFilteredPages] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate  = useNavigate;

  useEffect(() => {
    const fetchResults = async () => {
      if (!searchQuery.trim()) {
        setFilteredResults([]);
        return;
      }
  
      try {
        const response = await fetch(`http://localhost:5000/search?q=${searchQuery}`);
        const data = await response.json();
        setFilteredResults(data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };
  
    fetchResults(); 
  
  }, [searchQuery]); 


  //filter static pages

  useEffect(()=>{
    const filtered = searchablePages.filter((page)=>
    page.name.toLowerCase().includes(searchQuery.toLocaleLowerCase())
  );
  setFilteredPages(filtered);
  },[searchQuery]);

  return (
    <div>
    <div className='searchContainer'>
    <div className='searchBar'>
      <input type ='text' placeholder='Search for something...' className='searchBar'/>
    </div>
    </div>
    {/* static pages layout */}
    {filteredPages.length>0 &&(
      <div>
        {filteredPages.map((page)=>(
          <div key = {page.id} className='search-item' onClick={()=>navigate(page.path)}>
            <p>{page.name}</p>
          </div>
        ))}
      </div>

    )}
    </div>
  )
}

export default Find
