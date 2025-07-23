import RestaurantCard from "./RestaurantCard";
import resList from "./../utils/mockData"
import { useState, useEffect } from "react";

const Body = () =>{

    // state variable
    //The second parameter is used to change the value of the list
    const[listOfRestaurants, setListOfRestaurants] = useState(resList);

    useEffect(()=>{
        console.log("UseEffect called");
    },[]);

    // Normal variable
    // let listOfRestaurants = []

    // let ListOfRestaurants = [{
    //     resName : "Meghana Foods",
    //     item : "Biriyani",
    //     cuisine : "South Indian",
    //     region : "Asian",
    //     rating : "4.5",
    //     time : 38
    // },
    // {
    //     resName : "KFC",
    //     item : "Biriyani",
    //     cuisine : "South Indian",
    //     region : "Asian",
    //     rating : "3.8",
    //     time : 38
    // }];

    return(
        <div className="body">
            {/* <div className="search">Search</div> */}
            <div className="filter">
                <button 
                className="filter-btn" 
                onClick={()=>{
                        const filteredList = listOfRestaurants.filter(
                        (res) => res.rating > 4
                    );

                    setListOfRestaurants(filteredList)
                    
                    // console.log(ListOfRestaurants);
                }}
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                
            {
                listOfRestaurants.map((restaurant, idx) =>(
                    <RestaurantCard key = {idx} resData = {restaurant}/>
                    
                ))
            }
                
                
            </div>
        </div>
    )
}


export default Body;