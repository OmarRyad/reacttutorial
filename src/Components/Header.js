import React from 'react'
import Navigation, { Navigation as f } from './Navigation'
function Header() {
    return(
        <header className="flex items-center justify-between p-3 border-b">
             <span className="font-bold"> AppName </span>
        
        
        <Navigation />
         </header>
    )
}

export default Header;