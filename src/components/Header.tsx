import { useState } from "react";
import { Link } from "react-router-dom";
import menu from '../images/menu.png';
import x from '../images/x.png';
  
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

    return (
      <div className='font-mono font-extralight'>
        <div className='hidden md:flex w-[38rem] justify-between pt-10 m-auto'>
          <Link to="/" className="hover:underline underline-offset-[10px]">Home</Link>
          <Link to="/what-is" className="hover:underline underline-offset-[10px]">What Is Century City</Link>
          <Link to="/things-to-do" className="hover:underline underline-offset-[10px]">Things To Do</Link>
          <Link to="/history" className="hover:underline underline-offset-[10px]">History</Link>
        </div>

        <div className='flex md:hidden justify-end'>
        <img className='rounded-md w-10 h-10 m-5' onClick={() => setMenuOpen(!menuOpen)} src={menuOpen ? x : menu} alt='arrow'></img>
        {menuOpen && (
            <DropDown />
        )}
        </div>
      </div>
    );
  }
  
export default Header;
  

const DropDown = () => {

  return (
    <div className="relative inline-block text-left">
      


      <div className="absolute right-0 z-10 mt-20 w-screen origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
        <div className="py-1" role="none">
          <Link to="/" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-1">Home</Link>
          <Link to="/what-is" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-1">What Is Century City</Link>
          <Link to="/things-to-do" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-1">Things To Do</Link>
          <Link to="/history" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem"  id="menu-item-1">History</Link>
        </div>
      </div>
    </div>
  )
}