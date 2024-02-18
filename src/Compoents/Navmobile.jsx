import React, { useState } from "react"
import ReactLogo from "../assets/a.png"
import Burgermenu from "../assets/burger.svg"
function Navmobile(){
    const [menus,setmenus]  = useState(false)
    
    function togglebtn(){
            setmenus(menus ? false : true);
            
        }
        

    return(
        <>
        <div className="mcontainer">
            <div className="mlogo">
                <img src={ReactLogo} alt=""  />
            </div>
            <div className="mburgericon">
                <img src={Burgermenu} alt=""  onClick={togglebtn}/>
            </div>
         
        </div>
        {/* {menus && ( */}
        <div  className={`mobilemenu  ${menus ? 'show' : ''}`} >
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
      {/* )} */}
        </>
    )
}

export default Navmobile