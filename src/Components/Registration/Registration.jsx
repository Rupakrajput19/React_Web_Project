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
import {useNavigate} from 'react-router'

function Registration() {
  let Navigator=useNavigate();
  document.title = "Sparxa Software Solution Pvt. Ltd."
  const intitialstate = {
    name: "",
    email: "",
    password: "",
    mobile: "",
    confirm_password: "",
  };
  const [details, setDetails] = useState(intitialstate);

  const onSubmitClick = (e) => {
    // 
    
    // const { name, email, mobile, password, confirm_password } = details;
    console.log("details:--", details);
    e.preventDefault();
    if (
      details.name === "" ||
      details.email === ""
       ||
      details.password === "" ||
      details.mobile === "" ||
      details.confirm_password === ""
    ) {
      alert("Enter all required details!")
      return false
    }
  
    // Validation for name.
    if ((details.name.length < 3 || details.name.length >= 20)) {
      alert("Name is too long, please enter name between 3 to 20 characters!")
      return false
    }
    if (!isNaN(details.name)) {
      alert("Only characters allowed in name!");
      return false
    }

    // Validation for email.
    let emailpattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let emailstr = details.email;
    let validEmail = (emailstr.match(emailpattern));

    if (!validEmail) {
      alert("Enter valid email id")
      return false
    }

    //Validation for mobile no.
    if (!(details.mobile.length === 10)) {
      alert("Enter 10 Digit mobile no!")
      return false
    }

    if (isNaN(details.mobile)) {
      alert("Only Numbers allowed!")
      return false
    }

    //Validation for password.
    let passwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@#$!%*?&]{8,20}$/;
    let passwordstr =details.password;
    let validPassword = passwordstr.match(passwordpattern);
    if (!validPassword) {
      alert(
        "Password must be in 8 - 20 character and must containt atleast 1 Number, 1 Special Symbol, 1 Uppercase & 1 Lowercase character!"
      )
      return false
    }

    //Validation for Confirm password
    if (!(details.password === details.confirm_password)) {
      alert("Password must be same as above password!")
      return false
    }

    Navigator('/',{replace:true})
  };

   const handleChange = (e) => {
    const { name, value} = e.target;
    setDetails({ ...details, [name]: value });
    console.log(e.target.value);
  };


  sessionStorage.setItem("Name",details.name);
  sessionStorage.setItem("Email",details.email);
  sessionStorage.setItem("Mobile",details.mobile);
  sessionStorage.setItem("Password",details.password);

 
  
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
          {/* <Link to="/Login" id="submit_link"> */}
          <Button
            variant="contained"
            id="submit_btn"
            onClick={onSubmitClick}
          >
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
