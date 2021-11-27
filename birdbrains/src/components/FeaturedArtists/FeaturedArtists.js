import Artist from "./Artist";
import "./FeaturedArtists.css";
function FeaturedArtists(){
    const artists = [
        {
            name: "Tyler Conrad", 
            socials: [
                {instagram: "@tylerteatime"},
                {twitter: "@tttime"},
                {website: "https://tylerteatime.com"}
            ]},
        {   name: "Jason Wong",
            socials: [
                {instagram: "@JWong"},
                {twitter: "@JJWongTwitter"}
            ]},
        {   name: "Brooke Clarke",
            socials: [
                {website: "https://bclarke.com"}
            ]}
    ]
    
    return (
        <span>
            <table class="featured-desktop w3-table w3-responsive w3-mobile">
            <tr>
                <Artist name={artists[0].name} socials={artists[0].socials} />
                <Artist name={artists[1].name} socials={artists[1].socials} />
                <Artist name={artists[2].name} socials={artists[2].socials} />
            </tr>
        </table>
        <div class="featured-mobile w3-cell-row w3-padding">
            <Artist name={artists[0].name} socials={artists[0].socials} />
        </div>
        <div class="featured-mobile w3-cell-row w3-padding">
            <Artist name={artists[1].name} socials={artists[1].socials} />
        </div>
        <div class="featured-mobile w3-cell-row w3-padding">
            <Artist name={artists[1].name} socials={artists[2].socials} />
        </div>
      </span>
    );
}

export default FeaturedArtists;