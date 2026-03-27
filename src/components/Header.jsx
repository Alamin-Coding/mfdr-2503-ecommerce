import { Link } from "react-router";
import searchIcon from "../assets/icons/search.svg";
import wishlistIcon from "../assets/icons/love.svg";
import cartIcon from "../assets/icons/cart.svg";
import userIcon from "../assets/icons/user.svg";

const Header = () => {
  return (
    <div>
      <div className="py-2 bg-black">
        <div className="container">
          <div className=" text-white grid grid-cols-[1fr_190px] gap-2 items-center">
            <div className="flex items-center gap-1 justify-center">
              <p>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
              </p>
              <a href="/shop">ShopNow</a>
            </div>
            <div className="flex justify-end">
              <select>
                <option value="english" selected>
                  English
                </option>
                <option value="bangla">Bangla</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className=" pt-10 pb-4 border-b border-b-border">
        <div className="container">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-32.5">
            <div className="">
              <Link to="/">
                <img src="/Logo.svg" alt="logo" />
              </Link>
            </div>
            <nav className="pl-10">
              <ul className="flex items-center gap-6">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/"}>Contact</Link>
                </li>
                <li>
                  <Link to={"/"}>About</Link>
                </li>
                <li>
                  <Link to={"/"}>Signup</Link>
                </li>
              </ul>
            </nav>
            <div className="flex items-center gap-6">
              <form
                action=""
                className="grid grid-cols-[1fr_auto] gap-8.5 bg-F5F5F5 py-1.75 px-3 items-center w-60.75"
              >
                <input type="text" placeholder="What are you looking for?" className="bg-transparent placeholder:text-black/50 px-2 w-full block text-[12px]" />
                <button type="submit">
                  <img src={searchIcon} alt="icon" />
                </button>
              </form>
              <div className="flex items-center gap-4 justify-end">
                <div className="cursor-pointer">
                    <img src={wishlistIcon} alt="icon" />
                </div>
                <div className="cursor-pointer relative">
                    <img src={cartIcon} alt="icon" />
                    <span className="text-red-500 absolute -top-3 right-0 z-10">0</span>
                </div>
                <div className="cursor-pointer">
                    <img src={userIcon} alt="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
