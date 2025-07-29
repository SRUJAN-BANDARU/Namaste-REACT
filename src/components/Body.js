import RestaurantCard from "./RestaurantCard";
import resList from "./../utils/mockData"
import { useState, useEffect } from "react";

const Body = () =>{

    // state variable
    //The second parameter is used to change the value of the list
    const[listOfRestaurants, setListOfRestaurants] = useState(resList);
    const[filteredListOfRes, setFilteredListOfRes] = useState(resList);
    const [photo, setPhoto] = useState()
    useEffect( ()=>{
        console.log("UseEffect called");
        // fetchPhoto();
    },[])
        
    
    const [searchText, setSearchText] = useState("");
    return(
        <div className="body">
            {console.log("Body rendered")}
            {/* <div className="search">Search</div> */}
            <div className="filter">
                <div className="search-filter">
                    <input type="text" value={searchText} onChange={
                        (e) =>{
                            setSearchText(e.target.value);
                        }
                    } />
                    <button className="search-btn"
                    onClick={
                        ()=>{
                            // setFilteredListOfRes(resList);
                            const filteredRestaurant = listOfRestaurants.filter((res) => res.resName.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredListOfRes(filteredRestaurant)
                        }
                    }
                    >Submit</button>
                </div>
                
                {/* <button 
                className="filter-btn" 
                onClick={()=>{
                        const filteredList = listOfRestaurants.filter(
                        (res) => res.rating > 4
                    );

                    setFilteredListOfRes(filteredList)
                    
                    // console.log(ListOfRestaurants);
                }}
                >Top Rated Restaurants</button> */}
            </div>
            <div className="res-container">
                
            {
                filteredListOfRes.map((restaurant, idx) =>(
                    <RestaurantCard key = {idx} resData = {restaurant}/>
                    
                ))
            }
                
                
            </div>
        </div>
    )
}


export default Body;