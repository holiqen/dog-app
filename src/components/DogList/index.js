import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const DogList = ({ dogs }) => {
  return (
    <div className="DogList">
      <h1 className="display-1 text-center mt-3 mb-5">Dog List!</h1>
      <div className="row">
        {dogs &&
          dogs.map((dog) => {
            return (
              <div className="Dog col-md-6 col-lg-4 text-center" key={dog.name}>
                <img src={dog.src} alt="Dog" />
                <h3 className="mt-3">
                  <Link className="underline" to={`/dogs/${dog.name}`}>
                    {dog.name}
                  </Link>
                </h3>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default DogList;
