import { AiFillStar } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { places } from "../constants/places";
const Places = () => {
  return (
    <div className="py-10">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Popular Places</h1>
        <button className="px-5 py-2 rounded border border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white hover:shadow-md transition ease-out duration-75">
          View All
        </button>
      </div>

      <div className="places py-10 grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 justify-items-center">
        {places.map((place) => {
          return (
            <div
              key={place.city}
              className="place w-[250px] md:w-[330px] h-auto bg-white border rounded-lg p-4"
            >
              <div className="w-full h-[150px] md:h-[230px]">
                <img
                  src={place.img}
                  alt="place"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="p-2 space-y-2">
                <div className="flex justify-between items-center">
                  <h1>{place.name}</h1>
                  <p className="flex items-center space-x-2">
                    <span className="text-yellow-500">
                      <AiFillStar />
                    </span>
                    <span>4.5</span>
                  </p>
                </div>
                <p className="flex items-center space-x-2 text-gray-400">
                  <IoLocationOutline /> <span>{place.country}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Places;
