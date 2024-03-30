import { Link } from 'react-router-dom'
import star from "../../assets/icons/star.png";

export const InfoCard = ({ listing }) => {

  const {
      id,
      name,
      image_1: image,
      rating
  } = listing;

  return (
    <Link to={`/listings/${id}`}>
      <div className="mx-auto overflow-hidden rounded-lg hover:transform hover:scale-[1.03] cursor-pointer">
        <img
              src={image}
              className="w-68 h-70 rounded-lg object-cover transition-transform duration-300 hover:scale-100"
              />
          <div className="py-2 flex justify-between bg-transparent">
              <h3 className="text-xl font-semibold">{name}</h3>
              <div className='flex'>
                 <p className="text-md font-semibold mr-4">{rating.toFixed(2)}</p>  
                <img src={star} alt="" className="h-5"/>
              </div>
          </div>
        </div>
    </Link>
  );
};