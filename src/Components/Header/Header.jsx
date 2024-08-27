import { HiOutlineUserCircle } from 'react-icons/hi2';
import { BsSearch } from 'react-icons/bs';
import bnr from '../../assets/PastedGraphic.png';

const Header = () => {
  return (
    <div>
      <header className="w-11/12 mx-auto">
        <nav className="mb-10">
          <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a>Home</a>
                  </li>

                  <li>
                    <a>Recipes</a>
                  </li>
                  <li>
                    <a>About</a>
                  </li>
                  <li>
                    <a>Search</a>
                  </li>
                </ul>
              </div>
              <a className="btn btn-ghost text-3xl font-bold">
                Recipe Calories
              </a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 space-x-2 text-lg text-gray-500">
                <li>
                  <a>Home</a>
                </li>

                <li>
                  <a>Recipes</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Search</a>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <div className="flex gap-5">
                <div className="relative hidden lg:block w-full max-w-xs">
                  <input
                    type="text"
                    placeholder="Search"
                    className="input input-md input-bordered w-full rounded-full pl-10 bg-[#150B2B0D]"
                    aria-label="Search"
                  />
                  <BsSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#150B2BB3]" />
                </div>
                <a
                  href="#"
                  className="text-3xl p-2 rounded-full bg-green-500"
                  aria-label="User Profile"
                >
                  <HiOutlineUserCircle />
                </a>
              </div>
            </div>
          </div>
        </nav>
        {/* banner  */}
        <div
          style={{ backgroundImage: `url(${bnr})` }}
          className="w-full h-[700px]  bg-cover bg-center bg-no-repeat text-white text-center relative rounded-3xl"
        >
          <div className="flex justify-center items-center min-h-full">
            <div className="w-9/12  space-y-10">
              <h1 className="text-4xl lg:text-6xl font-black">
                Discover an exceptional cooking class tailored for you!
              </h1>
              <p className="text-lg">
                Learn and Master Basic Programming, Data Structures, Algorithm,
                OOP, Database and solve 500+ coding problems to become an
                exceptionally well world-class Programmer.
              </p>
              <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
                <button className="border-0 btn bg-green-500 rounded-full text-[#150B2B] px-7 text-xl">
                  Normal
                </button>
                <button className=" btn btn-outline bg-transparent border-white text-white rounded-full  px-7 text-xl">
                  Our Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
