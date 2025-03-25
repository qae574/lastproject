import React, { useState } from "react";
import "./Tab.css";
import carData from "./CarData";
import car from "../../assets/Frame 260.png";
import icon from "../../assets/Vector.png";
import user from "../../assets/user.png";
import word from "../../assets/word.png";


import { useNavigate } from "react-router-dom";
// import ShowCpn from "../PageTwo/ShowCpn"

const TabCpn = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);

  const navigate = useNavigate();

  // Lọc xe theo từ khóa tìm kiếm, năm và hãng xe
  const filteredCars = carData.filter(
    (car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedYear.length === 0 || selectedYear.includes(car.year)) &&
      (selectedBrand.length === 0 || selectedBrand.includes(car.brand))
  );

  const handleYearChange = (year) => {
    setSelectedYear((prev) =>
      prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
    );
  };

  const handleBrandChange = (brand) => {
    setSelectedBrand((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleClick = (cardDetail) => () => {
    navigate(`/tab/${cardDetail.id}`);
  };

  return (
    <div className="container">
      <div className="Header">
        <div className="HeaderItem">
          <a href="/home">
            <img src={props.car || car} alt="Car" />
          </a>
          <a href="/tab">New Cars</a>
          <a href="/tabSecond">Used Cars</a>
          <a href="TabFour">Compare</a>
          <a href="#">Sell</a>
          <a href="#">
            Article <img src={icon} alt="Icon" />
          </a>
          <a href="#">
            <img src={user} alt="User" /> Sign in
          </a>
          <a href="#">
            <img src={word} alt="Language" /> EN <img src={icon} alt="Icon" />
          </a>
        </div>
      </div>

      <div className="car-page">
        <div className="sidebar">
          <h3>Filter</h3>
          <div className="filter-section">
            <h4>Year</h4>
            {[2020, 2021, 2022, 2023].map((year) => (
              <label key={year}>
                <input
                  type="checkbox"
                  checked={
                    Array.isArray(selectedYear) && selectedYear.includes(year)
                  }
                  onChange={() => handleYearChange(year)}
                />
                {year}
              </label>
            ))}
          </div>
          <div className="filter-section">
            <h4>Brand</h4>
            {["Jeep", "Audi", "Honda", "Chevrolet", "Kia", "MINI"].map((brand) => (
              <label key={brand}>
                <input
                  type="checkbox"
                  checked={
                    Array.isArray(selectedBrand) &&
                    selectedBrand.includes(brand)
                  }
                  onChange={() => handleBrandChange(brand)}
                />
                {brand}
              </label>
            ))}
          </div>
        </div>
        <div className="car-content">
          <div className="search-bar">
            <input
              type="search"
              placeholder="Search for a car..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <h2>{filteredCars.length} Results</h2>
          <div className="car-list-item">
            {filteredCars.length > 0 ? (
              filteredCars.map((car) => (
                <div
                  key={car.id}
                  className="car-item"
                  onClick={handleClick(car)}
                >
                  <img src={car.image} alt={car.name} />
                  <div className="car-details">
                    <h3>{car.name}</h3>
                    <p className="car-price">${car.price}</p>
                    <p className="car-location">{car.location}</p>
                    <div className="car-features">
                      <span>{car.year}</span>
                      <span>{car.driveType}</span>
                      <span>{car.fuelType}</span>
                      <span>{car.seats} Seats</span>
                    </div>
                    <p className="car-rating">
                      ⭐ {car.rating} ({car.reviews} Reviews)
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p>No cars found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabCpn;
