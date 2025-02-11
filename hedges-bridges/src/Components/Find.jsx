import React, { useState, useEffect } from 'react';
import '../Styles/Search.css';
import { useNavigate } from 'react-router-dom';
import { SlCalender } from "react-icons/sl";
import { searchablePages } from '../Components/data';

const Find = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPages, setFilteredPages] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredPages([]); 
      setFilteredResults([]); 
      return;
    }

    //  case-insensitive matching
    const regex = new RegExp(searchQuery, 'i'); 

    const filtered = searchablePages.filter((page) => regex.test(page.name));
    setFilteredPages(filtered);

    // Fetch results from backend (debounced)
    const fetchResults = async () => {
      try {
        const response = await fetch(`http://localhost:5000/search?q=${searchQuery}`);
        const data = await response.json();
        setFilteredResults(data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    const debounceTimer = setTimeout(fetchResults, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  return (
    <div className='findContainer'>
      <div className='searchContainer'>
        <div className='searchBar'>
          <input
            type='text'
            placeholder='Search for something...'
            className='searchBar'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {(filteredPages.length > 0 || filteredResults.length > 0) ? (
        <div className="searchResults">
          {/* Static Page Matches */}
          {filteredPages.map((page) => (
            <div key={page.id} className='search-item' onClick={() => navigate(page.path)}>
              <p>{page.name}</p>
            </div>
          ))}

          {/* Backend Search Results */}
          {filteredResults.map((result) => (
            <div key={result.id} className='search-card'>
              <h2>{result.title}</h2>
              <ul className='search-date'>
                <li className='date'>
                  <span className='dateIcon'><SlCalender /></span>
                  <span><strong>{result.date}</strong></span>
                </li>
              </ul>
              <p>({result.type})</p>
              <button className='read-more' onClick={() => navigate(`/${result.type}/${result.id}`)}>Read</button>
            </div>
          ))}
        </div>
      ) : (
        searchQuery && <p className="no-results">No result "{searchQuery}"</p>
      )}
    </div>
  );
};

export default Find;
