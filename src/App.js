import "./App.css";
import whiskey from "./images/whiskey.jpg";
import hazel from "./images/hazel.jpg";
import tubby from "./images/tubby.jpg";
import { Navigate, Route, Routes } from "react-router-dom";
import DogList from "./components/DogList";
import DogDetails from "./components/DogDetails";
import Navbar from "./components/Navbar";

const App = () => {
  const dogs = [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: ["Whiskey loves eating popcorn.", "Whiskey is a terrible guard dog.", "Whiskey wants to cuddle with you!"],
    },
    {
      name: "Hazel",
      age: 3,
      src: hazel,
      facts: ["Hazel has soooo much energy!", "Hazel is highly intelligent.", "Hazel loves people more than dogs."],
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: ["Tubby is not the brightest dog", "Tubby does not like walks or exercise.", "Tubby loves eating food."],
    },
  ];

  return (
    <div>
      <Navbar dogs={dogs} />
      <div className="container">
        <Routes>
          <Route exact path="/dogs" element={<DogList dogs={dogs} />} />
          <Route exact path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
          <Route path="*" element={<Navigate to="/dogs" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
