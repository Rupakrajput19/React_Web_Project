import React, { useState } from "react";
import Registration_Image from "../../Images/registration_page.PNG";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
// import { AiFillInstagram } from "react-icons/fa";
// import { AiFillFacebook } from "react-icons/fa";
// import { AiFillGoogleCircle } from "react-icons/fa";
// import { AiFillLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router";

function Registration() {
  document.title = "Sparxa Software Solution Pvt. Ltd.";
  let Navigator = useNavigate();
  const intitialstate = {
    name: "",
    email: "",
    password: "",
    mobile: "",
    confirm_password: "",
  };
  const [details, setDetails] = useState(intitialstate);

  function clearError() {
    let errors = document.getElementsByClassName("clear_errors");
    for (let item of errors) {
      item.innerHTML = "";
    }
  }

  const onSubmitClick = (e) => {
    clearError();
    const { name, email, mobile, password, confirm_password } = details;
    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      password === "" ||
      mobile === "" ||
      confirm_password === ""
    ) {
      alert("Enter all required details!");
      return false;
    }

    // Validation for name.
    if (name.length < 3 || name.length >= 20) {
      alert("Please enter name between 3 to 20 characters!");
      return false;
    }
    if (!isNaN(name)) {
      alert("Only characters allowed in name!");
      return false;
    }

    // Validation for email.
    let emailpattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let emailstr = email;
    let validEmail = emailstr.match(emailpattern);

    if (!validEmail) {
      alert("Enter valid email id");
      return false;
    }

    //Validation for mobile no.
    if (!(mobile.length === 10)) {
      alert("Enter 10 digit mobile no!");
      return false;
    }

    if (isNaN(mobile)) {
      alert("Only numbers allowed in mobile!");
      return false;
    }

    //Validation for password.
    let passwordpattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@#$!%*?&]{8,20}$/;
    let passwordstr = password;
    let validPassword = passwordstr.match(passwordpattern);
    if (!validPassword) {
      alert(
        "Password must be in 8 - 20 character and must containt atleast 1 Number, 1 Special Symbol, 1 Uppercase & 1 Lowercase character!"
      );
      return false;
    }

    //Validation for Confirm password
    if (!(password === confirm_password)) {
      alert("Password must be same as above password!");
      return false;
    }

    localStorage.setItem("Name", name);
    localStorage.setItem("Email", email);
    localStorage.setItem("Mobile", mobile);
    localStorage.setItem("Password", password);

    console.log("details:--", details);
    Navigator("/login", { replace: true });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
    console.log(e.target.value);
  };

  return (
    <>
      <div className="home_style">
        <img
          src={Registration_Image}
          alt="Registration Img"
          className="registration_img"
        />
        <Box
          className="registration_form"
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "30ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Typography id="text_home_regis">Welcome to Spraxa!</Typography>
          <Typography id="text_home">Registration your account</Typography>
          <div>
            <TextField
              // id="outlined-basic"
              id="name"
              type="text"
              label="Name"
              name="name"
              variant="outlined"
              className="input_field"
              onChange={handleChange}
              required
            />
            <label
              name="name_errors"
              id="name_error"
              className="clear_errors"
            ></label>
          </div>
          <div>
            <TextField
              // id="outlined-basic"
              id="email"
              type="email"
              label="Email ID"
              name="email"
              variant="outlined"
              className="input_field"
              onChange={handleChange}
              required
            />
            <label
              name="email_errors"
              id="email_error"
              className="clear_errors"
            ></label>
          </div>
          <div>
            <TextField
              // id="outlined-basic"
              id="mobile"
              type="tel"
              label="Moblie No."
              variant="outlined"
              name="mobile"
              maxLength="10"
              className="input_field"
              onChange={handleChange}
              required
            />
            <label
              name="mobile_errors"
              id="mobile_error"
              className="clear_errors"
            ></label>
          </div>
          <div>
            <TextField
              // id="outlined-basic"
              id="password"
              label="Password"
              type="password"
              name="password"
              variant="outlined"
              className="input_field"
              onChange={handleChange}
              required
            />
            <label
              name="password_errors"
              id="password_error"
              className="clear_errors"
            ></label>
          </div>
          <div>
            <TextField
              // id="outlined-basic"
              id="confirm_password"
              label="Confirm Password"
              type="password"
              name="confirm_password"
              variant="outlined"
              className="input_field"
              onChange={handleChange}
              required
            />
            <label
              name="confirm_password_errors"
              id="confirm_password_error"
              className="clear_errors"
            ></label>
          </div>
          {/* <Link to="/Login" id="submit_link"> */}
          <Button variant="contained" id="submit_btn" onClick={onSubmitClick}>
            Submit
          </Button>
          {/* </Link> */}
          <Typography className="login_link">
            <p>Already have an account?</p>
            <Link to="/Login" id="login_btn">
              Login
            </Link>
          </Typography>

          {/* <div className="api_app_login">Create account with<AiFillFacebook /><AiFillInstagram /><AiFillGoogleCircle /><AiFillLinkedin /></div> */}
        </Box>
      </div>
    </>
  );
}

export default Registration;
