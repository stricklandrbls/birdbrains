import { useState, useEffect } from "react";
import { api_uri } from "../../utils/globals";
import Artist from "./Artist";
import "./FeaturedArtists.css";
function FeaturedArtists(){
    const databaseArtistsInit = [
        {
            name: "Tyler Conrad", 
            socials: [
                {instagram: "@tylerteatime"},
                {twitter: "@tttime"},
                {desktop: "https://tylerteatime.com"}
            ]},
        {   name: "Jason Wong",
            socials: [
                {instagram: "@JWong"},
                {twitter: "@JJWongTwitter"}
            ]},
        {   name: "Brooke Clarke",
            socials: [
                {desktop: "https://bclarke.com"}
        ]}
    ]
    const[databaseArtists, updateDatabaseArtists] = useState(databaseArtistsInit);
    useEffect(()=>{
        fetch(api_uri+"artists/")
        .then((res)=>{
            res = res.json()
            .then((final)=>{
                updateDatabaseArtists(final);
            })
        })
        .catch()

    },[])

    // console.log(databaseArtists);
    return (
        <span>
            <table class="featured-desktop w3-table w3-responsive w3-mobile">
            <tr>
                <Artist name={databaseArtists[0].name} socials={databaseArtists[0].socials} />
                <Artist name={databaseArtists[1].name} socials={databaseArtists[1].socials} />
                {/* <Artist name={databaseArtists[2].name} socials={databaseArtists[2].socials} /> */}
            </tr>
            </table>
            <div class="featured-mobile w3-cell-row w3-padding">
                <Artist name={databaseArtists[0].name} socials={databaseArtists[0].socials} />
            </div>
            <div class="featured-mobile w3-cell-row w3-padding">
                <Artist name={databaseArtists[1].name} socials={databaseArtists[1].socials} />
            </div>
            <div class="featured-mobile w3-cell-row w3-padding">
                <Artist name={databaseArtists[1].name} socials={databaseArtists[2].socials} />
            </div>
      </span>
    );
}

export default FeaturedArtists;