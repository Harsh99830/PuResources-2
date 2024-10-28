import React from 'react';
import "../Card.css"
export default function Card(props) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-body">
          <h4 style={{textAlign:"center"}}>{props.name}</h4>
          <hr />
          <h6>Previous question paper:</h6>
          <div className="links">
            <span className="fw-bold">CIE-1</span>
            <a className="card-link bg-primary text-white" href={props.cie}>Click here</a>
          </div>
          <div className="links">
            <span className="fw-bold">Mid sem</span>
            <a className="card-link bg-primary text-white" href={props.mid}>Click here</a>
          </div>
          <div className="links">
            <span className="fw-bold">End sem</span>
            <a className="card-link bg-primary text-white" href={props.end}>Click here</a>
          </div>
          <hr />
          <h6>Notes:</h6>
          <div className="links">
            <span className="fw-bold">Notes</span>
            <a className="card-link bg-danger text-white" href={props.notes}>Click here</a>
          </div>
        </div>
      </div>
    </div>
  );
}
