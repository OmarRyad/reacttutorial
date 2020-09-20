import React, { useState } from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaToggleOn } from 'react-icons/fa';
import {useTransition, animated} from 'react-spring'


function Navigation(){
    const [showMenu, setShowMenu] = useState(false)
    let menu;
    let maskMenu;

    if(showMenu) {
        menu =
         <div className="fixed top-0 left-0 z-50 w-4/5 h-full bg-white shadow">
            the menu
        </div>

        maskMenu = <div className="fixed top-0 left-0 z-50 w-full h-full bg-black opacity-50"
        onClick={() => setShowMenu(false) }
        
        >
            
        </div>
    }
    
    return(
        <nav>
            <span className="text-xl">
                <AiFillAppstore  onClick={ () => setShowMenu(!showMenu)} 
                
                />
                
            </span>
         
         {maskMenu}
         {menu}
        </nav>

    )
    
}

export default Navigation;