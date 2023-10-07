import React from "react";

const date = new Date();
const year = date.getFullYear();

function Footer() {
   return <div className="footer"><footer>Copyright <span>&copy;</span>  {year}</footer></div> 
}

export default Footer;