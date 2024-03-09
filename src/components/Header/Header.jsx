import logo from "../../assets/logo/long-logo.png";

export const Header = () => {

  return (
      <header
        className="flex justify-between p-4 border-b bg-white z-40 w-full"
      >
          <div>
            <img src={logo} height={50} width={172} alt="Logo" />
          </div>

          <div className="">
            <button>
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className="w-12 h-12 rounded-full"/>
              </button>
          </div>
      </header>
  );
};
