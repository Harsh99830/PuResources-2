import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Interface() {
  return (
<>
    
    <div className="main-container">
      <div className="container1 text-light">
        Get your all Notes <br /> & <br /> Previous Questions Paper Here
      </div>
      <div className="container2">
        <Link to={"/createuser"}>
          <div className="btn1">SignUp</div>
        </Link>
        <Link to={"/login"}>
          <div className="btn1">Login</div>
        </Link>
      </div>






        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />


        <ul className="ul1">
            <a href="https://www.instagram.com/harshit_nagar17?igsh=YjRhZmFvenFkaGRo" target="_blank" rel="noreferrer" style={{textDecoration:"none"}}><li className="li1 instagram"><i className="fa-brands fa-instagram icon1 icon"></i></li></a>
            <li className="li1 twitter"><i className="fa-brands fa-twitter icon2 icon"></i></li>
            <li className="li1 youtube"><i className="fa-brands fa-youtube icon3 icon"></i></li>
            <li className="li1 facebook"><i className="fa-brands fa-facebook icon4 icon"></i></li>
        </ul>



    </div>
    </>
  );
}
