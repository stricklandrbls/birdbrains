import "./Banner.css";
import banner_img from "../../assets/images/artist.jpg";

function Banner() {
    return(
        <div class="banner w3-display-container w3-center w3-mobile">
            <br></br>
            <img src={banner_img} class="w3-mobile"/>
        </div>
    );
}

export default Banner;