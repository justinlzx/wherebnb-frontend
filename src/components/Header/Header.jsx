import logo from "../../assets/logo/long-logo.png";
import { Link } from "react-router-dom";
import { BackButton }  from "../Common/BackButton";
export const Header = () => {

  return (
    <>
      <header
        className="flex justify-between p-4 border-b bg-white z-40 w-full"
      >
          <div className="flex justify-start">
            <BackButton sx={{ color:'primary' }}/>
            <img src={logo} height={50} width={172} alt="Logo" />
          </div>

          <div>
            <button>
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className="w-12 h-12 rounded-full"/>
              </button>
          </div>
      </header>
      </>
  );
};
