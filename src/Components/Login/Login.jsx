import { React } from "react";
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
  let login_email = sessionStorage.getItem("Email");
  let login_password = sessionStorage.getItem("Password");

  // const intitialstate = {
  //   email: "",
  //   password: "",
  // };
  // const [details, setDetails] = useState(intitialstate);

  // const onSubmitClick = (e) => {
    
    // const { name, email, mobile, password, confirm_password } = details;
    // console.log("details:--", details);
    // e.preventDefault();
    // if (
    //   details.name === "" ||
    //   details.email === ""
    //    ||
    //   details.password === "" ||
    //   details.mobile === "" ||
    //   details.confirm_password === ""
    // ) {
    //   alert("Enter all required details!")
    //   return false
    // }
  
    // Validation for name.
    // if ((details.name.length < 3 || details.name.length >= 20)) {
    //   alert("Name is too long, please enter name between 3 to 20 characters!")
    //   return false
    // }
    // if (!isNaN(details.name)) {
    //   alert("Only characters allowed in name!");
    //   return false
    // }

    // Validation for email.
    // let emailpattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    // let emailstr = details.email;
    // let validEmail = (emailstr.match(emailpattern));

    // if (!validEmail) {
    //   alert("Enter valid email id")
    //   return false
    // }
    if (!login_email) {
      alert("Invalid user email id")
      return false
    }

    //Validation for mobile no.
    // if (!(details.mobile.length === 10)) {
    //   alert("Enter 10 Digit mobile no!")
    //   return false
    // }

    // if (isNaN(details.mobile)) {
    //   alert("Only Numbers allowed!")
    //   return false
    // }

    //Validation for password.
    // let passwordpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@#$!%*?&]{8,20}$/;
    // let passwordstr =details.password;
    // let validPassword = passwordstr.match(passwordpattern);
    // if (!validPassword) {
    //   alert(
    //     "Password must be in 8 - 20 character and must containt atleast 1 Number, 1 Special Symbol, 1 Uppercase & 1 Lowercase character!"
    //   )
    //   return false
    // }
    if (!login_password) {
      alert(
        "Invalid User Password!"
      )
      return false
    }

    //Validation for Confirm password
    // if (!(details.password === details.confirm_password)) {
    //   alert("Password must be same as above password!")
    //   return false
    // }
    
    Navigator('/Home',{replace:true})
  };

  //  const handleChange = (e) => {
  //   const { name, value} = e.target;
  //   setDetails({ ...details, [name]: value });
  //   console.log(e.target.value);
  // };


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
            label="Email ID"
            variant="outlined"
            className="input_field"
            required
            // onClick={handleChange}
          />
          <TextField
            // id="outlined-basic"
            id="login_password"
            type="password"
            label="Password"
            variant="outlined"
            className="input_field"
            required
            // onClick={handleChange}
          />
          {/* <Link to="/Home" id="submit_link"> */}
          <Button variant="contained" id="submit_btn" 
          // onClick={onSubmitClick}
          >
              Login
          </Button>
            {/* </Link> */}
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
}

export default Home;
