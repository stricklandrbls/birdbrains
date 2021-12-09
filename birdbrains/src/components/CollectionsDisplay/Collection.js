import logo from "../../assets/images/image.png"
import "./Collection.css"

function Collection(){
    return(
        <div class="collection w3-row w3-card w3-round w3-hover-shadow w3-margin-top w3-white">
            <img src={logo} />
            <div class="w3-padding">
                <h2>Name</h2>
                <p>Artist</p>
                <p>Network icon</p>
            </div>
        </div>
    )
}

export default Collection;