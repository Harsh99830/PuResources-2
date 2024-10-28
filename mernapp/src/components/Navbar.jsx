import React from 'react'
import { Link} from 'react-router-dom'
export default function Navbar() {

  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-info" >
  <div className="container-fluid">
    <div className="navbar-brand fs-3 text-black ">PU Resources</div>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className=" navbar-collapse nav-home">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-ul">
        <li className="nav-item">
          <Link to="/" className='home-link'><div className="nav-link active fs-5 text-black " aria-current="page">Home</div></Link>
        </li>
       
      </ul>

    
      
    </div>
  </div>
</nav>


    </div>
  )
}
