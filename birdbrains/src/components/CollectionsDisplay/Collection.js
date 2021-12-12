import logo from "../../assets/images/image.png"
import "./Collection.css"

function Collection(props){
    return(
        <div>
            <div class="desktop">
                <div class="collection w3-row w3-card w3-round-xlarge w3-hover-shadow w3-margin-top w3-white">
                    <div class="w3-display-container">
                        <img src={logo} class="w3-round-xlarge"/>
                        <div class="glass w3-display-bottomleft w3-round-xlarge w3-padding w3-responsive">
                            <h2 class="w3-responsive">Name</h2>
                            <p>Artist</p>
                        </div>
                    <div class="w3-display-topright">Network icon</div>
                    </div>
                </div>
            </div>
            <div class="mobile">
                <div class="w3-display-container w3-round-large w3-card">
                    <img src={logo} class="card_art w3-round-large" />
                    <div class="w3-display-topright">Network</div>
                    <h2 class="w3-padding">Name | <span class="w3-large">Artist</span></h2>
                </div>
            </div>
        </div>
    )
}

export default Collection;