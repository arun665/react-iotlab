import react from "react";

function Heading(){
    return      <ul id="header" >
        <li className="menuitem"  ><a  id="brand"  href="#home" data-aos="fade-up">  <img src="logoimg.png" id="logoimg"  /> <img src="logo.png" id="logo"  /> </a></li>
      
     
        <li className="menuitem" style={{float:'right'}} ><a href="https://arun665.github.io/iotlabhome/" data-aos="fade-up">   <img src="profile.png" id="profile"  /></a></li>
        <li className="menuitem" style={{float:'right'}}><a href="https://arun665.github.io/iotlab4/" data-aos="fade-up">  <img src="cart.png" id="cart"  /> </a></li> 
    </ul>;
    
    
}

export default Heading;