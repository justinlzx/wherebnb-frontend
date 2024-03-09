import { Link } from 'react-router-dom'

export const InfoCard = ({ listing }) => {

  const {
      id,
      name,
      description,
      image,
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
          </div>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
          <p className="pb-2 text-sm text-gray-500">19-25 May</p>
        </div>
    </Link>
  );
};
