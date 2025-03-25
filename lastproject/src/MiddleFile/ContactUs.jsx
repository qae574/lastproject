import React from "react";

const ContactUs = () => {
  return (
    <div className="mapAndcontact">
      <div className="map">
        <img src="https://s3-alpha-sig.figma.com/img/e799/7f15/b690d56707bce81feed55a78d39ebc2a?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CqbA56hj8k85VlWyysxXl7LO61us4IXgeiqzIASGjUWI2~3-V0eGHmsirNU3XHL5Lnc3Q7a9~wYxCF7i3dA4h6igjpy~-7SvXBBIjlAvfftK9j0aXlQsyzEdRrf9BzXbhIqFKhWFL9~sbtN3soYt~HLLIQh57d2nKOrFBsGxFNJIQ9tPWjmmYEXZziXjEVkZs1-MsATHvAIgLaf~5cH2fj~VzKDXUnwb7W7JzDr05zBLbihLt4cWjO5MSB3T94UzL-Fyv8YZz-Bg5mShb4xia9sEu5khrOJgzj0UlxyOSpRXVR-Go4DHGQn3RtLQhoXOyW~x7OYzfbjhrNsrr8IlUA__"/>
      </div>
      <div className="contact">
        <div className="headContact">
            <h3>Contact</h3>
        </div>
        <div className="contactWritten">
          <p>Name</p>
          <input type="text" placeholder="Full Name" />
        </div>
        <div className="contactWritten">
          <p>Email</p>
          <input type="email" placeholder="email@mail.com" />
        </div>
        <div className="contactWritten">
          <p>Phone</p>
          <input type="phone" placeholder="000-000-000" />
        </div>
        <div className="contactWrittenInput">
          <p>Comment</p>
          <input className="spectial" type="Comment" placeholder="Leave a message here" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
