import { useState, useEffect } from 'react';
import { api_uri } from '../utils/globals';
import Banner from './Banner/Banner';
import Statement from './Statement/Statement';
import FeaturedArtists from './FeaturedArtists/FeaturedArtists';

function Index(){
  const[data, getData] = useState(null);
  useEffect(() =>{
    fetch(api_uri)
    .then((res) =>{
      res = res.json()
      .then((data) =>{
        getData(data.message);
      })
    })
    // .then((data) => getData(data.message));
  }, [])

  return (
        <span>
          <div class="w3-row">
            <Banner/>
          </div>
          <div class="w3-row">
            <Statement/>
          </div>
          <div class="w3-row featured_artists">
          <br></br>
            <FeaturedArtists />
          </div>
          <p>{!data? "":data}</p>
        </span>
      );
}

export default Index;