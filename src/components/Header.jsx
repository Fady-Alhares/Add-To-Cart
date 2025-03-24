import { BsCart4 } from "react-icons/bs";
import { MdDarkMode, MdOutlineWbSunny } from "react-icons/md";
const Header = ({
  darkMode,
  theme,
  deleteAll,
  reset,
  addedProducts,
  addToCart,
  num,
}) => {
  return (
    <div>
      <div
        className={`${
          theme ? "bg-white" : "bg-neutral"
        } navbar  text-neutral-content w-full`}
      >
        <div className="flex-none navbar-end ">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <BsCart4
                  className={`${
                    theme ? "text-black " : "text-white "
                  } w-10 h-10 `}
                />
                <span
                  className={`${
                    theme ? "bg-black text-white " : "bg-white text-black "
                  }badge badge-sm indicator-item font-extrabold rounded-3xl `}
                >
                  {num}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-10 mt-3 w-52 shadow"
            ></div>
          </div>
        </div>
      </div>
      <h1 className=" text-center font-extrabold   text-4xl md:text-5xl text-green-500 pt-4">
        CART ITEMS
      </h1>
      <div className="flex flex-col sm:flex-row justify-evenly items-center space-y-2 sm:space-y-0 sm:space-x-4 pt-4">
        <button
          className="btn btn-secondary"
          onClick={() => {
            reset();
          }}
        >
          Reset
        </button>
        <button
          className="btn btn-info"
          onClick={() => {
            deleteAll();
          }}
        >
          Delete ALL
        </button>
        <button
          className="btn btn-neutral"
          onClick={() => {
            darkMode();
          }}
        >
          {theme ? (
            <MdOutlineWbSunny className="text-black bg-white text-3xl font-extrabold" />
          ) : (
            <MdDarkMode className="text-white  bg-black  text-3xl font-extrabold" />
          )}
        </button>
      </div>
      <div className="flex flex-wrap justify-evenly gap-4 pt-8">
        {/* show products dinamicaly */}
        {addedProducts.map(({ id, name }, index) => (
          <button
            className="btn btn-success"
            key={index}
            onClick={() => addToCart(id)}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
