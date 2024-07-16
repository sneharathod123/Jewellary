import React, { useState } from "react";
import "../css/LoginPopup.css";
import { supabase } from "../client";
import CloseIcon from "@mui/icons-material/Close";

function LoginPopup() {
  const [visible, setVisible] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const handleClose = () => {
    setVisible(false);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.from("userTable").insert([
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        },
      ]);
      if (error) throw error;
      alert("User registered successfully");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    visible && (
      <div className="Login-popup">
        <div className="close" onClick={handleClose}>
          <CloseIcon />
        </div>
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Enter name"
          />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Email Address"
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Password"
          />
          <input type="submit" />
        </form>
      </div>
    )
  );
}

export default LoginPopup;
