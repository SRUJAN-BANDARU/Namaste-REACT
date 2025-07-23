import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const resObj = props;
    console.log(resObj);
    return(
        <div className="res-card">
            <img 
            className="res-logo"
            src={CDN_URL}
            alt="res-logo"/>
            <h3>{resObj.resData.resName}</h3>
            <h4>{resObj.resData.item}, {resObj.resData.cuisine}, {resObj.resData.region}</h4>
            <h4>{resObj.resData.rating}</h4>
            <h4>{resObj.resData.time} minutes</h4>
        </div>
    )
}

export default RestaurantCard;