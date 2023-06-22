import { Link } from "react-router-dom";
import ActiveLink from "./../../ActiveLink/ActiveLink";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user,logOut } = useContext(AuthContext);
  // console.log(user);
  const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error=> console.log(error))
  }
  const navItems = (
    <div className="lg:flex items-center ">
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/allToys">All Toys</ActiveLink>
      </li>

      <li>
        <ActiveLink to="/blogs">Blogs</ActiveLink>
      </li>
      {user ? (
        <>
          <li>
        <ActiveLink to="/myToys">My Toys</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/addAToy">Add A Toy</ActiveLink>
      </li>
      <img
                    title={user && user.displayName}
                    className="w-6 h-6 ml-3 rounded-full mr-3 "
                    src={user?.photoURL}
                    alt=""
                  />
                
      <button onClick={handleLogOut} className="btn">SignOut</button>
        </>
      ) : (
        <>
          <li>
            <ActiveLink to="/login">Login</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/signUp">SignUp</ActiveLink>
          </li>
        </>
      )}
    </div>
  );
  return (
    <div>
      <div>
        <div className="navbar rounded-b-xl bg-gray-200 h-28">
          <div className="navbar-start ">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box flex  w-64"
              >
                {navItems}
              </ul>
            </div>
            <Link className="" to="/">
             <img  className="w-10 rounded-md h-10 ml-3 mr-3 " src="https://rb.gy/mvpzc" alt="" />
            </Link>
            <Link className="font-serif text-2xl" to="/">
              ToyCarShop
            </Link>
          
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
