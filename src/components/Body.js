import RestaurantCard from "./RestaurantCard";

const Body = () =>{
    const resList =[ {
        resName : "Meghana Foods",
        item : "Biriyani",
        cuisine : "South Indian",
        region : "Asian",
        rating : "4.5",
        time : 38
    },
    {
        resName : "Meghana Foods",
        item : "Biriyani",
        cuisine : "South Indian",
        region : "Asian",
        rating : "4.5",
        time : 38
    },
    {
        resName : "Meghana Foods",
        item : "Biriyani",
        cuisine : "South Indian",
        region : "Asian",
        rating : "4.5",
        time : 38
    },
    {
        resName : "Meghana Foods",
        item : "Biriyani",
        cuisine : "South Indian",
        region : "Asian",
        rating : "4.5",
        time : 38
    }

]
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                
            {
                resList.map((restaurant) =>(
                    <RestaurantCard  resData = {restaurant}/>
                    
                ))
            }
                
                
            </div>
        </div>
    )
}


export default Body;