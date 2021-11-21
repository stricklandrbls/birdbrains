import Artist from "./Artist";

function FeaturedArtists(){
    const artists = [
        {
            name: "Tyler Conrad", 
            socials: [{
                instagram: "@tylerteatime",
                twitter: "@tttime",
                website: "https://tylerteatime.com"
            }]},
        {   name: "Jason Wong",
            socials: [{
                instagram: "@JWong",
                twitter: "@JJWongTwitter"
            }]},
        {   name: "Brooke Clarke",
            socials: [{
                website: "https://bclarke.com"
            }]}
    ]
    
    return (
        <table class="w3-table w3-responsive w3-mobile">
        <tr>
            <Artist name={artists[0].name} socials={artists[0].socials} />
            <Artist name={artists[1].name} socials={artists[1].socials} />
            <Artist name={artists[2].name} socials={artists[2].socials} />
        </tr>
      </table>
    );
}

export default FeaturedArtists;