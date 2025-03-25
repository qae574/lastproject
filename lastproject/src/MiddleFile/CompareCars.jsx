import React, { useState } from "react";
import "./comparecars.css";
import carData from "./carData";

const ComparisonTable = ({ selectedCars }) => {
  return (
    <div className="comparison-container">
      <h2>So sánh xe</h2>
      <table className="comparison-table">
        <thead>
          <tr>
            <th>Thông tin</th>
            {selectedCars.map((car) => (
              <th key={car.id}>
                <p>{car.name}</p>
                <img src={car.image} alt={car.name} className="car-image" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Giá</td>
            {selectedCars.map((car) => (
              <td key={car.id}>${car.price.toLocaleString()}</td>
            ))}
          </tr>
          <tr>
            <td>Nhiên liệu</td>
            {selectedCars.map((car) => (
              <td key={car.id}>{car.fuel}</td>
            ))}
          </tr>
          <tr>
            <td>Năm</td>
            {selectedCars.map((car) => (
              <td key={car.id}>{car.year}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
const CompareCars = () => {
  const [selectedCars, setSelectedCars] = useState([]);
  const handleSelectCar = (car) => {
    if (selectedCars.some((item) => item.id === car.id)) {
      setSelectedCars(selectedCars.filter((item) => item.id !== car.id));
    } else if (selectedCars.length < 2) {
      setSelectedCars([...selectedCars, car]);
    } else {
      alert("Bạn chỉ có thể so sánh tối đa 2 xe!");
    }
  };
  return (
    <div className="compare-container">
      <h2>Danh sách xe</h2>
      <div className="car-list">
        {carData.map((car) => (
          <div
            key={car.id}
            className={`car-card ${selectedCars.some((item) => item.id === car.id) ? "selected" : ""}`}
            onClick={() => handleSelectCar(car)}
          >
            <img src={car.image} alt={car.name} className="car-thumbnail" />
            <p>{car.name}</p>
            <div className="pricewritten">
            <p>Giá: ${car.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedCars.length === 2 && <ComparisonTable selectedCars={selectedCars} />}
    </div>
  );
};

export default CompareCars;
