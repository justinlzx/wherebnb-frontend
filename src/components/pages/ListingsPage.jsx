import { Filter } from "../Filter/Filter";
import { Cards } from "../Cards/Cards";
//import browseStay from "../../assets/browseStay.jpg";

export const ListingsPage = () => {
  return (
    <>
    <div className="px-5">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <Filter/>
        </div>
        <div className="col-span-9">
          <Cards/>
        </div>
      </div>
    </div>
    

    

    </>
  );
};

