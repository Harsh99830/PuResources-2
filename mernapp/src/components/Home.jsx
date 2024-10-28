import '../App.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import Interface from './Interface';

export default function Home() {
  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  }

  return (
    <div>
      {!localStorage.getItem("authToken") ? (
        <div className="d-flex">
          <Interface />
        </div>
      ) : (
        <div>
          <Navbar />
          <div className="btn bg-danger text-white mx-2 logout" onClick={handleLogout}>Logout</div>
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card1 p-2 bg-dark border">
                  <div className="card-body1">
                    <h5 className="card-title text-light ">BTECH</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Notes & previous Questions Papers</h6>
                    <Link to="/btech" style={{color:"#e31a1a",textDecoration:"underline"}} className="card-link">Click here</Link><span>:-</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card1 p-2 bg-dark border">
                  <div className="card-body1">
                    <h5 className="card-title text-light ">BBA</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Notes & previous Questions Papers</h6>
                   <p style={{color:"#e31a1a"}}>Coming soon...</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card1 p-2 bg-dark border">
                  <div className="card-body1">
                    <h5 className="card-title text-light ">BCA</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Notes & previous Questions Papers</h6>
                    <p  style={{color:"#e31a1a"}}>Coming soon...</p>
                 
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="card1 p-2 bg-dark border">
                  <div className="card-body1">
                    <h5 className="card-title text-light">B.COM</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Notes & previous Questions Papers</h6>
                   <p style={{color:"#e31a1a"}}>Coming soon...</p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
