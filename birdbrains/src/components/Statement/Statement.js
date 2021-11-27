import "./Statement.css";

function Statement(){
    const release_date = new Date(2021, 12, 25).toISOString();
    return(
        <div class="w3-container w3-center statement">
            <h2 styles="font-family: 'Playfair Display', serif;">SmartChain's commitment to artists,</h2>
            <br></br>
            <p>Here at SmartChain, we aim to provide a gateway for digital artists who wish to sell their art as NFTs.</p>
            <p>We understand that the complexity of NFTs, cyrptocurrency, and well, just about anything blockchain related, can be difficult for newcomers.
                That's why we are committed to helping artists understand and flourish in this digital landscape.
            </p>
            <h3>SmartChain is set to mint it's first collection on: <b>{release_date}</b></h3>
        </div>
    );
}

export default Statement;