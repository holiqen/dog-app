import React from "react";
import { Link, useParams } from "react-router-dom";
import "./index.css";

const DogDetails = ({ dogs }) => {
  const params = useParams();
  const name = params.name;
  const currentDog = dogs.find((dog) => dog.name.toLowerCase() === name.toLowerCase());
  return (
    <div className="DogDetails row justify-content-center mt-5">
      <div className="col-11 col-lg-5">
        <div className="DogDetails-card card">
          <img className="card-img-top" src={currentDog.src} alt="Dog" />
          <div className="card-body">
            <h2 className="card-title">{currentDog.name}</h2>
            <h4 className="card-subtitle text-muted">{currentDog.age} years old</h4>
          </div>
          <ul className="list-group list-group-flush">
            {currentDog.facts.map((fact, index) => {
              return (
                <li key={index} className="list-group-item">
                  {fact}
                </li>
              );
            })}
          </ul>
          <div className="card-body">
            <Link className="btn btn-info" to="/dogs">
              Go Back!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogDetails;
