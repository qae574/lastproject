import React, { useState } from "react";
import carList from "./CarData.js";
import "./Compare.css";
import HeaderProps from "../HeaderProps.jsx";
import FootCpn from "../../FootCpn/FootCpn.jsx";

function Compare() {
  const [selectedCars, setSelectedCars] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleSelectCar = (car) => {
    if (selectedCars.length < 3 && !selectedCars.find((c) => c.id === car.id)) {
      setSelectedCars([...selectedCars, car]);
    }
    setShowModal(false);
  };

  const handleRemoveCar = (id) => {
    setSelectedCars(selectedCars.filter((car) => car.id !== id));
  };

  return (
    <div className="container">
      <HeaderProps/>
      <h2>Compare Cars</h2>
      <div className="car-selection">
        {selectedCars.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.image} alt={car.name} className="car-image" />
            <h4>{car.name}</h4>
            <p>{car.price}</p>
            <p>
              {car.year} | {car.driveType}
            </p>
            <p>Fuel: {car.fuel}</p>
            <p>⭐ {car.reviews} Reviews</p>
            <button
              className="remove-btn"
              onClick={() => handleRemoveCar(car.id)}
            >
              X
            </button>
          </div>
        ))}
        {selectedCars.length < 3 && (
          <div className="add-car" onClick={() => setShowModal(true)}>
            <p>➕ Add Car</p>
          </div>
        )}
      </div>
      {selectedCars.length > 0 && (
        <table className="comparison-table">
          <thead>
            <tr>
              <th>General Info</th>
              {selectedCars.map((car) => (
                <th key={car.id}>{car.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Body Type</td>
              {selectedCars.map((car) => (
                <td key={car.id}>{car.bodyType}</td>
              ))}
            </tr>
            <tr>
              <td>Exterior Color</td>
              {selectedCars.map((car) => (
                <td key={car.id}>{car.color}</td>
              ))}
            </tr>
          </tbody>
        </table>
      )}
      {selectedCars.length > 0 && (
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Engine Details</th>
              {selectedCars.map((car) => (
                <th key={car.id}>{car.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Speed</td>
              {selectedCars.map((car) => (
                <td key={car.id}>{car.bodyType}</td>
              ))}
            </tr>
            <tr>
              <td>Power</td>
              {selectedCars.map((car) => (
                <td key={car.id}>{car.power}</td>
              ))}
            </tr>
          </tbody>
        </table>
      )}
      {selectedCars.length > 0 && (
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Dimension Details</th>
              {selectedCars.map((car) => (
                <th key={car.id}>{car.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Length</td>
              {selectedCars.map((car) => (
                <td key={car.id}>{car.Length}</td>
              ))}
            </tr>
            <tr>
              <td>Width</td>
              {selectedCars.map((car) => (
                <td key={car.id}>{car.Width}</td>
              ))}
            </tr>
            <tr>
              <td>Height</td>
              {selectedCars.map((car) => (
                <td key={car.id}>{car.Height}</td>
              ))}
            </tr>
            <tr>
              <td>Cargo Volume</td>
              {selectedCars.map((car) => (
                <td key={car.id}>{car.Cargo}</td>
              ))}
            </tr>
          </tbody>
        </table>
      )}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Select a Car</h3>
            <button className="close-btn" onClick={() => setShowModal(false)}>
              Close
            </button>
            <ul className="car-list">
              {carList.map((car) => (
                <li
                  key={car.id}
                  className="car-item"
                  onClick={() => handleSelectCar(car)}
                >
                  <img src={car.image} alt={car.name} className="car-thumb" />
                  <span>
                    {car.name} - {car.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <FootCpn/>
    </div>
  );
}

export default Compare;
