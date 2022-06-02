import useFetch from "../hooks/userFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const {data, loding, erro} = useFetch ("/hotels?featured=true&limit=4");
  const hoteslImage  = [
    "https://www.elle.be/fr/wp-content/uploads/2014/10/thehotel.jpg",
    "https://groupcorner.com/uploads/HOTELS/hotel_20775/_-a199383529362b719590c6e5ebd1b565/1000x548_C_a199383529362b719590c6e5ebd1b565.jpg",
    "https://res.cloudinary.com/hzekpb1cg/image/upload/q_95%2Cf_auto/s3/public/prod/s3fs-public/hotel-berlin-potsdamer-platz-aussenansicht--2-_1.jpg",
    "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/15/35/1535559_v5.jpeg",
  ]
  return (
    <div className="fp">
      { loding ? "Loading" : <>
      {data.map((item, i)=>(
      <div className="fpItem" key={item._id}>
        <img
          src={hoteslImage[i]}
          alt=""
          className="fpImg"
        />
        <span className="fpName">{item.name} </span>
        <span className="fpCity">{item.city} </span>
        <span className="fpPrice">Starting from ${item.cheapestPrice} </span>
        {item.rating && 
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
         }
      </div>
       ))}
      </>}
    </div>
  );
};

export default FeaturedProperties;
