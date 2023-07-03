import { NavLink } from "react-router-dom";
import { BsCart3 } from 'react-icons/bs'

export default function Navbar() {
    // const activeNav = ({isActive})=>{
    //     return {
    //         color:isActive ?"orange": null
    //     }
    // }
  return (
    <div className="nav-bg  bg-violet-700 text-violet-50 h-20 flex items-center justify-center">
        <div className="navbar container mx-auto flex items-center justify-between">
            <div className="nav-left">
                <span className="text-xl font-semibold">tech<span className="text-orange-500">Nos</span></span>
            </div>
            <div className="nav-right flex items-center gap-5">
                <NavLink to='/' className='hover:text-orange-500 duration-300'>Home</NavLink>
                <NavLink to='/products' className='hover:text-orange-500 duration-300'>Products</NavLink>
                <NavLink to='/card'>
                    <span className="cart-icon relative">
                        <BsCart3/>
                        <span className="cart-counter absolute -top-3 -right-3 text-xs bg-orange-600 flex rounded-full  h-5 w-5 items-center justify-center font-medium">10</span>
                    </span>
                </NavLink>
                
            </div>
        </div>
    </div>
  )
}
