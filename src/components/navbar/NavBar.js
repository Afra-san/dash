import React from "react";
import { InboxIcon, CogIcon, LogoutIcon, ShoppingCartIcon, TemplateIcon, UserIcon } from "@heroicons/react/outline";
// import { navLinks } from "./utils/NavDB";
// import { useRecoilState } from "recoil";
// import { activeNavItemState } from "../../atoms/ActiveNavBarAtom";
import { Link } from 'react-router-dom';

function NavBar() {

  return (
    <nav className="col-span-2 rounded-3xl min-h-[90vh] w-[80px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-betwen bg-stone-100 m-4">
      <div className="space-y-8 w-full">
        <span className="opacity-0">D</span>
        <Link to='/' className={`w-full flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent`}>
          <TemplateIcon className="nav-icon" />
          <h1 className={`text-gray-600 font-semibold group-hover:text-black xl:flex hidden`}>Dashboard</h1>
        </Link> 
        <Link to='/market' className={`w-full flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent`}>
          <ShoppingCartIcon className="nav-icon" />
          <h1 className={`text-gray-600 font-semibold group-hover:text-black xl:flex hidden`}>Market</h1>
        </Link> 
        <Link to='/profile' className={`w-full flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent`}>
          <UserIcon className="nav-icon" />
          <h1 className={`text-gray-600 font-semibold group-hover:text-black xl:flex hidden`}>Profile</h1>
        </Link>   
        <Link to='/inbox' className={`w-full flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent`}>
          <InboxIcon className="nav-icon" />
          <h1 className={`text-gray-600 font-semibold group-hover:text-black xl:flex hidden`}>Inbox</h1>
        </Link> 
 

        <div className="w-full border-t border-gray-200" />
           <Link to='#' className={`w-full flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent`}>
             <CogIcon className="nav-icon" />
             <h1 className={`text-gray-600 font-semibold group-hover:text-black xl:flex hidden`}>Settings</h1>
           </Link> 
           <Link to='#' className={`w-full flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent`}>
             <LogoutIcon className="nav-icon" />
             <h1 className={`text-gray-600 font-semibold group-hover:text-black xl:flex hidden`}>Logout</h1>
           </Link> 
        </div>


    </nav>
  );
}
// function NavItem({ link }) {
//   const [activeNav, setActiveNav] = useRecoilState(activeNavItemState);
//   return (
//     <a
//       onClick={() => setActiveNav(link.id)}
//       key={link.id}
//       className={`w-full flex items-center justify-start space-x-8 px-5 cursor-pointer
//        group hover:border-gray-900 border-l-4 border-transparent ${
//          activeNav === link.id && "border-gray-900 "
//        } `}
//     >
//       <span> {link.icon}</span>
//       <h1
//         className={`text-gray-600 group-hover:text-black xl:flex hidden ${
//           activeNav === link.id && "text-black "
//         }} `}
//       >
//         {link.title}
//       </h1>
//     </a>
//   );
// }

export default NavBar;
