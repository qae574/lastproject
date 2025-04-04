import React, { useState } from "react";
import carList from "./CarData.js";
import "./Compare.css";
import HeaderProps from "../HeaderProps.jsx";
import FootCpn from "../../FootCpn/FootCpn.jsx";

function Compare() {
  const [selectedCars, setSelectedCars] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [startIndex, setStartIndex] = useState(0); // Chỉ mục của xe đầu tiên hiển thị
  const carsPerPage = 3; // Số xe hiển thị mỗi lần

  const handleSelectCar = (car) => {
    if (selectedCars.length < 3 && !selectedCars.find((c) => c.id === car.id)) {
      setSelectedCars([...selectedCars, car]);
    }
    setShowModal(false);
  };

  const handleRemoveCar = (id) => {
    setSelectedCars(selectedCars.filter((car) => car.id !== id));
  };

  const handleNext = () => {
    if (startIndex + carsPerPage < carList.length) {
      setStartIndex(startIndex + carsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - carsPerPage >= 0) {
      setStartIndex(startIndex - carsPerPage);
    }
  };

  const renderComparisonTable = () => {
    if (selectedCars.length < 2) return null; // Chỉ hiển thị bảng so sánh nếu có ít nhất 2 xe

    return (
      <div className="comparison-table">
        <h3>Comparison Table</h3>
        <table>
          <thead>
            <tr>
              <th>Attribute</th>
              {selectedCars.map((car) => (
                <th key={car.id}>{car.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Price</td>
              {selectedCars.map((car) => (
                <td key={car.id}>{car.price}</td>
              ))}
            </tr>
            <tr>
              <td>Year</td>
              {selectedCars.map((car) => (
                <td key={car.id}>{car.year}</td>
              ))}
            </tr>
            <tr>
              <td>Drive Type</td>
              {selectedCars.map((car) => (
                <td key={car.id}>{car.driveType}</td>
              ))}
            </tr>
            <tr>
              <td>Fuel</td>
              {selectedCars.map((car) => (
                <td key={car.id}>{car.fuel}</td>
              ))}
            </tr>
            <tr>
              <td>Reviews</td>
              {selectedCars.map((car) => (
                <td key={car.id}>⭐ {car.reviews}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="container">
      <HeaderProps />
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

      {renderComparisonTable()}

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Select a Car</h3>
            <button className="close-btn" onClick={() => setShowModal(false)}>
              Close
            </button>

            <div className="slider-controls">
              <button onClick={handlePrev} disabled={startIndex === 0}>◀</button>
              <button onClick={handleNext} disabled={startIndex + carsPerPage >= carList.length}>▶</button>
            </div>

            <ul className="car-list">
              {carList.slice(startIndex, startIndex + carsPerPage).map((car) => (
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

      <FootCpn />
    </div>
  );
}

export default Compare;