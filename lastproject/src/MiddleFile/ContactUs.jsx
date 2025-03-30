import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const emailParams = {
      title: "Contact Request", // Thêm giá trị title để khớp với template
      name: formData.name,
      email: formData.email,
      phone: formData.phone, 
      message: formData.comment,
    };

    emailjs
      .send(
        "service_4tr1nda",  // Thay bằng Service ID của bạn
        "template_n3ulpbf",          // Thay bằng Template ID của bạn
        emailParams,        // Sử dụng emailParams thay vì formData
        "UqhPZJkmt3WNevUiP" // Thay bằng Public Key của bạn
      )
      .then(
        (result) => {
          alert("✅ Email gửi thành công!");
          setFormData({ name: "", email: "", phone: "", comment: "" }); // Xóa form sau khi gửi
        },
        (error) => {
          console.error("❌ Lỗi khi gửi email:", error);
          alert("Lỗi khi gửi email: " + (error.text || "Không xác định!"));
        }
      );
  };

  return (
    <div className="mapAndcontact">
      <div className="map">
        <img 
          src="https://s3-alpha-sig.figma.com/img/e799/7f15/b690d56707bce81feed55a78d39ebc2a?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CqbA56hj8k85VlWyysxXl7LO61us4IXgeiqzIASGjUWI2~3-V0eGHmsirNU3XHL5Lnc3Q7a9~wYxCF7i3dA4h6igjpy~-7SvXBBIjlAvfftK9j0aXlQsyzEdRrf9BzXbhIqFKhWFL9~sbtN3soYt~HLLIQh57d2nKOrFBsGxFNJIQ9tPWjmmYEXZziXjEVkZs1-MsATHvAIgLaf~5cH2fj~VzKDXUnwb7W7JzDr05zBLbihLt4cWjO5MSB3T94UzL-Fyv8YZz-Bg5mShb4xia9sEu5khrOJgzj0UlxyOSpRXVR-Go4DHGQn3RtLQhoXOyW~x7OYzfbjhrNsrr8IlUA__"
          alt="Google Map"
        />
      </div>
      <form className="contact" onSubmit={sendEmail}>
        <div className="headContact">
          <h3>Contact</h3>
        </div>
        <div className="contactWritten">
          <p>Name</p>
          <input 
            type="text" 
            name="name" 
            placeholder="Full Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="contactWritten">
          <p>Email</p>
          <input 
            type="email" 
            name="email" 
            placeholder="email@mail.com" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="contactWritten">
          <p>Phone</p>
          <input 
            type="text" 
            name="phone" 
            placeholder="000-000-000" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="contactWrittenInput">
          <p>Comment</p>
          <input 
            className="special" 
            type="text" 
            name="comment" 
            placeholder="Leave a message here" 
            value={formData.comment} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit">Gửi Email</button>
      </form>
    </div>
  );
};

export default ContactUs;
