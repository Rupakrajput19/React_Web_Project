import { React, useState } from "react";
import Registration_Image from "../../Images/registration_page.PNG";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Home() {{
  const Navigator = useNavigate();
  document.title = "Sparxa Software Solution Pvt. Ltd."
  const intitialstate = {
    email: "",
    password: "",
  };
  const [details, setDetails] = useState(intitialstate);

  const onSubmitClick = (e) => {

  let login_email = localStorage.getItem("Email");
  let login_password = localStorage.getItem("Password");

    const {  email, password } = details;
    e.preventDefault();

    if ( email === ""|| password === "" ) {
      alert("Enter all required details!")
      return false
    }

    if (!(email === login_email)) {
      alert("Invalid user email id!")
      return false
    }

    if (!(password === login_password)) {
      alert("Invalid User Password!")
      return false
    }

    console.log("details:--", details);
    Navigator('/Home', { replace:true })

  };

   const handleChange = (e) => {
    const { name, value} = e.target;
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
          <Typography id="text_home">Login your account</Typography>
          <TextField
            // id="outlined-basic"
            id="login_email"
            type="email"
            name="email"
            label="Email ID"
            variant="outlined"
            className="input_field"
            required
            onChange={handleChange}
          />
          <TextField
            // id="outlined-basic"
            id="login_password"
            type="password"
            name="password"
            label="Password"
            variant="outlined"
            className="input_field"
            required
            onChange={handleChange}
          />
          {/* <Link to="/Home" id="submit_link"> */}
          <Button variant="contained" id="submit_btn" 
          onClick={onSubmitClick}
          >
              Login
          </Button>
            {/* </Link> */}
          <Typography className="login_link">
            {/* <p></p> */}
            <Link to="/forgot_password" id="login_btn">
            Forgot your password?
            </Link>
          </Typography>
          <Typography className="login_link">
            <p>Don't have an account?</p>
            <Link to="/" id="login_btn">
              SingUp
            </Link>
          </Typography>
        </Box>
      </div>
    </>
  );
}}

export default Home;
