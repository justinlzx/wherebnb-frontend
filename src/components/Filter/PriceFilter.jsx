import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

export const PriceFilter = () => {
  return (
    <>
    <div className="bg-light p-2">
        <h1 className="text-md font-bold">Price</h1>
        <RangeSlider 
            className="bg-primary"
            railClassName="bg-gray-200" // Optional: Change rail color if needed
        />  
        <div className="flex justify-between mt-2">
            <div className="flex-1 mr-2">
                <label htmlFor="min-range" className="block mb-2 text-xs font-medium text-gray-900">Min</label>
                <input id="min-range" type="number" className="w-full h-8 mb-2 p-2 text-xs text-primary bg-gray-200 rounded-lg appearance-none focus:outline-1 focus:outline-primary focus:bg-white" />
            </div>
            <div className="flex-1 ml-2">
                <label htmlFor="max-range" className="block mb-2 text-xs font-medium text-gray-900">Max</label>
                <input id="max-range" type="number" className="w-full h-8 mb-2 p-2 text-xs text-primary bg-gray-200 rounded-lg appearance-none focus:outline-1 focus:outline-primary focus:bg-white" />
            </div>
      </div>

    </div>
   
    </>
  );
};

