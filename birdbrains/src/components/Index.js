import { useState, useEffect } from 'react';
import { api_uri } from '../utils/globals';
import Banner from './Banner/Banner';
import Statement from './Statement/Statement';
import FeaturedArtists from './FeaturedArtists/FeaturedArtists';

function Index(){

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
        </span>
      );
}

export default Index;